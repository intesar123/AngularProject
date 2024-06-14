import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolveCategoryResolver } from './resolve-category.resolver';

describe('resolveCategoryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => resolveCategoryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
