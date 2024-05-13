import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[] | undefined
  // =[
  //   new Todo(1,'abc',false,new Date()),
  //   new Todo(2,'def',false,new Date()),
  //   new Todo(3,'ghi',false,new Date()),
  //   // {id:1,description:'abc'},
  //   // {id:2,description:'def'},
  //   // {id:3,description:'ghi'}
  // ]

  // todo={
  //   id:1,
  //   description:'Learn to Dance'
  // }

  constructor(private todoService:TodoDataService ) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('username').subscribe(
      response=>{
        console.log(response)
        this.todos=response;
      }
    )
  }

}
