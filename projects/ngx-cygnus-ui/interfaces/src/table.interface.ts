import { TdFormatType } from "ngx-cygnus-ui/types";

export interface EditableTableItem {
  canEdit: boolean,
  index: number,
}

export interface TableBadge {
  key: string,
  stateActive: string,
  stateWarning: string,
  stateError: string,
}

export interface TdFormat {
  key: string,
  format: TdFormatType
}
