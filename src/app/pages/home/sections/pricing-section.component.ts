import { Component } from '@angular/core';
import { BRAND } from '../../../config/brand';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  template: `
    <section id="pricing" class="section pricing" aria-labelledby="pricing-heading">
      <div class="container container-tight">
        <header class="section-header">
          <span class="eyebrow">Pricing</span>
          <h2 id="pricing-heading">Performance-based, transparent.</h2>
          <p class="muted">We make money only when you do.</p>
        </header>

        <div class="card pricing-card">
          <div class="rate">
            <span class="number">{{ brand.performanceFeePercent }}<span class="percent">%</span></span>
            <span class="rate-label">of realized profit on closed trades</span>
          </div>

          <ul class="bullets">
            <li>
              <strong>Billed monthly via Stripe.</strong>
              Cards or ACH. Statements list every closed trade and the exact USD-equivalent profit it produced.
            </li>
            <li>
              <strong>No subscription, no platform fee.</strong>
              You only pay when a trade closes in the green.
            </li>
            <li>
              <strong>No fees on losing trades, open positions, or paper trades.</strong>
              If a trade never closes, we never charge for it.
            </li>
            <li>
              <strong>No hidden costs.</strong>
              Exchange trading fees are charged by Kraken or Coinbase directly &mdash;
              we do not mark them up.
            </li>
          </ul>

          <p class="fine-print muted small">
            A valid payment method is required to run live (non-paper) strategies, so monthly
            invoices can settle automatically.
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './pricing-section.component.scss',
})
export class PricingSectionComponent {
  brand = BRAND;
}
