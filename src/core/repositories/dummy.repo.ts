import { timeout } from 'jordy';

export const dummyRepository = {
  fetchCompany() {
    return timeout(1000, 'lookpin');
  },
};
