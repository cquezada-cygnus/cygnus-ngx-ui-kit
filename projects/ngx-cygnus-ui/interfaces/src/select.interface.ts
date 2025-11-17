export interface SelectGeneric {
  value: any,
  option: string,
}

export interface SelectCollection {
  key: string,
  keyItems: string[],
}

export interface SelectCollectOptions {
  key: string,
  selects: SelectGeneric[],
}
