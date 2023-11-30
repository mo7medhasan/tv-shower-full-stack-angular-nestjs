import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {Observable} from "rxjs"
import { TvShow } from '../shared/tv-show.model';

const BACKEND_URL='http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(public http:HttpClient) { }


  
  getTvShows():Observable<TvShow[]> {
    
    return this.http.get<TvShow[]>(`${BACKEND_URL}/tv-shows`);
  }


}
