import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuinsideComponent } from './menuinside.component';

describe('MenuinsideComponent', () => {
  let component: MenuinsideComponent;
  let fixture: ComponentFixture<MenuinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuinsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
