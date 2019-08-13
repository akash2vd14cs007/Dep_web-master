import { Routes, RouterModule } from "@angular/router";
import { DepartmentdisplayComponent } from './departmentdisplay/departmentdisplay.component';
import { AdddeptComponent } from './departmentdisplay/adddept/adddept.component';
import { EditdeptComponent } from './departmentdisplay/editdept/editdept.component';



const arr:Routes=[
  {path:"", component:DepartmentdisplayComponent},
  {path:"adddept", component:AdddeptComponent},
  {path:"editdept", component:EditdeptComponent}
];

export const routing=RouterModule.forRoot(arr);
