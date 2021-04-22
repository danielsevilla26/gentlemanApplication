import { Component, OnInit,  AfterViewInit, ViewChild } from '@angular/core';
import TypeWriter from 't-writer.js';
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public fondo = require("../../../assets/images/main.jpg");
  @ViewChild('asTitle') asTitle: any;
  @ViewChild('asSubTitle') asSubTitle: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.initTitle();
  }



  initTitle = () =>{
    const targetTitle = this.asTitle.nativeElement;
    const targetSubtitle = this.asSubTitle.nativeElement;
    const writer1 = new TypeWriter(targetTitle, {
      typeSpeed: 60 
    })
    
    const writer2 = new TypeWriter(targetSubtitle, { 
      typeSpeed: 60 
    })
    
    writer1
      .type('¡Bienvenido a Gentleman Programming!')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()
    
    writer2
      .type("Una comunidad donde nos apoyamos de forma fácil")
      .rest(500)
      .remove(5)
      .type('rápida')
      .rest(500)
      .remove(6)
      .type('y gratuita.')
      .rest(500)
      .clear()
      .then(writer1.start.bind(writer1))
          
    // const targetTitle = this.asTitle.nativeElement;
    // const writer = new TypeWriter(targetTitle,{
    //   loop: true,
    //   typeSpeed: 100
    // });

    // const targetSubtitle = this.asSubTitle.nativeElement;
    // const writer1 = new TypeWriter(targetSubtitle, {
    //   loop: true,
    //   typeSpeed: 80,
    //   typeColor: 'red'
    // })
    
    // writer1
    //   .type('Una comunidad donde nos apoyamos los unos a los otros de forma')
    //   .rest(500)
    //   .changeOps({ deleteSpeed: 80 })
    //   .remove(4)
    //   .type('fácil')
    //   .rest(500)
    //   .remove(4)
    //   .type('rápida')
    //   .rest(500)
    //   .changeOps({ deleteSpeed: 20 })
    //   .remove(21)
    //   .type('y gratuita')
    //   .rest(500)
    //   .clear()
    //   .start()

    // writer
    // .type('¡Bienvenido a Gentleman Programming!')
    // .rest(10000)
    // .then(writer1.start.bind(writer1))
    // .start()


  }


}
