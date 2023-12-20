import { Serializer as ПодразSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi3-подраз';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодразSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
