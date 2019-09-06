/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrendaComponent } from './orenda.component';

describe('OrendaComponent', () => {
  let component: OrendaComponent;
  let fixture: ComponentFixture<OrendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
