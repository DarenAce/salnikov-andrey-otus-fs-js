import { Component } from "@angular/core";
import {
    WordPairsByAdditionDate,
    Language
} from "../app.interfaces";

@Component({
    selector: "app-dictionary",
    templateUrl: "./dictionary.component.html",
    styleUrls: ["./dictionary.component.css"]
})
export class DictionaryComponent {
    wordPairsByDates: WordPairsByAdditionDate[] = [
        {
            added: new Date(2017, 4, 4),
            wordPairs: [
                {
                    original: {
                        spelling: "to apply",
                        language: Language.En
                    },
                    translation: {
                        spelling: "добавлять",
                        language: Language.Ru
                    }
                },
                {
                    original: {
                        spelling: "education",
                        language: Language.En
                    },
                    translation: {
                        spelling: "образование",
                        language: Language.Ru
                    }
                },
                {
                    original: {
                        spelling: "to go",
                        language: Language.En
                    },
                    translation: {
                        spelling: "идти",
                        language: Language.Ru
                    }
                },
                {
                    original: {
                        spelling: "responsible",
                        language: Language.En
                    },
                    translation: {
                        spelling: "ответственный",
                        language: Language.Ru
                    }
                }
            ]
        },
        {
            added: new Date(2020, 3, 26),
            wordPairs: [
                {
                    original: {
                        spelling: "to apply",
                        language: Language.En
                    },
                    translation: {
                        spelling: "aplicar",
                        language: Language.Es
                    }
                },
                {
                    original: {
                        spelling: "education",
                        language: Language.En
                    },
                    translation: {
                        spelling: "educación",
                        language: Language.Es
                    }
                },
                {
                    original: {
                        spelling: "to go",
                        language: Language.En
                    },
                    translation: {
                        spelling: "ir",
                        language: Language.Es
                    }
                },
                {
                    original: {
                        spelling: "responsible",
                        language: Language.En
                    },
                    translation: {
                        spelling: "responsable",
                        language: Language.Es
                    }
                }
            ]
        }
    ];
}
