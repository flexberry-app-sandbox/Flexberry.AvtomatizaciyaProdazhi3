import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-prodazhi3-долж-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-долж-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-долж-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-долж-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-долж-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-ед-измер-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-ед-измер-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-ед-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-ед-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-ед-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-зак-покуп-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-зак-покуп-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-зак-покуп-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-зак-покуп-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-контр-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-контр-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-контр-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-контр-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-контр-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-менедж-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-менедж-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-менедж-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-менедж-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-менедж-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-номенк-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-номенк-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-номенк-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-номенк-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-номенк-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-организ-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-организ-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-организ-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-организ-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-организ-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-подраз-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-подраз-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-подраз-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-подраз-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-подраз-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-склады-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-склады-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-склады-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-сотруд-l');
  this.route('i-i-s-avtomatizaciya-prodazhi3-сотруд-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-сотруд-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi3-сотруд-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi3-сотруд-e/new' });
});

export default Router;
