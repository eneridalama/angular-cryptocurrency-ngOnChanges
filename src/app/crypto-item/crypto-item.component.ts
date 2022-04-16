import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { crypto } from './crypto';
import { CRYPTOFILES } from '../CRYPTOFILES';

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.scss'],
})
export class CryptoItemComponent implements OnInit, OnChanges {
  @Input() rank: number = 0;
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() change = 'assets/images/arrowDown.svg';

  constructor() {}

  isUp: boolean = true;
  
  changeColor(val: string) {
    if (val == 'assets/images/arrowUp.svg') {
      this.isUp = true;
    } else {
      this.isUp = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i in changes) {
      let prev = changes[i].previousValue;
      let curr = changes[i].currentValue;
      console.log(prev, curr);
      curr > prev
        ? (this.change = 'assets/images/arrowUp.svg')
        : (this.change = 'assets/images/arrowDown.svg');
      this.changeColor(this.change);
    }
  }

  ngOnInit(): void {}
}
