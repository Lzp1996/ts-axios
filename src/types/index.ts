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
}