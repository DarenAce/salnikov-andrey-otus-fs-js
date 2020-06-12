import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StudyComponent } from "./study.component";

describe("StudyComponent", () => {
    let component: StudyComponent;
    let fixture: ComponentFixture<StudyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudyComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StudyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a button to start a game", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".play-button").innerText).toEqual("Play!");
    });
});
