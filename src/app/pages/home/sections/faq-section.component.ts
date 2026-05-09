import { Component } from '@angular/core';
import { BRAND } from '../../../config/brand';

interface FaqItem {
  q: string;
  a: string;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  template: `
    <section id="faq" class="section faq" aria-labelledby="faq-heading">
      <div class="container container-tight">
        <header class="section-header">
          <span class="eyebrow">FAQ</span>
          <h2 id="faq-heading">Frequently asked questions.</h2>
        </header>

        <div class="faq-list">
          @for (item of items; track item.q; let i = $index) {
            <details [open]="i === 0">
              <summary>{{ item.q }}</summary>
              <p>{{ item.a }}</p>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  items: FaqItem[] = [
    {
      q: 'Is my money safe?',
      a: `Yes. Your funds stay in your Kraken or Coinbase account at all times. ${BRAND.productName} only ever holds API keys with read and trade permissions — never withdraw permission. We cannot move your funds off the exchange, because we are not authorized to.`,
    },
    {
      q: 'Are you a registered broker or investment adviser?',
      a: `No. ${BRAND.legalName} provides software tools only. We do not provide investment advice, manage your funds, or act as a broker, exchange, or adviser. You make every trading decision and configure every strategy yourself.`,
    },
    {
      q: 'What exchanges do you support?',
      a: 'Kraken and Coinbase Advanced Trade at launch. Additional exchanges may be added later based on customer demand.',
    },
    {
      q: 'What happens if I lose money on a trade?',
      a: 'No fee. Performance fees are only charged when a grid cycle closes in profit, in USD-equivalent terms. Losing cycles, open positions, and paper trades never produce a fee.',
    },
    {
      q: 'How is the fee calculated?',
      a: `${BRAND.performanceFeePercent}% of realized profit on each closed grid cycle — that is, when a buy fills, then the matching sell fills, and the round-trip is positive in USD terms after exchange fees. Fees are summed across all closed cycles in a billing month and charged via Stripe at month end.`,
    },
    {
      q: 'When will this be available?',
      a: `${BRAND.launchWindow}. Sign-ups are not yet open — this site is informational while we finish development.`,
    },
    {
      q: 'Where are you based?',
      a: `${BRAND.hqCity}.`,
    },
  ];
}
