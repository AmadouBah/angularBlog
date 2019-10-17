import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title :"Mon premier post",
      content:"mycontent1",
      //created_at : new Date()

    
    },
    {
      title: "Mon second post",
      content:"mycontent2",
      //created_at : new Date()
    },
    {
      title: "My last post",
      content:"myLastContent",
      //created_at : new Date()
    }
  ];

  constructor(){}
}
