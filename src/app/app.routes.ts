import { Routes } from '@angular/router';
import { NGTEMPLATEComponent } from './Components/ng-template/ng-template.component';
import { NGCLASSComponent } from './Components/ng-class/ng-class.component';
import { NGCONTAINERComponent } from './Components/ng-container/ng-container.component';
import { NGCONTENTComponent } from './Components/ng-content/ng-content.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

export const routes: Routes = [
    {path:"", component:WelcomeComponent},
    {path:"template", component:NGTEMPLATEComponent},
    {path:'class', component:NGCLASSComponent},
    {path:'container', component:NGCONTAINERComponent},
    {path:'content', component:NGCONTENTComponent}
];
