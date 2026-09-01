import { Component } from '@angular/core';
import { experience } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experience = experience;

  revealDelay(index: number): 1 | 2 | 3 {
    return ((index % 3) + 1) as 1 | 2 | 3;
  }
}
