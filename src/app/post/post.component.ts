import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('image') postImage = '';
  @Output() imageSelected = new EventEmitter<string>();

  constructor() {
    console.log('post constructor() called...', this.postImage);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called...');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called...');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called...');
  }

  ngOnInit() {
    console.log('post ngOnInit() called...', this.postImage);
  }

  ngOnChanges() {
    console.log('post ngOnChanges() called...');
  }

  ngDoCheck(): void {
    console.log('post ngDoCheck() called...');
  }
}
