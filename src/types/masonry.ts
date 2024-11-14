export interface ItemOption {
    id: number;
    title: string;
    url: string;
    width: number;
    height: number;
    avatar: string;
    user: string;
    views: number;
}

export interface PageProps{
    page: number;
    size: number;
    total: number;
    max: number;
    list: ItemOption[];
    end: boolean;
  }