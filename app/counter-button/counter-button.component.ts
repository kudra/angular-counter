import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-counter-button',
  template: `<button (click)="increment()"><ng-content></ng-content></button>`,
})
export class CounterButtonComponent {
  @Input() parentId!: string;
  @Output() emitCount = new EventEmitter<number>();
  count: number;
  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount(this.parentId);
  }

  increment() {
    this.counterService.incrementCount(this.parentId);
    this.count = this.counterService.getCount(this.parentId);
    this.emitCount.emit(this.count);
  }
}
