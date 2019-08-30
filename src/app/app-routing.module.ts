import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { BooksComponent } from './componets/books/books.component';
import { MyBookComponent } from './componets/my-book/my-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
    data: {animation: 'Dashboard'},
  },
  { path: 'navigation', component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent,
        data: {animation: 'Books'},
      },
      { path: 'my-book', component: MyBookComponent,
        data: {animation: 'MyBook'},
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
