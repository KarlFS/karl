import { Component, ChangeDetectionStrategy, input } from '@angular/core';

let uid = 0;

@Component({
  selector: 'app-k-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient [attr.id]="gradId" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M 12,8 L 28,8 L 28,44 L 74,8 L 88,8 L 48,50 L 88,92 L 74,92 L 28,56 L 28,92 L 12,92 Z"
        [attr.fill]="fill"
      />
    </svg>
  `,
  styles: [
    ':host { display: inline-flex; align-items: center; flex-shrink: 0; }',
    'svg { width: 100%; height: 100%; }',
  ],
  host: {
    '[style.width.px]': 'size() ?? null',
    '[style.height.px]': 'size() ?? null',
  },
})
export class KIconComponent {
  // Size in px — omit to control via CSS (e.g. width/height on the host element)
  readonly size = input<number>();

  protected readonly gradId = `k-grad-${++uid}`;
  protected readonly fill = `url(#${this.gradId})`;
}
