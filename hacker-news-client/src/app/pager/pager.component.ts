import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  private _currentPage: number = 1;

  @Input()
  get currentPage(): number {
    return this._currentPage;
  }

  @Output()
  public currentPageChange = new EventEmitter<number>();

  set currentPage(value: number) {
    if (value != this._currentPage) {
      this._currentPage = value;

      this.currentPageChange.emit(value);
    }
  }

  @Input()
  public totalPages: number;

  constructor() { }

  ngOnInit() {
  }

  public canMoveToPreviousPage() {
    return this.currentPage > 1;
  }

  public movePrevious() {
    this.currentPage--;
  }

  public canMoveToNextPage() {
    return this.currentPage < this.totalPages;
  }

  public moveNext() {
    this.currentPage++;
  }
}
