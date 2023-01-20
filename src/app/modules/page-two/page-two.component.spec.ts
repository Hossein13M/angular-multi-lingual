import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
