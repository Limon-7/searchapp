/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreObservableComponent } from './core-observable.component';

describe('CoreObservableComponent', () => {
  let component: CoreObservableComponent;
  let fixture: ComponentFixture<CoreObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
