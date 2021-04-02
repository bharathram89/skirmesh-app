import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePlayerComponent } from './secure-player.component';

describe('SecurePlayerComponent', () => {
  let component: SecurePlayerComponent;
  let fixture: ComponentFixture<SecurePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
