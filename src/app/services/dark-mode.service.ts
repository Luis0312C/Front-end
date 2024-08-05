import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {  
darkMode = false;

  constructor() { 
    this.checkAppMode();
  }

  async checkAppMode() {
    const checkIsDarkMode = await Preferences.get({ key: 'darkModeActivated' });
    this.darkMode = checkIsDarkMode?.value === 'true';
    document.body.classList.toggle('dark', this.darkMode);
  }

  async toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    await Preferences.set({ key: 'darkModeActivated', value: this.darkMode ? 'true' : 'false' });
  }
}
