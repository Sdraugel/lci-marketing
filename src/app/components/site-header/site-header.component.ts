import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandMarkComponent } from '../brand-mark/brand-mark.component';
import { BRAND } from '../../config/brand';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, BrandMarkComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  brand = BRAND;
}
