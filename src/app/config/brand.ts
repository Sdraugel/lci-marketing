/*
 * Single source of truth for brand strings used across the marketing site.
 * Rename the product or swap contact details by editing this file only.
 */

export const BRAND = {
  legalName: 'Lowcountry Investing, LLC',
  productName: 'Lowcountry Grid',
  shortName: 'Lowcountry Grid',
  // Hosted at GitHub Pages sub-path until a real domain is acquired.
  domain: 'sdraugel.github.io/lci-marketing',

  // Placeholders flagged in BACKLOG.md — confirm before publishing.
  contactEmail: 'sdraugel@gmail.com',
  mailingAddress: '[ADDRESS_PLACEHOLDER]',
  launchWindow: 'Private beta in 2026',
  hqCity: 'Charleston, South Carolina, USA',
  governingState: 'South Carolina, USA',

  exchanges: ['Kraken', 'Coinbase Advanced Trade'] as const,
  performanceFeePercent: 3,
  copyrightYear: 2026,
} as const;
