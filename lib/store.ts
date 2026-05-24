import { useEffect, useState } from "react";

export type BloodUnit = {
  id: string;
  bloodGroup: string;
  unitsAvailable: number;
  expiryDate: string;
};

export type Bed = {
  id: string;
  hospitalName: string;
  totalBeds: number;
  availableBeds: number;
  icuBeds: number;
};

const BLOOD_KEY = "bbt_blood";
const BED_KEY = "bbt_beds";

const seedBlood: BloodUnit[] = [
  { id: "1", bloodGroup: "A+", unitsAvailable: 12, expiryDate: "2026-08-15" },
  { id: "2", bloodGroup: "A-", unitsAvailable: 3, expiryDate: "2026-07-10" },
  { id: "3", bloodGroup: "B+", unitsAvailable: 8, expiryDate: "2026-09-01" },
  { id: "4", bloodGroup: "B-", unitsAvailable: 2, expiryDate: "2026-06-20" },
  { id: "5", bloodGroup: "O+", unitsAvailable: 20, expiryDate: "2026-10-05" },
  { id: "6", bloodGroup: "O-", unitsAvailable: 4, expiryDate: "2026-07-25" },
  { id: "7", bloodGroup: "AB+", unitsAvailable: 6, expiryDate: "2026-08-30" },
  { id: "8", bloodGroup: "AB-", unitsAvailable: 1, expiryDate: "2026-06-15" },
];

const seedBeds: Bed[] = [
  { id: "1", hospitalName: "City General Hospital", totalBeds: 200, availableBeds: 45, icuBeds: 8 },
  { id: "2", hospitalName: "St. Mary Medical Center", totalBeds: 150, availableBeds: 22, icuBeds: 3 },
  { id: "3", hospitalName: "Sunrise Health Clinic", totalBeds: 80, availableBeds: 60, icuBeds: 12 },
];

function read<T>(key: string, seed: T): T {
  if (typeof window === "undefined") return seed;
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw) as T;
}

function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("bbt-store-update", { detail: { key } }));
}

export function useBlood() {
  const [data, setData] = useState<BloodUnit[]>([]);
  useEffect(() => {
    const refresh = () => setData(read(BLOOD_KEY, seedBlood));
    refresh();
    const onUpdate = () => refresh();
    window.addEventListener("bbt-store-update", onUpdate);
    const interval = setInterval(refresh, 120000);
    return () => {
      window.removeEventListener("bbt-store-update", onUpdate);
      clearInterval(interval);
    };
  }, []);
  return data;
}

export function useBeds() {
  const [data, setData] = useState<Bed[]>([]);
  useEffect(() => {
    const refresh = () => setData(read(BED_KEY, seedBeds));
    refresh();
    const onUpdate = () => refresh();
    window.addEventListener("bbt-store-update", onUpdate);
    const interval = setInterval(refresh, 120000);
    return () => {
      window.removeEventListener("bbt-store-update", onUpdate);
      clearInterval(interval);
    };
  }, []);
  return data;
}

export function addBlood(unit: Omit<BloodUnit, "id">) {
  const list = read(BLOOD_KEY, seedBlood);
  write(BLOOD_KEY, [...list, { ...unit, id: crypto.randomUUID() }]);
}

export function updateBlood(id: string, patch: Partial<BloodUnit>) {
  const list = read(BLOOD_KEY, seedBlood);
  write(BLOOD_KEY, list.map((b) => (b.id === id ? { ...b, ...patch } : b)));
}

export function deleteBlood(id: string) {
  const list = read(BLOOD_KEY, seedBlood);
  write(BLOOD_KEY, list.filter((b) => b.id !== id));
}

export function addBed(bed: Omit<Bed, "id">) {
  const list = read(BED_KEY, seedBeds);
  write(BED_KEY, [...list, { ...bed, id: crypto.randomUUID() }]);
}

export function updateBed(id: string, patch: Partial<Bed>) {
  const list = read(BED_KEY, seedBeds);
  write(BED_KEY, list.map((b) => (b.id === id ? { ...b, ...patch } : b)));
}

export function deleteBed(id: string) {
  const list = read(BED_KEY, seedBeds);
  write(BED_KEY, list.filter((b) => b.id !== id));
}
