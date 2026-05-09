import { Component } from '@angular/core';
import { BRAND } from '../../../config/brand';

interface Feature {
  title: string;
  body: string;
  /* d attribute(s) for the icon's <path>. Multiple comma-separated d strings
     render as multiple paths in the same svg — useful for icons made of
     two unrelated strokes. */
  iconPaths: string[];
}

/*
 * Icons are rendered inline in the template (not via [innerHTML]), because
 * Angular's DOM sanitizer strips the contents of <svg> when assigned through
 * innerHTML — the icon container would render but the strokes would be gone.
 */
@Component({
  selector: 'app-features-section',
  standalone: true,
  template: `
    <section id="features" class="section features" aria-labelledby="features-heading">
      <div class="container">
        <header class="section-header">
          <span class="eyebrow">Features</span>
          <h2 id="features-heading">Built for traders who want hands-off automation without giving up custody.</h2>
        </header>

        <ul class="grid">
          @for (feat of features; track feat.title) {
            <li class="card feature">
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     width="22" height="22">
                  @for (d of feat.iconPaths; track d) {
                    <path [attr.d]="d"></path>
                  }
                </svg>
              </span>
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
      title: 'Multiple strategies',
      body: 'Choose from built-in trading strategies designed for different market conditions. Specifics of how each one works are proprietary; what you see is the inputs and the results.',
      iconPaths: ['M3 12h4l3 -8l4 16l3 -8h4'],
    },
    {
      title: 'Multi-exchange',
      body: 'Kraken and Coinbase Advanced Trade at launch, with a single dashboard view across both. Your API keys stay encrypted at rest.',
      iconPaths: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
    },
    {
      title: 'Paper trading',
      body: 'Run any strategy against live market data with simulated fills. No exchange orders, no money at risk — useful for tuning before going live.',
      iconPaths: ['M14 3v4a1 1 0 0 0 1 1h4', 'M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'],
    },
    {
      title: 'Real-time PnL',
      body: 'Per-pair, per-strategy, and account-wide PnL. Realized vs unrealized are tracked separately so you always know what is locked in.',
      iconPaths: ['M3 3v18h18', 'M7 14l4 -4l4 4l5 -6'],
    },
    {
      title: 'Manual trading',
      body: 'Place one-off market or limit orders alongside automated runs. Useful for adjusting exposure when conditions shift or when you want to harvest gains by hand.',
      iconPaths: ['M5 12h14', 'M13 6l6 6l-6 6'],
    },
    {
      title: 'Performance-based pricing',
      body: `No subscription. We earn ${BRAND.performanceFeePercent}% only when a trade closes profitable in USD terms. If you do not make money, we do not make money.`,
      iconPaths: ['M12 2v20', 'M5 8h11a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h11'],
    },
  ];
}
