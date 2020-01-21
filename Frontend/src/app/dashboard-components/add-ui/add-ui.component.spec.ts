import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUiComponent } from './add-ui.component';

describe('AddUiComponent', () => {
  let component: AddUiComponent;
  let fixture: ComponentFixture<AddUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
