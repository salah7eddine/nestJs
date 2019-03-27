import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

 /*  private readonly items: Item[] = [
    {
      id: '564564466',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '564564466',
      name: 'Item Two',
      qty: 50,
      description: 'This is item two',
    },
    {
      id: '564564466',
      name: 'Item Three',
      qty: 25,
      description: 'This is item three',
    },
  ];
 */

 async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

}
