import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { multi } from './data';
import * as shape from 'd3-shape';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  
  @ViewChild('#drawer', {static: false}) drawer:any; 
  tiles: Tile[] = [
    { text: 'Todays trends', cols: 3, rows: 5, color: '#FFFFFF' },
    { text: 'Resolved', cols: 1, rows: 1, color: '#FFFFFF' },
    { text: 'Received', cols: 1, rows: 1, color: '#FFFFFF' },
    { text: 'Average first response time', cols: 1, rows: 1, color: '##FFFFFF' },
    { text: 'Average response time', cols: 1, rows: 1, color: '#FFFFFF' },
    { text: 'Revolution within SLA', cols: 1, rows: 1, color: '#FFFFFF' },
  ];

  counters: any[] = [
    { name: 'Unresolved', value: 60 },
    { name: 'Overdue', value: 16 },
    { name: 'Open ', value: 43 },
    { name: 'On Hold', value: 64 },
  ]
  multi: any[] = [];
  view: [number, number] = [696, 380];
  customColors: any[] = [
    {
      name: 'Today',
      value: '#3751FF'
    },
    {
      name: 'Yesterday',
      value: '#DFE0EB'
    }
  ];
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xScaleMin: number = 0;
  xScaleMax: number = 22;
  yScaleMin: number = 0;
  yScaleMax: number = 60;
  maxYAxisTickLength: number = 10;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = false;
  desktopMode: boolean = true;
  curve = shape.curveBasis;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  opened: boolean = true;
  constructor() {
    Object.assign(this, { multi });
  }
  ngAfterViewInit(): void {
    if(this.desktopMode)  
      this.drawer.toggle();
  }

  ngOnInit(): void {
    this.onResize();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  toggleSidenav(data: any): void {
    this.opened = !this.opened;
  }

  isDesktopMode(width: number = 767): boolean {
    if (window.innerWidth > width) {
      return true;
    }
    return false;
  }

  @HostListener("window:resize", ["$event"])
  onResize(evt?: any): void {
    this.desktopMode = this.isDesktopMode(991);
  }
}
