import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import {InicioComponent} from "./components/inicio/inicio.component";


let MainLayoutComponent;
const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: InicioComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
