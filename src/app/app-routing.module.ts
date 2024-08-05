import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo: 'bienvenida',
  pathMatch: 'full'
},
{
  path: 'bienvenida',
  loadChildren: () => import('./views/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
},
{
  path: 'login',
  loadChildren: () => import('./views/login/login.module').then(m => m.LoginPageModule)
},
{
  path: 'home',
  loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
},
{
  path: 'reset-password',
  loadChildren: () => import('./views/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
},
// {
//   path: 'descargas',
//   loadChildren: () => import('./views/descarga/descarga.module').then( m => m.DescargaPageModule)
// },
{
  path: 'tareas',
  loadChildren: () => import('./views/tareas/tareas.module').then( m => m.TareasPageModule)
},
{
  path: 'videoteca',
  loadChildren: () => import('./views/videoteca/videoteca.module').then( m => m.VideotecaPageModule)
},
  {
    path: 'documentos',
    loadChildren: () => import('./views/descargas_tabs/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'formularios',
    loadChildren: () => import('./views/descargas_tabs/formularios/formularios.module').then( m => m.FormulariosPageModule)
  },
  {
    path: 'procesos',
    loadChildren: () => import('./views/descargas_tabs/procesos/procesos.module').then( m => m.ProcesosPageModule)
  },
  {
    path: 'descarga',
    loadChildren: () => import('./views/descarga/descarga.module').then( m => m.DescargaPageModule)
  },
  {
    path: 'prospeccion',
    loadChildren: () => import('./views/prospeccion/prospeccion.module').then( m => m.ProspeccionPageModule)
  },
  {
    path: 'listaprospectos',
    loadChildren: () => import('./views/prospeccion_tabs/listaprospectos/listaprospectos.module').then( m => m.ListaprospectosPageModule)
  },
  {
    path: 'misprospectos',
    loadChildren: () => import('./views/prospeccion_tabs/misprospectos/misprospectos.module').then( m => m.MisprospectosPageModule)
  },
  {
    path: 'operativa',
    loadChildren: () => import('./views/videoteca_tabs/operativa/operativa.module').then( m => m.OperativaPageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./views/videoteca_tabs/training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'generales',
    loadChildren: () => import('./views/videoteca_tabs/generales/generales.module').then( m => m.GeneralesPageModule)
  },
  {
    path: 'manuales',
    loadChildren: () => import('./views/videoteca_tabs/manuales/manuales.module').then( m => m.ManualesPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'activos',
    loadChildren: () => import('./views/clientes_tabs/activos/activos.module').then( m => m.ActivosPageModule)
  },
  {
    path: 'inactivos',
    loadChildren: () => import('./views/clientes_tabs/inactivos/inactivos.module').then( m => m.InactivosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./views/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./views/tickets/tickets.module').then( m => m.TicketsPageModule)
  },
  {
    path: 'ticketsgenerados',
    loadChildren: () => import('./views/tickets_tabs/ticketsgenerados/ticketsgenerados.module').then( m => m.TicketsgeneradosPageModule)
  },
  {
    path: 'ticketsasociados',
    loadChildren: () => import('./views/tickets_tabs/ticketsasociados/ticketsasociados.module').then( m => m.TicketsasociadosPageModule)
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
