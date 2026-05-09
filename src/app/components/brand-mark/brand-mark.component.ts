import { Component, Input } from '@angular/core';

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
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#brand-mark-gradient)"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="url(#brand-mark-gradient)"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="url(#brand-mark-gradient)"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="brand-mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
    </svg>
  `,
})
export class BrandMarkComponent {
  @Input() size = 32;
}
