import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BRAND } from '../../../config/brand';

/*
 * Headline alternates considered (deliberately strategy-agnostic, since the
 * underlying algorithms are proprietary and stay out of the marketing copy):
 *   1. "Automated cryptocurrency trading for Kraken and Coinbase" (chosen: concrete, names exchanges)
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
          <span class="hero-eyebrow">Coming soon, in private development</span>
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

        <aside class="hero-panel" aria-labelledby="custody-heading">
          <h2 id="custody-heading" class="panel-title">Custody stays with you</h2>
          <ul class="custody-list">
            <li>
              <strong>Read and trade keys only</strong>
              We connect with API keys that can place orders, nothing more.
            </li>
            <li>
              <strong>No withdraw permission</strong>
              We never request or accept the ability to move your funds.
            </li>
            <li>
              <strong>Funds never leave the exchange</strong>
              Balances and custody stay on Kraken or Coinbase, always.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  brand = BRAND;
}
