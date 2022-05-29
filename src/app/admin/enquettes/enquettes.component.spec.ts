import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquettesComponent } from './enquettes.component';

describe('EnquettesComponent', () => {
  let component: EnquettesComponent;
  let fixture: ComponentFixture<EnquettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
