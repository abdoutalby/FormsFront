import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnqUserComponent } from './add-enq-user.component';

describe('AddEnqUserComponent', () => {
  let component: AddEnqUserComponent;
  let fixture: ComponentFixture<AddEnqUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnqUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnqUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
