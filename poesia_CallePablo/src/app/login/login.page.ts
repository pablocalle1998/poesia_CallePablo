import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public usuarioService: UsuarioService) { }
  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  compararUsuario(){
    
  }
}
