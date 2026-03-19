import { Component } from '@angular/core';
import { SERVICE_OFFERINGS } from '../../data/service-offerings.data';
import { ServiceOffering } from '../../models/service-offering.model';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss'],
})
export class OfferingsComponent {
  readonly offerings: ServiceOffering[] = SERVICE_OFFERINGS;
}
