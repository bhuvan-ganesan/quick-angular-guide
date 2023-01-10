import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExampleComponent } from './reactive-form-example.component';

describe('ReactiveFormExampleComponent', () => {
  let component: ReactiveFormExampleComponent;
  let fixture: ComponentFixture<ReactiveFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
