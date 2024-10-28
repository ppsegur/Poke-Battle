import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.models';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemonbattlecomponent',
  templateUrl: './pokemonbattlecomponent.component.html',
  styleUrl: './pokemonbattlecomponent.component.css'
})
export class PokemonbattlecomponentComponent implements OnInit {
  listOfPokemon: Pokemon[] = [];
  salud1: number = 100; // Salud de Charizard
  salud2: number = 100; // Salud de Blastoise
  isCharizardTurn: boolean = true; // Control de turnos

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(respuesta => {
      this.listOfPokemon = respuesta.results;
    });
  }

  // Métodos para recibir ataques desde el componente hijo
  handleAtaque(damage: number) {
    if (this.isCharizardTurn) {
      this.salud2 = Math.max(0, this.salud2 - damage); // Resta vida a Blastoise
      this.isCharizardTurn = false; // Cambia el turno
      this.blastoiseAttack(); // Llama a la función de ataque de Blastoise después de que Charizard ataque
    }
  }

  // Método para simular el ataque de Blastoise
  blastoiseAttack() {
    if (this.salud2 > 0) {
      const damage = 10; // Daño fijo para Blastoise
      this.salud1 = Math.max(0, this.salud1 - damage); // Resta vida a Charizard
      this.isCharizardTurn = true; // Cambia el turno de nuevo a Charizard
    }
  }
