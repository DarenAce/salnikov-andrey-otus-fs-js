import {
    TranslationDirection,
    NumberSelectValue,
    TranslationDirectionSelectValue,
    NavLink,
} from "./app.interfaces";

export const translationDirections: TranslationDirectionSelectValue[] = [
    {
        label: "English — Russian",
        value: TranslationDirection.EnToRu,
    },
    {
        label: "Russian — English",
        value: TranslationDirection.RuToEn,
    },
    {
        label: "English — Spanish",
        value: TranslationDirection.EnToEs,
    },
    {
        label: "Spanish — English",
        value: TranslationDirection.EsToEn,
    },
];

export const numbersOfQuestions: NumberSelectValue[] = [
    {
        label: "5",
        value: 5,
    },
    {
        label: "10",
        value: 10,
    },
    {
        label: "20",
        value: 20,
    },
    {
        label: "50",
        value: 50,
    },
];

export const secondsPerQuestion: NumberSelectValue[] = [
    {
        label: "10 sec",
        value: 10,
    },
    {
        label: "30 sec",
        value: 30,
    },
    {
        label: "1 min",
        value: 60,
    },
];

const appLocalStorageKeyPrefix = "learnLanguagesApp";

export const localStorageWordListKey = appLocalStorageKeyPrefix + ".words";

export const localStorageSettingsKey = appLocalStorageKeyPrefix + ".settings";

export const navLinks: NavLink[] = [
    { label: "Study", path: "study" },
    { label: "Dictionary", path: "dictionary" },
    { label: "Settings", path: "settings" },
];
