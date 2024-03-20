import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie Finder';
  movieData: IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService: OmdbApiService){}

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData =>{
        this.movieData=movieData;
        console.log("Director Name : " + this.movieData.Director);
      }
    )
    return false;
  }
}
