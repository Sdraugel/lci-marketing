import { Component } from '@angular/core';
import { BRAND } from '../../../config/brand';

/*
 * Headline alternates considered (deliberately strategy-agnostic — the
 * underlying algorithms are proprietary and stay out of the marketing copy):
 *   1. "Automated cryptocurrency trading for Kraken and Coinbase" (chosen — concrete, names exchanges)
 *   2. "Hands-off crypto trading. Custody stays with you."
 *   3. "Run trading algorithms on your own exchange account."
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero section" aria-labelledby="hero-heading">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="status-line">
            <span class="dot" aria-hidden="true"></span>
            Coming soon &mdash; currently in private development
          </span>
          <h1 id="hero-heading">
            Automated cryptocurrency trading for
            <span class="accent">Kraken</span> and
            <span class="accent">Coinbase</span>.
          </h1>
          <p class="lede">
            {{ brand.productName }} runs trading algorithms on your own exchange
            account. You keep custody of your funds. We charge a {{ brand.performanceFeePercent }}%
            fee only when a trade closes in profit.
          </p>
          <div class="cta-row">
            <a class="btn" href="#how-it-works">Learn more</a>
            <a class="btn btn-outline" href="#pricing">See pricing</a>
          </div>
        </div>

        <aside class="hero-card" aria-hidden="true">
          <div class="card mock">
            <div class="mock-header">
              <span class="mock-pair">Account overview</span>
              <span class="mock-status">Live</span>
            </div>
            <ul class="mock-stats">
              <li>
                <span class="label">Realized P&amp;L (30d)</span>
                <strong class="value text-success">+$1,284.50</strong>
              </li>
              <li>
                <span class="label">Win rate</span>
                <strong class="value">64.2%</strong>
              </li>
              <li>
                <span class="label">Open positions</span>
                <strong class="value">3</strong>
              </li>
              <li>
                <span class="label">Active strategies</span>
                <strong class="value">2</strong>
              </li>
            </ul>
            <div class="mock-footer">
              <span>Connected to Kraken</span>
              <span class="muted">Last update 2s ago</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `,
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  brand = BRAND;
}
