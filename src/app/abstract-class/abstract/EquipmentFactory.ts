import {SportsEquipment} from "./SportsEquipment";
import {Dumbbell} from './Dumbbell';
import {Barbell} from './Barbell';
import {EquipmentsNameMap} from './EquipmentName';
import {TennisRacket} from "./TennisRacket";

export class EquipmentFactory {
  public static getEquipment(item: any): SportsEquipment {
    if (item.name === EquipmentsNameMap['Dumbbell']) {
      return new Dumbbell(item.name, item.weight, item.material, item.isAdjustable);
    } else if (item.name === EquipmentsNameMap['Barbell']) {
      return new Barbell(item.name, item.weight, item.material, item.length);
    } else if (item.name === EquipmentsNameMap['TennisRacket']) {
      return new TennisRacket(item.name, item.weight, item.material, item.gripSize);
    } else throw new Error('Equipment not found');
  }

}
