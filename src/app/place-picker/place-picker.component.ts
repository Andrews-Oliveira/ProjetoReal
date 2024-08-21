import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-picker',
  templateUrl: './place-picker.component.html',
  styleUrl: './place-picker.component.css'
})
export class PlacePickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Aguarde o carregamento do DOM
    document.addEventListener('DOMContentLoaded', () => {
      const placePicker = document.querySelector('gmpx-place-picker') as any;
      const placeInfo = document.getElementById('selected-place-info');

      placePicker.addEventListener('place_changed', () => {
        const place = placePicker.getPlace();

        if (place && placeInfo) {
          placeInfo.innerHTML = `
            <h2>Informações do Local Selecionado:</h2>
            <p><strong>Nome:</strong> ${place.name}</p>
            <p><strong>Endereço:</strong> ${place.formatted_address}</p>
            <p><strong>Coordenadas:</strong> ${place.geometry.location.lat()}, ${place.geometry.location.lng()}</p>
          `;
        }
      });
    });
  }

}
