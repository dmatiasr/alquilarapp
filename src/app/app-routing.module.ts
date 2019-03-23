import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterBoxComponent } from './components/filterallbox/filterallbox.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { ListAllComponent } from './components/listall/listall.component';

const routes: Routes = [
  {path:'', component:FilterBoxComponent},
  {path: 'list/:typeProperty', component: ListAllComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
