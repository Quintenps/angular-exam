import { BehaviorSubject, filter } from 'rxjs';
import { LeagueService } from './../../core/services/league.service';
import { Component } from '@angular/core';
import { League } from 'src/app/core/models/league.model';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  private LeagueSubject = new BehaviorSubject<League | null>(null);
  public League$ = this.LeagueSubject.asObservable();

  constructor(private state: StateService, private league: LeagueService) {
    this.changeSelectedLeague()
  }  

  changeSelectedLeague(){
    const countryId = this.state.SelectedCountry?.id
    if(countryId === null) return

    this.league.loadLeague(countryId).pipe(filter(x => !!x)).subscribe((l: League) => {
      this.LeagueSubject.next(l)
    })
  }
}
