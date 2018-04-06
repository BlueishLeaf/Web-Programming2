export interface IBook {
    id: string;
    volumeInfo: IVolumeInfo;
}

export interface IResponse {
    items: IBook[];
}

export interface IVolumeInfo {
    title: string;
    description: string;
}