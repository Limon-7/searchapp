/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonpObservableComponent } from './jsonp-observable.component';

describe('JsonpObservableComponent', () => {
  let component: JsonpObservableComponent;
  let fixture: ComponentFixture<JsonpObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
