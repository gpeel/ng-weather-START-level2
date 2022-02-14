import {Component} from '@angular/core';
import {Plog} from '@gpeel/plog';

@Component({
  selector: 'app-root',
  template: `
    <root-refresh-count></root-refresh-count>
    <static-weather></static-weather>

  `
})
export class AppComponent {
  constructor() {
    Plog.createComponent('Yes');
    Plog.usecase1('use bbb');
  }

}
