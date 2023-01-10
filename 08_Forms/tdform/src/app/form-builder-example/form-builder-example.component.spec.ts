import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderExampleComponent } from './form-builder-example.component';

describe('FormBuilderExampleComponent', () => {
  let component: FormBuilderExampleComponent;
  let fixture: ComponentFixture<FormBuilderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
