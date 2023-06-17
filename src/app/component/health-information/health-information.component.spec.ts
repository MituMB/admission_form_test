import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInformationComponent } from './health-information.component';

describe('HealthInformationComponent', () => {
  let component: HealthInformationComponent;
  let fixture: ComponentFixture<HealthInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthInformationComponent]
    });
    fixture = TestBed.createComponent(HealthInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
