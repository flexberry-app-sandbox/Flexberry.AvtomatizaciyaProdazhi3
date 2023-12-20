import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtomatizaciya_prodazhi3ДолжLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-долж-l';
import IISAvtomatizaciya_prodazhi3ЕдИзмерLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-ед-измер-l';
import IISAvtomatizaciya_prodazhi3ЗакПокупLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l';
import IISAvtomatizaciya_prodazhi3КолВРезLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l';
import IISAvtomatizaciya_prodazhi3КонтрLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-контр-l';
import IISAvtomatizaciya_prodazhi3МенеджLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-менедж-l';
import IISAvtomatizaciya_prodazhi3НоменкLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-номенк-l';
import IISAvtomatizaciya_prodazhi3ОрганизLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-организ-l';
import IISAvtomatizaciya_prodazhi3ОтчОПродLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l';
import IISAvtomatizaciya_prodazhi3ОтчОстНСклLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l';
import IISAvtomatizaciya_prodazhi3ПодразLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-подраз-l';
import IISAvtomatizaciya_prodazhi3СкладыLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-склады-l';
import IISAvtomatizaciya_prodazhi3СотрудLForm from './forms/i-i-s-avtomatizaciya-prodazhi3-сотруд-l';
import IISAvtomatizaciya_prodazhi3ДолжEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-долж-e';
import IISAvtomatizaciya_prodazhi3ЕдИзмерEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-ед-измер-e';
import IISAvtomatizaciya_prodazhi3ЗакПокупEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-зак-покуп-e';
import IISAvtomatizaciya_prodazhi3КолВРезEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-e';
import IISAvtomatizaciya_prodazhi3КонтрEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-контр-e';
import IISAvtomatizaciya_prodazhi3МенеджEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-менедж-e';
import IISAvtomatizaciya_prodazhi3НоменкEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-номенк-e';
import IISAvtomatizaciya_prodazhi3ОрганизEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-организ-e';
import IISAvtomatizaciya_prodazhi3ОтчОПродEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-e';
import IISAvtomatizaciya_prodazhi3ОтчОстНСклEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-e';
import IISAvtomatizaciya_prodazhi3ПодразEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-подраз-e';
import IISAvtomatizaciya_prodazhi3СкладыEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-склады-e';
import IISAvtomatizaciya_prodazhi3СотрудEForm from './forms/i-i-s-avtomatizaciya-prodazhi3-сотруд-e';
import IISAvtomatizaciya_prodazhi3ДолжModel from './models/i-i-s-avtomatizaciya-prodazhi3-долж';
import IISAvtomatizaciya_prodazhi3ЕдИзмерModel from './models/i-i-s-avtomatizaciya-prodazhi3-ед-измер';
import IISAvtomatizaciya_prodazhi3ЗакПокупModel from './models/i-i-s-avtomatizaciya-prodazhi3-зак-покуп';
import IISAvtomatizaciya_prodazhi3КолВРезModel from './models/i-i-s-avtomatizaciya-prodazhi3-кол-в-рез';
import IISAvtomatizaciya_prodazhi3КонтрModel from './models/i-i-s-avtomatizaciya-prodazhi3-контр';
import IISAvtomatizaciya_prodazhi3МенеджModel from './models/i-i-s-avtomatizaciya-prodazhi3-менедж';
import IISAvtomatizaciya_prodazhi3НоменкModel from './models/i-i-s-avtomatizaciya-prodazhi3-номенк';
import IISAvtomatizaciya_prodazhi3ОрганизModel from './models/i-i-s-avtomatizaciya-prodazhi3-организ';
import IISAvtomatizaciya_prodazhi3ОтчОПродModel from './models/i-i-s-avtomatizaciya-prodazhi3-отч-о-прод';
import IISAvtomatizaciya_prodazhi3ОтчОстНСклModel from './models/i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл';
import IISAvtomatizaciya_prodazhi3ПодразModel from './models/i-i-s-avtomatizaciya-prodazhi3-подраз';
import IISAvtomatizaciya_prodazhi3СкладыModel from './models/i-i-s-avtomatizaciya-prodazhi3-склады';
import IISAvtomatizaciya_prodazhi3СотрудModel from './models/i-i-s-avtomatizaciya-prodazhi3-сотруд';
import IISAvtomatizaciya_prodazhi3ТЧТовИУсModel from './models/i-i-s-avtomatizaciya-prodazhi3-т-ч-тов-и-ус';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-prodazhi3-долж': IISAvtomatizaciya_prodazhi3ДолжModel,
    'i-i-s-avtomatizaciya-prodazhi3-ед-измер': IISAvtomatizaciya_prodazhi3ЕдИзмерModel,
    'i-i-s-avtomatizaciya-prodazhi3-зак-покуп': IISAvtomatizaciya_prodazhi3ЗакПокупModel,
    'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез': IISAvtomatizaciya_prodazhi3КолВРезModel,
    'i-i-s-avtomatizaciya-prodazhi3-контр': IISAvtomatizaciya_prodazhi3КонтрModel,
    'i-i-s-avtomatizaciya-prodazhi3-менедж': IISAvtomatizaciya_prodazhi3МенеджModel,
    'i-i-s-avtomatizaciya-prodazhi3-номенк': IISAvtomatizaciya_prodazhi3НоменкModel,
    'i-i-s-avtomatizaciya-prodazhi3-организ': IISAvtomatizaciya_prodazhi3ОрганизModel,
    'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод': IISAvtomatizaciya_prodazhi3ОтчОПродModel,
    'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл': IISAvtomatizaciya_prodazhi3ОтчОстНСклModel,
    'i-i-s-avtomatizaciya-prodazhi3-подраз': IISAvtomatizaciya_prodazhi3ПодразModel,
    'i-i-s-avtomatizaciya-prodazhi3-склады': IISAvtomatizaciya_prodazhi3СкладыModel,
    'i-i-s-avtomatizaciya-prodazhi3-сотруд': IISAvtomatizaciya_prodazhi3СотрудModel,
    'i-i-s-avtomatizaciya-prodazhi3-т-ч-тов-и-ус': IISAvtomatizaciya_prodazhi3ТЧТовИУсModel
  },

  'application-name': 'Avtomatizaciya_ prodazhi2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_ prodazhi2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_ prodazhi2',
          title: 'Avtomatizaciya_ prodazhi2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'avtomatizaciya-prodazhi2': {
          caption: 'Avtomatizaciya_Prodazhi2',
          title: 'Avtomatizaciya_Prodazhi2',
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l': {
              caption: 'Заказ покупателя',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l': {
              caption: 'Отчет о продажах',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l': {
              caption: 'Отчет об остатках на складе',
              title: ''
            }
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-prodazhi3-ед-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-долж-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-менедж-l': {
              caption: 'Менеджер',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-сотруд-l': {
              caption: 'Сотрудник',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-номенк-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-организ-l': {
              caption: 'Организация',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-подраз-l': {
              caption: 'Подразделение',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l': {
              caption: 'Количество в резерве',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-контр-l': {
              caption: 'Контрагент',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi3-склады-l': {
              caption: 'Склады',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avtomatizaciya-prodazhi3-долж-l': IISAvtomatizaciya_prodazhi3ДолжLForm,
    'i-i-s-avtomatizaciya-prodazhi3-ед-измер-l': IISAvtomatizaciya_prodazhi3ЕдИзмерLForm,
    'i-i-s-avtomatizaciya-prodazhi3-зак-покуп-l': IISAvtomatizaciya_prodazhi3ЗакПокупLForm,
    'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-l': IISAvtomatizaciya_prodazhi3КолВРезLForm,
    'i-i-s-avtomatizaciya-prodazhi3-контр-l': IISAvtomatizaciya_prodazhi3КонтрLForm,
    'i-i-s-avtomatizaciya-prodazhi3-менедж-l': IISAvtomatizaciya_prodazhi3МенеджLForm,
    'i-i-s-avtomatizaciya-prodazhi3-номенк-l': IISAvtomatizaciya_prodazhi3НоменкLForm,
    'i-i-s-avtomatizaciya-prodazhi3-организ-l': IISAvtomatizaciya_prodazhi3ОрганизLForm,
    'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-l': IISAvtomatizaciya_prodazhi3ОтчОПродLForm,
    'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-l': IISAvtomatizaciya_prodazhi3ОтчОстНСклLForm,
    'i-i-s-avtomatizaciya-prodazhi3-подраз-l': IISAvtomatizaciya_prodazhi3ПодразLForm,
    'i-i-s-avtomatizaciya-prodazhi3-склады-l': IISAvtomatizaciya_prodazhi3СкладыLForm,
    'i-i-s-avtomatizaciya-prodazhi3-сотруд-l': IISAvtomatizaciya_prodazhi3СотрудLForm,
    'i-i-s-avtomatizaciya-prodazhi3-долж-e': IISAvtomatizaciya_prodazhi3ДолжEForm,
    'i-i-s-avtomatizaciya-prodazhi3-ед-измер-e': IISAvtomatizaciya_prodazhi3ЕдИзмерEForm,
    'i-i-s-avtomatizaciya-prodazhi3-зак-покуп-e': IISAvtomatizaciya_prodazhi3ЗакПокупEForm,
    'i-i-s-avtomatizaciya-prodazhi3-кол-в-рез-e': IISAvtomatizaciya_prodazhi3КолВРезEForm,
    'i-i-s-avtomatizaciya-prodazhi3-контр-e': IISAvtomatizaciya_prodazhi3КонтрEForm,
    'i-i-s-avtomatizaciya-prodazhi3-менедж-e': IISAvtomatizaciya_prodazhi3МенеджEForm,
    'i-i-s-avtomatizaciya-prodazhi3-номенк-e': IISAvtomatizaciya_prodazhi3НоменкEForm,
    'i-i-s-avtomatizaciya-prodazhi3-организ-e': IISAvtomatizaciya_prodazhi3ОрганизEForm,
    'i-i-s-avtomatizaciya-prodazhi3-отч-о-прод-e': IISAvtomatizaciya_prodazhi3ОтчОПродEForm,
    'i-i-s-avtomatizaciya-prodazhi3-отч-ост-н-скл-e': IISAvtomatizaciya_prodazhi3ОтчОстНСклEForm,
    'i-i-s-avtomatizaciya-prodazhi3-подраз-e': IISAvtomatizaciya_prodazhi3ПодразEForm,
    'i-i-s-avtomatizaciya-prodazhi3-склады-e': IISAvtomatizaciya_prodazhi3СкладыEForm,
    'i-i-s-avtomatizaciya-prodazhi3-сотруд-e': IISAvtomatizaciya_prodazhi3СотрудEForm
  },

});

export default translations;
