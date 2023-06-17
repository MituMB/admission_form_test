import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingInformationComponent } from './sibling-information.component';

describe('SiblingInformationComponent', () => {
  let component: SiblingInformationComponent;
  let fixture: ComponentFixture<SiblingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiblingInformationComponent]
    });
    fixture = TestBed.createComponent(SiblingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
