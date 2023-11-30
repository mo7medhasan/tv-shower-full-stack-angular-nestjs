import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsService } from '../../core/tv-shows.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {Observable} from "rxjs"
import { TvShow } from '../../shared/tv-show.model';


const BACKEND_URL='http://localhost:3000'


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  // constructor(private tvShowService:TvShowsService){}

 
  constructor(private http:HttpClient) { }


  
   getTvShows():Observable<TvShow[]> {
    
    return  this.http.get<TvShow[]>(`${BACKEND_URL}/tv-shows`);
  }
  
    tvShow$= this.getTvShows();
}
