import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeartBeatService {

  private count: number;
  private o: Observable<number>;

  constructor() {
    this.count = 1;
    this.o = new Observable<number>(t => {
      setInterval(() => {
        if (this.count < 100) {
          t.next(this.count);
          this.count += 1;
        } else {
          t.complete();
        }
      }, 1000);
    });
  }

  get heartbeat() {
    return this.o;
  }

}
