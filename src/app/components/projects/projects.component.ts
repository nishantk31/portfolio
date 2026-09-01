import { Component } from '@angular/core';
import { projects } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projects = projects;

  revealDelay(index: number): 1 | 2 | 3 {
    return ((index % 3) + 1) as 1 | 2 | 3;
  }

  projectIndex(index: number): string {
    return `0${index + 1}`;
  }
}
