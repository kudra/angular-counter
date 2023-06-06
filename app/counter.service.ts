import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counters: { [parentId: string]: number } = {};

  incrementCount(parentId: string): void {
    if (!this.counters[parentId]) {
      this.counters[parentId] = 0;
    }
    this.counters[parentId]++;
  }

  getCount(parentId: string): number {
    return this.counters[parentId] || 0;
  }
}
