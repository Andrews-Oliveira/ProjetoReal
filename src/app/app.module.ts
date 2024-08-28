import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './finalizacao/login/login.component';
import { RegistroComponent } from './finalizacao/registro/registro.component';
import { ComponentsComponent } from './components/components.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/geral/footer/footer.component';
import { HeaderComponent } from './components/geral/header/header.component';
// import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { FinalizacaoComponent } from './finalizacao/finalizacao.component';
import {FormsModule} from "@angular/forms";
// import { Layout2Component } from "./finalizacao/layout2/layout2.component";
import { MenuLateralComponent } from './finalizacao/layout2/menu-lateral/menu-lateral.component';
import { MenuLateral2Component } from './finalizacao/layout2/menu-lateral2/menu-lateral2.component';
// import { NavBarComponent } from './finalizacao/layout2/nav-bar/nav-bar.component';
// import { AuthLayoutrComponent } from './auth-layoutr/auth-layoutr.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ComponentsComponent,
    InicioComponent,
    SobreComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    // AuthLayoutComponent,
    LayoutComponent,
    FinalizacaoComponent,
    // Layout2Component,
    MenuLateralComponent,
    MenuLateral2Component,

    // AuthLayoutrComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
