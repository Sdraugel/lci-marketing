import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandMarkComponent } from '../brand-mark/brand-mark.component';
import { BRAND } from '../../config/brand';

@Component({
    selector: 'app-site-footer',
    imports: [RouterLink, BrandMarkComponent],
    templateUrl: './site-footer.component.html',
    styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {
  brand = BRAND;
  mailto = `mailto:${BRAND.contactEmail}`;
}
