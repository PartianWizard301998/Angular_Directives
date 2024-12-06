import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGCLASSComponent } from './ng-class.component';

describe('NGCLASSComponent', () => {
  let component: NGCLASSComponent;
  let fixture: ComponentFixture<NGCLASSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGCLASSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NGCLASSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
