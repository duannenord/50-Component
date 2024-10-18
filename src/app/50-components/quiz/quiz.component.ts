import { Component } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  answer: string;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions: Question[] = [
    { question: 'Saan binaril si Jose Rizal?', options: ['Bagumbayan', 'Sa SM', 'Sa likod', 'Ewan ko'], answer: 'Sa likod' },
    { question: '2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { question: 'Crush mo ba ko? (Dapat sigurado)', options: ['Oo', 'No', 'Hindi', 'Medyo'], answer: 'Oo' }
  ];

  currentQuestionIndex: number = 0;
  score: number = 0;

  selectAnswer(option: string) {
    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
