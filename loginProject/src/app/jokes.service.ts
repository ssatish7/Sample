import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private httpClient: HttpClient) { 
    
  }
private api= "https://official-joke-api.appspot.com/jokes/ten";
  // private api= 'https://official-joke-api.appspot.com/jokes/ten';
//  private api ='https://rickandmortyapi.com/api/character/';
    // private api ='https://indian-cities-api-nocbegfhqg.now.sh/cities';
    // private api='https://api.openbrewerydb.org/breweries?page=1';
  // public sendJokes(page: number)
  //   {
  //     return this.httpClient.get(this.api + page);

  //   }
    public sendJokes(): Observable<any>
    {
      return this.httpClient.get(this.api);

    }

}
