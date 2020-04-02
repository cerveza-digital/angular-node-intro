import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{

  constructor(private userService: UsersService){

  }

  // ngx formly
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
          },
        },
      ],
    },
    {
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'age',
          templateOptions: {
            type: 'number',
            label: 'Age',
            max: 120,
            min: 0
          },
        },
      ],
    },
    {
      template: '<hr />',
    },
    {
      type: 'textarea',
      key: 'decription',
      templateOptions: {
        label: 'Description',
        rows:5
      },
    }
  ];
// ngx-data table
  ColumnMode = ColumnMode;
  rows = [];
  submit() {
   this.onAdd();
  }

  onRefresh(){
    this.userService.getAll().subscribe((data) => {
      this.rows = data;
    });
  }
  onAdd(){
    this.userService.add(this.model).subscribe((data) => {
      this.onRefresh();
    });
  }
  onDelete(value){
    this.userService.delete(value.$loki).subscribe(() => {
      this.onRefresh();
    });
  }

  ngOnInit(): void {
    this.onRefresh();
  }
}
