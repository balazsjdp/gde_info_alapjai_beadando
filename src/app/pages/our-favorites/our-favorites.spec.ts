import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFavorites } from './our-favorites';

describe('OurFavorites', () => {
  let component: OurFavorites;
  let fixture: ComponentFixture<OurFavorites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFavorites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFavorites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
