import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HomeAPIService } from 'src/app/services/home-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tittle: string = 'Affiliate - Websites';

  categoryList: string[] = ['All', 'hosting', 'ecommerce', 'finance', 'course', 'product', 'travel'];
  AllData: any = [];
  filterData: any[] = [];
  isFilter: boolean = false;

  constructor(private ApiService: HomeAPIService) { }

  ngOnInit(): void {

    this.ApiService.getData().subscribe((res) => {

      this.AllData = res;
    });
  }
  onChange(selectedCatag: any) {

    let category = selectedCatag.target.value.toLocaleLowerCase();
    this.filterData = [];
    
    if (category == 'all') {
      this.isFilter = false;
    } else {
      this.isFilter = true;
      this.AllData.filter((res: any) => {
        if (res.category.toLocaleLowerCase().match(category)) {
          this.filterData.push(res);
        }
      });
    }

  }

}
