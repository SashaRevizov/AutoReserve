/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PomoshchVDorogeComponent } from './pomoshch-v-doroge.component';

describe('PomoshchVDorogeComponent', () => {
  let component: PomoshchVDorogeComponent;
  let fixture: ComponentFixture<PomoshchVDorogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomoshchVDorogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomoshchVDorogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
