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
