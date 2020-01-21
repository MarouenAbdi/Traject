import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUiComponent } from './view-ui.component';

describe('ViewUiComponent', () => {
  let component: ViewUiComponent;
  let fixture: ComponentFixture<ViewUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
