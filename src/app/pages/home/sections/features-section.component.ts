import { Component } from '@angular/core';

interface Feature {
  title: string;
  body: string;
  icon: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  template: `
    <section id="features" class="section features" aria-labelledby="features-heading">
      <div class="container">
        <header class="section-header">
          <span class="eyebrow">Features</span>
          <h2 id="features-heading">Built for traders who want grid strategies without the operational overhead.</h2>
        </header>

        <ul class="grid">
          @for (feat of features; track feat.title) {
            <li class="card feature">
              <span class="icon" aria-hidden="true" [innerHTML]="feat.icon"></span>
              <h3>{{ feat.title }}</h3>
              <p>{{ feat.body }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './features-section.component.scss',
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      title: 'Static and trailing grids',
      body: 'Pick a fixed price range or let the grid trail price action. Each grid cycle is a paired buy / sell — fees only apply when the pair closes in profit.',
      icon: this.svg('M3 12h4l3 -8l4 16l3 -8h4'),
    },
    {
      title: 'Multi-exchange',
      body: 'Kraken and Coinbase Advanced Trade at launch, with a single dashboard view across both. Your API keys stay encrypted at rest.',
      icon: this.svg('M4 7h16M4 12h16M4 17h16'),
    },
    {
      title: 'Paper trading',
      body: 'Run any strategy against live market data with simulated fills. No exchange orders, no money at risk — useful for tuning before going live.',
      icon: this.svg('M14 3v4a1 1 0 0 0 1 1h4M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'),
    },
    {
      title: 'Real-time PnL',
      body: 'Per-pair, per-strategy, and account-wide PnL. Realized vs unrealized are tracked separately so you always know what is locked in.',
      icon: this.svg('M3 3v18h18M7 14l4 -4l4 4l5 -6'),
    },
    {
      title: 'Manual trading',
      body: 'Place one-off market or limit orders alongside running grids. Useful for adjusting exposure when a regime shifts or when you want to harvest gains manually.',
      icon: this.svg('M5 12h14M13 6l6 6l-6 6'),
    },
    {
      title: 'Performance-based pricing',
      body: 'No subscription. We earn 3% only when a grid cycle closes profitable in USD terms. If you do not make money, we do not make money.',
      icon: this.svg('M12 2v20M5 8h11a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h11'),
    },
  ];

  private svg(d: string) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="${d}"/></svg>`;
  }
}
