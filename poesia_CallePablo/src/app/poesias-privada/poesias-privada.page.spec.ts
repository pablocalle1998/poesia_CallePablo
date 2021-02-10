import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoesiasPrivadaPage } from './poesias-privada.page';

describe('PoesiasPrivadaPage', () => {
  let component: PoesiasPrivadaPage;
  let fixture: ComponentFixture<PoesiasPrivadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoesiasPrivadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoesiasPrivadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
