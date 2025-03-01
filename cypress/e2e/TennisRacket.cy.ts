import { TennisRacket } from "../../src/app/abstract-class/abstract/TennisRacket";
import { EquipmentFactory } from "../../src/app/abstract-class/abstract/EquipmentFactory";

const createRacket = (name: any, weight: any, material: any, gripSize: any) => {
  return new TennisRacket(name, weight, material, gripSize);
};

describe("TennisRacket Tests", () => {
  it("should create an instance of TennisRacket", ()=>{
    cy.wrap(createRacket('Тенісна ракетка', 1, 'Дерево', 5))
      .should('exist');
  });

  it("should throw an error when weight is negative", ()=>{
    cy.wrap(() => createRacket('Тенісна ракетка', -5, 'Дерево', 5))
      .should('throw', 'Weight should be positive');
  });

  it("should throw an error when grip size is negative", ()=>{
    cy.wrap(() => createRacket('Тенісна ракетка', 1, 'Дерево', -5))
      .should('throw', 'Grip size is not correct!');
  });

  it("should throw an error when name is empty", ()=>{
    cy.wrap(() => createRacket('', 1, 'Дерево', 1))
      .should('throw', 'Names should not be undefined or empty');
  });

  it("should throw an error when material is empty", ()=>{
    cy.wrap(() => createRacket('Тенісна ракетка', 1, '', 1))
      .should('throw', 'Material name should not be undefined');
  });

  it("should create a racket by factory", () => {
    const racketInfo = {
      name: 'Тенісна ракетка',
      weight: 1,
      material: 'Дерево',
      gripSize: 1
    };

    cy.wrap(EquipmentFactory.getEquipment(racketInfo)).should('be.an.instanceOf', TennisRacket);
  });

  it("should correctly calculate usage time", ()=>{
    cy.wrap(createRacket('Тенісна ракетка', 1, 'Дерево', 1))
      .invoke('calculateUsageTime', 200)
      .should('eq', 480);
  });
});
