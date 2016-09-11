import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent }   from './product.component';
import { ContactComponent }  from './contact.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);