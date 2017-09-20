import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';



import { NgPipesModule } from 'ngx-pipes';
//Application Specific Module
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';


//Import Firebase module
import { AngularFireModule } from 'angularfire2';
import { fireBaseConfigure } from '.././environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Mydatepicker angular2 Plugin
import { MyDatePickerModule } from 'mydatepicker';

//Pagination Plugin Module
import { NgxPaginationModule } from 'ngx-pagination';


//import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
//


//Memory DB mock for fake back-end demo or test
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { BookData } from './book-data';

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
// import { LoginService } from './services/login.service';
import { TeamManagementService } from './services/team-management.service';

//Import each componentx
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SayComponent } from './say/say.component';
import { EventComponent } from './event/event.component';
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

//Form Control, FormGroup,FormArray
import { FormComponent } from './form/form.component';
import { FormControlComponent } from './form/form-control.component';
import { FormGroupComponent } from './form/form-group.component';
import { FormArrayComponent } from './form/form-array.component';
import { FormBuilderComponent } from './form/form-builder.component';


//User object import section
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { KeyPairsPipe } from './pipes/key-pairs.pipe';
import { AuthGuardGuard } from './_guard/auth-guard.guard';
import { AuthenticationService } from './services/authentication.service';

//Province object import section
import { ProvinceFilterPipe } from './province/pipe/province-filter.pipe';
import { ProvinceAddComponent } from './province/province-add/province-add.component';
import { ProvinceEditComponent } from './province/province-edit/province-edit.component';
import { ProvinceDetailComponent } from './province/province-detail/province-detail.component';
import { ProvinceService } from './province/service/province.service';
import { UserFilterPipe } from './user/pipe/user-filter.pipe';

//Input and Output directive
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildOneComponent } from './input-output/child-one/child-one.component';
import { ChildTwoComponent } from './input-output/child-two/child-two.component';

//Book with firebase database
import { BookFirebaseComponent } from './book-firebase/book-firebase.component';
import { BookFirebaseFormComponent } from './book-firebase/book-firebase-form/book-firebase-form.component';
import { BookFirebaseDetailComponent } from './book-firebase/book-firebase-detail/book-firebase-detail.component';
import { BookFirebaseService } from './book-firebase/service/book-firebase.service';

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
    BookUpdateComponent,
    FormComponent,
    FormControlComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormBuilderComponent,
    UserEditComponent,
    UserDetailComponent,
    UserAddComponent,
    KeyPairsPipe,
    ProvinceFilterPipe,
    ProvinceAddComponent,
    ProvinceEditComponent,
    ProvinceDetailComponent,
    UserFilterPipe,
    UserLoginComponent,
    InputOutputComponent,
    ChildOneComponent,
    ChildTwoComponent,
    BookFirebaseComponent,
    BookFirebaseFormComponent,
    BookFirebaseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToasterModule,

    CountryModule,
    PersonModule,

    AppRoutingModule,

    NgPipesModule,

    NgxPaginationModule,

    MyDatePickerModule,

    AngularFireModule.initializeApp(fireBaseConfigure),
    AngularFireDatabaseModule
    //,InMemoryWebApiModule.forRoot(BookData)

  ],
  providers: [
    AuthGuardGuard,
    AuthenticationService,
    UserService,
    ProvinceObservableService,
    PlanetsService,
    BookService,
    BookGetParamsService,
    TeamManagementService,
    ProvinceService,
    BookFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }