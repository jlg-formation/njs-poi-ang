import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private elt: ElementRef) {
  }

  ngOnInit(): void {}

  delete() {
    console.log('delete');
  }

  select(index: number) {
    console.log('select', index);
    const row: Element = this.elt.nativeElement.querySelector('.row-' + index);
    if (!row.classList.contains('selected')) {
      row.classList.add('selected');
    } else {
      row.classList.remove('selected');
    }
  }
}
