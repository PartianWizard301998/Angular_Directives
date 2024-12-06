import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NGCONTAINERComponent {


  items : any = ["Maruti Suzuki", "TATA", "Mahindra", "Toyota"]


}
