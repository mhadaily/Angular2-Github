import { Component } from '@angular/core';
import { MdDialog, MdSnackBar } from "@angular/material";
import { DialogContentComponent } from "./dialog-content/dialog-content.component";

@Component({
  selector: 'app-materialhelper',
  template: `
   <md-sidenav-layout [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav">
    Sidenav
  </md-sidenav>

  <md-toolbar color="primary">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>

   {{title}}

    <span class="app-toolbar-filler"></span>
    <button md-button (click)="isDarkTheme = !isDarkTheme">TOGGLE DARK THEME</button>
  </md-toolbar>

  <div class="app-content">

    <md-card>
      <button md-button>FLAT</button>
      <button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>
      <button md-raised-button color="primary">PRIMARY RAISED</button>
      <button md-raised-button color="accent">ACCENT RAISED</button>
    </md-card>

    <md-card>
      <md-checkbox>Unchecked</md-checkbox>
      <md-checkbox [checked]="true">Checked</md-checkbox>
      <md-checkbox [indeterminate]="true">Indeterminate</md-checkbox>
      <md-checkbox [disabled]="true">Disabled</md-checkbox>
    </md-card>

    <md-card>
      <md-radio-button name="symbol">Alpha</md-radio-button>
      <md-radio-button name="symbol">Beta</md-radio-button>
      <md-radio-button name="symbol" disabled>Gamma</md-radio-button>
    </md-card>

    <md-card class="app-input-section">
      <md-input placeholder="First name"></md-input>

      <md-input #nickname placeholder="Nickname" maxlength="50">
        <md-hint align="end">
          {{nickname.characterCount}} / 50
        </md-hint>
      </md-input>

      <md-input>
        <md-placeholder>
          <i class="material-icons app-input-icon">android</i> Favorite phone
        </md-placeholder>
      </md-input>

      <md-input placeholder="Motorcycle model">
        <span md-prefix>
          <i class="material-icons app-input-icon">motorcycle</i>
          &nbsp;
        </span>
      </md-input>
    </md-card>

    <md-card>
      <md-list class="app-list">
        <md-list-item *ngFor="let food of foods">
          <h3 md-line>{{food.name}}</h3>
          <p md-line class="demo-secondary-text">{{food.rating}}</p>
        </md-list-item>
      </md-list>
    </md-card>

    <md-card>
      <md-spinner class="app-spinner"></md-spinner>
      <md-spinner color="accent" class="app-spinner"></md-spinner>
    </md-card>

    <md-card>
      <label>
        Indeterminate progress-bar
        <md-progress-bar
          class="app-progress"
          mode="indeterminate"
          aria-label="Indeterminate progress-bar example"></md-progress-bar>
      </label>

      <label>
        Determinate progress bar - {{progress}}%
        <md-progress-bar
          class="app-progress"
          color="accent"
          mode="determinate"
          [value]="progress"
          aria-label="Determinate progress-bar example"></md-progress-bar>
      </label>
    </md-card>

    <md-card>
      <md-tab-group>
        <md-tab label="Earth">
          <p>EARTH</p>
        </md-tab>
        <md-tab label="Fire">
          <p>FIRE</p>
        </md-tab>
      </md-tab-group>
    </md-card>

    <md-card>
      <md-icon>build</md-icon>
    </md-card>

    <md-card>
      <button md-button [md-menu-trigger-for]="menu">
        MENU
      </button>
    </md-card>

    <md-menu #menu="mdMenu">
      <button md-menu-item>Lemon</button>
      <button md-menu-item>Lime</button>
      <button md-menu-item>Banana</button>
    </md-menu>

    <md-card>
      <p>Last dialog result: {{lastDialogResult}}</p>
      <button md-raised-button (click)="openDialog()">DIALOG</button>
      <button md-raised-button (click)="showSnackbar()">SNACKBAR</button>
    </md-card>

  </div>

</md-sidenav-layout>

<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>check circle</md-icon></button>
</span>

  `,
  styles: []
})
export class MaterialhelperComponent {
  
  title = 'app works!';
  date: Date = new Date();
  
  today () {
    this.date = new Date();
  }
  
  isDarkTheme: boolean = false;
  lastDialogResult: string;
  
  foods: any[] = [
    {
      name: 'Pizza',
      rating: 'Excellent'
    },
    {
      name: 'Burritos',
      rating: 'Great'
    },
    {
      name: 'French fries',
      rating: 'Pretty good'
    },
  ];
  
  progress: number = 0;
  
  constructor (private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
  
  openDialog () {
    let dialogRef = this._dialog.open(DialogContentComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
  
  showSnackbar () {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
  
}
