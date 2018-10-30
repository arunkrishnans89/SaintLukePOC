import { appConfig } from '../appConfig';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class testService {
    constructor(private _httpClient:HttpClient){}

    getScheduleData(){
        debugger;
        return this._httpClient.get(appConfig.apiUrl);
    }
}