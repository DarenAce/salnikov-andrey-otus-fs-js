import { translationDirectionToLanguagePair } from "./app.utils";
import { TranslationDirection, Language } from "./app.interfaces";

describe("Utils", () => {
    it("should transform translation direction to language pair", () => {
        const testTranslationFirection: TranslationDirection =
            TranslationDirection.EnToRu;
        const testLanguagePair: Language[] = [Language.En, Language.Ru];
        const result = translationDirectionToLanguagePair(testTranslationFirection);
        expect(result).toEqual(testLanguagePair);
    });
});
