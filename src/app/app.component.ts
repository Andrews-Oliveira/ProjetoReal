import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeaderAndFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifique a rota atual para decidir se deve mostrar o cabeçalho e rodapé
        this.showHeaderAndFooter = !['/login'].includes(event.urlAfterRedirects);
      }
    });
  }
}
