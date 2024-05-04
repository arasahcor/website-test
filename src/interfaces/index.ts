export interface ICardInfo {
    id: string | number;
    title: string;
    subtitle: string;
    coming?: boolean;
    description: string;
    imageUrl: string;
  }

  export interface INavOptions{
    id:string |number;
    name:string;
    href:string;
    soon:boolean;
  }

  export interface IIcon{
    id:string | number;
    name: string;
    img:string
  }