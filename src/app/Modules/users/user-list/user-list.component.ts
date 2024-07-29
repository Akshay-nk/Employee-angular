import { Component, OnInit } from '@angular/core';
import { userSchema } from '../Models/userSchema';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  page:number =1
  allUsers : userSchema[]=[]
  

  constructor(public dialog:MatDialog, private api:ApiService, private toaster:ToastrService,private router:Router){}
  
 


  ngOnInit(): void {
    this.getAllUserList()
  }

  getAllUserList (){
    this.api.getAllUserAPI().subscribe({
      next:(result:any)=>{
        this.allUsers=result
        console.log(this.allUsers);
        
      },
      error:(reason:any)=>{
        console.log(reason);
      }
      
    })
  }

 

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '700px',height:'500px'
     
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllUserList();
        this.router.navigateByUrl("/users");
      }
    });
  }

}

