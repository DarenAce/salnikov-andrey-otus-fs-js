import { Injectable } from "@angular/core";
import { WordPair, AppSettings } from "./app.interfaces";
import { localStorageSettingsKey, localStorageWordListKey } from "./app.config";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    getWords(): WordPair[] {
        return localStorage.getItem(localStorageWordListKey)
            ? JSON.parse(localStorage.getItem(localStorageWordListKey), (key, value) => {
                if (key === "added") {
                    return new Date(value);
                }
                return value;
            })
            : [];
    }

    setWords(words: WordPair[]): void {
        localStorage.setItem(localStorageWordListKey, JSON.stringify(words));
    }

    addWord(word: WordPair): void {
        const words: WordPair[] = this.getWords();
        words.push(word);
        this.setWords(words);
    }

    getSettings(): AppSettings {
        return localStorage.getItem(localStorageSettingsKey)
            ? JSON.parse(localStorage.getItem(localStorageSettingsKey))
            : {};
    }

    setSettings(settings: AppSettings): void {
        localStorage.setItem(localStorageSettingsKey, JSON.stringify(settings));
    }
}
