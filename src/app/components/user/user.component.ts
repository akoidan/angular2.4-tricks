import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name : string;
  age : number;
  friends: Friend[];
  posts: Post[];
  isPostShown: boolean;
  address: {
    street: string,
    city: string,
    house: number
  };

  constructor(private dataService: DataService) {
    console.log("Constructor ran");
    console.log(dataService);
   }

  ngOnInit() {
    this.name = 'Andrew';
    this.age = 3;
    this.isPostShown = false;
    this.address = {
      street: 'asd',
      city: 'asd',
      house: 3
    }
    this.friends = [{name: 'Alex', age:44}, {name:'Victor', age: 33}]
    console.log("ng ran");
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
  addFriend() {
    this.friends.push({name: this.name, age: this.age});
  }
  deleteFriend(friend) {
    this.friends.splice(this.friends.indexOf(friend));
  }
  showPosts() {
    console.log('asd');
    this.isPostShown = !this.isPostShown;
  }

}

interface Friend {
  name : string;
  age: number;
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}