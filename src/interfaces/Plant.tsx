export interface Plant {
    _id: number;
    latinname: string;
    size: 'big' | 'medium' | 'small';
    img: string;
    price: number;
    description: string;
}