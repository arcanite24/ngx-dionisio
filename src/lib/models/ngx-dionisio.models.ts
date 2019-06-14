import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const NGX_DIONISIO_CONFIG = new InjectionToken<NgxDionisioConfig>('NGX_DIONISIO_CONFIG');

export interface NgxDionisioConfig {

  // Backend config
  base_url: string;

}

export interface DionisioHello {
  version: string;
  message: string;
}

export interface DionisioCollection<T = any> {
  path: string;
  get: () => Promise<T>;
  add: (payload: any, key?: string) => Promise<any>;
  query: (payload: any) => Promise<T>;
  valueChanges: () => Observable<T>;
  queryValueChanges: (payload: any, key: string) => Observable<T>;
}

export interface DionisioDocument<T = any> {
  path: string;
  get: () => Promise<T>;
  delete: (key?: string) => Promise<any>;
  update: (payload: any, key?: string) => Promise<any>;
  modifyValue: (payload: DionisioModifyValue, key?: string) => Promise<any>;
}

export interface DionisioChange {
  collection: string;
  type: DionisioChangeTypes;
  payload: any;
}

export interface DionisioModifyValue {
  field: string;
  delta: number;
}

export enum DionisioChangeTypes {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
  Modify = 'MODIFY',
}
