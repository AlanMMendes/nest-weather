import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findWeatherLocation(@Param('key') key: any): Promise<any> {
    return this.productsService.findLocation(key);
  }
}
