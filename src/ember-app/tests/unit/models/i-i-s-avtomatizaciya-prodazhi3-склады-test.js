import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-prodazhi3-склады', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi3-склады', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avtomatizaciya-prodazhi3-долж',
    'model:i-i-s-avtomatizaciya-prodazhi3-ед-измер',
    'model:i-i-s-avtomatizaciya-prodazhi3-зак-покуп',
    'model:i-i-s-avtomatizaciya-prodazhi3-кол-в-рез',
    'model:i-i-s-avtomatizaciya-prodazhi3-контр',
    'model:i-i-s-avtomatizaciya-prodazhi3-менедж',
    'model:i-i-s-avtomatizaciya-prodazhi3-номенк',
    'model:i-i-s-avtomatizaciya-prodazhi3-организ',
    'model:i-i-s-avtomatizaciya-prodazhi3-отч-о-прод',
    'model:i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл',
    'model:i-i-s-avtomatizaciya-prodazhi3-подраз',
    'model:i-i-s-avtomatizaciya-prodazhi3-склады',
    'model:i-i-s-avtomatizaciya-prodazhi3-сотруд',
    'model:i-i-s-avtomatizaciya-prodazhi3-т-ч-тов-и-ус',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
