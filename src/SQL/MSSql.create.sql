﻿



CREATE TABLE [ЗакПокуп] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОкончания] DATETIME  NULL,

	 [СостОплат] VARCHAR(15)  NULL,

	 [СостОтгруз] VARCHAR(12)  NULL,

	 [СумВклНДС] BIT  NULL,

	 [Сумма] INT  NULL,

	 [Контр] UNIQUEIDENTIFIER  NOT NULL,

	 [Менедж] UNIQUEIDENTIFIER  NOT NULL,

	 [Организ] UNIQUEIDENTIFIER  NOT NULL,

	 [Подраз] UNIQUEIDENTIFIER  NOT NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотруд] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Долж] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧТовИУс] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количестов] INT  NULL,

	 [КолКЗаказПоста] INT  NULL,

	 [Сумма] INT  NULL,

	 [СуммаНДС] INT  NULL,

	 [Цена] INT  NULL,

	 [Номенк] UNIQUEIDENTIFIER  NOT NULL,

	 [ОтчОПрод_m0] UNIQUEIDENTIFIER  NULL,

	 [ОтчОПрод_m1] UNIQUEIDENTIFIER  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Номенк] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Номен] VARCHAR(255)  NULL,

	 [ЕдИзмер] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Долж] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Должность] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Контр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Контрагент] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [КолВРез] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [Номенк] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Менедж] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотруд] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Склады] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Склад] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЕдИзмер] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ЕдИзм] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтчОстНСкл] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Колл] INT  NULL,

	 [КолВРез] UNIQUEIDENTIFIER  NOT NULL,

	 [Номенк] UNIQUEIDENTIFIER  NOT NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Подраз] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Подразделение] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтчОПрод] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаОкончания] DATETIME  NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [СостОтгруз] VARCHAR(12)  NULL,

	 [СостОплат] VARCHAR(15)  NULL,

	 [Сумма] INT  NULL,

	 [СумВклНДС] BIT  NULL,

	 [Организ] UNIQUEIDENTIFIER  NOT NULL,

	 [Контр] UNIQUEIDENTIFIER  NOT NULL,

	 [Подраз] UNIQUEIDENTIFIER  NOT NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 [Менедж] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




