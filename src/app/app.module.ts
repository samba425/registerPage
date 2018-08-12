import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'; 
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent, 
    LoginComponent,
    RegisterComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
