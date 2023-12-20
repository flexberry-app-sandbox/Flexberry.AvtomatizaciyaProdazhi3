import { Serializer as СотрудSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi3-сотруд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СотрудSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
