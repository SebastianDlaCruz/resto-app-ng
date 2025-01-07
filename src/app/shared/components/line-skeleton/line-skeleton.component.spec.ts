import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSkeletonComponent } from './line-skeleton.component';

describe('LineSkeletonComponent', () => {
  let component: LineSkeletonComponent;
  let fixture: ComponentFixture<LineSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
