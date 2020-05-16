import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
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
export class AddWordDialogComponent implements OnInit {
    newWordPair: WordPair;
    currentTranslationDirection: TranslationDirection;
    translationDirections: TranslationDirectionSelectValue[] = translationDirections;

    constructor(
        public dialogRef: MatDialogRef<AddWordDialogComponent>,
        private translationService: TranslationService
    ) {}

    ngOnInit(): void {
        this.currentTranslationDirection = translationDirections[0].value;
        this.onTranslationDirectionChange();
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
        const subscription = this.translationService
            .translate(
                this.newWordPair.original.spelling,
                this.currentTranslationDirection
            )
            .subscribe(
                (wordPair) => {
                    this.newWordPair = wordPair;
                },
                (error) => console.log(error),
                () => console.log("Translation completed.")
            );
    }
}
