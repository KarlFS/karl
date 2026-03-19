import { Component } from '@angular/core';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SERVICE_OFFERINGS } from '../../data/service-offerings.data';
import { ServiceOffering } from '../../models/service-offering.model';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.scss',
})
export class OfferingsComponent {
  readonly offerings: ServiceOffering[] = SERVICE_OFFERINGS;
}
