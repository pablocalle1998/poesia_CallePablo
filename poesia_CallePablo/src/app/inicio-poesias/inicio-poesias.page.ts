import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComentarioService } from '../services/comentario.service';
import { PoesiaService } from '../services/poesia.service';

@Component({
  selector: 'app-inicio-poesias',
  templateUrl: './inicio-poesias.page.html',
  styleUrls: ['./inicio-poesias.page.scss'],
})
export class InicioPoesiasPage implements OnInit {
  poesias: Observable<any[]>;
  comentarios: Observable<any[]>;
  
  constructor(public poesiasService: PoesiaService, public comentarioService: ComentarioService) { }

  ngOnInit() {
    this.poesias = this.poesiasService.getPoesias();
    this.comentarios= this.comentarioService.getComentarios();
  }

}
