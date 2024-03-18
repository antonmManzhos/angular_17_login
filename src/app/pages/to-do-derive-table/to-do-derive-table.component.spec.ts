import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDeriveTableComponent } from './to-do-derive-table.component';

describe('ToDoDeriveTableComponent', () => {
  let component: ToDoDeriveTableComponent;
  let fixture: ComponentFixture<ToDoDeriveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDeriveTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoDeriveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
