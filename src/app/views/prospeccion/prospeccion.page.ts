import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-prospeccion', 
  templateUrl: './prospeccion.page.html',
  styleUrls: ['./prospeccion.page.scss'],
})
export class ProspeccionPage implements OnInit {

  @ViewChild('tabs', {static: false}) tabs!: IonTabs;
  selectedTab: any;

  constructor() { } 

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }
  
}