import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ContainerComponent } from './components/container';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefComponent } from './components/chef/chef.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [ContainerComponent, PresentationComponent, SpecialsComponent, AboutComponent, MenuComponent, ChefComponent, ContactComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
