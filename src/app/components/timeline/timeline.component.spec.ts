import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';

import { TimelineComponent } from './timeline.component';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [ provideMockStore({}) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a loading message', () => {
    component.isLoadingMessages = new Observable(observer => {
      observer.next(true);
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').innerText).toContain('Loading');
  });
});
