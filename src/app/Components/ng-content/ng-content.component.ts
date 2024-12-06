import { Component } from '@angular/core';
import { CHILDNGCONTENTComponent } from "./child/child-ng-content/child-ng-content.component";

@Component({
  selector: 'app-ng-content',
  standalone: true,
  imports: [CHILDNGCONTENTComponent],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NGCONTENTComponent {

}
