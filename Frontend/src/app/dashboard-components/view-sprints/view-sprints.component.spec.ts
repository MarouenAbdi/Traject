import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSprintsComponent } from './view-sprints.component';

describe('ViewSprintsComponent', () => {
  let component: ViewSprintsComponent;
  let fixture: ComponentFixture<ViewSprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
