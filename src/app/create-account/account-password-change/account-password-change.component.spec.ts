import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPasswordChangeComponent } from './account-password-change.component';

describe('AccountPasswordChangeComponent', () => {
  let component: AccountPasswordChangeComponent;
  let fixture: ComponentFixture<AccountPasswordChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPasswordChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
