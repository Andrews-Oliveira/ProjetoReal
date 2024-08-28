import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-lateral2',
  templateUrl: './menu-lateral2.component.html',
  styleUrl: './menu-lateral2.component.css'
})
export class MenuLateral2Component {
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
