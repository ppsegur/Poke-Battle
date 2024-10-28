
export interface Language {
    name: string;
    url: string;
  }
  
  export interface Generation {
    name: string;
    url: string;
  }
  
  export interface EffectEntry {
    effect: string;
    short_effect: string;
    language: Language;
  }
  
  export interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
    version_group: VersionGroup;
  }
  
  export interface VersionGroup {
    name: string;
    url: string;
  }
  
  export interface Move {
    id: number;
    name: string;
    power: number;
    accuracy: number;
    effect_entries: EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    type: { name: string };
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    stats: string;
    url: string;
    moves: Move[];
  }
  export interface PokemonResponse {
    count: number
    next: string
    previous: any
    results: Pokemon[]
}
 