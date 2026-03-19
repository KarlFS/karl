import { Component } from '@angular/core';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {}
