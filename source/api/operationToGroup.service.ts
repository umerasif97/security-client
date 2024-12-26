import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { OperationToGroupCreate } from "../model/operationToGroupCreate";
import { OperationToGroup } from "../model/operationToGroup";
import { OperationToGroupFilter } from "../model/operationToGroupFilter";
import { OperationToGroupUpdate } from "../model/operationToGroupUpdate";
import { BASE_PATH } from "../variables";
import { PaginationResponse } from "../model/paginationResponse";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";
import { OperationToGroupContainer } from "../model/operationToGroupContainer";

@Injectable()
export class OperationToGroupService {

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

    public create(body?: OperationToGroupCreate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<OperationToGroup>;
    public create(body?: OperationToGroupCreate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OperationToGroup>>;
    public create(body?: OperationToGroupCreate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OperationToGroup>>;
    public create(body?: OperationToGroupCreate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<OperationToGroup>(`${this.basePath}/operationToGroup/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map((o: any) => FlexiCoreDecycle.retrocycle(o)));
    }

    public getAll(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<OperationToGroup>>;
    public getAll(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<PaginationResponse<HttpResponse<OperationToGroup>>>;
    public getAll(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<OperationToGroup>>>;
    public getAll(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<OperationToGroup>>(`${this.basePath}/operationToGroup/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public update(body?: OperationToGroupUpdate, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<OperationToGroup>;
    public update(body?: OperationToGroupUpdate, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OperationToGroup>>;
    public update(body?: OperationToGroupUpdate, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OperationToGroup>>;
    public update(body?: OperationToGroupUpdate, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<OperationToGroup>(`${this.basePath}/operationToGroup/update`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public getAllContainers(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<OperationToGroupContainer>>;
    public getAllContainers(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<OperationToGroupContainer>>>;
    public getAllContainers(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<OperationToGroupContainer>>>;
    public getAllContainers(body?: OperationToGroupFilter, extraHttpRequestParams?: any, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<OperationToGroupContainer>>(`${this.basePath}/operationToGroup/getAllContainers`,
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