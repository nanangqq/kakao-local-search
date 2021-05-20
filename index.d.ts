export type AddressSearchResultDocuments = AddressSearchResultDocument[]

export type AddressSearchResultDocument = {
  address: Address
  address_name: string
  address_type: string
  road_address: null
  x: string
  y: string
}

export type Address = {
  address_name: string
  b_code: string
  h_code: string
  main_address_no: string
  mountain_yn: string
  region_1depth_name: string
  region_2depth_name: string
  region_3depth_h_name: string
  region_3depth_name: string
  sub_address_no: string
  x: string
  y: string
}

export function kakaoAddrDirect(
  searchText: string,
): Promise<AddressSearchResultDocuments>

export type PlaceSearchResultDocuments = PlaceSearchResultDocument[]

export type PlaceSearchResultDocument = {
  address_name: string
  category_group_code: string
  category_group_name: string
  category_name: string
  distance: string
  id: string
  phone: string
  place_name: string
  place_url: string
  road_address_name: string
  x: string
  y: string
}

export function kakaoPlaceDirect(
  searchText: string,
): Promise<PlaceSearchResultDocuments>

type AsyncContextFunc = (ctx) => void

export function kakaoAddrAsyncContextByKey(
  queryKeyName: string,
): AsyncContextFunc

export function kakaoPlaceAsyncContextByKey(
  queryKeyName: string,
): AsyncContextFunc
