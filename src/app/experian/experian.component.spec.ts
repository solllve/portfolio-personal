import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianComponent } from './experian.component';

describe('ExperianComponent', () => {
  let component: ExperianComponent;
  let fixture: ComponentFixture<ExperianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
