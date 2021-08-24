import {Component, OnInit} from '@angular/core';
import {Service1Service} from "../../../services/service1.service";
import {Router} from "@angular/router";
import {Service2Service} from "../../../services/service2.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    public service1: Service1Service,
    public router: Router,
    public service2: Service2Service
  ) {
  }

  ngOnInit(): void {
    this.getalllists()
  }

  addtask(id: string): void {
    this.router.navigate(['/', 'add-task'], {queryParams: {list_id: id}})
  }

  editlist(id: string): void {
    this.router.navigate(['/', 'add-list'], {queryParams: {list_id: id}})
  }

  deletelist(id: string): void {
    this.service1.deletelist({list_id: id}).subscribe(value => {
      this.service2.openSnackBar(value.msg)
      if (value.status === 1) {
        this.getalllists()
      }
    })
  }

  getalllists(): void {
    this.service1.getlists().subscribe(value => {
      console.log(value)
      this.service1.alllista = value.tasks
    }, error => {
      console.log(error)
    })
  }

  edittask(id: string): void {
    this.router.navigate(['/', 'add-task'], {queryParams: {task_id: id}})
  }

  deletetask(id: string): void {
    this.service1.deletetask({task_id: id}).subscribe(value => {
      this.service2.openSnackBar(value.msg)
      if (value.status === 1) {
        this.getalllists()
      }
    })
  }

}
