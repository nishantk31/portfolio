import { Component } from '@angular/core';
import { certifications, education } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  readonly education = education;
  readonly certifications = certifications;
}
