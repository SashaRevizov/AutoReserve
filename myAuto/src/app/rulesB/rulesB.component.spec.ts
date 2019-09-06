/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RulesBComponent } from './rulesB.component';

describe('RulesBComponent', () => {
  let component: RulesBComponent;
  let fixture: ComponentFixture<RulesBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
