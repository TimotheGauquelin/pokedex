import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  pokemons = POKEMONS;
  selectedPokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

}
