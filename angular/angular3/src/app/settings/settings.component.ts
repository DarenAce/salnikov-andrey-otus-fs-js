import { Component, OnInit } from "@angular/core";
import {
    NumberSelectValue,
    TranslationDirection,
    TranslationDirectionSelectValue,
} from "../app.interfaces";
import {
    numbersOfQuestions,
    secondsPerQuestion,
    translationDirections,
} from "../app.config";
import { StorageService } from "../storage.service";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
    savedNumberOfQuestions: number;
    savedSecondsPerQuestion: number;
    savedTranslationDirection: TranslationDirection;

    selectedNumberOfQuestions: number;
    selectedSecondsPerQuestion: number;
    selectedTranslationDirection: TranslationDirection;

    numbersOfQuestions: NumberSelectValue[] = numbersOfQuestions;
    secondsPerQuestion: NumberSelectValue[] = secondsPerQuestion;
    translationDirections: TranslationDirectionSelectValue[] = translationDirections;

    constructor(private storage: StorageService) {}

    ngOnInit() {
        this.loadSavedSettings();
    }

    loadSavedSettings() {
        const {
            numberOfQuestions,
            secondsPerQuestion,
            translationDirection,
        } = this.storage.getSettings();
        this.savedNumberOfQuestions = numberOfQuestions;
        this.savedSecondsPerQuestion = secondsPerQuestion;
        this.savedTranslationDirection = translationDirection;
        this.selectedNumberOfQuestions = numberOfQuestions;
        this.selectedSecondsPerQuestion = secondsPerQuestion;
        this.selectedTranslationDirection = translationDirection;
    }

    onReset() {
        this.loadSavedSettings();
    }

    onSave() {
        this.storage.setSettings({
            numberOfQuestions: this.selectedNumberOfQuestions,
            secondsPerQuestion: this.selectedSecondsPerQuestion,
            translationDirection: this.selectedTranslationDirection,
        });
        this.loadSavedSettings();
    }

    isAnySettingChanged() {
        return (
            this.selectedNumberOfQuestions !== this.savedNumberOfQuestions ||
            this.selectedSecondsPerQuestion !== this.savedSecondsPerQuestion ||
            this.selectedTranslationDirection !== this.savedTranslationDirection
        );
    }
}
