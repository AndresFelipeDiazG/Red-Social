import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../config/app-config';
import { AuthenticatedUser, Credentials, LoginResponse } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthClient {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(APP_CONFIG).apiBaseUrl;

  /**
   * GET con la cabecera Authorization: Basic.
   * */
  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(`${this.baseUrl}/auth/login`, {
      headers: new HttpHeaders({ Authorization: `Basic ${encodeBasic(credentials)}` }),
    });
  }

  me(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(`${this.baseUrl}/auth/me`);
  }
}

function encodeBasic({ username, password }: Credentials): string {
  const utf8 = new TextEncoder().encode(`${username}:${password}`);
  return btoa(String.fromCharCode(...utf8));
}
