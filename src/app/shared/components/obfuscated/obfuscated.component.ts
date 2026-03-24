import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-obfuscated',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (ch of chars(); track $index) {
      <span class="obf" [attr.data-c]="ch"></span>
    }
  `,
})
export class ObfuscatedComponent {
  readonly codes = input.required<number[]>();
  readonly chars = computed(() => this.codes().map(c => String.fromCharCode(c)));
}
