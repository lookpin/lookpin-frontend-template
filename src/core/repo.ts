import { dummyRepository } from './repositories/dummy.repo';
import { rootRepository } from './repositories/root.repo';

export default {
  root: rootRepository,
  dummy: dummyRepository,
};
