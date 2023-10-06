import { GameResult } from './../../core/models/game-result.model';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {
  @Input() GameResult!: Observable<GameResult[]>;
  GameResults: GameResult[] = [];

  ngOnInit(): void {
    this.GameResult.subscribe((data) => {
      this.GameResults = data
    })
  }
}
