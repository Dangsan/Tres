import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoSearchComponent } from './no-search/no-search.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{path:'nosearch', component:NoSearchComponent},
                        {path:'search',component:SearchComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
