import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBooksComponent } from './price-books.component';

describe('PriceBooksComponent', () => {
  let component: PriceBooksComponent;
  let fixture: ComponentFixture<PriceBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
