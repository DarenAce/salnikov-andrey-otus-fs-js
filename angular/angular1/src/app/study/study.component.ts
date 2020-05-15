import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-study",
    templateUrl: "./study.component.html",
    styleUrls: ["./study.component.css"]
})
export class StudyComponent {
    wordToTranslate: string = "Translate it!";
    translation: string = "";

    onSubmit(form: NgForm) {
      console.log(this.translation);
    }
}
