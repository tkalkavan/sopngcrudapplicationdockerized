import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({

  // tslint:disable-next-line:component-selector
  selector: 'song-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent implements OnChanges {

  //[prop]="value" is for object binding to properties (@Input() of an Angular component or directive or a property of a DOM element).
  //[ratingNumber] -> song-list.component ten geliyor  [ratingNumber]="song.thumbRating"

  @Input() ratingNumber;


  //song-list.component.html
  /*
  *  (ratingClicked)="onRatingClicked($event)
  * () ----> ratingClicked forwarded to onRatingClicked(message: string): void method on song-list.component.ts
  * */

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  thumbWidth: number;

  constructor() { }

  ngOnChanges(): void {
    this.thumbWidth = this.ratingNumber * 95 / 5;
  }

  onClick(): void {
   this.ratingClicked.emit(`This song has a ${this.ratingNumber} thumb rating!`);
  }

}
