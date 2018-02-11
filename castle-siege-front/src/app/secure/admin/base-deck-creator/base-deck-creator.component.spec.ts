import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeckCreatorComponent } from './base-deck-creator.component';

describe('BaseDeckCreatorComponent', () => {
  let component: BaseDeckCreatorComponent;
  let fixture: ComponentFixture<BaseDeckCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDeckCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDeckCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
