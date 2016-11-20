import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in.memory.db.service';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ChurchService } from './church.service';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ChurchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
