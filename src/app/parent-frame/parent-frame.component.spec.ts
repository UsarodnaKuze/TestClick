import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFrameComponent } from './parent-frame.component';

describe('ParentFrameComponent', () => {
  let component: ParentFrameComponent;
  let fixture: ComponentFixture<ParentFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
