import { Component, OnInit } from '@angular/core';
import { TodoService } from '@src/src/app/core/service/todo.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.sass']
})
export class ModalAddComponent implements OnInit {

  data: any;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  registerTask(){
    console.log("Data:", this.data)
    this.todoService.createTask(this.data);
  }

}
