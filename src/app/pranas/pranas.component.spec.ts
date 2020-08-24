import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PranasComponent } from './pranas.component';

describe('PranasComponent', () => {
  let component: PranasComponent;
  let fixture: ComponentFixture<PranasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
