import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansInformationComponent } from './guardians-information.component';

describe('GuardiansInformationComponent', () => {
  let component: GuardiansInformationComponent;
  let fixture: ComponentFixture<GuardiansInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardiansInformationComponent]
    });
    fixture = TestBed.createComponent(GuardiansInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
