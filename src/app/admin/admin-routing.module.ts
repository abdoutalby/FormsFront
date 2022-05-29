import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AdminComponent } from './admin.component';
import { AdminsComponent } from './admins/admins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnquetteComponent } from './enquette/enquette.component';
import { EnquettesComponent } from './enquettes/enquettes.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { ResponsesComponent } from './responses/responses.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{ path: '', component: AdminComponent , children: [
{path:'users' , component:UsersComponent} , 
{path:'admins' , component : AdminsComponent},
{path:'reclamations' , component : ReclamationsComponent},
{path : 'questions' , component : QuestionsComponent},
{path: 'responses' , component : ResponsesComponent},
{path : 'enquettes' , component:EnquettesComponent},
{path : 'dashboard' , component: DashboardComponent},
{path: 'enquettes/:id' , component : EnquetteComponent},
{ path: "**" , component:NotFoundComponent }

]
},

{ path: "**" , component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
