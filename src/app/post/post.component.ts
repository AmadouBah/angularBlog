import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() content: string;
  @Input() title: string;
  loveIts:number= 0;
  nbLike: number=0;
  nbDislike:number=0
  @Input()created_at:Date = new Date();
  constructor() {


   }

  ngOnInit() {
  }

  onAddLike(){
    this.loveIts++;
    console.log("I like");
    console.log(this.loveIts)
  }

  onRemoveLike(){
    this.loveIts--;
    console.log("I dislike");
    console.log(this.loveIts)
  }

}
