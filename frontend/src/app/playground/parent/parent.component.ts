import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    {
      id: 1,
      userId: 10,
      date: "Fri Jun 28 2024 11:45:51 GMT+0300 (Eastern European Summer Time)",
      title: "post 1",
      description: "this is my first post"
    },
    {
      id: 2,
      userId: 10,
      date: "Fri Jun 28 2024 11:45:51 GMT+0300 (Eastern European Summer Time)",
      title: "post 2",
      description: "this is my first post"
    },
    {
      id: 3,
      userId: 10,
      date: "Fri Jun 28 2024 11:45:51 GMT+0300 (Eastern European Summer Time)",
      title: "post 3",
      description: "this is my first post"
    },
  ];
  title: string = '';
  description: string = '';

  createPost() {
    console.log(this.title);
    console.log(this.description);
    
    const newPost = {
      id: this.posts.length + 1,
      userId: 10,
      date: new Date().toString(),
      title: this.title,
      description: this.description
    }

    this.posts.push(newPost);

  }

}
