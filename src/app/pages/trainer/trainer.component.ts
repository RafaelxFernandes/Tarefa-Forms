import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	pokemons;
	passwordError: boolean = false;

	constructor(public pokemonservice: PokemonService) { }

	ngOnInit() {
	}

	onSubmit(login) {
		console.log(login);
	}

	checkPokemon(pokemon) {
		console.log(this.passwordError);
		this.pokemonservice.checkPokemon(pokemon.value).subscribe((res)=>{
			/*console.log(res.sprites.front_default);*/
			this.pokemons = res;
			console.log(res);
			console.log(this.pokemons);
		});
	}
}