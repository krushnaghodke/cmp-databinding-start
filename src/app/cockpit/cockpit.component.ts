import {Component, EventEmitter, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngonit called');
  }

  ngOnChanges() {
    console.log('ngOnChanges cockpit called');
  }

  onAddServer() {
   this.serverCreated.emit({
     serverName: this.newServerName,
     serverContent: this.newServerContent
   });
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
