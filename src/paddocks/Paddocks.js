import AdminPadocks from "./AdminPadocks";
import { useState, useEffect } from "react";

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];
////////////////////////////////////////////

// fucion para ordenar los rut de administradores de forma decendiente por sus nombres
const Paddocks = () => {
  const listPaddockManagersByName = () => {
    const paddockDecendente = paddockManagers.sort((x, y) =>
      x.name.localeCompare(y.name)
    );

    return paddockDecendente.map((paddockManager) => paddockManager.taxNumber);
  };
  listPaddockManagersByName();
  console.log(listPaddockManagersByName());

  /////////////////////////////////////////////////////////////////////////////////////////////////7

  //Funcion para ordenar los cuarteles con sus respectivos nombres de forma decreciente por la cantiad de hectareas.
  const sortPaddockTypeByTotalArea = () => {
    const paddockFarm = paddockType.map((paddock) => {
      const paddockArea = paddocks.reduce((acumulador, actual) => {
        if (actual.paddockTypeId === paddock.id) {
          return acumulador + actual.area;
        }
        return acumulador;
      }, 0);
      return [paddock.name, paddockArea];
    });
    const areaSort = paddockFarm.sort((a, b) => {
      return b[1] - a[1];
    });
    return areaSort;
  };

  sortPaddockTypeByTotalArea();
  console.log(sortPaddockTypeByTotalArea());
  //////////////////////////////////////////////////////////////////

  //Funcion con los nombres de los administradoresordenados ordenados decrecientemente por la suma TOTAL de hectáreas que administran
  const sortFarmManagerByAdminArea = () => {
    const managersNames = paddockManagers.map((manager) => {
      const managerArea = paddocks.reduce((acumulador, actual) => {
        if (actual.paddockManagerId === manager.id) {
          return acumulador + actual.area;
        }
        return acumulador;
      }, 0);
      return [manager.name, managerArea];
    });
    const totalArea = managersNames.sort((a, b) => {
      return b[1] - a[1];
    });
    return totalArea;
  };
  console.log(sortFarmManagerByAdminArea());
  sortFarmManagerByAdminArea();
  //////////////////////////////////////////////////////

  const farmManagerNames = () => {
   const idFarms = farms.map((farm) => farm.id)
   const idPaddocks = paddocks.map((paddock) => {
    if(idFarms === paddock.farmId){
      return farms.name
    }
    
   }
   ) 
   console.log(idPaddocks)
   
  }
 
  farmManagerNames();

  return (
    <div className="bg-gray-500 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-White-900">
          Administradores Paddocks
        </h2>
      </div>
    </div>
  );
};

export default Paddocks;
