import { Component } from '@angular/core';
import { GithubService } from "./services/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GithubService],
})

export class AppComponent {
  
  listUsernames: string[] = [];
  
  constructor (private githubService: GithubService) {}
  
  
  onSearch (username) {
    this.githubService.doSearchByUsername(username._value)
        .subscribe(usernames => this.listUsernames = usernames);
  }
  
}
