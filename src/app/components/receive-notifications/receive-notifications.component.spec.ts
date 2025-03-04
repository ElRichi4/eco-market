import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveNotificationsComponent } from './receive-notifications.component';

describe('ReceiveNotificationsComponent', () => {
  let component: ReceiveNotificationsComponent;
  let fixture: ComponentFixture<ReceiveNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
