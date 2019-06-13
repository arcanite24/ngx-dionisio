<p align="center"><img width=100% src="https://i.imgur.com/t0YTAOZ.png"></p>

![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Basic Overview
Official Dionisio Angular Library heavily inspired by @angular/fire

## Installation
```bash
npm i @epsidev/ngx-dionisio --save
```
Then add
`HeliosModule` into your app.module.ts file
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDionisioModule } from '@epsidev/ngx-dionisio';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDionisioModule.forRoot({
	    base_url: 'http://localhost:3000',
    })
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Usage
Import Dionisio Service into your component:
```typescript
import { Component } from '@angular/core';
import { DionisioService } from '@epsidev/ngx-dionisio';
import { Observable }  from  'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public foos$: Observable<Foo[]> = this.dionisio.collection<Foo>('foo').valueChanges();

  constructor(
    private dionisio: DionisioService,
  ) {}

}

interface Foo {
  id: number;
  text: string;
}
```

On your template use the $foos Observable with an async pipe
```html
<ul  class="list-group"  *ngIf="foos$ | async as foos">
  <li *ngFor="let foo of foos">{{foo.text}}</li>
</ul>
```

## Docs
[Official Docs](https://epsidev.com.mx/projects/ngx-dionisio)
