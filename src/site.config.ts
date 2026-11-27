export const SITE = {
  url: 'https://atakemaltur.com',

  name: 'Ata Kemal Tur',
  handle: 'Error_33_6070',
  tagline: 'Security, quantitative and ML research.',
  intro:
    'I reverse engineer software protection and licensing schemes, run authorized security assessments, and publish research across security, quantitative finance and machine learning.',
  description:
    'Research by Ata Kemal Tur across software security, quantitative finance and machine learning: advisories, write-ups and coordinated vulnerability disclosure.',

  email: 'security@atakemaltur.com',
  github: 'https://github.com/Error336070',

  pgpFingerprint: 'f9ceaa7b8ea53222128ae02062abd07c1caa25eb',

  disclosureWindowDays: 90,
  acknowledgmentDays: 14,
};

// Research fields. The ids are used in research frontmatter (`field:`) and in URLs (/research/field/<id>/).
export const FIELDS = [
  {
    id: 'security',
    label: 'Security',
    title: 'Security',
    blurb:
      'Reverse engineering, software protection and licensing, anti-tamper, and authorized penetration testing. Flaws in third-party products go to the vendor through coordinated disclosure.',
  },
  {
    id: 'quant',
    label: 'Quant',
    title: 'Quantitative finance',
    blurb: 'Systematic trading research: how strategies are designed, tested and measured.',
  },
  {
    id: 'ml',
    label: 'ML',
    title: 'Machine learning and AI',
    blurb:
      'Machine learning projects, and agent-driven analysis pipelines with verifiable, provenance-checked output.',
  },
] as const;

export type FieldId = (typeof FIELDS)[number]['id'];

export const NAV = [
  { href: '/advisories/', label: 'Advisories' },
  { href: '/research/', label: 'Research' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

// The fingerprint in the usual grouped form: F9CE AA7B ...
export const pgpGrouped = SITE.pgpFingerprint.toUpperCase().replace(/(.{4})(?=.)/g, '$1 ');
