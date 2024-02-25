import { ApiProperty } from "@nestjs/swagger";

class ShoppingCartItem {

    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: "Armarium quasi." })
    name: string;

    @ApiProperty({ example: 2500 })
    price: number;

    @ApiProperty({ example: "https://loremflickr.com/640/480/technics?random=426" })
    image: string;

    @ApiProperty({ example: 8 })
    in_stock: number;

    @ApiProperty({ example: 'Gasoline' })
    parts_manufacturer: string;

    @ApiProperty({ example: "Ariston" })
    boiler_manufacturer: string;

    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 4 })
    partId: number;

    @ApiProperty({ example: 3 })
    count: number;

    @ApiProperty({ example: 6602 })
    total_price: number;

    @ApiProperty({ example: "2024-02-17T08:14:17.000Z" })
    createdAt: string;

    @ApiProperty({ example: "2024-02-17T08:14:17.000Z" })
    updatedAt: string;

}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCartResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
    @ApiProperty({ example: 1 })
    count: number;
}
export class UpdateCountRequest {
    @ApiProperty({ example: 1 })
    count: number;
}

export class TotalPriceResponse {
    @ApiProperty({ example: 1000 })
    total_price: number;
}
export class TotalPriceRequest {
    @ApiProperty({ example: 1000 })
    total_price: number;
}