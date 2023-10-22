import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgarageComponent } from './addgarage.component';

describe('AddgarageComponent', () => {
  let component: AddgarageComponent;
  let fixture: ComponentFixture<AddgarageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddgarageComponent]
    });
    fixture = TestBed.createComponent(AddgarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
