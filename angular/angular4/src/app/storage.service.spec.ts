import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";
import { localStorageSettingsKey, localStorageWordListKey } from "./app.config";
import {
    AppSettings,
    TranslationDirection,
    WordPair,
    Language,
} from "./app.interfaces";

describe("Storage Service", () => {
    const localStorage = window.localStorage;

    let storage: StorageService;
    let storedSettings: string;
    let storedWords: string;

    const testSettings: AppSettings = {
        numberOfQuestions: 1,
        secondsPerQuestion: 3,
        translationDirection: TranslationDirection.EnToRu,
    };

    const testWordList: WordPair[] = [
        {
            added: new Date(),
            original: {
                language: Language.En,
                spelling: "test",
            },
            translation: {
                language: Language.Ru,
                spelling: "тестовые",
            },
        },
        {
            added: new Date(),
            original: {
                language: Language.En,
                spelling: "data",
            },
            translation: {
                language: Language.Ru,
                spelling: "данные",
            },
        },
    ];

    const testWord: WordPair = {
        added: new Date(),
        original: {
            language: Language.En,
            spelling: "add",
        },
        translation: {
            language: Language.Ru,
            spelling: "добавить",
        },
    };

    beforeAll(() => {
        storedSettings = localStorage.getItem(localStorageSettingsKey);
        storedWords = localStorage.getItem(localStorageWordListKey);
    });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        storage = TestBed.get(StorageService);
        localStorage.removeItem(localStorageSettingsKey);
        localStorage.removeItem(localStorageWordListKey);
    });

    afterAll(() => {
        localStorage.setItem(localStorageSettingsKey, storedSettings);
        localStorage.setItem(localStorageWordListKey, storedWords);
    });

    it("should be created", () => {
        expect(storage).toBeTruthy();
    });

    it("should load settings from local storage", () => {
        localStorage.setItem(
            localStorageSettingsKey,
            JSON.stringify(testSettings)
        );
        const settings: AppSettings = storage.getSettings();
        expect(settings).toEqual(testSettings);
    });

    it("should save settings in local storage", () => {
        storage.setSettings(testSettings);
        const settings: AppSettings = JSON.parse(
            localStorage.getItem(localStorageSettingsKey)
        );
        expect(settings).toEqual(testSettings);
    });

    it("should load word list from local storage", () => {
        localStorage.setItem(
            localStorageWordListKey,
            JSON.stringify(testWordList)
        );
        const wordList: WordPair[] = storage.getWords();
        expect(wordList).toEqual(testWordList);
    });

    it("should load empty array if no words saved in local storage", () => {
        const wordList: WordPair[] = storage.getWords();
        expect(wordList.length).toEqual(0);
    });

    it("should save word list in local storage", () => {
        storage.setWords(testWordList);
        const wordList: WordPair[] = JSON.parse(
            localStorage.getItem(localStorageWordListKey),
            (key, value) => {
                if (key === "added") {
                    return new Date(value);
                }
                return value;
            }
        );
        expect(wordList).toEqual(testWordList);
    });

    it("should add word to local storage", () => {
        storage.addWord(testWord);
        const wordList: WordPair[] = JSON.parse(
            localStorage.getItem(localStorageWordListKey),
            (key, value) => {
                if (key === "added") {
                    return new Date(value);
                }
                return value;
            }
        );
        expect(wordList).toContain(testWord);
    });
});
