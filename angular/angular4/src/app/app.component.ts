import { Component } from "@angular/core";
import { NavLink } from "./app.interfaces";
import { navLinks } from "./app.config";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "Learn Foreign Language";
    navLinks: NavLink[] = navLinks;
}
