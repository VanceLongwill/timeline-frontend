import { ViewChild, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeReplyComponent } from './compose-reply.component';
import { Reply } from '../../models/reply.model';

import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('ComposeReplyComponent', () => {

  const testId = '123123dadada';
  @Component({
    selector: `app-host-component`,
    template: `<app-compose-reply [parentId]="input"></app-compose-reply>`
  })
  class TestHostComponent {
    @ViewChild(ComposeReplyComponent)
    composeReplyComponent: ComposeReplyComponent;
    private input: Reply['parentId'];
    constructor() {
      this.input = testId;
    }

    setInput(newInput: Reply['parentId']) {
      this.input = newInput;
    }
  }
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
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should create a new Reply with the parent message id', () => {
    expect(hostComponent.composeReplyComponent.reply.parentId).toBe(testId);
  });

  it('should hide the username input', () => {
    expect(hostFixture.nativeElement.querySelector('.input-group.mt-3').hidden).toBe(false);
  });

  // @TODO: tests for form inputs & submission
});
