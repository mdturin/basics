import { OnChanges } from "@angular/core";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit, OnChanges {
  name = 'Md Turin';
  imgURL = 'https://picsum.photos/id/237/500/500';

  constructor(){
    console.log('app constructor() called...');
  }

  ngOnInit(){
    console.log('app ngOnInit() called...');
  }

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent): void {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImage(imageUrl: string): void {
    console.log(imageUrl);
  }

  ngOnChanges(){
    console.log('app ngOnChanges() called...');
  }

  ngDoCheck(){
    console.log('app ngDoCheck() called...');
  }
}