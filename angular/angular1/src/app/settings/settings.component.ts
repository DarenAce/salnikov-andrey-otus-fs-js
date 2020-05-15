import { Component } from "@angular/core";
import {
    NumberSelectValue,
    StringSelectValue,
    TranslationDirection
} from "../app.interfaces";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"]
})
export class SettingsComponent {
    selectedTransaltionDirection: string;
    selectedNumberOfQuestions: number;
    selectedSecondsPerQuestion: number;

    translationDirections: StringSelectValue[] = [
        {
            label: "English — Russian",
            value: TranslationDirection.EnToRu
        },
        {
            label: "Russian — English",
            value: TranslationDirection.RuToEn
        },
        {
            label: "English — Spanish",
            value: TranslationDirection.EnToEs
        },
        {
            label: "Spanish — English",
            value: TranslationDirection.EsToEn
        }
    ];

    numbersOfQuestions: NumberSelectValue[] = [
        {
            label: "5",
            value: 5
        },
        {
            label: "10",
            value: 10
        },
        {
            label: "20",
            value: 20
        },
        {
            label: "50",
            value: 50
        }
    ];

    secondsPerQuestion: NumberSelectValue[] = [
        {
            label: "10 sec",
            value: 10
        },
        {
            label: "30 sec",
            value: 30
        },
        {
            label: "1 min",
            value: 60
        }
    ];

    constructor() {
        this.selectedTransaltionDirection = this.translationDirections[0].value;
        this.selectedNumberOfQuestions = this.numbersOfQuestions[0].value;
        this.selectedSecondsPerQuestion = this.secondsPerQuestion[0].value;
    }
}
