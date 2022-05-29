import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from '../../componentes/chat/chat.component';
import { ArraySortPipe } from '../../pipes/array-sort.pipe';
import { FormsModule } from '@angular/forms';
import { TiempoDesdeAhoraPipe } from '../../pipes/tiempo-desde-ahora.pipe';


@NgModule({
  declarations: [
    ChatComponent,
    ArraySortPipe,
    TiempoDesdeAhoraPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
