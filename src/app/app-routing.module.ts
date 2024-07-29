import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  
  { path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
