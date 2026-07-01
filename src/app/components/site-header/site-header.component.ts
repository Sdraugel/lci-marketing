import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandMarkComponent } from '../brand-mark/brand-mark.component';
import { BRAND } from '../../config/brand';

@Component({
    selector: 'app-site-header',
    imports: [RouterLink, BrandMarkComponent],
    templateUrl: './site-header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  brand = BRAND;
}
