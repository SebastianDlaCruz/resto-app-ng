export enum TypeButton {
  BUTTON = 'button',
  LINK = 'link'
}

export interface MenuItems {
  name: string;
  link?: string;
  action?: () => void;
  icon?: string;
  type: TypeButton;
}
