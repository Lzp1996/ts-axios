export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'HEAD' | 'head'
  | 'options' | 'OPTIONS'
  | 'POST' |  'post'
  | 'put' | 'PUT'
  | 'PATCH' | 'patch'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  timeout?: number
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse>{

}


export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string| null
  request?: any
  response: AxiosResponse
}
