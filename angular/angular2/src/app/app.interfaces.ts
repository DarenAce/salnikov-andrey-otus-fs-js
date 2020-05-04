export enum Language {
    En = "en",
    Ru = "ru",
    Es = "es",
}

export enum TranslationDirection {
    EnToRu = "en-ru",
    RuToEn = "ru-en",
    EnToEs = "en-es",
    EsToEn = "es-en",
}

export interface Word {
    language: Language;
    spelling: string;
}

export interface WordPair {
    added: Date;
    original: Word;
    translation: Word;
}

export interface WordPairsByAdditionDate {
    added: Date;
    wordPairs: WordPair[];
}

export interface NumberSelectValue {
    label: string;
    value: number;
}

export interface TranslationDirectionSelectValue {
    label: string;
    value: TranslationDirection;
}

export interface ApiResponse {
    code: number;
    lang: string;
    text: string[];
}

export interface AppSettings {
    numberOfQuestions: number;
    secondsPerQuestion: number;
    translationDirection: TranslationDirection;
}

export interface NavLink {
    label: string;
    path: string;
}
