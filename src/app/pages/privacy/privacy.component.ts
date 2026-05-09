import { Component } from '@angular/core';
import { LegalPageComponent } from '../legal/legal-page.component';
import { BRAND } from '../../config/brand';

/* DRAFT — REVIEW WITH ATTORNEY BEFORE PUBLISHING */
@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Privacy Policy" [effectiveDate]="effectiveDate">

      <p>
        This Privacy Policy describes how {{ brand.legalName }} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        &ldquo;our&rdquo;) collects, uses, and protects information when you use {{ brand.productName }}
        (the &ldquo;Service&rdquo;).
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Account information:</strong> name, email address, password (stored as a salted hash; never as plaintext), and account preferences.</li>
        <li><strong>Exchange API credentials:</strong> API keys and secrets for Kraken and Coinbase Advanced Trade, supplied by you. Stored encrypted at rest using AES-256-GCM. We do not request or store your exchange username or password.</li>
        <li><strong>Payment information:</strong> handled and stored by Stripe, our payment processor. We retain only a Stripe customer identifier and metadata about charges (amount, status, date).</li>
        <li><strong>Trading activity:</strong> orders placed, fills, balances visible to your API key, strategy configurations, and resulting performance metrics.</li>
        <li><strong>Technical data:</strong> IP address, browser type, device information, and basic usage logs needed to operate and secure the Service.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To operate the Service: place orders on your exchange, calculate PnL, render dashboards.</li>
        <li>To bill you: calculate performance fees and process payment via Stripe.</li>
        <li>To secure the Service: detect abuse, fraud, and unauthorized access.</li>
        <li>To communicate with you: account notices, billing notices, security alerts, and product updates.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>We do not sell personal information. We share information only with:</p>
      <ul>
        <li><strong>Stripe</strong>, for payment processing.</li>
        <li><strong>Kraken and Coinbase</strong>, when we place orders on your behalf using your API key.</li>
        <li><strong>Email and SMS providers</strong> (Resend, Twilio, or comparable) for transactional notifications.</li>
        <li><strong>Cloud infrastructure providers</strong> for hosting and storage.</li>
        <li><strong>Law enforcement or regulators</strong> when required by valid legal process.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain account, trading, and billing records for as long as your account is active and
        for a reasonable period thereafter to comply with legal, tax, and audit obligations. You
        may request deletion of your account, after which we will delete or anonymize personal
        data except where retention is required by law.
      </p>

      <h2>5. Security</h2>
      <p>
        We use encryption in transit (TLS) and at rest (AES-256-GCM for exchange API credentials).
        Passwords are stored as salted hashes. Access to production systems is restricted to a
        small number of authorized personnel and audited. No system is perfectly secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
        <li><strong>Correction:</strong> request that we correct inaccurate data.</li>
        <li><strong>Deletion:</strong> request that we delete your data, subject to legal retention requirements.</li>
        <li><strong>Portability:</strong> request an exportable copy of your data where applicable.</li>
        <li><strong>Opt-out of non-essential communications:</strong> via in-product settings or unsubscribe links.</li>
      </ul>
      <p>
        California residents have additional rights under the CCPA. EU/EEA residents have rights
        under the GDPR. To exercise any right, contact <a [href]="mailto">{{ brand.contactEmail }}</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        We use a minimal set of first-party cookies and similar technologies that are strictly
        necessary to operate the Service (for example, to keep you signed in). We do not use
        advertising or cross-site tracking cookies.
      </p>

      <h2>8. Children</h2>
      <p>
        The Service is not intended for, and we do not knowingly collect personal information
        from, anyone under 18. If we learn we have collected such information, we will delete it.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be
        communicated by email or in-product notice.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this Policy can be sent to <a [href]="mailto">{{ brand.contactEmail }}</a>,
        or by mail to {{ brand.legalName }} at {{ brand.mailingAddress }}.
      </p>

    </app-legal-page>
  `,
})
export class PrivacyComponent {
  brand = BRAND;
  mailto = `mailto:${BRAND.contactEmail}`;
  effectiveDate = 'Draft — pending publication';
}
