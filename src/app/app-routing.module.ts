import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAndPhilosofhyComponent } from './components/home-and-philosofhy/home-and-philosofhy.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorksComponent } from './components/works/works.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
{path: 'Home', component: HomeAndPhilosofhyComponent},
{path: 'Studies', component: StudiesComponent},
{path: 'Works', component: WorksComponent},
{path: 'Skill', component: SkillsComponent},
{path: 'Contact', component: ContactComponent},
{path: '**', pathMatch: 'full', redirectTo: 'Home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
