import { CommonRes } from '@core/entitiy/common.entitiy';
import { RootMainImageEntity } from '@core/entitiy/root.entity';

export const MOCKUP_RESPONSE = {
  status: 'success',
  data: {
    image:
      'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
    category_id: 'unsplash',
  },
};

export const rootRepository = {
  /**
   * 목업 fetch.
   * @returns
   */
  fetchImage() {
    return new Promise<CommonRes<RootMainImageEntity>>((resolve) =>
      setTimeout(resolve, 300),
    ).then(() => MOCKUP_RESPONSE);
  },
};
