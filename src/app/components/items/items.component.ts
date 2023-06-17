import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/items.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  Items!: any[];
  editItems: any[] = [];
  item: any;

  constructor(private itemServiceService: ItemServiceService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemServiceService.getItems().subscribe({
      next: (res) => {
        this.Items = res.data.map((element: any) => ({
          ...element,
          checked: element.checked == 'true',
        }));
      },
    });
  }

  onItemDrop(event: CdkDragDrop<string[]>) {
    let dropItem = { name: '' };
    moveItemInArray(this.Items, event.previousIndex, event.currentIndex);
    this.item = { ...this.Items[event.currentIndex] };
    dropItem.name = this.item.name;
    this.editItems.push(dropItem);
  }
  handleCheckboxChange(item: any) {
    this.item = { ...item };
    this.editItems.push(this.item);
  }
}
