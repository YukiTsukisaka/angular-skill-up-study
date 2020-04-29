import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component'

/** ルーティング */
const routes: Routes = [
  /** [http://localhost:4200/basic]でAngular基本ページに遷移 */
  { path: 'basic', component: BasicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
