import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { FqaComponent } from './fqa/fqa.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component : ContactComponent
  },
  {
    path:'about',
    component : AboutComponent
  },
  {
    path:'news',
    component : NewsComponent
  },
  {
    path:'fqa',
    component : FqaComponent
  },
  {
    path:'community',
    component : CommunityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
