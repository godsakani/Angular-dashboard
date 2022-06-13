import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter',[
        style({opacity: 0}),
        animate('350ms',
        style({opacity: 1})
        )
      ]),
      transition(':leave',[
        style({opacity: 1}),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        )
      ])
    ])
  ]

})
export class SidenavComponent implements OnInit {
   

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapse = false;
  screenWidth = 0;
  navData = navbarData;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
       this.collapse = false;
       this.onToggleSideNav.emit({collapsed: this.collapse, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  };

  toggleCollapse(): void {
    this.collapse = !this.collapse;
    this.onToggleSideNav.emit({collapsed: this.collapse, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapse = false;
    this.onToggleSideNav.emit({collapsed: this.collapse, screenWidth: this.screenWidth});
  }
}
function keyframes(arg0: never[]): import("@angular/animations").AnimationStyleMetadata | import("@angular/animations").AnimationKeyframesSequenceMetadata | null | undefined {
  throw new Error('Function not implemented.');
}

