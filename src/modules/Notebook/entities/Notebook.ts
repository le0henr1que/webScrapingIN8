
export interface Notebook {
    sort(arg0: (itemA: Notebook, itemB: Notebook) => boolean): unknown;
    // type: string;
    price: number;
    brand: string;
    model: string;
    description: string;
    memoryType: string;
    operationalSystem:string;
    memoryAmount: number;
    reviews: number;
    image: string;
    link:string;
}

