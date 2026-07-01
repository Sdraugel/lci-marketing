import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LegalPageComponent } from '../legal/legal-page.component';
import { BRAND } from '../../config/brand';

/* DRAFT - REVIEW WITH ATTORNEY BEFORE PUBLISHING */
@Component({
    selector: 'app-risk-disclosure',
    imports: [LegalPageComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <app-legal-page title="Risk Disclosure" [effectiveDate]="effectiveDate">

      <div class="callout">
        <p>
          <strong>Important:</strong> Cryptocurrency trading involves substantial risk of loss
          and is not suitable for every investor. You should only trade with money you can
          afford to lose. Read this disclosure carefully before using {{ brand.productName }}.
        </p>
      </div>

      <h2>1. Trading Risk</h2>
      <p>
        Cryptocurrency markets are volatile, fragmented, and operate 24/7. Prices can move
        sharply in seconds. <strong>You can lose some or all of the funds you allocate to a
        strategy.</strong> Past performance is not indicative of future results. No backtest,
        paper trade, or historical statistic guarantees future profitability.
      </p>

      <h2>2. Strategy Risk</h2>
      <p>
        Algorithmic trading strategies enter and exit positions automatically based on rules.
        Any algorithm can <strong>lose money under adverse market conditions</strong>. For
        example, sharp trends, sudden volatility, low-liquidity events, exchange outages,
        or unusual market regimes the strategy was not designed for. Past performance of any
        strategy does not predict future results. The outcome of any strategy depends on the
        market conditions it encounters and on the parameters you choose.
      </p>

      <h2>3. Operational and Software Risk</h2>
      <ul>
        <li><strong>Software bugs.</strong> {{ brand.productName }} is software and may contain bugs that cause unintended fills, missed fills, or incorrect calculations.</li>
        <li><strong>Exchange outages.</strong> Kraken and Coinbase periodically experience downtime, degraded API performance, or rate-limit changes that can prevent the Service from acting on your strategy.</li>
        <li><strong>Connectivity.</strong> Internet, DNS, or cloud-provider failures between us and the exchange can delay or block order placement.</li>
        <li><strong>Latency.</strong> Order placement is not instantaneous. By the time an order reaches the exchange, prices may have moved.</li>
      </ul>
      <p>
        Any of these conditions can cause unexpected losses. {{ brand.legalName }} is not liable
        for losses caused by these conditions.
      </p>

      <h2>4. Customer Responsibility</h2>
      <p>
        <strong>You are solely responsible</strong> for the trading decisions and configurations
        you make in {{ brand.productName }}, including the strategy you select, the amount of
        capital allocated, the choice of trading pair, and the choice to enable or disable any
        strategy. {{ brand.legalName }} provides software tools; we do not advise on what to
        trade, how much to allocate, or when to start or stop a strategy.
      </p>

      <h2>5. No Guarantee of Profit</h2>
      <p>
        {{ brand.legalName }} does not guarantee profits, returns, or any specific trading
        outcome. The performance-based fee structure does not constitute a promise that you will
        profit. It only means that we do not bill you on losing cycles.
      </p>

      <h2>6. Custody and Insurance</h2>
      <ul>
        <li>Your funds remain in your Kraken or Coinbase account; {{ brand.legalName }} never custodies funds.</li>
        <li>Cryptocurrency held on an exchange is <strong>not FDIC- or SIPC-insured.</strong></li>
        <li>Cryptocurrency is not legal tender in the United States.</li>
      </ul>

      <h2>7. Tax Obligations</h2>
      <p>
        You are solely responsible for determining and paying any taxes owed on your trading
        activity. {{ brand.legalName }} does not provide tax advice and does not act as your tax
        agent. Consult a qualified tax professional.
      </p>

      <h2>8. Acknowledgment</h2>
      <p>
        By using {{ brand.productName }}, you acknowledge that you have read and understood this
        Risk Disclosure, that you are willing to assume the risks described, and that any
        trading losses are your own responsibility.
      </p>

    </app-legal-page>
  `
})
export class RiskDisclosureComponent {
  brand = BRAND;
  effectiveDate = 'Draft, pending publication';
}
