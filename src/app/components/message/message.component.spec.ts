import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { Message } from '../../models/message.model';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('MessageComponent', () => {
  @Component({
    selector: `app-host-component`,
    template: `<app-message [msg]="input"></app-message>`
  })
  class TestHostComponent {
    private input: Message;
    constructor() {
      this.input = {
        id: 'd92d9d',
        body: 'some message',
        author: 'some author',
        createdAt: new Date(),
      };
    }

    setInput(newInput: Message) {
      this.input = newInput;
    }
  }
  // let component: MessageComponent;
  // let fixture: ComponentFixture<MessageComponent>;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent, TestHostComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [ provideMockStore({}) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(MessageComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  // it('should')
  /*
    hostComponent.setInput({
      id: 'd92d9d',
      body: 'some message',
      author: 'some author',
      createdAt: new Date(),
    });
    */
});
