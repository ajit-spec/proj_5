import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Service1Service} from "../../../services/service1.service";
import {Service2Service} from "../../../services/service2.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(
    public formbuilder: FormBuilder,
    public service1: Service1Service,
    public service2: Service2Service,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
  }

  form = this.formbuilder.group(
    {
      title: ''
    }
  )

  isedit = false
  list_id = ''

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(value => {

      if (value.list_id) {
        this.list_id = value.list_id
        this.isedit = true

        this.service1.getsinglelist({list_id: this.list_id}).subscribe(value1 => {
          this.form.patchValue({
            title: value1.list.title
          })
        })

      }
    })

  }

  onsubmit(): void {

    if (this.isedit) {

      this.service1.editlist({title: this.form.get('title')?.value, list_id: this.list_id}).subscribe(value => {
        this.service2.openSnackBar(value.msg)
        setTimeout(() => {
          this.router.navigate(['/', 'lists'])
        }, 3000)
      }, error => {
        console.log(error)
      })

    } else {
      this.service1.addlist({title: this.form.get('title')?.value}).subscribe(value => {
        this.service2.openSnackBar(value.msg)
        setTimeout(() => {
          this.router.navigate(['/', 'lists'])
        }, 3000)
      }, error => {
        console.log(error)
      })
    }

  }
}
