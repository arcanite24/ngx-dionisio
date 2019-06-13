import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDionisioComponent } from './ngx-dionisio.component';

describe('NgxDionisioComponent', () => {
  let component: NgxDionisioComponent;
  let fixture: ComponentFixture<NgxDionisioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDionisioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDionisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
