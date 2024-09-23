import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCreateComponent } from './person-create/person-create.component';  // PersonCreateComponent'i import edin

const routes: Routes = [
  { path: 'person-create', component: PersonCreateComponent },  // PersonCreateComponent için route ekleyin
  { path: '', redirectTo: '/person-create', pathMatch: 'full' }  // Ana sayfayı person-create'e yönlendirin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }