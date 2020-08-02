import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {

  fullWidth = true;
  isPanelOpen: boolean;
  constructor() { }
  ngOnInit() {
    this.isPanelOpen = false;
  }
  panelOpen() {
    this.isPanelOpen = true;
  }
  close() {
    this.isPanelOpen = false;
  }

}
