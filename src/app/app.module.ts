import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HorseComponent } from './horse/horse.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HorseDetailComponent } from './horse-detail/horse-detail.component';
import { HorseCreateComponent } from './horse-create/horse-create.component';
import { HorseEditComponent } from './horse-edit/horse-edit.component';


const appRoutes: Routes = [

  // {
  //     path: 'horses',
  //    component: HorseComponent,
  //    data: { title: 'horse List' }
  //   },
  //  {
  //     path: 'horse-details/:id',
  //     component: HorseDetailComponent,
  //     data: { title: 'horse Details' },
  //   },

    { path: '', component: HorseComponent },

    {
      path: 'horses',
      component: HorseComponent,
      children: [
        { path: 'horse-details/:id', component: HorseDetailComponent }, 
      ]
    },
  {
    path: 'horse-create',
    component: HorseCreateComponent,
    data: { title: 'Create Horse' }
  },
  {
    path: 'horse-edit/:id',
    component: HorseEditComponent,
    data: { title: 'Edit Horse' }
  },
  // { path: '',
  //    redirectTo: '/horses',
  //    pathMatch: 'full'
  //  }
];


@NgModule({
  declarations: [
    AppComponent,
    HorseComponent,
    HorseDetailComponent,
    HorseCreateComponent,
    HorseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
