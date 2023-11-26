import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRootComponent } from './home-root.component';

describe('HomeRootComponent', () => {
  let component: HomeRootComponent;
  let fixture: ComponentFixture<HomeRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRootComponent]
    });
    fixture = TestBed.createComponent(HomeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
