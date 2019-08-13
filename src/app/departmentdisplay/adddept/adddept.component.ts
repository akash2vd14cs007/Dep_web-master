import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';

@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {
arr: Dept[]=[];
name:string='';
  description:string='';
  constructor() { }

  ngOnInit() {
  }

}

