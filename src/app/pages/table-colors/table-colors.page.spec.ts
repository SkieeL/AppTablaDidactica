import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColorsPage } from './table-colors.page';

describe('TableColorsPage', () => {
  let component: TableColorsPage;
  let fixture: ComponentFixture<TableColorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
