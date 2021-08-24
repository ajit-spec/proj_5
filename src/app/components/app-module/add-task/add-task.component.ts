import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Service1Service} from "../../../services/service1.service";
import {Service2Service} from "../../../services/service2.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(
    public formbuilder: FormBuilder,
    public activatedroute: ActivatedRoute,
    public service1: Service1Service,
    public service2: Service2Service,
    public router: Router
  ) {
  }

  form = this.formbuilder.group(
    {
      title: ''
    }
  )

  list_id = ''
  task_id = ''
  isedit = false

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(value => {
      this.list_id = value.list_id
      if (value.task_id) {
        this.task_id = value.task_id;
        this.isedit = true

        this.service1.getsingletask({task_id: this.task_id}).subscribe(value1 => {
          this.form.patchValue({
            title: value1.task.title
          })
        })

      }
    }, error => {
      console.log(error)
    })
  }

  onsubmit(): void {

    if (this.isedit) {
      const request = {
        title: this.form.get('title')?.value,
        task_id: this.task_id
      }

      this.service1.edittask(request).subscribe(value => {
        this.service2.openSnackBar(value.msg)
        setTimeout(() => {
          this.router.navigate(['/', 'lists'])
        }, 3000)
      }, error => {
        console.log(error)
      })

      return
    }

    const request = {
      title: this.form.get('title')?.value,
      list_id: this.list_id
    }

    this.service1.addtask(request).subscribe(value => {
      this.service2.openSnackBar(value.msg)
      setTimeout(() => {
        this.router.navigate(['/', 'lists'])
      }, 3000)
    }, error => {
      console.log(error)
    })
  }

}
