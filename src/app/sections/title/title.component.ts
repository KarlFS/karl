import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { KIconComponent } from '../../shared/components/k-icon/k-icon.component';

@Component({
  selector: 'app-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, KIconComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {}
