export type EquipmentName = 'Гантеля' | 'Штанга' | 'Тенісна ракетка';

export type EquipmentNameMap = {
  [key: string]: EquipmentName;
}

export const EquipmentsNameMap: EquipmentNameMap = {
  Dumbbell: 'Гантеля',
  Barbell: 'Штанга',
  TennisRacket: 'Тенісна ракетка'
}
