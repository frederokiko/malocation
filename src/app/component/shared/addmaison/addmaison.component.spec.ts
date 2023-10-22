import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaisonComponent } from './addmaison.component';

describe('AddmaisonComponent', () => {
  let component: AddmaisonComponent;
  let fixture: ComponentFixture<AddmaisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmaisonComponent]
    });
    fixture = TestBed.createComponent(AddmaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
