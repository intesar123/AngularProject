import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from './product.service';

export const resolveCategoryResolver: ResolveFn<Object> = (route, state) => {
  //const gameId = route.paramMap.get('id');
  return inject(ProductService).getCategories();
};
