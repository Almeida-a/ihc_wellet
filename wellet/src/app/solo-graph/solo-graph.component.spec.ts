import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloGraphComponent } from './solo-graph.component';

describe('SoloGraphComponent', () => {
  let component: SoloGraphComponent;
  let fixture: ComponentFixture<SoloGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
