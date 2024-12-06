import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGTEMPLATEComponent } from './ng-template.component';

describe('NGTEMPLATEComponent', () => {
  let component: NGTEMPLATEComponent;
  let fixture: ComponentFixture<NGTEMPLATEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGTEMPLATEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NGTEMPLATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
