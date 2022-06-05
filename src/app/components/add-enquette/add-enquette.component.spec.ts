import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnquetteComponent } from './add-enquette.component';

describe('AddEnquetteComponent', () => {
  let component: AddEnquetteComponent;
  let fixture: ComponentFixture<AddEnquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnquetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
