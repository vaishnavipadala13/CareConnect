import type { IncomingMessage, ServerResponse } from "http";

let ssrServer;

async function loadServer() {
  if (!ssrServer) {
    try {
      // Load the server entry point built by the app
      const mod = await import("../dist/server/server.js");
      ssrServer = mod.default || mod;
      if (!ssrServer || typeof ssrServer.fetch !== "function") {
        throw new Error("Server module does not export a fetch function");
      }
    } catch (err) {
      console.error("Failed to load server:", err);
      throw err;
    }
  }
  return ssrServer;
}

function buildRequest(req: IncomingMessage) {
  const host = req.headers.host || "localhost";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const url = new URL(req.url || "/", `${protocol}://${host}`);
  const headers = new Headers();

  // Copy all headers from the request
  Object.entries(req.headers).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else if (value) {
      headers.set(key, value);
    }
  });

  // Build the request body for non-GET/HEAD requests
  let body: any = undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    if ((req as any).body) {
      body = JSON.stringify((req as any).body);
    }
  }

  return new Request(url.toString(), {
    method: req.method,
    headers,
    body,
  });
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  try {
    const server = await loadServer();
    const request = buildRequest(req);
    const response = await server.fetch(request, process.env, undefined);

    // Set response status
    res.statusCode = response.status;

    // Copy response headers
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    // Send the response body
    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (error) {
    console.error("SSR Handler Error:", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    const message =
      process.env.NODE_ENV === "production"
        ? "An error occurred processing your request."
        : error instanceof Error
          ? error.message
          : String(error);
    res.end(
      `<html><body><h1>500 - Internal Server Error</h1><p>${message}</p></body></html>`,
    );
  }
}
