import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗакПокупMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi3-зак-покуп';

import ОтчОПродModel from './i-i-s-avtomatizaciya-prodazhi3-отч-о-прод';

let Model = ОтчОПродModel.extend(ЗакПокупMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
