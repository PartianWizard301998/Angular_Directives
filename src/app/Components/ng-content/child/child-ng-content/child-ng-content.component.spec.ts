import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHILDNGCONTENTComponent } from './child-ng-content.component';

describe('CHILDNGCONTENTComponent', () => {
  let component: CHILDNGCONTENTComponent;
  let fixture: ComponentFixture<CHILDNGCONTENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CHILDNGCONTENTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CHILDNGCONTENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
