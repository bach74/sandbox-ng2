import { Car } from './domain/car';
import { CarService } from './service/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private cars: Car[];

  constructor(private carService: CarService) { };

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
