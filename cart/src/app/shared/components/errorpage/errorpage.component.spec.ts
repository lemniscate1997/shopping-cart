import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpageComponent } from './errorpage.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorpageComponent', () => {
  let component: ErrorpageComponent;
  let fixture: ComponentFixture<ErrorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorpageComponent ],
      imports : [
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
