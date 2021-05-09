export interface IImage{
    title: string;
    description: string;
    url: string;
    icons: IIcon[];
}

interface IIcon{
    description: string;
    url: string;
}