import { Serializer as ЗакПокупSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi3-зак-покуп';
import ОтчОПродSerializer from './i-i-s-avtomatizaciya-prodazhi3-отч-о-прод';

export default ОтчОПродSerializer.extend(ЗакПокупSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
