export type EquipmentName = 'Гантеля' | 'Штанга';

export type EquipmentNameMap = {
  [key: string]: EquipmentName;
}

export const EquipmentsNameMap: EquipmentNameMap = {
  Dumbbell: 'Гантеля',
  Barbell: 'Штанга'
}
