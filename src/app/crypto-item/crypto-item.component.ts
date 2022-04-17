import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
  @Input() change: 'assets/images/arrowUp.svg' | 'assets/images/arrowDown.svg' =
    'assets/images/arrowDown.svg';

  constructor() {}

  isUp: boolean = true;

  changeColor(val: string) {
    val == 'assets/images/arrowUp.svg'
      ? (this.isUp = true)
      : (this.isUp = false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i in changes) {
      changes[i].currentValue > changes[i].previousValue
        ? (this.change = 'assets/images/arrowUp.svg')
        : (this.change = 'assets/images/arrowDown.svg');
      this.changeColor(this.change);
    }
  }

  ngOnInit(): void {}
}
