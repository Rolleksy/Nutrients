import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePanel } from './recipe-panel';

describe('RecipePanel', () => {
  let component: RecipePanel;
  let fixture: ComponentFixture<RecipePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
