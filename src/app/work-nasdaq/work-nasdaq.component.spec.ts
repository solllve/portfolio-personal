import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkNasdaqComponent } from './work-nasdaq.component';

describe('WorkNasdaqComponent', () => {
  let component: WorkNasdaqComponent;
  let fixture: ComponentFixture<WorkNasdaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkNasdaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkNasdaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
