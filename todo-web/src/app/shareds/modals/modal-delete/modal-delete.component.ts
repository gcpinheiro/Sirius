import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '@src/src/app/core/service/todo.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.sass']
})
export class ModalDeleteComponent implements OnInit {
  @Input() id: number;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTask(){
    this.todoService.deleteTask(this.id);
  }

}
