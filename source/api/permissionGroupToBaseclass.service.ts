import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PermissionGroupToBaseclassCreate } from "../model/permissionGroupToBaseclassCreate";
import { PermissionGroupToBaseclass } from "../model/permissionGroupToBaseclass";
import { PermissionGroupToBaseclassFilter } from "../model/permissionGroupToBaseclassFilter";
import { PermissionGroupToBaseclassUpdate } from "../model/permissionGroupToBaseclassUpdate";
import { BASE_PATH } from "../variables";
import { PaginationResponse } from "../model/paginationResponse";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";

@Injectable()
export class PermissionGroupToBaseclassService {

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

    public create(body?: PermissionGroupToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PermissionGroupToBaseclass>;
    public create(body?: PermissionGroupToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PermissionGroupToBaseclass>>;
    public create(body?: PermissionGroupToBaseclassCreate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PermissionGroupToBaseclass>>;
    public create(body?: PermissionGroupToBaseclassCreate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PermissionGroupToBaseclass>(`${this.basePath}/permissionGroupToBaseclass/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map((o: any) => FlexiCoreDecycle.retrocycle(o)));
    }

    public getAll(body?: PermissionGroupToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<PermissionGroupToBaseclass>>;
    public getAll(body?: PermissionGroupToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<PaginationResponse<HttpResponse<PermissionGroupToBaseclass>>>;
    public getAll(body?: PermissionGroupToBaseclassFilter, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<PermissionGroupToBaseclass>>>;
    public getAll(body?: PermissionGroupToBaseclassFilter, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<PermissionGroupToBaseclass>>(`${this.basePath}/permissionGroupToBaseclass/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public update(body?: PermissionGroupToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PermissionGroupToBaseclass>;
    public update(body?: PermissionGroupToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PermissionGroupToBaseclass>>;
    public update(body?: PermissionGroupToBaseclassUpdate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PermissionGroupToBaseclass>>;
    public update(body?: PermissionGroupToBaseclassUpdate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<PermissionGroupToBaseclass>(`${this.basePath}/permissionGroupToBaseclass/update`,
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