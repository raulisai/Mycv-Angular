import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndPhilosofhyComponent } from './home-and-philosofhy.component';

describe('HomeAndPhilosofhyComponent', () => {
  let component: HomeAndPhilosofhyComponent;
  let fixture: ComponentFixture<HomeAndPhilosofhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAndPhilosofhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndPhilosofhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
