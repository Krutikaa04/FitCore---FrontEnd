import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPgComponent } from './registration-pg.component';

describe('RegistrationPgComponent', () => {
  let component: RegistrationPgComponent;
  let fixture: ComponentFixture<RegistrationPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
