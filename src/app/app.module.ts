import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { Routes, RouterModule } from '@angular/router'
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewContentComponent } from './new-content/new-content.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './add/add.component';
import { UploadComponent } from './upload/upload.component';
import { SaveComponent } from './save/save.component';
import {enableProdMode} from '@angular/core';
import { StatusComponent } from './status/status.component';
enableProdMode();


registerLocaleData(zh);
const routeConfig: Routes = [
  { path: '', component: MainComponent },
  {path:'add', component:NewContentComponent},
  {path:'todo/:id',component:TodoComponent},
  {path:'todo',component:TodoComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NewContentComponent,
    ListComponent,
    TodoComponent,
    AddComponent,
    UploadComponent,
    SaveComponent,
    StatusComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
