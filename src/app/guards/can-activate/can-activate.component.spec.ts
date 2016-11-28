/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CanActivateComponent } from './can-activate.component';

describe('CanActivateComponent', () => {
  let component: CanActivateComponent;
  let fixture: ComponentFixture<CanActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanActivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
