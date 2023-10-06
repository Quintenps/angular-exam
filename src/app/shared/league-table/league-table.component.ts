import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { League, Standing } from 'src/app/core/models/league.model';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  @Input() League!: Observable<League | null>;
  standings: Standing[] = [];

  ngOnInit(): void {
    this.League.pipe(filter(league => !!league)).subscribe((data) => {
      console.log(data)
      this.standings = data!.standings[0]
    })
  }
}
