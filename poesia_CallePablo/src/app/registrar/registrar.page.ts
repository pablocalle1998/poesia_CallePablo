import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(public usuarioService: UsuarioService) { }
  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  guardarUsuario(){
    this.usuarioService.saveUsuario(this.usuario);
    this.usuario= new Usuario();
  }

}
