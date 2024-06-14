import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeTestComponent } from './async-pipe-test.component';

describe('AsyncPipeTestComponent', () => {
  let component: AsyncPipeTestComponent;
  let fixture: ComponentFixture<AsyncPipeTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPipeTestComponent]
    });
    fixture = TestBed.createComponent(AsyncPipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
