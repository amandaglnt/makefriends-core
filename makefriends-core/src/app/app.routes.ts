import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: RegistryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
})
export class AppRoutingModule {}
