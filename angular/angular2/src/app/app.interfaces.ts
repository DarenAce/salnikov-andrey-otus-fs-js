export enum Language {
    En = "eng",
    Ru = "rus",
    Es = "spa"
}

export enum TranslationDirection {
    EnToRu = "engToRus",
    RuToEn = "rusToEng",
    EnToEs = "engToSpa",
    EsToEn = "spaToEng"
}

export interface NavLink {
    label: string;
    path: string;
}

export interface Word {
    language: Language;
    spelling: string;
}

export interface WordPair {
    original: Word;
    translation: Word;
}

export interface WordPairsByAdditionDate {
    added: Date;
    wordPairs: WordPair[];
}

export interface StringSelectValue {
    label: string;
    value: string;
}

export interface NumberSelectValue {
    label: string;
    value: number;
}
