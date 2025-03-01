import { SportsEquipment } from "./SportsEquipment";

export class Dumbbell extends SportsEquipment {
  isAdjustable: boolean;

  constructor(name: string, weight: number, material: string, isAdjustable: boolean) {
    super(name, weight, material);
    this.isAdjustable = isAdjustable;
  }

  override displayInfo(): string {
    return ( super.displayInfo() + 'Чи можна змінювати? = ' + this.isAdjustable );
  }
}
