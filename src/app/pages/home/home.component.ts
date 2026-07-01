import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section.component';
import { HowItWorksSectionComponent } from './sections/how-it-works-section.component';
import { FeaturesSectionComponent } from './sections/features-section.component';
import { PricingSectionComponent } from './sections/pricing-section.component';
import { FaqSectionComponent } from './sections/faq-section.component';

@Component({
    selector: 'app-home',
    imports: [
        HeroSectionComponent,
        HowItWorksSectionComponent,
        FeaturesSectionComponent,
        PricingSectionComponent,
        FaqSectionComponent,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <app-hero-section />
    <app-how-it-works-section />
    <app-features-section />
    <app-pricing-section />
    <app-faq-section />
  `
})
export class HomeComponent {}
