import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ObfuscatedComponent } from '../../shared/components/obfuscated/obfuscated.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, TranslatePipe, ObfuscatedComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {
  protected readonly vatCodes     = [68,69,50,57,49,55,52,53,55,57,48];
  protected readonly nameCodes    = [75,97,114,108,32,83,99,104,111,108,122,101];
  protected readonly streetCodes  = [84,117,99,104,109,97,99,104,101,114,115,116,114,46,32,51,48];
  protected readonly cityCodes    = [48,50,54,50,53,32,66,97,117,116,122,101,110];
  protected readonly countryCodes = [68,101,117,116,115,99,104,108,97,110,100];
  protected readonly phoneCodes   = [48,49,53,50,32,53,51,53,49,53,55,52,55];
}
