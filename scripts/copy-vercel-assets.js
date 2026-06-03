import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname, "..", "dist", "client", "assets");
const destDir = path.resolve(__dirname, "..", "public", "assets");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyDirectory(from, to) {
  await fs.mkdir(to, { recursive: true });
  for (const name of await fs.readdir(from)) {
    const src = path.join(from, name);
    const dest = path.join(to, name);
    const stat = await fs.stat(src);
    if (stat.isDirectory()) {
      await copyDirectory(src, dest);
    } else {
      await fs.copyFile(src, dest);
    }
  }
}

(async () => {
  if (!(await exists(srcDir))) {
    throw new Error(`Source directory does not exist: ${srcDir}`);
  }

  if (await exists(destDir)) {
    await fs.rm(destDir, { recursive: true, force: true });
  }

  await copyDirectory(srcDir, destDir);
  console.log(`Copied assets from ${srcDir} to ${destDir}`);
})();
