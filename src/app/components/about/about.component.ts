import { Component } from '@angular/core';
import { experience, profile } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly profile = profile;
  readonly experience = experience;
}
