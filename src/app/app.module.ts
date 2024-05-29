import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from './shared-service';
import {MatToolbarModule} from '@angular/material/toolbar'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [{provide:MatDialogRef,useValue:{}},ApiserviceService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
