import { getCollection } from 'astro:content';

const live = <T extends { data: { draft: boolean } }>(e: T) => !e.data.draft;

export async function getAdvisories() {
  const all = await getCollection('advisories', live);
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export async function getResearch() {
  const all = await getCollection('research', live);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
