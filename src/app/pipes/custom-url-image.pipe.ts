import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon, PokemonResponse } from '../models/pokemon.models';

@Pipe({
  name: 'customUrlImage'
})
export class CustomUrlImagePipe implements PipeTransform {

  transform(pokemon: PokemonResponse): string {
    return pokemon?.sprites?.front_default;
  }

}
