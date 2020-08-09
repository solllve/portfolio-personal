import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {

  fullWidth = true;
  isPanelOpen: boolean;
  constructor(
    public service: MainService
  ) { }
  ngOnInit() {
    this.service.open = false;
  }
  panelOpen() {
    this.service.open = true;
  }
  close() {
    this.service.open = false;
  }

}
