import { getCollection } from 'astro:content';
import type { FieldId } from '../site.config';

const live = <T extends { data: { draft: boolean } }>(e: T) => !e.data.draft;

export async function getAdvisories() {
  const all = await getCollection('advisories', live);
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export async function getResearch(field?: FieldId) {
  const all = await getCollection('research', live);
  const wanted = field ? all.filter((e) => e.data.field.includes(field)) : all;
  return wanted.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

// Whole days from one date to another, by calendar date in UTC.
export const daysBetween = (from: Date, to: Date) =>
  Math.round((Date.parse(isoDate(to)) - Date.parse(isoDate(from))) / 86_400_000);
