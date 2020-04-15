import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBarComponent } from './side-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseService } from '../../services/base.service';

describe('SideNavBarComponent', () => {
  let component: SideNavBarComponent;
  let fixture: ComponentFixture<SideNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavBarComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [BaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
