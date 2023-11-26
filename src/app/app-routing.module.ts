import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRootComponent } from './pages/home/components/home-root/home-root.component';

const routes: Routes = [
  {path:"welcome", component: HomeRootComponent},
  {path:"", redirectTo:"welcome", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
