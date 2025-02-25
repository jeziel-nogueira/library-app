export interface Book{
    id?:string;
    title:string;
    author:string;
    description:string;
    genre?:string;
    isbn?:string;
    status: 'AVAILABLE' | 'RESERVED' | 'UNAVAILABLE';
    publisher?:string;
    tags:string;
    coverUrl?:string;
}