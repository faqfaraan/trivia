import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia-form',
  templateUrl: './trivia-form.component.html',
  styleUrls: ['./trivia-form.component.css']
})
export class TriviaFormComponent implements OnInit {
  numberOfQuestions = 5;

  constructor() { }

  ngOnInit() {
  }

}
