import { Component } from "@angular/core";
import { WordPair } from "../app.interfaces";
import { StorageService } from "../storage.service";
import { translationDirectionToLanguagePair } from "../app.utils";

@Component({
    selector: "app-study",
    templateUrl: "./study.component.html",
    styleUrls: ["./study.component.css"],
})
export class StudyComponent {
    isGameStarted: boolean;
    questionsTotal: number;
    questionNumber: number;
    words: WordPair[];
    wordToTranslate: WordPair;
    translation: string;
    secondsPerQuestion: number;
    secondsLeft: number;
    timer: any;
    checkResultClass: string;

    constructor(private storage: StorageService) {}

    startGame() {
        this.questionNumber = 0;
        this.isGameStarted = true;
        this.loadGameSettings();
        this.startNewRound();
    }

    loadGameSettings() {
        const {
            numberOfQuestions,
            secondsPerQuestion,
            translationDirection,
        } = this.storage.getSettings();
        this.questionsTotal = numberOfQuestions;
        this.secondsPerQuestion = secondsPerQuestion;
        const languages = translationDirectionToLanguagePair(
            translationDirection
        );
        this.words = this.storage
            .getWords()
            .filter(
                (word) =>
                    word.original.language === languages[0] &&
                    word.translation.language === languages[1]
            );
    }

    startNewRound() {
        this.questionNumber++;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.questionNumber <= this.questionsTotal) {
            this.translation = "";
            this.wordToTranslate = this.words[
                Math.floor(Math.random() * this.words.length)
            ];
            this.secondsLeft = this.secondsPerQuestion;
            this.timer = setInterval(() => {
                this.secondsLeft--;
                if (this.secondsLeft <= 0) {
                    if (this.questionNumber < this.questionsTotal) {
                        this.skipWord();
                    } else {
                        this.stopGame();
                    }
                }
            }, 1000);
        } else {
            this.stopGame();
        }
    }

    stopGame() {
        this.isGameStarted = false;
        this.translation = "";
    }

    skipWord() {
        this.translation = this.wordToTranslate.translation.spelling;
        setTimeout(() => {
            this.startNewRound();
        }, 1000);
    }

    checkAnswer() {
        if (
            this.translation.trim().toLowerCase() ===
            this.wordToTranslate.translation.spelling.toLowerCase()
        ) {
            this.checkResultClass = "correct";
            setTimeout(() => {
                this.checkResultClass = null;
                this.startNewRound();
            }, 500);
        } else {
            this.checkResultClass = "incorrect";
            setTimeout(() => {
                this.checkResultClass = null;
            }, 300);
        }
    }

    time() {
        const time = new Date(0, 0, 0, 0, 0, this.secondsLeft);
        const timeOptions = {
            minute: "numeric",
            second: "2-digit",
        };
        return time.toLocaleTimeString("ru", timeOptions);
    }
}
