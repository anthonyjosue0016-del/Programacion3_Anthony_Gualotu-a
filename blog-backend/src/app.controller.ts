import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

  @Post("/products")
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get("/products")
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }

  @Get("/products/:id")
  findById(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  update(@Param('id') id: string,
         @Body() updateProduct: ProductDto): ProductDto | null {
    return this.appService.update(id, updateProduct);
  }

  @Delete("/products/:id")
  deleteById(@Param('id') id: string): ProductDto | null {
    return this.appService.deleteById(id);
  }

  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
    return this.appService.areaTriangulo(data);
  }
}

