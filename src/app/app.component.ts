import { Component } from '@angular/core';
import { SelectOption } from '@dushangf/angular-select';
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-select-demo';

  selectedValue: any;

  async getData(page: number, search: string) {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10${
        search && '&beer_name=' + search
      }`
    );

    return res.data.map((item: any) => ({ label: item.name, value: item }));
  }

  onChange(e: SelectOption) {
    this.selectedValue = e.value;
  }
}
