import { Component} from '@angular/core';
import { crypto } from './shared/crypto';
import { CRYPTOFILES } from './CRYPTOFILES';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cryptocurrency: crypto[] = CRYPTOFILES;

  randomPrice() {
    for (let crypto of this.cryptocurrency) {
      crypto.price = Math.ceil(+Math.random().toFixed(3) * 100);
    }
    this.cryptocurrency = [...this.cryptocurrency];
  }

  title = 'Crypto App';
}
