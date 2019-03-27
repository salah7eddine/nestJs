import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}

  /* @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    // tslint:disable-next-line:no-console
    console.log(req.url);
    return res.send('Hello World');
  } */
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  /* @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  } */

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  /* @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  } */

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  /* @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
  } */

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  /* @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  } */

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  /*
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
  */
}
