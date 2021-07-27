import { Component } from '@angular/core';
import { MovieListService} from './services/movie-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public movieListService: MovieListService) {}

  movie1 = this.movieListService.randomMovieGenerator();
  movie2 = this.movieListService.randomMovieGenerator();

  showCorrectMessage = false;
  showWrongMessage = false;
	
  guessMovie(movieClicked){
    if(movieClicked == this.movie1){
      if (movieClicked.stars >= this.movie2.stars){
        this.clickedCorrectly();
      } else {
        this.clickedFalsely();
      }
    }
    else if(movieClicked == this.movie2){
      if (movieClicked.stars >= this.movie1.stars){
        this.clickedCorrectly();
      } else {
        this.clickedFalsely();
      }
    }
  }

  clickedCorrectly(){
    this.showCorrectMessage = true;
    this.showWrongMessage = false;
  }

  clickedFalsely(){
    this.showWrongMessage = true;
    this.showCorrectMessage = false;
  }

  playAgain(){
    this.movie1 = this.movieListService.randomMovieGenerator();
    this.movie2 = this.movieListService.randomMovieGenerator();
    this.showCorrectMessage = false;
    this.showWrongMessage = false;

  }
}
