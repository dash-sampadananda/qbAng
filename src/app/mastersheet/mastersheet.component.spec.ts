import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersheetComponent } from './mastersheet.component';

describe('MastersheetComponent', () => {
  let component: MastersheetComponent;
  let fixture: ComponentFixture<MastersheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
