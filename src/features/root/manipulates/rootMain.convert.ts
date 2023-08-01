import { RootMainImageEntity } from '@core/entitiy/root.entity';
import { RootMainImageUiState } from '../uiStates';

export function toRootMainImageUiState(entity: RootMainImageEntity) {
  const result: RootMainImageUiState = {
    image: entity.image,
    categoryId: entity.category_id,
  };
  return result;
}
