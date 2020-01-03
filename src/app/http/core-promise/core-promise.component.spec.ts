/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorePromiseComponent } from './core-promise.component';

describe('CorePromiseComponent', () => {
  let component: CorePromiseComponent;
  let fixture: ComponentFixture<CorePromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorePromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
