import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideContentsComponent } from './guide-contents.component';

describe('GuideContentsComponent', () => {
  let component: GuideContentsComponent;
  let fixture: ComponentFixture<GuideContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
