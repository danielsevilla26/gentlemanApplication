import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '@app/shared/components/cards/card-image/iImage.metadata';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {
  @Input() data: IImage;

  constructor() { }

  ngOnInit(): void {
  }

}
