import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio-poesias', icon: 'mail' },
    { title: 'Login', url: '/login', icon: 'paper-plane' },
    { title: 'Registrar Usuario', url: '/registrar', icon: 'heart' },
    { title: 'Registrar Poema', url: '/registrar-poesia', icon: 'archive' },
   /* { title: 'PoesiaP', url: '/poesias-privada', icon: 'trash' },*/
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
