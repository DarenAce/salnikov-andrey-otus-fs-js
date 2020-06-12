import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import {
    Language,
    TranslationDirection,
    TranslationDirectionSelectValue,
    WordPair,
} from "../app.interfaces";
import { TranslationService } from "../translation.service";
import { translationDirections } from "../app.config";
import { translationDirectionToLanguagePair } from "../app.utils";

@Component({
    selector: "app-add-word-dialog",
    templateUrl: "./add-word-dialog.component.html",
    styleUrls: ["./add-word-dialog.component.css"],
})
export class AddWordDialogComponent implements OnInit, OnDestroy {
    newWordPair: WordPair;
    currentTranslationDirection: TranslationDirection;
    translationDirections: TranslationDirectionSelectValue[] = translationDirections;
    subscription: Subscription;

    constructor(
        private popUp: MatSnackBar,
        private translationService: TranslationService
    ) {}

    ngOnInit(): void {
        this.currentTranslationDirection = translationDirections[0].value;
        this.onTranslationDirectionChange();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onTranslationDirectionChange(): void {
        const languages: Language[] = translationDirectionToLanguagePair(
            this.currentTranslationDirection
        );
        this.newWordPair = {
            added: null,
            original: {
                language: languages[0],
                spelling: "",
            },
            translation: {
                language: languages[1],
                spelling: "",
            },
        };
    }

    onTranslateClick(): void {
        this.subscription = this.translationService
            .translate(
                this.newWordPair.original.spelling,
                this.currentTranslationDirection
            )
            .subscribe(
                (wordPair) => {
                    this.newWordPair = wordPair;
                },
                (error) => this.showErrorMessage(`Couldn't translate a word. Error: ${JSON.stringify(error.message)}`),
                () => console.log("Translation completed.")
            );
    }

    showErrorMessage(message: string) {
        this.popUp.open(message, "\u2715", {
            duration: 5000,
            verticalPosition: "top"
        });
    }
}
