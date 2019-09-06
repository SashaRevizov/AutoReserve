/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DostavkaComponent } from './dostavka.component';

describe('DostavkaComponent', () => {
  let component: DostavkaComponent;
  let fixture: ComponentFixture<DostavkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DostavkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DostavkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
