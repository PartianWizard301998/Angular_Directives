import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGCONTAINERComponent } from './ng-container.component';

describe('NGCONTAINERComponent', () => {
  let component: NGCONTAINERComponent;
  let fixture: ComponentFixture<NGCONTAINERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGCONTAINERComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NGCONTAINERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
