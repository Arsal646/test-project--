import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('../main/main.routes').then((m) => m.MAIN_ROUTES),
  },
];
