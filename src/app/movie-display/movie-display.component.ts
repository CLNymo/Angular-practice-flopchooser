import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  @Input() movie1;
  @Input() movie2;
  @Output() clickMovie1Emitter = new EventEmitter();
  @Output() clickMovie2Emitter = new EventEmitter();

  constructor() { }

  clickMovie1(){
    console.log("heyo1")
    this.clickMovie1Emitter.emit();
  }

  clickMovie2(){
    console.log("heyo2")
    this.clickMovie2Emitter.emit();
  }

  ngOnInit() {
  }

}