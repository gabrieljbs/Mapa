import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  private map!: L.Map;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeMap();
    this.router();
  }

  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.map = L.map('map').locate({ setView: true, maxZoom: 16 });
    L.tileLayer(baseMapURl).addTo(this.map);
  }

  private router() {
    let userLatLng: any;
    this.map.locate({ setView: true, maxZoom: 16 });
    this.map.on('locationfound', (e: L.LocationEvent) => {
      userLatLng = e.latlng;
    });
    L.Routing.control({
      waypoints: [L.latLng(userLatLng), L.latLng(userLatLng)],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(this.map);
  }
}
