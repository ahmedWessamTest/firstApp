import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainTitleComponent } from "../main-title/main-title.component";
import { IPortfolio } from '../iportfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portItems:IPortfolio[] = [
    {srcImg:'./assets/images/portfolio-images/port1.png',alt:'portfolio image'},
    {srcImg:'./assets/images/portfolio-images/port2.png',alt:'portfolio image'},
    {srcImg:'./assets/images/portfolio-images/port3.png',alt:'portfolio image'},
    {srcImg:'./assets/images/portfolio-images/port1.png',alt:'portfolio image'},
    {srcImg:'./assets/images/portfolio-images/port2.png',alt:'portfolio image'},
    {srcImg:'./assets/images/portfolio-images/port3.png',alt:'portfolio image'},
  ]
  @ViewChild('popUpElement') popUpElement!: ElementRef;
  popUpImage:string ="";
  getPopUp(event: string):void{
    this.popUpElement.nativeElement.classList.add('d-flex')
    this.popUpImage = event;
  }
  closePopUp(event: MouseEvent):void{
    if(event.currentTarget == event.target){
      this.popUpElement.nativeElement.classList.remove('d-flex')
      this.popUpImage = "";
    }
  }
}
