import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LegalPageComponent } from '../legal/legal-page.component';
import { BRAND } from '../../config/brand';

/* DRAFT - REVIEW WITH ATTORNEY BEFORE PUBLISHING */
@Component({
    selector: 'app-terms',
    imports: [LegalPageComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <app-legal-page title="Terms of Service" [effectiveDate]="effectiveDate">

      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of {{ brand.productName }}
        (the &ldquo;Service&rdquo;) provided by {{ brand.legalName }} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;). By creating an account or using the Service, you agree to these Terms.
      </p>

      <h2>1. Nature of the Service</h2>
      <p>
        {{ brand.productName }} is software that automates cryptocurrency trading strategies on
        exchanges that you connect to your account. <strong>We are a software provider only.</strong>
        We are not a broker, exchange, custodian, money transmitter, investment adviser, or
        financial institution. Nothing in the Service constitutes investment, legal, or tax advice.
        You make all trading decisions and configure all strategies yourself.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>At launch, the Service is offered only to residents of the United States.</li>
        <li>You must not be located in, or a national of, any jurisdiction subject to U.S. embargoes or sanctions.</li>
        <li>You must have the legal capacity to enter into these Terms.</li>
      </ul>

      <h2>3. Exchange Accounts and API Keys</h2>
      <p>
        To use the Service, you connect a third-party exchange account (Kraken or
        Coinbase Advanced Trade) by providing API credentials. You agree that:
      </p>
      <ul>
        <li>API keys you provide must <strong>not</strong> have withdrawal permission. The Service does not request and will not accept keys with withdrawal capability.</li>
        <li>You retain custody of all funds in your exchange account at all times. We never take custody of, hold, or transmit your funds.</li>
        <li>You are responsible for keeping your exchange account in good standing and for any exchange-side fees, limits, or restrictions.</li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose, including market manipulation, wash trading, or evasion of sanctions.</li>
        <li>Reverse-engineer, decompile, or attempt to derive source code from the Service.</li>
        <li>Resell, sublicense, or provide the Service to third parties without our written consent.</li>
        <li>Interfere with the operation of the Service or attempt to access accounts or data not your own.</li>
      </ul>

      <h2>5. Fees and Billing</h2>
      <p>
        The Service charges a performance fee equal to {{ brand.performanceFeePercent }}% of
        realized profit on closed trades, calculated in U.S. dollar equivalent terms after
        exchange fees. Fees are aggregated monthly and billed via Stripe to the payment method on
        file. By providing a payment method, you authorize {{ brand.legalName }} (and Stripe as
        our processor) to charge that method for fees due.
      </p>
      <ul>
        <li><strong>No subscription fees.</strong> The performance fee is the only fee charged by us.</li>
        <li><strong>No fees on losing trades, open positions, or paper trades.</strong></li>
        <li><strong>Payment method required for live trading.</strong> Live (non-paper) strategies require a valid payment method to remain enabled, so monthly invoices can settle.</li>
      </ul>

      <h2>6. Termination</h2>
      <p>
        You may stop using the Service at any time and disconnect your exchange API keys from your
        exchange account. We may suspend or terminate your access for breach of these Terms,
        suspected fraud, non-payment, or risk to the Service. Fees accrued before termination
        remain payable.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The Service is provided <strong>&ldquo;as is&rdquo; and &ldquo;as available.&rdquo;</strong>
        To the fullest extent permitted by law, we disclaim all warranties, express or implied,
        including merchantability, fitness for a particular purpose, and non-infringement. We do
        not warrant that the Service will be uninterrupted, error-free, or that any strategy will
        produce profit.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {{ brand.legalName }} is not liable for:
      </p>
      <ul>
        <li>Trading losses of any kind.</li>
        <li>Exchange downtime, API outages, or third-party service failures.</li>
        <li>Software bugs, latency, or connectivity issues that cause unintended fills, missed fills, or stuck orders.</li>
        <li>Indirect, incidental, special, consequential, or punitive damages.</li>
      </ul>
      <p>
        Our aggregate liability for any claim arising out of or relating to the Service shall not
        exceed the total fees you paid us in the twelve (12) months immediately preceding the
        event giving rise to the claim.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold {{ brand.legalName }}, its officers, employees, and agents
        harmless from any claims, damages, liabilities, and expenses (including reasonable
        attorney fees) arising from your use of the Service, your violation of these Terms, or
        your violation of any law or third-party right.
      </p>

      <h2>10. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the State of {{ brand.governingState }},
        without regard to its conflict-of-laws principles. Any dispute arising under these Terms
        shall be resolved in the state or federal courts located in {{ brand.governingState }},
        and you consent to the exclusive jurisdiction of those courts.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be communicated by
        email or in-product notice. Continued use of the Service after the effective date of
        revised Terms constitutes acceptance of the changes.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms can be sent to
        <a [href]="mailto">{{ brand.contactEmail }}</a>, or by mail to {{ brand.legalName }} at
        {{ brand.mailingAddress }}.
      </p>

    </app-legal-page>
  `
})
export class TermsComponent {
  brand = BRAND;
  mailto = `mailto:${BRAND.contactEmail}`;
  effectiveDate = 'Draft, pending publication';
}
