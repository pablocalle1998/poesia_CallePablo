import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioPoesiasPage } from './inicio-poesias.page';

describe('InicioPoesiasPage', () => {
  let component: InicioPoesiasPage;
  let fixture: ComponentFixture<InicioPoesiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPoesiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPoesiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
