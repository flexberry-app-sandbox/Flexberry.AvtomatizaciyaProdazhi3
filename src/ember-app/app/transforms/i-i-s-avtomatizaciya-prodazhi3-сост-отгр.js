import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОтгрEnum from '../enums/i-i-s-avtomatizaciya-prodazhi3-сост-отгр';

export default FlexberryEnum.extend({
  enum: СостОтгрEnum,
  sourceType: 'IIS.Avtomatizaciya_prodazhi3.СостОтгр'
});
