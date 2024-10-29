import { Component, EventEmitter, input, Input, OnInit, output, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonResponse } from '../../models/pokemon.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemoncomponent',
  templateUrl: './pokemoncomponent.component.html',
  styleUrls: ['./pokemoncomponent.component.css']
})
export class PokemoncomponentComponent implements OnInit {
  //Constructor pasamos el servicio
  constructor(private pokemonService: PokemonServiceService) {}
  
  //Variables
  @Input() pokemonId: number | undefined ;
  pokemon: PokemonResponse | undefined;
  @Input() isTurn: boolean = false;
  @Input() life: number = 100;
  //VAriable que le mandaremos al componente padre
  @Output() attack = new EventEmitter<number>();

  
  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe(pokemonResponse => {
      this.pokemon = pokemonResponse;
    });
  }
  

  getProgrssBarColor(): string {
    if(this.life>=70){
      return 'bg-success';
    }else if(this.life>=30){
      return 'bg-warning';
    }else if(this.life>=0){
      return 'bg-danger';
    }
    return 'bg-default'; // Default return statement
  }

  doAttack(){
  var damage= Math.floor(Math.random() *(30-10)) + 10;
  this.attack.emit(damage);
  
  

  }



  /*
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
}*/
}
