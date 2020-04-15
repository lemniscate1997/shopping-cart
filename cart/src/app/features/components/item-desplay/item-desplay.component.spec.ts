import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDesplayComponent } from './item-desplay.component';

describe('ItemDesplayComponent', () => {
  let component: ItemDesplayComponent;
  let fixture: ComponentFixture<ItemDesplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDesplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDesplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
