import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModel } from "src/app/models";

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.sass']
})
export class CustomPaginatorComponent {
  @Input() paginator: PaginatorModel;
  @Output() onPageChange = new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  generatePagesArray(): number[] {
    return Array.from(Array(this.paginator.totalPages).keys()).map(x => x + 1);
  }

  changePage(page: number): void {
    this.onPageChange.emit(page);
  }
}
