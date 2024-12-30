import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFooterInfoComponent } from './list-footer-info.component';

describe('ListFooterInfoComponent', () => {
  let component: ListFooterInfoComponent;
  let fixture: ComponentFixture<ListFooterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFooterInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFooterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
