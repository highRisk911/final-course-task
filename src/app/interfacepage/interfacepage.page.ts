import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  constructor() {}

  ras() {
    let region = new Region('Kyiv', 4, 7);
    console.log(region.aboutRegion());
    console.log(region.aboutMetropolis());
  }

  ngOnInit() {}
}

// function getRandomInt(max){
//   return Math.floor(Math.random()*Math.floor(max));
// }

interface IPlace {
  addressPlace: string;
  namePlace: string;
}

interface ICity {
  nameCity: string;
  aboutCity();
}

interface IMetropolis {
  nameMetropolis: string;
  places: Place[];
  aboutMetropolis();
}

interface IRegion {
  cities: City[];
  aboutRegion();
}

export class Place implements IPlace {
  addressPlace: string;
  namePlace: string;
  constructor(addressPlace: string, namePlace: string) {
    this.addressPlace = addressPlace;
    this.namePlace = namePlace;
  }
  changeNamePlace(namePlace: string) {
    this.namePlace = namePlace;
  }
}

export class City extends Place implements ICity {
  nameCity: string;
  constructor(nameCity: string, addressPLace: string, namePlace: string) {
    super(addressPLace, namePlace);
    this.nameCity = nameCity;
  }
  aboutCity() {
    return 'Місто ' + this.nameCity + ' має місце ' + this.namePlace;
  }
  changeNameCity(nameCity: string) {
    this.nameCity = nameCity;
  }
}

export class Metropolis implements IMetropolis {
  nameMetropolis: string;
  places: Place[];
  constructor(nameMetropolis: string, totalPlace: number) {
    this.nameMetropolis = nameMetropolis;
    this.places = new Array();
    for (let i = 0; i < totalPlace; i++) {
      this.places.push(new Place('Kyiv, Exhibition center', `Place ${i}`));
    }
  }
  aboutMetropolis() {
    return (
      'Метрополіс ' + this.nameMetropolis + ' має місць ' + this.places.length
    );
  }
  renamePlace(num: number, namePlace) {
    this.places[num].changeNamePlace(namePlace);
  }
}

export class Region extends Metropolis implements IRegion {
  cities: City[];
  constructor(
    nameMetropolis: string,
    totalPlaceInMetropolis: number,
    totalCities: number
  ) {
    super(nameMetropolis, totalPlaceInMetropolis);
    this.cities = new Array();
    for (let i = 0; i < totalCities; i++) {
      this.cities.push(new City(`City${i + 1}`, 'City, ' + i, 'New Place'));
    }
  }
  aboutRegion() {
    return (
      'Цей регіон має метрополіс ' +
      this.nameMetropolis +
      ' та ' +
      this.cities.length +
      ' міст'
    );
  }
  renameCity(oldNameCity: string, newNameCity: string) {
    for (const index in this.cities) {
      if (this.cities[index].nameCity === oldNameCity) {
        this.cities[index].changeNameCity(newNameCity);
      }
    }
  }
}
