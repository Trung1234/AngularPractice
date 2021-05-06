import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { SqrtPipe } from './custom-pipe/pipe.sqrt';
import { GameListComponent } from './game-list/game-list.component';
import { SearchPipe } from './custom-pipe/pipe.search';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AngularPipeComponent,
    SqrtPipe,
    SearchPipe,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
