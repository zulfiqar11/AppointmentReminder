import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderDetailComponent } from './reminder-detail.component';

describe('ReminderDetailComponent', () => {
  let component: ReminderDetailComponent;
  let fixture: ComponentFixture<ReminderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
