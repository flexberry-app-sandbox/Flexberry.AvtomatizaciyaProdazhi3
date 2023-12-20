import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.caption'),
          title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l.title'),
              icon: 'suitcase',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi3-ед-измер-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-ед-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-ед-измер-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-долж-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-долж-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-долж-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-менедж-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-менедж-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-менедж-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-сотруд-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-сотруд-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-сотруд-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-номенк-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-номенк-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-номенк-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-организ-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-организ-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-организ-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-подраз-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-подраз-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-подраз-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-контр-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-контр-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-контр-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi3-склады-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi3-склады-l.title'),
              icon: 'building',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})