import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BlogComponent } from './blog/blog.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'megamenu', component: MegamenuComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
