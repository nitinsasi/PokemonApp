import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  errorMsg:string;
  loading = false;
  PokemonData:any=[];
  PokemonDataId:any=[];
  constructor(private service:PokemonService,private router:Router) { }

  ngOnInit() {
    this.loading = true;
    this.service.getPokemon().subscribe(data => {
  
    this.PokemonData=data;
    console.log(this.PokemonData);
      this.loading = false;
    },(error) => {
      this.errorMsg=error;
    })
  }
  get_Pokemon(id){
    console.log(id);
    this.loading = true;
    this.service.searchPokemon(id).subscribe(data => {
  
    this.PokemonDataId=data;
    console.log('aaaaa',this.PokemonDataId);
      this.loading = false;
    },(error) => {
      this.errorMsg=error;
    })
  }


 
}