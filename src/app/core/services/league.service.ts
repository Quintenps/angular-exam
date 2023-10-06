import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { League } from '../models/league.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { withCache } from '@ngneat/cashew';
import { GameResult } from '../models/game-result.model';

type StandingApiResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: Array<any>;
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Array<{ league: League }>;
};

type FixtureApiResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: Array<any>;
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Array<GameResult>;
};

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private httpClient: HttpClient) {}

  loadLeague(id: number): Observable<League> {
    return this.httpClient
      .get<StandingApiResponse>(`${environment.apiUrl}/standings`, {
        context: withCache({
          key: `league-${id}`,
          ttl: environment.cacheTimeInMs,
        }),
        params: new HttpParams()
          .set('league', id)
          .set('season', new Date().getFullYear()),
        headers: new HttpHeaders()
          .set('x-rapidapi-host', 'v3.football.api-sports.io')
          .set('x-rapidapi-key', environment.apiKey),
      })
      .pipe(
        map((data: StandingApiResponse) => {
          return data.response?.[0]?.league;
        })
      );
  }

  loadFixtures(id: number, rows: number = 10): Observable<GameResult[]> {
    return this.httpClient
      .get<FixtureApiResponse>(`${environment.apiUrl}/fixtures`, {
        context: withCache({
          key: `fixtures-${id}`,
          ttl: environment.cacheTimeInMs,
        }),
        params: new HttpParams()
          .set('team', id)
          .set('last', rows),
        headers: new HttpHeaders()
          .set('x-rapidapi-host', 'v3.football.api-sports.io')
          .set('x-rapidapi-key', environment.apiKey),
      })
      .pipe(
        map((data: FixtureApiResponse) => {
          return data.response
        })
      );
  }
}
