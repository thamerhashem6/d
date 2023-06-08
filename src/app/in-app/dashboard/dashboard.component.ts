import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../../services/travel-app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public travelAppSelectedArticles: any = null;
  public travelAppDestinations: any = null;
  public travelAppImageSet1: any = null;
  public travelAppImageSet2: any = null;

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('SelectedArticlesType').subscribe(data => this.travelAppSelectedArticles = data);
    this.travelAppService.getData('DestinationsType').subscribe(data => this.travelAppDestinations = data);
    this.travelAppService.getData('ImageSet1Type').subscribe(data => this.travelAppImageSet1 = data);
    this.travelAppService.getData('ImageSet2Type').subscribe(data => this.travelAppImageSet2 = data);
  }
}
