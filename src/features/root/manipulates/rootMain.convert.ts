import { RootMainImageEntity } from '@core/entitiy/root.entity';
import { RootMainImageModel } from '../models';

export function toRootMainImageModel(entity: RootMainImageEntity) {
  const result: RootMainImageModel = {
    image: entity.image,
    categoryId: entity.category_id,
  };
  return result;
}
