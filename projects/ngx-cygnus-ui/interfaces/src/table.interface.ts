export interface TableItem {
  name: string,
  age: string,
  email?: string,
  address: string,
  state?: string,
  company?: string,
  id?: string,
  startDate?: string | Date,
  isHover?: boolean,
  base64?: string,
  isChecked?: boolean,
}

export interface EditableTableItem {
  canEdit: boolean,
  index: number,
}
