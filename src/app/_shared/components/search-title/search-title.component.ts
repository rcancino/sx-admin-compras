import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sx-search-title',
  template: `
  <div layout layout-align="start center" flex class="pad-left-sm pad-right-sm">
    <span class="push-left-sm">
      <span class="mat-title">{{title}}</span>
    </span>
    <span flex></span>
    <td-search-box class="push-right-sm" placeholder="{{searchLabel}}" flex (searchDebounce)="search.emit($event)">
    </td-search-box>
    <span>
      <button mat-icon-button [matMenuTriggerFor]="toolbarMenu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #toolbarMenu="matMenu">
        <ng-content select=".actions"></ng-content>
      </mat-menu>
    </span>
</div>
  `
})
export class SearchTitleComponent implements OnInit {
  @Input() title = 'Title';
  @Input() searchLabel: 'Buscar';
  @Output() search = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
