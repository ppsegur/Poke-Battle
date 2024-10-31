import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonResponse } from '../../models/pokemon.models';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-pokemon-aliado',
  templateUrl: './pokemon-aliado.component.html',
  styleUrl: './pokemon-aliado.component.css'
})
export class PokemonAliadoComponent {
  options: AnimationOptions = {
    path: '/assets/animation_explosion.json',
  };

  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  @Input() life: number = 100;
  @Output() onAttackDone = new EventEmitter<number>();
  @Input() isMyTurn: boolean = false;
  showAnimation: boolean = false;

  listadoMovimientos: string[] = []; // Mover aquí

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe((PokemonResponse: PokemonResponse) => {
      this.pokemon = PokemonResponse;
      this.listadoMovimientos = this.getPokemonMoves(); // Llamar aquí
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['life'] && !changes['life'].firstChange) {
      this.showAnimation = true;
      setTimeout(() => {
        this.showAnimation = false;
      }, 1000);
    }
  }

  getProgressBarColor(): string {
    if (this.life >= 70) {
      return 'success';
    } else if (this.life >= 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  doAttack() {
    const damage = Math.floor(Math.random() * (30 - 10) + 10);
    this.onAttackDone.emit(damage);
  }

  getPokemonMoves(): string[] {
    if (this.pokemon && this.pokemon.moves) {
      return this.pokemon.moves.slice(0, 4).map((move: any) => move.move.name);
    }
    return [];
  }
}

