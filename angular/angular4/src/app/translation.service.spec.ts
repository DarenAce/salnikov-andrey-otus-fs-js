import { TranslationService } from "./translation.service";
import {
    TranslationDirection,
    WordPair,
    Language,
    ApiResponse,
} from "./app.interfaces";
import { of } from "rxjs";

describe("Translation Service", () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: TranslationService;

    const testWord: string = "test";
    const testTranslation: string = "тест";
    const testTranslationDirection: TranslationDirection =
        TranslationDirection.EnToRu;
    const testWordPair: WordPair = {
        added: new Date(),
        original: {
            language: Language.En,
            spelling: testWord,
        },
        translation: {
            language: Language.Ru,
            spelling: testTranslation,
        },
    };
    const testResponse: ApiResponse = {
        code: 200,
        lang: "en-ru",
        text: [testTranslation],
    };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
        httpClientSpy.get.and.returnValue(of(testResponse));
        service = new TranslationService(<any>httpClientSpy);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should translate a word", () => {
        service
            .translate(testWord, testTranslationDirection)
            .subscribe((translation) => {
                expect(translation.original).toEqual(testWordPair.original);
                expect(translation.translation).toEqual(testWordPair.translation);
            });
        expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
});
