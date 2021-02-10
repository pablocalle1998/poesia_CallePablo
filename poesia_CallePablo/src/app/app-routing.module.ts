import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-poesias',
    loadChildren: () => import('./inicio-poesias/inicio-poesias.module').then( m => m.InicioPoesiasPageModule)
  },
  {
    path: 'registrar-poesia',
    loadChildren: () => import('./registrar-poesia/registrar-poesia.module').then( m => m.RegistrarPoesiaPageModule)
  },
  {
    path: 'poesias-privada',
    loadChildren: () => import('./poesias-privada/poesias-privada.module').then( m => m.PoesiasPrivadaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
