/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KievComponent } from './kiev.component';

describe('KievComponent', () => {
  let component: KievComponent;
  let fixture: ComponentFixture<KievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
