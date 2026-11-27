import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const advisories = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/advisories' }),
  schema: z.object({
    title: z.string(),
    advisoryId: z.string(), // e.g. AKT-2027-001
    vendor: z.string(),
    product: z.string(),
    affected: z.string(), // affected versions
    fixed: z.string().optional(), // fixed version
    severity: z.enum(['critical', 'high', 'medium', 'low', 'info']),
    cve: z.array(z.string()).default([]),
    cwe: z.array(z.string()).default([]),
    status: z.enum(['coordinating', 'fixed', 'published', 'unfixed']),
    reported: z.coerce.date(),
    published: z.coerce.date(),
    coordinator: z.string().optional(), // e.g. CERT/CC
    caseNumber: z.string().optional(),
    vendorAcknowledged: z.boolean().default(false),
    summary: z.string(),
    // Safety net only. Embargoed material must never be committed at all (see README).
    draft: z.boolean().default(false),
  }),
});

// Keep in step with FIELDS in src/site.config.ts.
const field = z.enum(['security', 'quant', 'ml']);

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    // One field or several: `field: quant` or `field: [security, ml]`. Posts without it count as security.
    field: z
      .union([field, z.array(field).nonempty()])
      .default('security')
      .transform((v) => (Array.isArray(v) ? [...new Set(v)] : [v])),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { advisories, research };
