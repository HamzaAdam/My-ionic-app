import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroGuardPage } from './intro-guard.page';

describe('IntroGuardPage', () => {
  let component: IntroGuardPage;
  let fixture: ComponentFixture<IntroGuardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroGuardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroGuardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
