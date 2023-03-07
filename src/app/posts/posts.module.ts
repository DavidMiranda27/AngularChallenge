import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostsComponent } from './posts.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {StyleClassModule} from 'primeng/styleclass';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    TableModule,
    StyleClassModule,
    DialogModule,
    InputTextModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
