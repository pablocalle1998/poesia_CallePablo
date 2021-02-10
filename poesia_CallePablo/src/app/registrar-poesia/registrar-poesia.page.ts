import { Component, OnInit } from '@angular/core';
import { Poesia } from '../model/Poesia';
import { PoesiaService } from '../services/poesia.service';

@Component({
  selector: 'app-registrar-poesia',
  templateUrl: './registrar-poesia.page.html',
  styleUrls: ['./registrar-poesia.page.scss'],
})
export class RegistrarPoesiaPage implements OnInit {

  constructor(public poesiaService: PoesiaService) { }
  poesia: Poesia = new Poesia();

  ngOnInit() {
  }

  guardarPoesia(){
    this.poesiaService.savePoesias(this.poesia);
    this.poesia = new Poesia();
  }

}
