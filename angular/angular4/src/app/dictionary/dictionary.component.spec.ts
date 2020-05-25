import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DictionaryComponent } from "./dictionary.component";
import { AddWordDialogComponent } from "../add-word-dialog/add-word-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { StorageService } from "../storage.service";
import { WordPair, Language } from "../app.interfaces";

describe("DictionaryComponent", () => {
    let component: DictionaryComponent;
    let fixture: ComponentFixture<DictionaryComponent>;
    let storageServiceSpy: jasmine.SpyObj<StorageService>;
    let storageServiceStub: Partial<WordPair[]>;

    beforeEach(async(() => {
        storageServiceStub = [
            {
                added: new Date(),
                original: {
                    language: Language.En,
                    spelling: "test",
                },
                translation: {
                    language: Language.Ru,
                    spelling: "тест",
                },
            },
        ];

        const spy = jasmine.createSpyObj("StorageService", ["getWords"]);
        const getWordsSpy = spy.getWords.and.returnValue(storageServiceStub);

        TestBed.configureTestingModule({
            declarations: [DictionaryComponent],
            providers: [
                AddWordDialogComponent,
                { provide: StorageService, useValue: spy },
            ],
            imports: [MatDialogModule],
        }).compileComponents();

        storageServiceSpy = TestBed.inject(StorageService) as jasmine.SpyObj<
            StorageService
        >;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DictionaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a button to add new word pair", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".add-new-button").innerText).toEqual("Add new word pair");
    });
});
