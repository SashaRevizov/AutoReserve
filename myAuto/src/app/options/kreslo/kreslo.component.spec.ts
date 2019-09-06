/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KresloComponent } from './kreslo.component';

describe('KresloComponent', () => {
  let component: KresloComponent;
  let fixture: ComponentFixture<KresloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KresloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KresloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
