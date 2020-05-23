import { Language, TranslationDirection } from "./app.interfaces";

export const translationDirectionToLanguagePair = (
    direction: TranslationDirection
): Language[] => 
    direction
        .split("-")
        .map(
            (language: string) =>
                Language[language.slice(0, 1).toUpperCase() + language.slice(1)]
        );
