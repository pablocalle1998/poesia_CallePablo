import { Component, OnInit } from '@angular/core';
import { poesia } from '../model/poesia';
import { poesiasService } from '../services/poesia.service';

@Component({
  selector: 'app-crear-poesia',
  templateUrl: './crear-poesia.page.html',
  styleUrls: ['./crear-poesia.page.scss'],
})
export class CrearpoesiaPage implements OnInit {

  poesia: poesia = new poesia();

  constructor(public poesiasService: poesiasService) { }

  ngOnInit() {
  }

  guardarpoesia(){

    console.log(this.poesia);

    this.poesiasService.savepoesia(this.poesia);

    
  }

}
