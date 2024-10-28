import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Move, Pokemon } from '../../models/pokemon.models';

@Component({
  selector: 'app-pokemoncomponent',
  templateUrl: './pokemoncomponent.component.html',
  styleUrl: './pokemoncomponent.component.css'
})
export class PokemoncomponentComponent {
listOfPokemom: Pokemon[] = [];
@Input() pokemon!: Pokemon;
@Input() salud!: number;
@Input() isTurn!: boolean; // Control de turnos
@Output() ataque = new EventEmitter<number>(); // Evento para enviar el daño al componente padre

constructor(private pokemonService: PokemonServiceService) {}
// Métodos de ataque
ataque1() {
  if (this.isTurn) {
    this.ataque.emit(10); // Ataque con daño de 10
    //Restar en la barra 
    this.salud = Math.max(0, this.salud - 10);
  }
}

// Método para retornar el color de la barra de salud
getSaludColor(): string {
  if (this.salud <= 25) return 'danger';
  else if (this.salud > 25 && this.salud <= 50) return 'warning';
  else return 'success';
}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(respuesta => {
      this.listOfPokemom = respuesta.results;
    })
}
}
