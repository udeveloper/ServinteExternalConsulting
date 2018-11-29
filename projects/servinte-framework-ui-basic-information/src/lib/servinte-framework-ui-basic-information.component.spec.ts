import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServinteFrameworkUiBasicInformationComponent } from './servinte-framework-ui-basic-information.component';

describe('ServinteFrameworkUiBasicInformationComponent', () => {
  let component: ServinteFrameworkUiBasicInformationComponent;
  let fixture: ComponentFixture<ServinteFrameworkUiBasicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServinteFrameworkUiBasicInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServinteFrameworkUiBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
