import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  selectedPokemon: Pokemon;
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService, private messageService: MessageService) { }

  ngOnInit() {
    this.getPokemons();
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.messageService.add(`Vous avez selectionné ${pokemon.name}`)
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

}
