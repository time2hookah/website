export default function getEnvironmentSettings(){
    var settings = {};

    settings.host = window.location.host;

    var host = settings.host;
    var hostSplit = host.split('.');

    if (hostSplit[0] == 'www') {
        hostSplit = hostSplit.splice(1);
        host = hostSplit.join('.');
    }

    settings.env = host.slice(0, 3);

    settings.dsn = [];
    settings.urls = {};
    settings.oneLogin = {};

    settings.kronos = {};
    settings.kronos.username 		 = 'MParker';
    settings.kronos.password 		 = 'P@ss3333';
    settings.kronos.companyShortName = 'PayrollReadyAdmin';
    settings.kronos.apiKey			 = 'ay968ozjz2mb22xgp6022udkkng9f05n';
    settings.kronos.endpoint1 		 = 'https://secure2.saashr.com/ta/rest/v1/';
    settings.kronos.endpoint2 		 = 'https://secure2.saashr.com/ta/rest/v2/';

    switch( settings.env ){
    /* case 'cb':
    case 'loc':
    case '127':{
        settings.email = {
            errorTo        : 'shirak.avakian@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'shirak.avakian@worktray.com',
            useRealEmail   : false,
        };

        settings.environment        = 'local';
        settings.TPAManagerEmail    = 'shirak.avakian@worktray.com';
        settings.urls = {
            crmSignup      : 'http://shirak-suite.qbillc.com:82/Account/CRMSignUp/' ,
            crmCRMProxy    : 'http://dev-CRMProxy.qbillc.com/' ,
            employeeSignup : 'https://shirak-suite.qbillc.com:82/Account/employeeSignup/',
            home           : 'https://shirak-suite.qbillc.com:82/',
            REST           : 'https://shirak-services.qbillc.com/rest/QBI_API/'
        };

        settings.isHttps  = false;
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };
        settings.oneLogin = {
            clientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            secretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'http://10.5.2.10,http://127.0.0.1,http://localhost',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://local-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            settings.api                = refreshWSDL    serviceA 'Yehttp://service.worktray.com/s'
        };
        break;
                } */

    case 'shi':{
        settings.email = {
            errorTo        : 'shirak.avakian@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'shirak.avakian@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://shirak-suite.qbillc.com/Account/CRMSignUp/' ,
            kronosSignup   : 'https://shirak-suite.qbillc.com/Account/Signup/' ,
            clientSignup   : 'https://shirak-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'https://localhost/CRMProxy/' ,
            employeeSignup : 'https://shirak-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://shirak-suite.qbillc.com/',
            REST           : 'https://shirak-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://shirak-suite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://shirak-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'Yes'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'shirak';
        settings.TPAManagerEmail    = 'shirak.avakian@worktray.com';
        settings.isHttps            = false;
        break;
    }

    case 'loc':
    case 'ham':{
        settings.email = {
            errorTo        : 'hamlet.tamazian@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'hamlet.tamazian@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://hamlet-suite.qbillc.com/Account/CRMSignUp/' ,
            kronosSignup   : 'https://hamlet-suite.qbillc.com/Account/Signup/' ,
            clientSignup   : 'https://hamlet-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'https://localhost/CRMProxy/' ,
            employeeSignup : 'https://hamlet-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://hamlet-suite.qbillc.com/',
            REST           : 'https://hamlet-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://hamlet-suite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://ham-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'Yes'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'hamlet';
        settings.TPAManagerEmail    = 'hamlet.tamazian@worktray.com';
        settings.isHttps                        = false;
        break;
    }

    case 'bed':{
        settings.email = {
            errorTo        : 'peter.garabedian@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'peter.garabedian@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://bedo-suite.qbillc.com/Account/CRMSignUp/' ,
            kronosSignup   : 'https://bedo-suite.qbillc.com/Account/Signup/' ,
            clientSignup   : 'https://bedo-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'http://dev-CRMProxy.qbillc.com/' ,
            employeeSignup : 'https://bedo-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://bedo-suite.qbillc.com/',
            REST           : 'https://bedo-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://bedo-suite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://bedo-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'Yes'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'Bedo';
        settings.TPAManagerEmail    = 'peter.garabedian@worktray.com';
        settings.isHttps            = false;
        break;
    }

    case 'CFD':
    case 'dev':	{
        settings.email = {
            errorTo        : 'dev.team@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'dev.team@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://devsuite.qbillc.com/Account/CRMSignUp/' ,
            kronosSignup   : 'https://devsuite.qbillc.com/Accoclientgnup/' ,
            clientSignup   : 'https://shirak-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'http://dev-CRMProxy.qbillc.com/' ,
            employeeSignup : 'https://devsuite-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://devsuite.qbillc.com/',
            REST           : 'https://dev-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://devsuite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://dev-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'Yes'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'Development';
        settings.TPAManagerEmail    = 'dev.team@worktray.com';
        settings.isHttps            = true;
        break;
    }

    case 'QA-':
    case 'QA':	{
        settings.email = {
            errorTo        : 'dev.team@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'dev.team@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://qa-suite.qbillc.com/Account/CRMSignUp/'  ,
            kronosSignup   : 'https://qa-suite.qbillc.com/Account/Signup/' ,
            clientSignup   : 'https://qa-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'http://dev-CRMProxy.qbillc.com/' ,
            employeeSignup : 'https://qa-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://qa-suite.qbillc.com/',
            REST           : 'https://qa-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://qa-suite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://qa-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'Yes'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'Quality Assurance';
        settings.TPAManagerEmail    = 'dev.team@worktray.com';
        settings.isHttps            = true;
        break;
    }

    case 'res':	{
        settings.email = {
            errorTo        : 'dev.team@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'dev.team@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://res-suite.qbillc.com/Account/CRMSignUp/',
            kronosSignup   : 'https://qa-suite.qbillc.com/Account/Signup/' ,
            clientSignup   : 'https://qa-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'http://dev-CRMProxy.qbillc.com/' ,
            employeeSignup : 'https://res-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://res-suite.qbillc.com/',
            REST           : 'https://res-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://res-suite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://res-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'Yes'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'Research';
        settings.TPAManagerEmail    = 'dev.team@worktray.com';
        settings.isHttps            = true;
        break;
    }

    case 'cfs':
    case 'stg':	{
        settings.email = {
            errorTo        : 'dev.team@worktray.com',
            errorFrom      : 'no-reply@worktray.com',
            fakeEmail      : 'dev.team@worktray.com',
            useRealEmail   : false,
        };
        settings.urls = {
            crmSignup      : 'https://stg-suite.qbillc.com/Account/CRMSignUp/' ,
            kronosSignup   : 'https://stg-suite.qbillc.com/Account/Signup/' ,
            clientSignup   : 'https://stg-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy       : 'http://stg-CRMProxy.qbillc.com/' ,
            employeeSignup : 'https://stg-suite.qbillc.com/Account/employeeSignup/',
            home           : 'https://stg-suite.qbillc.com/',
            REST           : 'https://stg-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID       : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey      : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1      : 'https://api.us.onelogin.com/',
            endpoint2      : 'https://api.us.onelogin.com/api/1/',
            endpoint3      : 'https://qbillc.onelogin.com/',
            AllowedOrigin  : 'https://stg-suite.qbillc.com',
            embeddingToken : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1      : 'http://stg-netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2      : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL    : 'No'
        };
        settings.dsn    = {
            1              : 'dsnQBI',
            2              : 'CMS2DEV'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'Stage';
        settings.TPAManagerEmail    = 'dev.team@worktray.com';
        settings.isHttps            = true;
        break;
    }

    case 'sec':
    case 'sui':
    case 'qbi':
    case 'CFP':	{
        settings.email = {
            errorTo                     : 'dev.team@worktray.com',
            errorFrom                       : 'no-reply@worktray.com',
            fakeEmail                       : 'dev.team@worktray.com',
            useRealEmail                        : true,
        };
        settings.urls = {
            crmSignup                       : 'https://secure.qbillc.com/Account/CRMSignUp/'  ,
            kronosSignup                        : 'https://secure.qbillc.com/Accoclientgnup/' ,
            clientSignup   : 'https://shirak-suite.qbillc.com/Account/clientSignup/' ,
            crmProxy                        : 'http://CRMProxy.qbillc.com/' ,
            employeeSignup                      : 'https://secure.qbillc.com/Account/employeeSignup/',
            home                        : 'https://secure.qbillc.com/',
            REST                        : 'https://secure-services.qbillc.com/rest/QBI_API/'
        };
        settings.oneLogin = {
            ClientID                        : '94aa75e270f3f27a05d45248a939937ff08700da03a2261a7495eafdc1a9c885',
            SecretKey                       : '990833035a35b10ac909e2e114145a21d45e0a69fcf09d62c06c9180412b7f24',
            endpoint1                       : 'https://api.us.onelogin.com/',
            endpoint2                       : 'https://api.us.onelogin.com/api/1/',
            endpoint3                       : 'https://qbillc.onelogin.com/',
            AllowedOrigin                       : 'https://secure.qbillc.com,https://suite.qbillc.com',
            embeddingToken                      : 'a26395876ddbd61c20df88aba0323037a171f8b8'
        };
        settings.netSuite = {
            endpoint1                       : 'http://netsuite.qbillc.com/MainService.svc?wsdl',
            endpoint2                       : 'http://localhost:56765/MainService.svc?wsdl',
            refreshWSDL                     : 'Yes'
        };
        settings.dsn    = {
            1                       : 'dsnQBI',
            2                       : 'CMS2PROD'
        };

        settings.serviceApi         = 'http://service.worktray.com/';
        settings.environment        = 'Production';
        settings.TPAManagerEmail    = 'dev.team@worktray.com';
        settings.isHttps            = true;
        break;
    }


    default: {
        throw( message='Server environment #env# is not defined in your config file - #CGI.SERVER_NAME# - #left( CGI.SERVER_NAME, 3 )#');
    }
    }

    return settings;
}