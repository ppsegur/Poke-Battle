import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Move, Pokemon } from '../../models/pokemon.models';

@Component({
  selector: 'app-pokemoncomponent',
  templateUrl: './pokemoncomponent.component.html',
  styleUrl: './pokemoncomponent.component.css'
})
export class PokemoncomponentComponent implements OnInit {

  listOfPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonServiceService) { }

  @Input() salud1 = 100;
  @Input() salud2 = 100;

  getSalud1(): string {
    if(this.salud1 <= 25) {
      return 'danger';
    } else if(this.salud1 > 25 && this.salud1 <= 50) {
      return 'warning';
    }else if(this.salud1 > 50 && this.salud1 <= 100) {
      return 'success';
    }
    return 'secondary';
  }

  getSalud2(): string {
    if(this.salud2 <= 25) {
      return 'danger';
    } else if(this.salud2 > 25 && this.salud2 <= 50) {
      return 'warning';
    }else if(this.salud2 > 50 && this.salud2 <= 100) {
      return 'success';
    }
    return 'secondary';
  }

  ataque1() {
    this.salud2 = this.salud2 - 10;
  }

  ataque2() {
    this.salud1 = this.salud1 - 10;
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(respuesta => {
      this.listOfPokemon = respuesta.results;
    })

  }

}

