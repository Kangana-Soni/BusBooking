import { Component, Inject ,OnInit} from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SharedService } from './shared-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BusBooking';

  ngOnInit(): void { }
}