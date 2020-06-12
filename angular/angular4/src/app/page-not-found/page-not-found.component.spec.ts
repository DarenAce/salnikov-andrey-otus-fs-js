import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageNotFoundComponent } from "./page-not-found.component";

describe("PageNotFoundComponent", () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a text 'It seems like this page doesn't exist!'", () => {
        const compiled = fixture.nativeElement;
        const notFoundText = "It seems like this page doesn't exist!";
        expect(compiled.innerText).toEqual(notFoundText);
    });
});
