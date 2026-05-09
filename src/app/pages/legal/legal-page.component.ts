import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  template: `
    <article class="legal section">
      <div class="container container-narrow">
        <p class="draft-banner" role="note">
          DRAFT &mdash; review with attorney before publishing.
        </p>
        <header>
          <span class="eyebrow">Legal</span>
          <h1>{{ title }}</h1>
          @if (effectiveDate) {
            <p class="muted small">Effective: {{ effectiveDate }}</p>
          }
        </header>
        <ng-content />
      </div>
    </article>
  `,
  styleUrl: './legal-page.component.scss',
})
export class LegalPageComponent {
  @Input({ required: true }) title!: string;
  @Input() effectiveDate?: string;
}
