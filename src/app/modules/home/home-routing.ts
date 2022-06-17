import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginRegisterAuthGuardService } from "../core/login-register-guard/login-register-auth-guard.service";
import { AdminComponent } from "./Components/Admin-home/admin.component";
import { CustomerHomeComponent } from "./Components/Customer-home/customer-home.component";
import { HomeComponent } from "./home.component";



const routes:Routes=[{
  path:'',component:HomeComponent
  ,children:[ 
      {path:"admin",component:AdminComponent}
  ,{path:'products',component:CustomerHomeComponent}
]/*,canActivate:[LoginRegisterAuthGuardService]*/
}]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouting{}