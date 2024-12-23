import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { OperationGroupCreate } from "../model/operationGroupCreate";
import { OperationGroup } from "../model/operationGroup";
import { OperationGroupFilter } from "../model/operationGroupFilter";
import { OperationGroupUpdate } from "../model/operationGroupUpdate";
import { BASE_PATH } from "../variables";
import { PaginationResponse } from "../model/paginationResponse";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";

@Injectable()
export class OperationGroupService {

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

    public create(body?: OperationGroupCreate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<OperationGroup>;
    public create(body?: OperationGroupCreate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OperationGroup>>;
    public create(body?: OperationGroupCreate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OperationGroup>>;
    public create(body?: OperationGroupCreate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<OperationGroup>(`${this.basePath}/operationGroup/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map((o: any) => FlexiCoreDecycle.retrocycle(o)));
    }

    public getAll(body?: OperationGroupFilter, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<OperationGroup>>;
    public getAll(body?: OperationGroupFilter, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<PaginationResponse<HttpResponse<OperationGroup>>>;
    public getAll(body?: OperationGroupFilter, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<OperationGroup>>>;
    public getAll(body?: OperationGroupFilter, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<OperationGroup>>(`${this.basePath}/operationGroup/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public update(body?: OperationGroupUpdate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<OperationGroup>;
    public update(body?: OperationGroupUpdate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OperationGroup>>;
    public update(body?: OperationGroupUpdate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OperationGroup>>;
    public update(body?: OperationGroupUpdate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<OperationGroup>(`${this.basePath}/operationGroup/update`,
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