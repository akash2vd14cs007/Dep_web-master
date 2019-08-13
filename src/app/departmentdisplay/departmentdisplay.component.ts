import { Component, OnInit } from '@angular/core';
import { Dept } from './dept';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-departmentdisplay',
  templateUrl: './departmentdisplay.component.html',
  styleUrls: ['./departmentdisplay.component.css']
})
export class DepartmentdisplayComponent implements OnInit {
  updatedItem;
  closeResult: string;
  selectedOption:string;

  constructor(private modalService: NgbModal) { }

  name:string='';
  description:string='';
  arr:Dept[]=[
    new Dept('Yourdrs-Web Development','Web Application Development'),
    new Dept('Yourdrs Anodroid App Development','Yourdrs Android App Development'),
    new Dept('Yourdrs IOS App Development','Yourdrs IOS App Development'),
    new Dept('Yourdrs Tech support','Yourdrs Tech Support'),
    new Dept('Office case management','office case management'),
    new Dept('Data entry','Data Entry'),
    new Dept('Charge Entry','Charge entry'),
    new Dept('Medical transcription','Medical transcription'),
    new Dept('Human resources','Human resources'),
    new Dept('Administration','Administration')
  ];


  ngOnInit() {}

  // modal
  open(content) {
    this.name = '';
    this.description = '';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

// Edit modal popup
openEdit(content, i) {
  console.log(i);
  this.name = this.arr[i].name;
  this.description = this.arr[i].description;
  console.log('updating');

  this.updatedItem = i;

  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

// modal
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

  onClickAdd(){
    this.arr.push(new Dept(this.name, this.description));

    this.modalService.dismissAll();
  }


  onClickDelete(item:Dept){
        if (confirm("Do you want to delete")){
          console.log("Implement delete functionality here");
    this.arr.splice(this.arr.indexOf(item), 1);
        }
      }

      search(value) {
        if (value != "") {
          this.arr = this.arr.filter(x => x.name.indexOf(value) != -1);
      }
      }

  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
        this.arr[i].name = this.name;
        this.arr[i].description = this.description ;
        console.log(this.arr);

        this.modalService.dismissAll();
      }
    }

  }


}
