import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RoleToBaseclassCreate } from "../model/roleToBaseclassCreate";
import { RoleToBaseclass } from "../model/roleToBaseclass";
import { RoleToBaseclassFilter } from "../model/roleToBaseclassFilter";
import { RoleToBaseclassUpdate } from "../model/roleToBaseclassUpdate";
import { BASE_PATH } from "../variables";
import { PaginationResponse } from "../model/paginationResponse";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";

@Injectable()
export class RoleToBaseclassService {

    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    public create(body?: RoleToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<RoleToBaseclass>;
    public create(body?: RoleToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleToBaseclass>>;
    public create(body?: RoleToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleToBaseclass>>;
    public create(body?: RoleToBaseclassCreate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<RoleToBaseclass>(`${this.basePath}/roleToBaseclass/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map((o: any) => FlexiCoreDecycle.retrocycle(o)));
    }

    public getAll(body?: RoleToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<RoleToBaseclass>>;
    public getAll(body?: RoleToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<PaginationResponse<HttpResponse<RoleToBaseclass>>>;
    public getAll(body?: RoleToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<RoleToBaseclass>>>;
    public getAll(body?: RoleToBaseclassFilter, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<RoleToBaseclass>>(`${this.basePath}/roleToBaseclass/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public update(body?: RoleToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<RoleToBaseclass>;
    public update(body?: RoleToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleToBaseclass>>;
    public update(body?: RoleToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleToBaseclass>>;
    public update(body?: RoleToBaseclassUpdate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<RoleToBaseclass>(`${this.basePath}/roleToBaseclass/update`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

}