//Import angular core routes , and this one RouterModule
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import each class must has to need route
import { HomeComponent } from './home/home.component';

import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

import { PlanetsComponent } from './planets/planets.component';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail.component';
import { BookAddComponent } from './book/book-add.component';
import { BookUpdateComponent } from './book/book-update.component';
import { FormComponent } from './form/form.component';

import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';

import { ProvinceComponent } from './province/province.component';
import { ProvinceAddComponent } from './province/province-add/province-add.component';
import { ProvinceEditComponent } from './province/province-edit/province-edit.component';
import { ProvinceDetailComponent } from './province/province-detail/province-detail.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },


    { path: 'user', component: UserComponent },
    { path: 'user/detail/:user-id', component: UserDetailComponent },
    { path: 'user/edit/:user-id', component: UserEditComponent },
    { path: 'user/add', component: UserAddComponent },


    { path: 'province', component: ProvinceComponent },
    { path: 'province/add', component: ProvinceAddComponent },
    { path: 'province/edit/:province-id', component: ProvinceEditComponent },
    { path: 'province/detail/:province-id', component: ProvinceDetailComponent },


    { path: 'product', component: ProductComponent },
    { path: 'product/:page/:id', component: ProductComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'demo', component: DemoComponent },

    {
        path: 'country',
        loadChildren: 'app/country/country.module#CountryModule',
        data: { preload: true }
    },
    {
        path: 'person',
        loadChildren: 'app/person/person.module#PersonModule'
    },



    { path: 'view-detail/:id', component: BookDetailComponent },
    { path: 'add-book', component: BookAddComponent },
    { path: 'manage-book', component: BookComponent },
    { path: 'update-book/:id', component: BookUpdateComponent },


    { path: 'form', component: FormComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }