import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenSliderComponent } from './fullscreen-slider.component';

describe('FullscreenSliderComponent', () => {
  let component: FullscreenSliderComponent;
  let fixture: ComponentFixture<FullscreenSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
