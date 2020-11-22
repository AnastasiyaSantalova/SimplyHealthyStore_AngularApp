import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightCardBorder]',
})
export class HighlightCardBorderDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('#2E7D32');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('#E8F5E9');
  }

  private highlight(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }
}
