import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPassportComponent } from './upload-passport.component';

describe('UploadPassportComponent', () => {
  let component: UploadPassportComponent;
  let fixture: ComponentFixture<UploadPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
