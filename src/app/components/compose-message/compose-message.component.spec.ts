import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';

// import { NgForm } from '@angular/forms';
import { ComposeMessageComponent } from './compose-message.component';

import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('ComposeMessageComponent', () => {
  let component: ComposeMessageComponent;
  let fixture: ComponentFixture<ComposeMessageComponent>;

  beforeEach(async(() => {
    // const testForm = {
    //     value: {
    //         body: 'Hello',
    //         author: 'World'
    //     }
    // } as NgForm;
    // component.onSubmit(testForm);
    TestBed.configureTestingModule({
      declarations: [ ComposeMessageComponent ],
      imports: [ FormsModule ],
      providers: [ provideMockStore({}) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // tick();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
