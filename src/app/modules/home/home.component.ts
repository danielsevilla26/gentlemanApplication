import { Component, AfterViewInit, ViewChild } from '@angular/core';
import TypeWriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('asTitle') asTitle: any;
  @ViewChild('asSubTitle') asSubTitle: any;

  constructor() { }

  ngAfterViewInit() {
    this.initTitle();
  }

  initTitle = () => {
    const targetTitle = this.asTitle.nativeElement;
    const targetSubtitle = this.asSubTitle.nativeElement;
    const writer1 = new TypeWriter(targetTitle, {
      typeColor: 'white',
      typeSpeed: 100
    })

    const writer2 = new TypeWriter(targetSubtitle, {
      typeColor: 'white',
      typeSpeed: 80
    })

    writer1
      .type('¡Bienvenido!')
      .removeCursor()
      .rest(400)
      .clear()
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
      .removeCursor()
      .then(writer1.start.bind(writer1))
  }
}
