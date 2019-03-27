import { CreateItemDto } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  /* @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    // tslint:disable-next-line:no-console
    console.log(req.url);
    return res.send('Hello World');
  } */
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  /* @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  } */

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
