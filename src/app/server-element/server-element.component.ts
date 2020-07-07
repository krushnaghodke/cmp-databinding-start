import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{
 @Input('srvElement') element: { type: string , content: string, name: string }
 @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngonit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges server element called');
    console.log(changes);
  }

  ngAfterContentChecked() {
    console.log('ngaftercontentchecked called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}


