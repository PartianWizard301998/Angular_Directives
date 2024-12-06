import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NGCLASSComponent {
  
isActive = false;

changeValue(){
  if(this.isActive === true){
    this.isActive = false;
  }else{
    this.isActive = true;
  }
 }

}
