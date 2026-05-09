import { Component } from '@angular/core';
import { BRAND } from '../../../config/brand';

interface Step {
  n: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  template: `
    <section id="how-it-works" class="section how" aria-labelledby="how-heading">
      <div class="container">
        <header class="section-header">
          <span class="eyebrow">How it works</span>
          <h2 id="how-heading">From API key to performance fee in four steps.</h2>
          <p class="muted">
            {{ brand.productName }} is software that runs on top of your exchange account.
            We never take custody of your funds. You stay in control.
          </p>
        </header>

        <ol class="steps">
          @for (step of steps; track step.n) {
            <li class="card step">
              <span class="step-num" aria-hidden="true">{{ step.n }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.body }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styleUrl: './how-it-works-section.component.scss',
})
export class HowItWorksSectionComponent {
  brand = BRAND;
  steps: Step[] = [
    {
      n: '01',
      title: 'Connect your exchange',
      body:
        'Add a read + trade API key from Kraken or Coinbase Advanced Trade. Withdraw permission is never requested or accepted — your funds cannot leave your exchange account through us.',
    },
    {
      n: '02',
      title: 'Choose a strategy and allocate funds',
      body:
        'Pick a built-in strategy, choose the trading pair, and decide how much capital to allocate. Run it on paper first if you want to see how it behaves before risking real money.',
    },
    {
      n: '03',
      title: 'We run it on your account',
      body:
        `${BRAND.productName} places orders through your exchange API on your behalf. The orders, the balances, and the custody all stay on Kraken or Coinbase. Watch live PnL from the dashboard.`,
    },
    {
      n: '04',
      title: 'Pay only when you profit',
      body:
        `${BRAND.performanceFeePercent}% of realized profit on closed trades, billed monthly via Stripe. No subscription. No fees on losing trades, open positions, or paper trades.`,
    },
  ];
}
