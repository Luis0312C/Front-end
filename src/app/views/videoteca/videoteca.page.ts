import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-videoteca',
  templateUrl: './videoteca.page.html',
  styleUrls: ['./videoteca.page.scss'],
})
export class VideotecaPage implements OnInit {

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