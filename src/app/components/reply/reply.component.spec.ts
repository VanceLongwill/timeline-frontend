import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyComponent } from './reply.component';
import { Reply } from '../../models/reply.model';

describe('ReplyComponent', () => {
  @Component({
    selector: `app-host-component`,
    template: `<app-reply [reply]="input"></app-reply>`
  })
  class TestHostComponent {
    private input: Reply;
    constructor() {
      this.input = {
        id: 'd92d9d',
        parentId: 'd92d9df987',
        body: 'some message',
        author: 'some author',
        createdAt: new Date(),
      };
    }

    setInput(newInput: Reply) {
      this.input = newInput;
    }
  }
  let component: ReplyComponent;
  let fixture: ComponentFixture<ReplyComponent>;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });
});
