import { Component, OnInit } from '@angular/core';
import {MenuLateralService} from "../../../menu-lateral.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent{
  isSidebarOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Adicione aqui a lógica de logout (limpar tokens, etc.)
    console.log('Sair do sistema');
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
