import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemoncomponentComponent } from './components/pokemoncomponent/pokemoncomponent.component';

const routes: Routes = [
  { path: 'pokemon/:id', component: PokemoncomponentComponent },
  { path: '', redirectTo: '/pokemon/1', pathMatch: 'full' }, // Redirige a un Pokémon por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
