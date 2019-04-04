import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeReplyComponent } from './compose-reply.component';

describe('ComposeReplyComponent', () => {
  let component: ComposeReplyComponent;
  let fixture: ComponentFixture<ComposeReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
