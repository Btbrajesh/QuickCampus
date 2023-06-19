import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusWalkinComponent } from './campus-walkin.component';

describe('CampusWalkinComponent', () => {
  let component: CampusWalkinComponent;
  let fixture: ComponentFixture<CampusWalkinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusWalkinComponent]
    });
    fixture = TestBed.createComponent(CampusWalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
