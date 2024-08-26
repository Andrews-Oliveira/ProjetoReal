import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lastScrollTop = 0;
  isHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scroll para baixo - esconde a header com um atraso
      setTimeout(() => {
        this.isHidden = true;
      }, 50); // Pequeno atraso antes de ocultar
    } else {
      // Scroll para cima - mostra a header
      this.isHidden = false;
    }

    this.lastScrollTop = scrollTop;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota atual é a de login e oculta o header
        this.isHidden = this.router.url === '/login';
      }
    });
  }
}
