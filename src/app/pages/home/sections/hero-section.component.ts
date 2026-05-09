import { Component } from '@angular/core';
import { BRAND } from '../../../config/brand';

/*
 * Headline alternates considered:
 *   1. "Automated grid trading for Kraken and Coinbase" (chosen — concrete, names exchanges)
 *   2. "Grid trading on autopilot. Custody stays with you."
 *   3. "Run a grid strategy on your own exchange account."
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
            Automated grid trading for
            <span class="accent">Kraken</span> and
            <span class="accent">Coinbase</span>.
          </h1>
          <p class="lede">
            {{ brand.productName }} runs grid strategies on your own exchange account.
            You keep custody of your funds. We charge a {{ brand.performanceFeePercent }}% fee
            only when a trade closes in profit.
          </p>
          <div class="cta-row">
            <a class="btn" href="#how-it-works">Learn more</a>
            <a class="btn btn-outline" href="#pricing">See pricing</a>
          </div>
        </div>

        <aside class="hero-card" aria-hidden="true">
          <div class="card mock">
            <div class="mock-header">
              <span class="mock-pair">BTC / USD</span>
              <span class="mock-status">Live</span>
            </div>
            <div class="mock-grid">
              <div class="row sell">Sell &nbsp;<strong>$72,400</strong> &nbsp;&middot;&nbsp; +0.4%</div>
              <div class="row sell">Sell &nbsp;<strong>$71,800</strong></div>
              <div class="row mid">Mid &nbsp;<strong>$71,250</strong></div>
              <div class="row buy">Buy  &nbsp;<strong>$70,650</strong></div>
              <div class="row buy">Buy  &nbsp;<strong>$70,050</strong> &nbsp;&middot;&nbsp; filled</div>
            </div>
            <div class="mock-footer">
              <span>Realized PnL</span>
              <strong class="text-success">+$284.12</strong>
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
