import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudrasComponent } from './mudras.component';

describe('MudrasComponent', () => {
  let component: MudrasComponent;
  let fixture: ComponentFixture<MudrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
