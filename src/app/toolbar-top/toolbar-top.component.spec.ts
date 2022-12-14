import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTopComponent } from './toolbar-top.component';

describe('ToolbarTopComponent', () => {
  let component: ToolbarTopComponent;
  let fixture: ComponentFixture<ToolbarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
