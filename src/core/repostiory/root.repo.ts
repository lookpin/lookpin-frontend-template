import { CommonRes, ImageMockupEntity } from '@core/entitiy/common.entitiy';

export const MOCKUP_RESPONSE = {
  status: 'success',
  data: {
    image:
      'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
  },
};

export const rootRepository = {
  /**
   * 목업 fetch.
   * @returns
   */
  fetchImage() {
    return new Promise<CommonRes<ImageMockupEntity>>((resolve) =>
      setTimeout(resolve, 300),
    ).then(() => MOCKUP_RESPONSE);
  },
};
