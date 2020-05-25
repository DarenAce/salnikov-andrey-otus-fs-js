import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { navLinks } from "./app.config";
import { StudyComponent } from "./study/study.component";
import { DictionaryComponent } from "./dictionary/dictionary.component";
import { SettingsComponent } from "./settings/settings.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: navLinks[0].path,
    component: StudyComponent
  },
  {
    path: navLinks[1].path,
    component: DictionaryComponent
  },
  {
    path: navLinks[2].path,
    component: SettingsComponent
  },
  {
    path: "",
    redirectTo: navLinks[0].path,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
