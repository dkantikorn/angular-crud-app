//Import angular core routes , and this one RouterModule
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import each class must has to need route
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { ProvinceComponent } from './province/province.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/:page/:id', component: UserComponent },
    { path: 'province', component: ProvinceComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/:page/:id', component: ProductComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'demo', component: DemoComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }