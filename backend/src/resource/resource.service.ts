import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Resource, ResourceDocument } from './schemas/resource.schema';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource.name) private resourceModel: Model<ResourceDocument>,
  ) {}

  async findAll(): Promise<ResourceDocument[]> {
    return this.resourceModel.find().exec();
  }

  async findOne(id: string): Promise<ResourceDocument> {
    return this.resourceModel.findById(id).exec();
  }

  async create(resource: ResourceDocument): Promise<ResourceDocument> {
    return this.resourceModel.create(resource);
  }
}
