import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TenantToBaseclassCreate } from "../model/tenantToBaseclassCreate";
import { TenantToBaseclass } from "../model/tenantToBaseclass";
import { TenantToBaseclassFilter } from "../model/tenantToBaseclassFilter";
import { TenantToBaseclassUpdate } from "../model/tenantToBaseclassUpdate";
import { BASE_PATH } from "../variables";
import { PaginationResponse } from "../model/paginationResponse";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";

@Injectable()
export class TenantToBaseclassService {

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

    public create(body?: TenantToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<TenantToBaseclass>;
    public create(body?: TenantToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TenantToBaseclass>>;
    public create(body?: TenantToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TenantToBaseclass>>;
    public create(body?: TenantToBaseclassCreate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<TenantToBaseclass>(`${this.basePath}/tenantToBaseclass/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map((o: any) => FlexiCoreDecycle.retrocycle(o)));
    }

    public getAll(body?: TenantToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<TenantToBaseclass>>;
    public getAll(body?: TenantToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<PaginationResponse<HttpResponse<TenantToBaseclass>>>;
    public getAll(body?: TenantToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<TenantToBaseclass>>>;
    public getAll(body?: TenantToBaseclassFilter, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<TenantToBaseclass>>(`${this.basePath}/tenantToBaseclass/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public update(body?: TenantToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<TenantToBaseclass>;
    public update(body?: TenantToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TenantToBaseclass>>;
    public update(body?: TenantToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TenantToBaseclass>>;
    public update(body?: TenantToBaseclassUpdate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<TenantToBaseclass>(`${this.basePath}/tenantToBaseclass/update`,
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