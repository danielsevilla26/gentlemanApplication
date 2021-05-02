import { Component, ElementRef, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;//Give us access to the input element
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  //It is invoked after view has been initialized
  ngAfterViewInit(){
    //This operator is used to listen the keyup event on the input element
    fromEvent(this.inputElement.nativeElement, 'keyup')
    .pipe(
      //Debounce time allows us get value after user has stopped typing for a specific time
      debounceTime(500),
      //Retrieve value property from the input object 'input.target.value'
      pluck('target', 'value'),
      //Ensures that the current value is different from the last value
      distinctUntilChanged(),
      //Filter operator is used to check and discard values
      filter((value: string) => value.length > 3),
      //Returns the value as an observable. This allows us to suscribe to it
      map((value) => value)
    )
    .subscribe(value => {
      this.search.emit(value)
    });
  }
}
