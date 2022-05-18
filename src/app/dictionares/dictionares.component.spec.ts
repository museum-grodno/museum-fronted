import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaresComponent } from './dictionares.component';

describe('DictionaresComponent', () => {
  let component: DictionaresComponent;
  let fixture: ComponentFixture<DictionaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
