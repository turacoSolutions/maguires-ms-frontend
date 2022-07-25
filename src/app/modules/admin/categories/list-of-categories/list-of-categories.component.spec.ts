import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCategoriesComponent } from './list-of-categories.component';

describe('ListOfCategoriesComponent', () => {
  let component: ListOfCategoriesComponent;
  let fixture: ComponentFixture<ListOfCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
