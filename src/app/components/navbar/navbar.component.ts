import { Component, HostListener, signal } from '@angular/core';
import { navLinks, profile } from '../../data/profile';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly navLinks = navLinks;
  readonly profile = profile;

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}
