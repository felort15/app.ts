export interface BaseModel{
    readonly id: string | number;
    readonly createdAt: Date;
    updatedAt?: Date;
}

export interface BaseProduct extends BaseModel{
    readonly title: string;
    readonly price: number;
}


