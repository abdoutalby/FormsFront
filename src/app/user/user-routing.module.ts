import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnqUserComponent } from './add-enq-user/add-enq-user.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EnquetteComponent } from './enquette/enquette.component';
import { EnquettesComponent } from './enquettes/enquettes.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReponseComponent } from './reponse/reponse.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'myenquettes', component: EnquettesComponent },
      { path: 'enquettes/:id', component: EnquetteComponent },
      {path:'addEnquette',component:AddEnqUserComponent},
      {path:'reclamer' , component : AddReclamationComponent},
      {path:'reponse/:id',component:ReponseComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
