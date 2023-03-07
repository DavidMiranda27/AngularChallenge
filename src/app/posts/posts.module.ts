import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TableModule,
    StyleClassModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
