import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Memory DB mock for fake back-end demo or test
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { BookData } from './book-data';

//Angular Material Design
//import { MaterialModule } from '@angular/material';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Used for import service
import { UserService } from './services/user.service';
import { ProvinceObservableService } from './services/province-observable.service';
import { BookService } from './services/book.service';
import { BookGetParamsService } from './services/book.get.params.service';

import { Planets } from './shared/planets.model';
import { PlanetsService } from './shared/planets.service';
import { LoginService } from './services/login.service';

//Import each componentx
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SayComponent } from './say/say.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { DemoComponent } from './demo/demo.component';
import { ProvinceComponent } from './province/province.component';
import { PlanetsComponent } from './planets/planets.component';
import { SerchProvincePipe } from './serch-province.pipe';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { BookObservableComponent } from './book-observable/book-observable.component';
import { BookPromiseComponent } from './book-promise/book-promise.component';
import { BookGetParamsComponent } from './book-get-params/book-get-params.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Foe book library
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail.component';
import { BookAddComponent } from './book/book-add.component';
import { BookUpdateComponent } from './book/book-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SayComponent,
    EventComponent,
    UserComponent,
    ProductComponent,
    ContactComponent,
    HomeComponent,
    DemoComponent,
    ProvinceComponent,
    PlanetsComponent,
    SerchProvincePipe,
    HotelComponent,
    LoginComponent,
    BookObservableComponent,
    BookPromiseComponent,
    BookGetParamsComponent,
    PageNotFoundComponent,
    BookComponent,
    BookDetailComponent,
    BookAddComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BookData)
  ],
  providers: [
    UserService,
    ProvinceObservableService,
    PlanetsService,
    LoginService,
    BookService,
    BookGetParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
