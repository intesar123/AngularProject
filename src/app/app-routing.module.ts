import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCategoriesComponent } from './ResolverExample/get-categories/get-categories.component';
import { resolveCategoryResolver } from './ResolverExample/resolve-category.resolver';

const routes: Routes = [{path:'get_categories',component:GetCategoriesComponent,resolve: { categories: resolveCategoryResolver }}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
