import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeManageRoutes } from './home-manage.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroManageComponent } from './hero-manage/hero-manage.component';
import { ZorroModule } from 'src/app/zorro/zorro.module';

@NgModule({
  imports: [
    CommonModule,
    HomeManageRoutes,
    ZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HeroManageComponent]
})
export class HomeManageModule { }
