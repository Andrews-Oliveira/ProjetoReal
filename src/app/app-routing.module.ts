import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./finalizacao/login/login.component";
import {RegistroComponent} from "./finalizacao/registro/registro.component";
// import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
// import {AuthLayoutrComponent} from "./auth-layoutr/auth-layoutr.component";
import {InicioComponent} from "./components/inicio/inicio.component";





const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: InicioComponent }, // Página inicial

  // {
  //   path: 'login',
  //   component: AuthLayoutComponent,
  //   children: [
  //     { path: '', component: LoginComponent }
  //   ]
  // },
  //
  // {
  //   path: 'registro',
  //   component: AuthLayoutrComponent,
  //   children: [
  //     { path: '', component: RegistroComponent }
  //   ]
  //
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
