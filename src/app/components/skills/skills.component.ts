import { Component } from '@angular/core';
import { skills } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skills = skills;

  revealDelay(index: number): 1 | 2 | 3 {
    return ((index % 3) + 1) as 1 | 2 | 3;
  }
}
