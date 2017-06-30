import { Component, Input, HostListener } from '@angular/core';
import { HeartBeatService } from '../heart-beat.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-state-two-child',
  templateUrl: './state-two-child.component.html',
  styleUrls: ['./state-two-child.component.css'],
  providers: [HeartBeatService]
})
export class StateTwoChildComponent {

  @Input() child;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  value = 0;
  x = 0;
  y = 0;
  subscription: Subscription;

  constructor(private service: HeartBeatService) {
    this.subscription = this.service
      .heartbeat
      .subscribe(
        n => this.value = n,
        err => console.log(err),
        () => alert('I am done!')
      );
  }

  un() {
    this.subscription.unsubscribe();
  }

  re() {
    this.subscription = this.service.heartbeat.subscribe(n => this.value = n);
  }

}
