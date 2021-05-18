import { AxiosResponse } from 'axios'

export async function kakaoAddrDirect(
  searchText: string,
): Promise<AxiosResponse>
export async function kakaoPlaceDirect(
  searchText: string,
): Promise<AxiosResponse>

type AsyncContextFunc = (ctx) => void
export function kakaoAddrAsyncContextByKey(
  queryKeyName: string,
): AsyncContextFunc
export function kakaoPlaceAsyncContextByKey(
  queryKeyName: string,
): AsyncContextFunc
