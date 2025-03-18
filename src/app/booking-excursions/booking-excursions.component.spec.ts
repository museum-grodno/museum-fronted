import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingExcursionsComponent } from './booking-excursions.component';

describe('BookingExcursionsComponent', () => {
  let component: BookingExcursionsComponent;
  let fixture: ComponentFixture<BookingExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingExcursionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
