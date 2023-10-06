import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GameResult } from 'src/app/core/models/game-result.model';
import { LeagueService } from 'src/app/core/services/league.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  private GameResultsSubject = new BehaviorSubject<GameResult[]>([]);
  public GameResults$ = this.GameResultsSubject.asObservable();

  constructor(private route: ActivatedRoute, private league: LeagueService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.league.loadFixtures(params['id']).subscribe((response) => this.GameResultsSubject.next(response))
    })
  }

}
