import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNumbersPage } from './table-numbers.page';

describe('TableNumbersPage', () => {
  let component: TableNumbersPage;
  let fixture: ComponentFixture<TableNumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNumbersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
