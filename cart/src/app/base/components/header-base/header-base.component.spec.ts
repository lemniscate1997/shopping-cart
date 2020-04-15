import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBaseComponent } from './header-base.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { customDateTime } from '../../custom-date-time';
import { BaseService } from '../../services/base.service';
import { MessageService } from 'primeng/api';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('HeaderBaseComponent', () => {
  let component: HeaderBaseComponent;
  let fixture: ComponentFixture<HeaderBaseComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBaseComponent, customDateTime],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ProgressBarModule,
        ModalModule.forRoot()
      ],
      providers: [BaseService, MessageService, BsModalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
