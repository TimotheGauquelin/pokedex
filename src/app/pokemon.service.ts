import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private messageService: MessageService) { }

getPokemons(): Observable<Pokemon[]> {
  this.messageService.add('Que puis-je pour vous ?');
  return of(POKEMONS);
}

}
