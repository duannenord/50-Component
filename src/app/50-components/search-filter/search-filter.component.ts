import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {
  searchQuery: string = '';
  riders: string[] = [
    'Kuuga',
    'Agito',
    'Ryuki',
    'Faiz',
    'Blade',
    'Hibiki',
    'Kabuto',
    'Den-o',
    'Kiva',
    'Decade',
    'W',
    'OOO',
    'Fourze',
    'Wizard',
    'Gaim',
    'Drive',
    'Ghost',
    'Ex-Aid',
    'Build',
    'Zi-O'
  ];

  filteredRiders() {
    return this.riders.filter(rider => 
      rider.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
