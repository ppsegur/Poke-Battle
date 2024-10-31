import { Pipe, PipeTransform } from '@angular/core';
import { PokemonResponse } from '../models/pokemon.models';

@Pipe({
  name: 'curstomUlrBack'
})
export class CurstomUlrBackPipe implements PipeTransform {

//Pipe para el pokemon aliado para que aparezca de espaldas al usuario   
  transform(pokemon: PokemonResponse): string {
    return pokemon?.sprites?.back_default ;
  }


}
