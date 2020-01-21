import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmHamburgerComponent } from './pm-hamburger.component';

describe('PmHamburgerComponent', () => {
  let component: PmHamburgerComponent;
  let fixture: ComponentFixture<PmHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
