import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeReplyComponent } from './compose-reply.component';
import { Reply } from '../../models/reply.model';

import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('ComposeReplyComponent', () => {
  @Component({
    selector: `app-host-component`,
    template: `<app-compose-reply [parentId]="input"></app-compose-reply>`
  })
  class TestHostComponent {
    private input: Reply['parentId'];
    constructor() {
      this.input = 'asdasdasd';
    }

    setInput(newInput: Reply['parentId']) {
      this.input = newInput;
    }
  }
  let component: ComposeReplyComponent;
  let fixture: ComponentFixture<ComposeReplyComponent>;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeReplyComponent, TestHostComponent ],
      imports: [ FormsModule ],
      providers: [ provideMockStore({}) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ComposeReplyComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });
});
