import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { PokemonResponse } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }
/*
  getPokemon(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/')
  }
     
  getMoveDetails(url: string): Observable<Move> {
    return this.http.get<Move>('https://pokeapi.co/api/v2/move/');
  }*/
  // Método para obtener un pokemon por su id
  getPokemon(id: number): Observable<PokemonResponse> {
  return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
 }
}
