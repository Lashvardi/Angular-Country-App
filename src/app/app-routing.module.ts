import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { CountryCardComponent } from './component/country-card/country-card.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: "",
    component:HomeComponent,
  },
  {
    path: "profile",
    component:ProfileComponent,
  },
  {
    path: ':Country',
    component:DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
