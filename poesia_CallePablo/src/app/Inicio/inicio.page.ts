import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { poesiasService } from '../services/poesia.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  poesias: Observable<any[]>;

  constructor(public poesiasService: poesiasService) { }

  ngOnInit() {

    this.poesias = this.poesiasService.getpoesias();
    console.log("ESTO RECIBE", this.poesias);
  }

}
