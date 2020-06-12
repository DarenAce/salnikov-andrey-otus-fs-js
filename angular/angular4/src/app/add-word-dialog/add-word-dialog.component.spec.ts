import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddWordDialogComponent } from "./add-word-dialog.component";
import { TranslationService } from "../translation.service";

describe("AddWordDialogComponent", () => {
    let component: AddWordDialogComponent;
    let fixture: ComponentFixture<AddWordDialogComponent>;
    let translationServiceSpy: jasmine.SpyObj<TranslationService>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj("TranslationService", ["translate"]);

        TestBed.configureTestingModule({
            declarations: [AddWordDialogComponent],
            providers: [{ provide: TranslationService, useValue: spy }],
            imports: [MatSnackBarModule],
        }).compileComponents();

        translationServiceSpy = TestBed.inject(
            TranslationService
        ) as jasmine.SpyObj<TranslationService>;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddWordDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a button to translate a word", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".translate-button").innerText).toEqual("Translate");
    });

    it("should have a button to add a word", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".add-button").innerText).toEqual("Add");
    });
});
