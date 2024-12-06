import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGCONTENTComponent } from './ng-content.component';

describe('NGCONTENTComponent', () => {
  let component: NGCONTENTComponent;
  let fixture: ComponentFixture<NGCONTENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGCONTENTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NGCONTENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
