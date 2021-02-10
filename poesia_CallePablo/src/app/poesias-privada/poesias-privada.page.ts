import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../model/Comentario';
import { ComentarioService } from '../services/comentario.service';
import { PoesiaService } from '../services/poesia.service';

@Component({
  selector: 'app-poesias-privada',
  templateUrl: './poesias-privada.page.html',
  styleUrls: ['./poesias-privada.page.scss'],
})
export class PoesiasPrivadaPage implements OnInit {
  poesias: Observable<any[]>;
  constructor(public poesiasService: PoesiaService, public comentarioService: ComentarioService) { }
  comentario: Comentario = new Comentario();
  ngOnInit() {
    this.poesias = this.poesiasService.getPoesias();
  }

  guardarComentario(){
    this.comentarioService.saveComentarios(this.comentario);
    this.comentario= new Comentario();
  }

}
