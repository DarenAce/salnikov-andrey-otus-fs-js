import { Component, OnInit } from "@angular/core";
import { WordPairsByAdditionDate, WordPair } from "../app.interfaces";
import { MatDialog } from "@angular/material/dialog";
import { AddWordDialogComponent } from "../add-word-dialog/add-word-dialog.component";
import { StorageService } from "../storage.service";

@Component({
    selector: "app-dictionary",
    templateUrl: "./dictionary.component.html",
    styleUrls: ["./dictionary.component.css"],
})
export class DictionaryComponent implements OnInit {
    newWordPair: WordPair;
    wordPairsByDates: WordPairsByAdditionDate[];

    constructor(private storage: StorageService, public dialog: MatDialog) {}

    ngOnInit() {
        this.loadSavedWordPairs();
    }

    loadSavedWordPairs() {
        this.wordPairsByDates = [];
        const wordPairs = this.storage.getWords();
        wordPairs.forEach((pair) => {
            const i = this.wordPairsByDates.findIndex(
                (pairsByDate) =>
                    pair.added.toDateString() ===
                    pairsByDate.added.toDateString()
            );
            if (i === -1) {
                this.wordPairsByDates.push({
                    added: new Date(pair.added.toDateString()),
                    wordPairs: [pair],
                });
            } else {
                this.wordPairsByDates[i].wordPairs.push(pair);
            }
        });
    }

    openDialog() {
        const dialogRef = this.dialog.open(AddWordDialogComponent);

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.storage.addWord(result);
                this.loadSavedWordPairs();
            }
        });
    }
}
