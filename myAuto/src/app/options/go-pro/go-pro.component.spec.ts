/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoProComponent } from './go-pro.component';

describe('GoProComponent', () => {
  let component: GoProComponent;
  let fixture: ComponentFixture<GoProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
