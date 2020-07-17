import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jokes} from 'src/app/Jokes';
import { JokesService } from 'src/app/jokes.service';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
// import {MatTreeModule} from '@angular/material/tree';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatButtonModule} from '@angular/material/button';
import { Router, Routes } from '@angular/router';
import { Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import {map} from 'rxjs/operators';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-second-page',
  templateUrl:'./second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  providers: [JokesService,Jokes]
})
export class SecondPageComponent implements OnInit {
  dataSource: MatTableDataSource<Jokes> | null;
   
  
    searchText;
  load=true;
    jokes: Jokes[]=[];
   notEmptyPost : boolean = true;
notscrolly : boolean = true;
   @Output() searchcriteria = new EventEmitter<String>();

constructor(private jokeService: JokesService, private router: Router,private http: HttpClient,
  private spinner: NgxSpinnerService)
  // private SpinnerService: NgxSpinnerService)
{
  var data =this.jokeService.sendJokes().subscribe(data => {
    this.load=false;
    console.log("constructor");
  this.jokes = data;
   console.log(this.jokes);
    });
}
 



ngOnInit(): void {
}

// getJokes(){
//     // const api= "https://official-joke-api.appspot.com/jokes/ten";
//     this.jokeService.sendJokes().subscribe((data : any )=>{
//        console.log(data);
//        this.jokes = data;
//       })
//       return this.jokes;
//   }

 temp : boolean = true;
  getState(){
    this.temp = !this.temp;
  }

  arr:any=[];

  appendApi(){ 
    // var data = this.jokeService.sendJokes().subscribe(data => {
    //   for(var i=0; i<10; i++){
    //     this.jokes = this.jokes.concat(data[i]);
    //   }
     
    // })
    let ele= this.jokeService.sendJokes().subscribe(data=>{
      for(var i=0;i<5;i++){
        this.jokes.push(data[i]);
      }
      this.load=false;
    })
    
    
    return Jokes;
    console.log("Jokes");
    }

onScroll(){
  console.log("Scrolled"); 
  // if(this.notEmptyPost && this.notscrolly){
  //   this.spinner.show();
  //   this.notscrolly=false; 
  // }
  
 return  this.appendApi();

}     

}






