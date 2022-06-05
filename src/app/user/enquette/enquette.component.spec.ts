import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetteComponent } from './enquette.component';

describe('EnquetteComponent', () => {
  let component: EnquetteComponent;
  let fixture: ComponentFixture<EnquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
