import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Inline tamplatex</h1>
  <app-another><p>Test</p></app-another>
  `,
  styles: [`
  h1{
    color:red;
  }
  `]
})
export class AppComponent {
  title = 'app works!';
}

/**
h1   {color: blue;}
 */
