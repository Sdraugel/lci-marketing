import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-brand-mark',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [':host { display: inline-flex; color: var(--primary-color); }'],
})
export class BrandMarkComponent {
  @Input() size = 32;
}
