import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MaterialhelperComponent } from "./materialhelper/materialhelper.component";

const APP_ROUTE: Routes = [
  {
    path: ' ',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'material-helper',
    component: MaterialhelperComponent,
  }
];

export const routerConfig = RouterModule.forRoot(APP_ROUTE);
