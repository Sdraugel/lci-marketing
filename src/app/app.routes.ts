import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

/*
 * Home is eager-loaded because it's the primary landing route. Lazy-loading
 * it adds a chunk-fetch round-trip before first paint, visible as elevated
 * FCP/LCP and CLS in Lighthouse. Legal pages stay lazy since they're
 * rarely visited.
 */
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'FinWatch - Automated Crypto Trading for Kraken & Coinbase',
    data: {
      description:
        'Automated cryptocurrency trading software. Connect your Kraken or Coinbase account, choose a strategy, pay only on realized profit. Coming soon from Lowcountry Investing, LLC.',
    },
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Terms of Service - Lowcountry Investing, LLC',
    data: {
      description: 'Terms of Service for FinWatch, the automated cryptocurrency trading software provided by Lowcountry Investing, LLC.',
    },
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Privacy Policy - Lowcountry Investing, LLC',
    data: {
      description: 'How Lowcountry Investing, LLC collects, uses, and protects your data when you use FinWatch.',
    },
  },
  {
    path: 'risk-disclosure',
    loadComponent: () => import('./pages/risk-disclosure/risk-disclosure.component').then(m => m.RiskDisclosureComponent),
    title: 'Risk Disclosure - Lowcountry Investing, LLC',
    data: {
      description: 'Risk disclosure for cryptocurrency trading and the FinWatch software.',
    },
  },
  { path: '**', redirectTo: '' },
];
