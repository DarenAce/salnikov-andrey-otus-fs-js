import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingsComponent } from "./settings.component";
import { StorageService } from "../storage.service";
import { TranslationDirection, AppSettings } from "../app.interfaces";

describe("SettingsComponent", () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;
    let storageServiceSpy: jasmine.SpyObj<StorageService>;
    let storageServiceStub: Partial<AppSettings>;

    beforeEach(async(() => {
        storageServiceStub = {
            numberOfQuestions: 1,
            secondsPerQuestion: 1,
            translationDirection: TranslationDirection.EnToRu,
        };

        const spy = jasmine.createSpyObj("StorageService", ["getSettings"]);
        const getSettingsSpy = spy.getSettings.and.returnValue(
            storageServiceStub
        );

        TestBed.configureTestingModule({
            declarations: [SettingsComponent],
            providers: [{ provide: StorageService, useValue: spy }],
        }).compileComponents();

        storageServiceSpy = TestBed.inject(StorageService) as jasmine.SpyObj<
            StorageService
        >;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a button to save settings", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".save-button").innerText).toEqual("Save");
    });

    it("should have a button to reset settings", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".reset-button").innerText).toEqual("Reset");
    });
});
