import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public dataone:any=[];
  
root_url="https://pokeapi.co/api/v2/pokemon/ditto";
root_url_id="https://pokeapi.co/api/v2/pokemon";
  constructor(private http:HttpClient) { 

  }
  
  
  getPokemon():Observable<any>{
    
    return this.http.get<any>(this.root_url).pipe(catchError(this.errorHandle))

  }
  errorHandle(error)
  {
    console.log('errorrr',error.message)
    return  throwError(error.message || "Server Errors")
  }
  

  searchPokemon(id):Observable<any>{
    return this.http.get<any>(this.root_url_id +'/'+ id).pipe(catchError(this.errorHandle))
  }
}  