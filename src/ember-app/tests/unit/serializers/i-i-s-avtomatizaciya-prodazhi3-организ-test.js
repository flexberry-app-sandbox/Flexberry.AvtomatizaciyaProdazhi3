import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-prodazhi3-организ', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi3-организ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-prodazhi3-организ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-prodazhi3-сост-опл',
    'transform:i-i-s-avtomatizaciya-prodazhi3-сост-отгр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
