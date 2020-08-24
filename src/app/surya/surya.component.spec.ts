import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuryaComponent } from './surya.component';

describe('SuryaComponent', () => {
  let component: SuryaComponent;
  let fixture: ComponentFixture<SuryaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuryaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
