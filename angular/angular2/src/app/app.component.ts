import { Component } from "@angular/core";
import { NavLink } from "./app.interfaces";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "Learn Foreign Language";
    navLinks: NavLink[] = [
        { label: "Study", path: "/study" },
        { label: "Dictionary", path: "/dictionary" },
        { label: "Settings", path: "/settings" },
    ];
}
