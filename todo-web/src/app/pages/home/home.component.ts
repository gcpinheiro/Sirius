import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../../core/service/todo.service';
import { Todo } from '../../core/types/types_d';
import { ModalAddComponent } from '../../shareds/modals/modal-add/modal-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  result: boolean = false;
  listTodo: Todo[];

  constructor(public dialog: MatDialog, private todoService: TodoService) { }

  ngOnInit(): void {
    this.initializeObservables();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.result = result;
      if(result){
        this.initializeObservables();
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  initializeObservables(){
    this.todoService.getTask().subscribe(data => {
      if(data){
        this.listTodo = data;
        console.log(this.listTodo);
      }
    })
  }

}
