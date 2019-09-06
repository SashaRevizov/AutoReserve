/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AceptComponent } from './acept.component';

describe('AceptComponent', () => {
  let component: AceptComponent;
  let fixture: ComponentFixture<AceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
