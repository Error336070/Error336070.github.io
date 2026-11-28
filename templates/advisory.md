---
# Copy to src/content/advisories/<slug>.md ONLY when the embargo has ended.
# Never commit an embargoed advisory: this repo is public, so git history would leak it.
title: "Short, factual title (no adjectives)"
advisoryId: "AKT-2027-001"
vendor: "Vendor name"
product: "Product name"
affected: "x.y.z and earlier"
fixed: "x.y.(z+1)"          # delete this line if unfixed
severity: high              # critical | high | medium | low | info
cve: ["CVE-2027-NNNNN"]     # [] if none
cwe: ["CWE-327"]            # [] if none
status: fixed               # coordinating | fixed | published | unfixed
reported: 2026-12-01
published: 2027-03-01
coordinator: "CERT/CC"      # delete if none
caseNumber: "VU#000000"     # delete if none
vendorAcknowledged: true
summary: "One or two sentences: what's affected and what an attacker can achieve."
draft: false
---

## Summary

What the issue is and who is affected, in plain language.

## Impact

What an attacker gains. Be precise and avoid hype.

## Affected versions

Which versions were directly tested. Separate verified versions from any versions only suspected to be affected.

## Technical details

Describe the weakness at a level that helps defenders understand and verify the fix.
No working exploit code, no weaponizable PoCs, no circumvention tools, no proprietary vendor code or keys, and no client-identifying data or artifacts.

## Remediation

What users and vendors should do: upgrade to X, or mitigate with Y.

## Vendor statement

Include a vendor statement only if cleared for public release and consistent with the publication rules above; otherwise delete this section.

## Timeline

| Date | Event |
| --- | --- |
| 2026-12-01 | Report sent to vendor |
| 2026-12-05 | Vendor acknowledged |
| 2027-02-15 | Fix released in x.y.z |
| 2027-03-01 | Advisory published |

## Credit

Discovered by Ata Kemal Tur (Error_33_6070).
