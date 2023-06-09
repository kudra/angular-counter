import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counters: number = 0;

  incrementCount(parentId: string): void {
    this.counters++;
  }

  getCount(parentId: string): number {
    return this.counters || 0;
  }
}
