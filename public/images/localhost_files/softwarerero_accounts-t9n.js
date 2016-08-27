//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;

/* Package-scope variables */
var __coffeescriptShare, T9n;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n.coffee.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                                                       // 1
                                                                                                                       //
Meteor.startup(function() {                                                                                            // 1
  if (Meteor.isClient) {                                                                                               // 2
    return typeof Template !== "undefined" && Template !== null ? Template.registerHelper('t9n', function(x, params) {
      return T9n.get(x, true, params.hash);                                                                            //
    }) : void 0;                                                                                                       //
  }                                                                                                                    //
});                                                                                                                    // 1
                                                                                                                       //
T9n = (function() {                                                                                                    // 1
  function T9n() {}                                                                                                    //
                                                                                                                       //
  T9n.maps = {};                                                                                                       // 9
                                                                                                                       //
  T9n.defaultLanguage = 'en';                                                                                          // 9
                                                                                                                       //
  T9n.language = '';                                                                                                   // 9
                                                                                                                       //
  T9n.dep = new Deps.Dependency();                                                                                     // 9
                                                                                                                       //
  T9n.depLanguage = new Deps.Dependency();                                                                             // 9
                                                                                                                       //
  T9n.missingPrefix = ">";                                                                                             // 9
                                                                                                                       //
  T9n.missingPostfix = "<";                                                                                            // 9
                                                                                                                       //
  T9n.map = function(language, map) {                                                                                  // 9
    if (!this.maps[language]) {                                                                                        // 18
      this.maps[language] = {};                                                                                        // 19
    }                                                                                                                  //
    this.registerMap(language, '', false, map);                                                                        // 18
    return this.dep.changed();                                                                                         //
  };                                                                                                                   //
                                                                                                                       //
  T9n.get = function(label, markIfMissing, args, language) {                                                           // 9
    var index, parent, ref, ref1, ret;                                                                                 // 24
    if (markIfMissing == null) {                                                                                       //
      markIfMissing = true;                                                                                            //
    }                                                                                                                  //
    if (args == null) {                                                                                                //
      args = {};                                                                                                       //
    }                                                                                                                  //
    this.dep.depend();                                                                                                 // 24
    this.depLanguage.depend();                                                                                         // 24
    if (typeof label !== 'string') {                                                                                   // 26
      return '';                                                                                                       // 26
    }                                                                                                                  //
    if (language == null) {                                                                                            //
      language = this.language;                                                                                        //
    }                                                                                                                  //
    ret = (ref = this.maps[language]) != null ? ref[label] : void 0;                                                   // 24
    if (!ret) {                                                                                                        // 29
      index = language.lastIndexOf('_');                                                                               // 30
      if (index) {                                                                                                     // 31
        parent = language.substring(0, index);                                                                         // 32
        if (parent) {                                                                                                  // 33
          return this.get(label, markIfMissing, args, parent);                                                         // 34
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    if (!ret) {                                                                                                        // 35
      ret = (ref1 = this.maps[this.defaultLanguage]) != null ? ref1[label] : void 0;                                   // 36
    }                                                                                                                  //
    if (!ret) {                                                                                                        // 37
      if (markIfMissing) {                                                                                             // 38
        return this.missingPrefix + label + this.missingPostfix;                                                       //
      } else {                                                                                                         //
        return label;                                                                                                  //
      }                                                                                                                //
    }                                                                                                                  //
    if (Object.keys(args).length === 0) {                                                                              // 39
      return ret;                                                                                                      //
    } else {                                                                                                           //
      return this.replaceParams(ret, args);                                                                            //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  T9n.registerMap = function(language, prefix, dot, map) {                                                             // 9
    var key, results, value;                                                                                           // 42
    if (typeof map === 'string') {                                                                                     // 42
      return this.maps[language][prefix] = map;                                                                        //
    } else if (typeof map === 'object') {                                                                              //
      if (dot) {                                                                                                       // 45
        prefix = prefix + '.';                                                                                         // 46
      }                                                                                                                //
      results = [];                                                                                                    // 47
      for (key in map) {                                                                                               //
        value = map[key];                                                                                              //
        results.push(this.registerMap(language, prefix + key, true, value));                                           // 48
      }                                                                                                                // 47
      return results;                                                                                                  //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  T9n.getLanguage = function() {                                                                                       // 9
    this.depLanguage.depend();                                                                                         // 51
    return this.language;                                                                                              // 52
  };                                                                                                                   //
                                                                                                                       //
  T9n.getLanguages = function() {                                                                                      // 9
    this.dep.depend();                                                                                                 // 55
    return Object.keys(this.maps).sort();                                                                              // 56
  };                                                                                                                   //
                                                                                                                       //
  T9n.getLanguageInfo = function() {                                                                                   // 9
    var i, k, keys, len, results;                                                                                      // 59
    this.dep.depend();                                                                                                 // 59
    keys = Object.keys(this.maps).sort();                                                                              // 59
    results = [];                                                                                                      // 61
    for (i = 0, len = keys.length; i < len; i++) {                                                                     //
      k = keys[i];                                                                                                     //
      results.push({                                                                                                   // 62
        name: this.maps[k]['t9Name'],                                                                                  // 62
        code: k                                                                                                        // 62
      });                                                                                                              //
    }                                                                                                                  // 61
    return results;                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  T9n.setLanguage = function(language) {                                                                               // 9
    if (this.language === language) {                                                                                  // 65
      return;                                                                                                          // 65
    }                                                                                                                  //
    language = language.replace(new RegExp('-', 'g'), '_');                                                            // 65
    if (!this.maps[language]) {                                                                                        // 67
      if (language.indexOf('_') > 1) {                                                                                 // 68
        return this.setLanguage(language.substring(0, language.lastIndexOf('_')));                                     //
      } else {                                                                                                         //
        throw Error("language " + language + " does not exist");                                                       // 71
      }                                                                                                                //
    }                                                                                                                  //
    this.language = language;                                                                                          // 65
    return this.depLanguage.changed();                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  T9n.replaceParams = function(str, args) {                                                                            // 9
    var key, re, value;                                                                                                // 76
    for (key in args) {                                                                                                // 76
      value = args[key];                                                                                               //
      re = new RegExp("@{" + key + "}", 'g');                                                                          // 77
      str = str.replace(re, value);                                                                                    // 77
    }                                                                                                                  // 76
    return str;                                                                                                        //
  };                                                                                                                   //
                                                                                                                       //
  return T9n;                                                                                                          //
                                                                                                                       //
})();                                                                                                                  //
                                                                                                                       //
this.T9n = T9n;                                                                                                        // 1
                                                                                                                       //
this.t9n = function(x, includePrefix, params) {                                                                        // 1
  return T9n.get(x);                                                                                                   //
};                                                                                                                     // 83
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/ar.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ar;                                                                                                                // 4
                                                                                                                       //
ar = {                                                                                                                 // 4
  add: "اضف",                                                                                                          // 6
  and: "و",                                                                                                            // 6
  back: "رجوع",                                                                                                        // 6
  changePassword: "غير كلمة السر",                                                                                     // 6
  choosePassword: "اختر كلمة السر",                                                                                    // 6
  clickAgree: "بفتح حسابك انت توافق على",                                                                              // 6
  configure: "تعديل",                                                                                                  // 6
  createAccount: "افتح حساب جديد",                                                                                     // 6
  currentPassword: "كلمة السر الحالية",                                                                                // 6
  dontHaveAnAccount: "ليس عندك حساب؟",                                                                                 // 6
  email: "البريد الالكترونى",                                                                                          // 6
  emailAddress: "البريد الالكترونى",                                                                                   // 6
  emailResetLink: "اعادة تعيين البريد الالكترونى",                                                                     // 6
  forgotPassword: "نسيت كلمة السر؟",                                                                                   // 6
  ifYouAlreadyHaveAnAccount: "اذا كان عندك حساب",                                                                      // 6
  newPassword: "كلمة السر الجديدة",                                                                                    // 6
  newPasswordAgain: "كلمة السر الجديدة مرة اخرى",                                                                      // 6
  optional: "اختيارى",                                                                                                 // 6
  OR: "او",                                                                                                            // 6
  password: "كلمة السر",                                                                                               // 6
  passwordAgain: "كلمة السر مرة اخرى",                                                                                 // 6
  privacyPolicy: "سياسة الخصوصية",                                                                                     // 6
  remove: "ازالة",                                                                                                     // 6
  resetYourPassword: "اعادة تعيين كلمة السر",                                                                          // 6
  setPassword: "تعيين كلمة السر",                                                                                      // 6
  sign: "تسجيل",                                                                                                       // 6
  signIn: "تسجيل الدخول",                                                                                              // 6
  signin: "تسجيل الدخول",                                                                                              // 6
  signOut: "تسجيل الخروج",                                                                                             // 6
  signUp: "افتح حساب جديد",                                                                                            // 6
  signupCode: "رمز التسجيل",                                                                                           // 6
  signUpWithYourEmailAddress: "سجل ببريدك الالكترونى",                                                                 // 6
  terms: "شروط الاستخدام",                                                                                             // 6
  updateYourPassword: "جدد كلمة السر",                                                                                 // 6
  username: "اسم المستخدم",                                                                                            // 6
  usernameOrEmail: "اسم المستخدم او البريد الالكترونى",                                                                // 6
  "with": "مع",                                                                                                        // 6
  info: {                                                                                                              // 6
    emailSent: "تم ارسال البريد الالكترونى",                                                                           // 46
    emailVerified: "تم تأكيد البريد الالكترونى",                                                                       // 46
    passwordChanged: "تم تغيير كلمة السر",                                                                             // 46
    passwordReset: "تم اعادة تعيين كلمة السر"                                                                          // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "البريد الالكترونى مطلوب",                                                                          // 53
    minChar: "سبعة حروف هو الحد الادنى لكلمة السر",                                                                    // 53
    pwdsDontMatch: "كلمتين السر لا يتطابقان",                                                                          // 53
    pwOneDigit: "كلمة السر يجب ان تحتوى على رقم واحد على الاقل",                                                       // 53
    pwOneLetter: "كلمة السر تحتاج الى حرف اخر",                                                                        // 53
    signInRequired: "عليك بتسجبل الدخول لفعل ذلك",                                                                     // 53
    signupCodeIncorrect: "رمز التسجيل غير صحيح",                                                                       // 53
    signupCodeRequired: "رمز التسجيل مطلوب",                                                                           // 53
    usernameIsEmail: "اسم المستخدم لا يمكن ان يكون بريد الكترونى",                                                     // 53
    usernameRequired: "اسم المستخدم مطلوب",                                                                            // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "البريد الالكترونى مسجل",                                                               // 70
      "Email doesn't match the criteria.": "البريد الالكترونى لا يتوافق مع الشروط",                                    // 70
      "Invalid login token": "رمز الدخول غير صالح",                                                                    // 70
      "Login forbidden": "تسجيل الدخول غير مسموح",                                                                     // 70
      "Service unknown": "خدمة غير معروفة",                                                                            // 70
      "Unrecognized options for login request": "اختيارات غير معلومة عند تسجيل الدخول",                                // 70
      "User validation failed": "تأكيد المستخدم فشل",                                                                  // 70
      "Username already exists.": "اسم المستخدم مسجل",                                                                 // 70
      "You are not logged in.": "لم تسجل دخولك",                                                                       // 70
      "You've been logged out by the server. Please log in again.": "لقد تم تسجيل خروجك من قبل الخادم. قم بتسجيل الدخول مجددا.",
      "Your session has expired. Please log in again.": "لقد انتهت جلستك. قم بتسجيل الدخول مجددا.",                    // 70
      "No matching login attempt found": "لم نجد محاولة دخول مطابقة",                                                  // 70
      "Password is old. Please reset your password.": "كلمة السر قديمة. قم باعادة تعيين كلمة السر.",                   // 70
      "Incorrect password": "كلمة السر غير صحيحة.",                                                                    // 70
      "Invalid email": "البريد الالكترونى غير صالح",                                                                   // 70
      "Must be logged in": "يجب ان تسجل دخولك",                                                                        // 70
      "Need to set a username or email": "يجب تعيين اسم مستخدم او بريد الكترونى",                                      // 70
      "old password format": "صيغة كلمة السر القديمة",                                                                 // 70
      "Password may not be empty": "كلمة السر لا يمكن ان تترك فارغة",                                                  // 70
      "Signups forbidden": "فتح الحسابات غير مسموح",                                                                   // 70
      "Token expired": "انتهى زمن الرمز",                                                                              // 70
      "Token has invalid email address": "الرمز يحتوى على بريد الكترونى غير صالح",                                     // 70
      "User has no password set": "المستخدم لم يقم بتعيين كلمة سر",                                                    // 70
      "User not found": "اسم المستخدم غير موجود",                                                                      // 70
      "Verify email link expired": "انتهى زمن رابط تأكيد البريد الالكترونى",                                           // 70
      "Verify email link is for unknown address": "رابط تأكيد البريد الالكترونى ينتمى الى بريد الكترونى غير معروف",    // 70
      "Match failed": "المطابقة فشلت",                                                                                 // 70
      "Unknown error": "خطأ غير معروف"                                                                                 // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("ar", ar);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/ca.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ca;                                                                                                                // 4
                                                                                                                       //
ca = {                                                                                                                 // 4
  t9Name: 'Català',                                                                                                    // 6
  add: "afegir",                                                                                                       // 6
  and: "i",                                                                                                            // 6
  back: "enrere",                                                                                                      // 6
  changePassword: "Canviar contrasenya",                                                                               // 6
  choosePassword: "Escollir contrasenya",                                                                              // 6
  clickAgree: "Al fer clic a Subscriure aproves la",                                                                   // 6
  configure: "Disposició",                                                                                             // 6
  createAccount: "Crear compte",                                                                                       // 6
  currentPassword: "Contrasenya actual",                                                                               // 6
  dontHaveAnAccount: "No tens compte?",                                                                                // 6
  email: "Correu",                                                                                                     // 6
  emailAddress: "Adreça de correu",                                                                                    // 6
  emailResetLink: "Restablir correu",                                                                                  // 6
  forgotPassword: "Has oblidat la contrasenya?",                                                                       // 6
  ifYouAlreadyHaveAnAccount: "Si ja tens un compte",                                                                   // 6
  newPassword: "Nova contrasenya",                                                                                     // 6
  newPasswordAgain: "Nova contrasenya (repetir)",                                                                      // 6
  optional: "Opcional",                                                                                                // 6
  OR: "O",                                                                                                             // 6
  password: "Contrasenya",                                                                                             // 6
  passwordAgain: "Contrasenya (repetir)",                                                                              // 6
  privacyPolicy: "Política de Privacitat",                                                                             // 6
  remove: "eliminar",                                                                                                  // 6
  resetYourPassword: "Restablir la teva contrasenya",                                                                  // 6
  setPassword: "Definir contrasenya",                                                                                  // 6
  sign: "Entra",                                                                                                       // 6
  signIn: "Entra",                                                                                                     // 6
  signin: "entra",                                                                                                     // 6
  signOut: "Surt",                                                                                                     // 6
  signUp: "Subscriure's",                                                                                              // 6
  signupCode: "Còdi de subscripció",                                                                                   // 6
  signUpWithYourEmailAddress: "Subscriure-te amb el correu",                                                           // 6
  terms: "Termes d'ús",                                                                                                // 6
  updateYourPassword: "Actualitzar la teva contrasenya",                                                               // 6
  username: "Usuari",                                                                                                  // 6
  usernameOrEmail: "Usuari o correu",                                                                                  // 6
  "with": "amb",                                                                                                       // 6
  maxAllowedLength: "Longitud màxima permesa",                                                                         // 6
  minRequiredLength: "Longitud mínima requerida",                                                                      // 6
  resendVerificationEmail: "Envia el correu de nou",                                                                   // 6
  resendVerificationEmailLink_pre: "Correu de verificació perdut?",                                                    // 6
  resendVerificationEmailLink_link: "Envia de nou",                                                                    // 6
  info: {                                                                                                              // 6
    emailSent: "Correu enviat",                                                                                        // 52
    emailVerified: "Correu verificat",                                                                                 // 52
    passwordChanged: "Contrasenya canviada",                                                                           // 52
    passwordReset: "Restablir contrasenya"                                                                             // 52
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Es requereix el correu.",                                                                          // 58
    minChar: "7 caràcters mínim.",                                                                                     // 58
    pwdsDontMatch: "Les contrasenyes no coincideixen",                                                                 // 58
    pwOneDigit: "mínim un dígit.",                                                                                     // 58
    pwOneLetter: "mínim una lletra.",                                                                                  // 58
    signInRequired: "Has d'iniciar sessió per a fer això.",                                                            // 58
    signupCodeIncorrect: "El còdi de subscripció no coincideix.",                                                      // 58
    signupCodeRequired: "Es requereix el còdi de subscripció.",                                                        // 58
    usernameIsEmail: "L'usuari no pot ser el correu.",                                                                 // 58
    usernameRequired: "Es requereix un usuari.",                                                                       // 58
    accounts: {                                                                                                        // 58
      "Email already exists.": "El correu ja existeix.",                                                               // 75
      "Email doesn't match the criteria.": "El correu no coincideix amb els criteris.",                                // 75
      "Invalid login token": "Token d'entrada invàlid",                                                                // 75
      "Login forbidden": "No es permet entrar en aquests moments",                                                     // 75
      "Service unknown": "Servei desconegut",                                                                          // 75
      "Unrecognized options for login request": "Opcions desconegudes per la petició d'entrada",                       // 75
      "User validation failed": "No s'ha pogut validar l'usuari",                                                      // 75
      "Username already exists.": "L'usuari ja existeix.",                                                             // 75
      "You are not logged in.": "No has iniciat sessió",                                                               // 75
      "You've been logged out by the server. Please log in again.": "Has estat desconnectat pel servidor. Si us plau, entra de nou.",
      "Your session has expired. Please log in again.": "La teva sessió ha expirat. Si us plau, entra de nou.",        // 75
      "Already verified": "Ja està verificat",                                                                         // 75
      "No matching login attempt found": "No s'ha trobat un intent de login vàlid",                                    // 75
      "Password is old. Please reset your password.": "La contrasenya és antiga, si us plau, restableix una contrasenya nova",
      "Incorrect password": "Contrasenya invàlida",                                                                    // 75
      "Invalid email": "Correu invàlid",                                                                               // 75
      "Must be logged in": "Has d'iniciar sessió",                                                                     // 75
      "Need to set a username or email": "Has d'especificar un usuari o un correu",                                    // 75
      "old password format": "Format de contrasenya antic",                                                            // 75
      "Password may not be empty": "La contrasenya no pot ser buida",                                                  // 75
      "Signups forbidden": "Subscripció no permesa en aquest moment",                                                  // 75
      "Token expired": "Token expirat",                                                                                // 75
      "Token has invalid email address": "El token conté un correu invàlid",                                           // 75
      "User has no password set": "Usuari no té contrasenya",                                                          // 75
      "User not found": "Usuari no trobat",                                                                            // 75
      "Verify email link expired": "L'enllaç per a verificar el correu ha expirat",                                    // 75
      "Verify email link is for unknown address": "L'enllaç per a verificar el correu conté una adreça desconeguda",   // 75
      "At least 1 digit, 1 lowercase and 1 uppercase": "Al menys 1 dígit, 1 lletra minúscula i 1 majúscula",           // 75
      "Please verify your email first. Check the email and follow the link!": "Si us plau, verifica el teu correu primer. Comprova el correu i segueix l'enllaç que conté!",
      "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "Un nou correu ha estat enviat a la teva bústia. Si no reps el correu assegura't de comprovar la bústia de correu no desitjat.",
      "Match failed": "Comprovació fallida",                                                                           // 75
      "Unknown error": "Error desconegut"                                                                              // 75
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("ca", ca);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/cs.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var cs;                                                                                                                // 4
                                                                                                                       //
cs = {                                                                                                                 // 4
  add: "přidat",                                                                                                       // 6
  and: "a",                                                                                                            // 6
  back: "zpět",                                                                                                        // 6
  changePassword: "Změnte heslo",                                                                                      // 6
  choosePassword: "Zvolte heslo",                                                                                      // 6
  clickAgree: "Stiskem tlačítka Registrovat souhlasíte s",                                                             // 6
  configure: "Nastavit",                                                                                               // 6
  createAccount: "Vytvořit účet",                                                                                      // 6
  currentPassword: "Současné heslo",                                                                                   // 6
  dontHaveAnAccount: "Nemáte účet?",                                                                                   // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Emailová adresa",                                                                                     // 6
  emailResetLink: "Odkaz na reset emailu",                                                                             // 6
  forgotPassword: "Zapomenuté heslo?",                                                                                 // 6
  ifYouAlreadyHaveAnAccount: "Pokud již máte účet",                                                                    // 6
  newPassword: "Nové heslo",                                                                                           // 6
  newPasswordAgain: "Nové heslo (zopakovat)",                                                                          // 6
  optional: "Volitelný",                                                                                               // 6
  OR: "nebo",                                                                                                          // 6
  password: "Heslo",                                                                                                   // 6
  passwordAgain: "Heslo (zopakovat)",                                                                                  // 6
  privacyPolicy: "Nastavení soukromí",                                                                                 // 6
  remove: "odstranit",                                                                                                 // 6
  resetYourPassword: "Resetovat heslo",                                                                                // 6
  setPassword: "Nastavit heslo",                                                                                       // 6
  sign: "Přihlášení",                                                                                                  // 6
  signIn: "Přihlásit se",                                                                                              // 6
  signin: "přihlásit se",                                                                                              // 6
  signOut: "Odhlásit se",                                                                                              // 6
  signUp: "Registrovat",                                                                                               // 6
  signupCode: "Registrační kód",                                                                                       // 6
  signUpWithYourEmailAddress: "Registrovat se emailovou adresou",                                                      // 6
  terms: "Podmínky použití",                                                                                           // 6
  updateYourPassword: "Aktualizujte si své heslo",                                                                     // 6
  username: "Uživatelské jméno",                                                                                       // 6
  usernameOrEmail: "Uživatelské jméno nebo email",                                                                     // 6
  "with": "s",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "Email odeslán",                                                                                        // 46
    emailVerified: "Email ověřen",                                                                                     // 46
    passwordChanged: "Heslo změněno",                                                                                  // 46
    passwordReset: "Heslo resetováno"                                                                                  // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email je povinný.",                                                                                // 53
    minChar: "minimální délka hesla je 7 znaků.",                                                                      // 53
    pwdsDontMatch: "Hesla nesouhlasí",                                                                                 // 53
    pwOneDigit: "Heslo musí obsahovat alespoň jednu číslici.",                                                         // 53
    pwOneLetter: "Heslo musí obsahovat alespoň 1 slovo.",                                                              // 53
    signInRequired: "Musíte být příhlášeni.",                                                                          // 53
    signupCodeIncorrect: "Registrační kód je chybný.",                                                                 // 53
    signupCodeRequired: "Registrační kód je povinný.",                                                                 // 53
    usernameIsEmail: "Uživatelské jméno nemůže být emailová adresa.",                                                  // 53
    usernameRequired: "Uživatelské jméno je povinné."                                                                  // 53
  },                                                                                                                   //
  accounts: {                                                                                                          // 6
    "A login handler should return a result or undefined": "Přihlašovací rutina musí vracet výsledek nebo undefined",  // 69
    "Email already exists.": "Email již existuje.",                                                                    // 69
    "Email doesn't match the criteria.": "Email nesplňuje požadavky.",                                                 // 69
    "Invalid login token": "Neplatný přihlašovací token",                                                              // 69
    "Login forbidden": "Přihlášení je zakázáno",                                                                       // 69
    "Service unknown": "Neznámá služba",                                                                               // 69
    "Unrecognized options for login request": "Nerozpoznaná volba přihlašovacího požadavku",                           // 69
    "User validation failed": "Validace uživatele selhala",                                                            // 69
    "Username already exists.": "Uživatelské jméno již existuje.",                                                     // 69
    "You are not logged in.": "Nejste přihlášený.",                                                                    // 69
    "You've been logged out by the server. Please log in again.": "Byl jste odhlášen. Prosím přihlašte se znovu.",     // 69
    "Your session has expired. Please log in again.": "Vaše připojení vypršelo. Prosím přihlašte se znovu.",           // 69
    "No matching login attempt found": "Nenalezen odpovídající způsob přihlášení",                                     // 69
    "Password is old. Please reset your password.": "Heslo je staré. Prosíme nastavte si ho znovu.",                   // 69
    "Incorrect password": "Chybné heslo",                                                                              // 69
    "Invalid email": "Neplatný email",                                                                                 // 69
    "Must be logged in": "Uživatel musí být přihlášen",                                                                // 69
    "Need to set a username or email": "Je třeba zadat uživatelské jméno nebo email",                                  // 69
    "old password format": "starý formát hesla",                                                                       // 69
    "Password may not be empty": "Heslo nemůže být prázdné",                                                           // 69
    "Signups forbidden": "Registrace je zakázaná",                                                                     // 69
    "Token expired": "Token vypršel",                                                                                  // 69
    "Token has invalid email address": "Token má neplatnou emailovou adresu",                                          // 69
    "User has no password set": "Uživatel nemá nastavené heslo",                                                       // 69
    "User not found": "Uživatel nenalezen",                                                                            // 69
    "Verify email link expired": "Odkaz pro ověření emailu vypršel",                                                   // 69
    "Verify email link is for unknown address": "Odkaz pro ověření emailu má neznámou adresu",                         // 69
    "Match failed": "Nesouhlasí",                                                                                      // 69
    "Unknown error": "Neznámá chyba"                                                                                   // 69
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("cs", cs);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/da.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var da;                                                                                                                // 4
                                                                                                                       //
da = {                                                                                                                 // 4
  add: "tilføj",                                                                                                       // 6
  and: "og",                                                                                                           // 6
  back: "tilbage",                                                                                                     // 6
  changePassword: "Skift kodeord",                                                                                     // 6
  choosePassword: "Vælg kodeord",                                                                                      // 6
  clickAgree: "Ved at klikke på tilmeld accepterer du vores",                                                          // 6
  configure: "Konfigurer",                                                                                             // 6
  createAccount: "Opret konto",                                                                                        // 6
  currentPassword: "Nuværende kodeord",                                                                                // 6
  dontHaveAnAccount: "Har du ikke en konto?",                                                                          // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "E-mail adresse",                                                                                      // 6
  emailResetLink: "Nulstil E-mail Link",                                                                               // 6
  forgotPassword: "Glemt kodeord?",                                                                                    // 6
  ifYouAlreadyHaveAnAccount: "Hvis jeg allerede har en konto",                                                         // 6
  newPassword: "Nyt kodeord",                                                                                          // 6
  newPasswordAgain: "Nyt kodeord (igen)",                                                                              // 6
  optional: "Frivilligt",                                                                                              // 6
  OR: "eller",                                                                                                         // 6
  password: "Kodeord",                                                                                                 // 6
  passwordAgain: "Kodeord (igen)",                                                                                     // 6
  privacyPolicy: "Privatlivspolitik",                                                                                  // 6
  remove: "fjern",                                                                                                     // 6
  resetYourPassword: "Nulstil dit kodeord",                                                                            // 6
  setPassword: "Sæt kodeord",                                                                                          // 6
  sign: "Log",                                                                                                         // 6
  signIn: "Log ind",                                                                                                   // 6
  signin: "Log ind",                                                                                                   // 6
  signOut: "Log ud",                                                                                                   // 6
  signUp: "Tilmeld",                                                                                                   // 6
  signupCode: "Tilmeldingskode",                                                                                       // 6
  signUpWithYourEmailAddress: "Tilmeld med din e-mail adresse",                                                        // 6
  terms: "Betingelser for brug",                                                                                       // 6
  updateYourPassword: "Skift dit kodeord",                                                                             // 6
  username: "Brugernavn",                                                                                              // 6
  usernameOrEmail: "Brugernavn eller e-mail",                                                                          // 6
  "with": "med",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "E-mail sendt",                                                                                         // 46
    emailVerified: "Email verificeret",                                                                                // 46
    passwordChanged: "Password ændret",                                                                                // 46
    passwordReset: "Password reset"                                                                                    // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "E-mail er påkrævet.",                                                                              // 53
    minChar: "Kodeordet skal være mindst 7 tegn.",                                                                     // 53
    pwdsDontMatch: "De to kodeord er ikke ens.",                                                                       // 53
    pwOneDigit: "Kodeord kræver mindste et tal.",                                                                      // 53
    pwOneLetter: "Kodeord kræver mindst et bogstav.",                                                                  // 53
    signInRequired: "Du skal være logget ind for at kunne gøre det.",                                                  // 53
    signupCodeIncorrect: "Tilmeldingskode er forkert.",                                                                // 53
    signupCodeRequired: "Tilmeldingskode er påkrævet.",                                                                // 53
    usernameIsEmail: "Brugernavn kan ikke være en e-mail adresse.",                                                    // 53
    usernameRequired: "Brugernavn skal udfyldes.",                                                                     // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "E-mail findes allerede.",                                                              // 70
      "Email doesn't match the criteria.": "E-mail modsvarer ikke kriteriet.",                                         // 70
      "Invalid login token": "Invalid log ind token",                                                                  // 70
      "Login forbidden": "Log ind forbudt",                                                                            // 70
      "Service unknown": "Service ukendt",                                                                             // 70
      "Unrecognized options for login request": "Ukendte options for login forsøg",                                    // 70
      "User validation failed": "Bruger validering fejlede",                                                           // 70
      "Username already exists.": "Brugernavn findes allerede.",                                                       // 70
      "You are not logged in.": "Du er ikke logget ind.",                                                              // 70
      "You've been logged out by the server. Please log in again.": "Du er blevet logget af serveren. Log ind igen.",  // 70
      "Your session has expired. Please log in again.": "Din session er udløbet. Log ind igen.",                       // 70
      "No matching login attempt found": "Der fandtes ingen login forsøg",                                             // 70
      "Password is old. Please reset your password.": "Kodeordet er for gammelt. Du skal resette det.",                // 70
      "Incorrect password": "Forkert kodeord",                                                                         // 70
      "Invalid email": "Invalid e-mail",                                                                               // 70
      "Must be logged in": "Du skal være logget ind",                                                                  // 70
      "Need to set a username or email": "Du skal angive enten brugernavn eller e-mail",                               // 70
      "old password format": "gammelt kodeord format",                                                                 // 70
      "Password may not be empty": "Kodeord skal være udfyldt",                                                        // 70
      "Signups forbidden": "Tilmeldinger forbudt",                                                                     // 70
      "Token expired": "Token udløbet",                                                                                // 70
      "Token has invalid email address": "Token har en invalid e-mail adresse",                                        // 70
      "User has no password set": "Bruger har ikke angivet noget kodeord",                                             // 70
      "User not found": "Bruger ej fundet",                                                                            // 70
      "Verify email link expired": "Verify email link expired",                                                        // 70
      "Verify email link is for unknown address": "Verificer e-mail link for ukendt adresse",                          // 70
      "Match failed": "Match fejlede",                                                                                 // 70
      "Unknown error": "Ukendt fejl"                                                                                   // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("da", da);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/de.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var de;                                                                                                                // 4
                                                                                                                       //
de = {                                                                                                                 // 4
  t9Name: 'Deutsch',                                                                                                   // 6
  add: "hinzufügen",                                                                                                   // 6
  and: "und",                                                                                                          // 6
  back: "zurück",                                                                                                      // 6
  changePassword: "Passwort ändern",                                                                                   // 6
  choosePassword: "Passwort auswählen",                                                                                // 6
  clickAgree: "Die Registrierung impliziert die Akzeptanz unserer",                                                    // 6
  configure: "Konfigurieren",                                                                                          // 6
  createAccount: "Konto erstellen",                                                                                    // 6
  currentPassword: "Aktuelles Passwort",                                                                               // 6
  dontHaveAnAccount: "Noch kein Konto?",                                                                               // 6
  email: "E-Mail",                                                                                                     // 6
  emailAddress: "E-Mail Adresse",                                                                                      // 6
  emailResetLink: "Senden",                                                                                            // 6
  forgotPassword: "Passwort vergessen?",                                                                               // 6
  ifYouAlreadyHaveAnAccount: "Falls bereits ein Konto existiert, bitte hier",                                          // 6
  newPassword: "Neues Passwort",                                                                                       // 6
  newPasswordAgain: "Neues Passwort (wiederholen)",                                                                    // 6
  optional: "Optional",                                                                                                // 6
  OR: "ODER",                                                                                                          // 6
  password: "Passwort",                                                                                                // 6
  passwordAgain: "Passwort (wiederholen)",                                                                             // 6
  privacyPolicy: "Datenschutzerklärung",                                                                               // 6
  remove: "entfernen",                                                                                                 // 6
  resetYourPassword: "Passwort zurücksetzen",                                                                          // 6
  setPassword: "Passwort festlegen",                                                                                   // 6
  sign: "Anmelden",                                                                                                    // 6
  signIn: "Anmelden",                                                                                                  // 6
  signin: "anmelden",                                                                                                  // 6
  signOut: "Abmelden",                                                                                                 // 6
  signUp: "Registrieren",                                                                                              // 6
  signupCode: "Registrierungscode",                                                                                    // 6
  signUpWithYourEmailAddress: "Mit E-Mail registrieren",                                                               // 6
  terms: "Geschäftsbedingungen",                                                                                       // 6
  updateYourPassword: "Passwort aktualisieren",                                                                        // 6
  username: "Benutzername",                                                                                            // 6
  usernameOrEmail: "Benutzername oder E-Mail",                                                                         // 6
  "with": "mit",                                                                                                       // 6
  "Verification email lost?": "Verifizierungsemail verloren?",                                                         // 6
  "Send again": "Erneut senden",                                                                                       // 6
  "Send the verification email again": "Verifizierungsemail erneut senden",                                            // 6
  "Send email again": "Email erneut senden",                                                                           // 6
  "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "Eine neue Email wurde verschickt. Sollte sich die Email nicht im Posteingang befinden, empfiehlt es sich, den Spamordner zu überprüfen.",
  info: {                                                                                                              // 6
    emailSent: "E-Mail gesendet",                                                                                      // 52
    emailVerified: "E-Mail verifiziert",                                                                               // 52
    PasswordChanged: "Passwort geändert",                                                                              // 52
    PasswordReset: "Passwort zurückgesetzt"                                                                            // 52
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "E-Mail benötigt.",                                                                                 // 59
    minChar: "Passwort muss mindestens 7 Zeichen lang sein.",                                                          // 59
    pwdsDontMatch: "Passwörter stimmen nicht überein.",                                                                // 59
    pwOneDigit: "Passwort muss mindestens eine Ziffer enthalten.",                                                     // 59
    pwOneLetter: "Passwort muss mindestens einen Buchstaben enthalten.",                                               // 59
    signInRequired: "Ein Anmeldung ist erforderlich.",                                                                 // 59
    signupCodeIncorrect: "Registrierungscode ungültig.",                                                               // 59
    signupCodeRequired: "Registrierungscode benötigt.",                                                                // 59
    usernameIsEmail: "Benutzername darf keine E-Mail Adresse sein.",                                                   // 59
    usernameRequired: "Benutzername benötigt.",                                                                        // 59
    accounts: {                                                                                                        // 59
      "Email already exists.": "Die E-Mail Adresse wird bereits verwendet.",                                           // 75
      "Email doesn't match the criteria.": "E-Mail Adresse erfüllt die Anforderungen nicht.",                          // 75
      "Invalid login token": "Ungültiger Login-Token",                                                                 // 75
      "Login forbidden": "Anmeldedaten ungültig",                                                                      // 75
      "Service unknown": "Dienst unbekannt",                                                                           // 75
      "Unrecognized options for login request": "Unbekannte Optionen für Login Request",                               // 75
      "User validation failed": "Die Benutzerdaten sind nicht korrekt",                                                // 75
      "Username already exists.": "Der Benutzer existiert bereits.",                                                   // 75
      "You are not logged in.": "Eine Anmeldung ist erforderlich.",                                                    // 75
      "You've been logged out by the server. Please log in again.": "Die Sitzung ist abgelaufen, eine neue Anmeldung ist nötig.",
      "Your session has expired. Please log in again.": "Die Sitzung ist abgelaufen, eine neue Anmeldung ist nötig.",  // 75
      "No matching login attempt found": "Kein passender Loginversuch gefunden.",                                      // 75
      "Password is old. Please reset your password.": "Das Passwort ist abgelaufen, ein Zurücksetzen ist erforderlich.",
      "Incorrect password": "Falsches Passwort",                                                                       // 75
      "Invalid email": "Ungültige E-Mail Adresse",                                                                     // 75
      "Must be logged in": "Ein Anmeldung ist erforderlich",                                                           // 75
      "Need to set a username or email": "Benutzername oder E-Mail Adresse müssen angegeben werden",                   // 75
      "Password may not be empty": "Das Passwort darf nicht leer sein",                                                // 75
      "Signups forbidden": "Anmeldungen sind nicht erlaubt",                                                           // 75
      "Token expired": "Token ist abgelaufen",                                                                         // 75
      "Token has invalid email address": "E-Mail Adresse passt nicht zum Token",                                       // 75
      "User has no password set": "Kein Passwort für den Benutzer angegeben",                                          // 75
      "User not found": "Benutzer nicht gefunden",                                                                     // 75
      "Verify email link expired": "Link zur E-Mail Verifizierung ist abgelaufen",                                     // 75
      "Verify email link is for unknown address": "Link zur Verifizierung ist für eine unbekannte E-Mail Adresse",     // 75
      "Already verified": "Diese E-Mail-Adresse ist bereits verifiziert",                                              // 75
      "Match failed": "Abgleich fehlgeschlagen",                                                                       // 75
      "Unknown error": "Unbekannter Fehler"                                                                            // 75
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("de", de);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/el.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var el;                                                                                                                // 4
                                                                                                                       //
el = {                                                                                                                 // 4
  add: "προσθέστε",                                                                                                    // 6
  and: "και",                                                                                                          // 6
  back: "πίσω",                                                                                                        // 6
  changePassword: "Αλλαγή Κωδικού",                                                                                    // 6
  choosePassword: "Επιλογή Κωδικού",                                                                                   // 6
  clickAgree: "Πατώντας Εγγραφή, συμφωνείτε σε",                                                                       // 6
  configure: "Διαμόρφωση",                                                                                             // 6
  createAccount: "Δημιουργία Λογαριασμού",                                                                             // 6
  currentPassword: "Τρέχων Κωδικός",                                                                                   // 6
  dontHaveAnAccount: "Δεν έχετε λογαριασμό;",                                                                          // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Ηλεκτρονική Διεύθυνση",                                                                               // 6
  emailResetLink: "Αποστολή Συνδέσμου Επαναφοράς",                                                                     // 6
  forgotPassword: "Ξεχάσατε τον κωδικό;",                                                                              // 6
  ifYouAlreadyHaveAnAccount: "Αν έχετε ήδη λογαριασμό",                                                                // 6
  newPassword: "Νέος Κωδικός",                                                                                         // 6
  newPasswordAgain: "Νέος Κωδικός (ξανά)",                                                                             // 6
  optional: "Προαιρετικά",                                                                                             // 6
  OR: "Ή",                                                                                                             // 6
  password: "Κωδικός",                                                                                                 // 6
  passwordAgain: "Κωδικός (ξανά)",                                                                                     // 6
  privacyPolicy: "Πολιτική Απορρήτου",                                                                                 // 6
  remove: "αφαιρέστε",                                                                                                 // 6
  resetYourPassword: "Επαναφορά κωδικού",                                                                              // 6
  setPassword: "Ορίστε Κωδικό",                                                                                        // 6
  sign: "Σύνδεση",                                                                                                     // 6
  signIn: "Είσοδος",                                                                                                   // 6
  signin: "συνδεθείτε",                                                                                                // 6
  signOut: "Αποσύνδεση",                                                                                               // 6
  signUp: "Εγγραφή",                                                                                                   // 6
  signupCode: "Κώδικας Εγγραφής",                                                                                      // 6
  signUpWithYourEmailAddress: "Εγγραφή με την ηλεκτρονική σας διεύθυνση",                                              // 6
  terms: "Όροι Χρήσης",                                                                                                // 6
  updateYourPassword: "Ανανεώστε τον κωδικό σας",                                                                      // 6
  username: "Όνομα χρήστη",                                                                                            // 6
  usernameOrEmail: "Όνομα χρήστη ή email",                                                                             // 6
  "with": "με",                                                                                                        // 6
  info: {                                                                                                              // 6
    emailSent: "Το Email στάλθηκε",                                                                                    // 46
    emailVerified: "Το Email επιβεβαιώθηκε",                                                                           // 46
    passwordChanged: "Ο Κωδικός άλλαξε",                                                                               // 46
    passwordReset: "Ο Κωδικός επαναφέρθηκε"                                                                            // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Το Email απαιτείται.",                                                                             // 53
    minChar: "7 χαρακτήρες τουλάχιστον.",                                                                              // 53
    pwdsDontMatch: "Οι κωδικοί δεν ταιριάζουν",                                                                        // 53
    pwOneDigit: "Ο κωδικός πρέπει να έχει τουλάχιστον ένα ψηφίο.",                                                     // 53
    pwOneLetter: "Ο κωδικός πρέπει να έχει τουλάχιστον ένα γράμμα.",                                                   // 53
    signInRequired: "Πρέπει να είστε συνδεδεμένος για να πραγματοποιήσετε αυτή την ενέργεια.",                         // 53
    signupCodeIncorrect: "Ο κώδικας εγγραφής δεν είναι σωστός.",                                                       // 53
    signupCodeRequired: "Ο κώδικας εγγραφής απαιτείται.",                                                              // 53
    usernameIsEmail: "Το όνομα χρήστη δεν μπορεί να είναι μια διεύθυνση email.",                                       // 53
    usernameRequired: "Το όνομα χρήστη απαιτείται.",                                                                   // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Αυτό το email υπάρχει ήδη.",                                                           // 70
      "Email doesn't match the criteria.": "Το email δεν ταιριάζει με τα κριτήρια.",                                   // 70
      "Invalid login token": "Άκυρο διακριτικό σύνδεσης",                                                              // 70
      "Login forbidden": "Η είσοδος απαγορεύεται",                                                                     // 70
      "Service unknown": "Άγνωστη υπηρεσία",                                                                           // 70
      "Unrecognized options for login request": "Μη αναγνωρίσιμες επιλογές για αίτημα εισόδου",                        // 70
      "User validation failed": "Η επικύρωση του χρήστη απέτυχε",                                                      // 70
      "Username already exists.": "Αυτό το όνομα χρήστη υπάρχει ήδη.",                                                 // 70
      "You are not logged in.": "Δεν είστε συνδεδεμένος.",                                                             // 70
      "You've been logged out by the server. Please log in again.": "Αποσυνδεθήκατε από τον διακομιστή. Παρακαλούμε συνδεθείτε ξανά.",
      "Your session has expired. Please log in again.": "Η συνεδρία έληξε. Παρακαλούμε συνδεθείτε ξανά.",              // 70
      "No matching login attempt found": "Δεν βρέθηκε καμία απόπειρα σύνδεσης που να ταιριάζει",                       // 70
      "Password is old. Please reset your password.": "Ο κωδικός είναι παλιός. Παρακαλούμε επαναφέρετε τον κωδικό σας.",
      "Incorrect password": "Εσφαλμένος κωδικός",                                                                      // 70
      "Invalid email": "Εσφαλμένο email",                                                                              // 70
      "Must be logged in": "Πρέπει να είστε συνδεδεμένος",                                                             // 70
      "Need to set a username or email": "Χρειάζεται να ορίσετε όνομα χρήστη ή email",                                 // 70
      "old password format": "κωδικός παλιάς μορφής",                                                                  // 70
      "Password may not be empty": "Ο κωδικός δεν μπορεί να είναι άδειος",                                             // 70
      "Signups forbidden": "Οι εγγραφές απαγορεύονται",                                                                // 70
      "Token expired": "Το διακριτικό σύνδεσης έληξε",                                                                 // 70
      "Token has invalid email address": "Το διακριτικό σύνδεσης έχει άκυρη διεύθυνση email",                          // 70
      "User has no password set": "Ο χρήστης δεν έχει ορίσει κωδικό",                                                  // 70
      "User not found": "Ο χρήστης δεν βρέθηκε",                                                                       // 70
      "Verify email link expired": "Ο σύνδεσμος επαλήθευσης του email έληξε",                                          // 70
      "Verify email link is for unknown address": "Ο σύνδεσμος επαλήθευσης του email είναι για άγνωστη διεύθυνση",     // 70
      "Match failed": "Η αντιστοίχηση απέτυχε",                                                                        // 70
      "Unknown error": "Άγνωστο σφάλμα"                                                                                // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("el", el);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/en.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var en;                                                                                                                // 3
                                                                                                                       //
en = {                                                                                                                 // 3
  t9Name: 'English',                                                                                                   // 5
  add: "add",                                                                                                          // 5
  and: "and",                                                                                                          // 5
  back: "back",                                                                                                        // 5
  cancel: "Cancel",                                                                                                    // 5
  changePassword: "Change Password",                                                                                   // 5
  choosePassword: "Choose a Password",                                                                                 // 5
  clickAgree: "By clicking Register, you agree to our",                                                                // 5
  configure: "Configure",                                                                                              // 5
  createAccount: "Create an Account",                                                                                  // 5
  currentPassword: "Current Password",                                                                                 // 5
  dontHaveAnAccount: "Don't have an account?",                                                                         // 5
  email: "Email",                                                                                                      // 5
  emailAddress: "Email Address",                                                                                       // 5
  emailResetLink: "Email Reset Link",                                                                                  // 5
  forgotPassword: "Forgot your password?",                                                                             // 5
  ifYouAlreadyHaveAnAccount: "If you already have an account",                                                         // 5
  newPassword: "New Password",                                                                                         // 5
  newPasswordAgain: "New Password (again)",                                                                            // 5
  optional: "Optional",                                                                                                // 5
  OR: "OR",                                                                                                            // 5
  password: "Password",                                                                                                // 5
  passwordAgain: "Password (again)",                                                                                   // 5
  privacyPolicy: "Privacy Policy",                                                                                     // 5
  remove: "remove",                                                                                                    // 5
  resetYourPassword: "Reset your password",                                                                            // 5
  setPassword: "Set Password",                                                                                         // 5
  sign: "Sign",                                                                                                        // 5
  signIn: "Sign In",                                                                                                   // 5
  signin: "sign in",                                                                                                   // 5
  signOut: "Sign Out",                                                                                                 // 5
  signUp: "Register",                                                                                                  // 5
  signupCode: "Registration Code",                                                                                     // 5
  signUpWithYourEmailAddress: "Register with your email address",                                                      // 5
  terms: "Terms of Use",                                                                                               // 5
  updateYourPassword: "Update your password",                                                                          // 5
  username: "Username",                                                                                                // 5
  usernameOrEmail: "Username or email",                                                                                // 5
  "with": "with",                                                                                                      // 5
  maxAllowedLength: "Maximum allowed length",                                                                          // 5
  minRequiredLength: "Minimum required length",                                                                        // 5
  resendVerificationEmail: "Send email again",                                                                         // 5
  resendVerificationEmailLink_pre: "Verification email lost?",                                                         // 5
  resendVerificationEmailLink_link: "Send again",                                                                      // 5
  enterPassword: "Enter password",                                                                                     // 5
  enterNewPassword: "Enter new password",                                                                              // 5
  enterEmail: "Enter email",                                                                                           // 5
  enterUsername: "Enter username",                                                                                     // 5
  enterUsernameOrEmail: "Enter username or email",                                                                     // 5
  orUse: "Or use",                                                                                                     // 5
  info: {                                                                                                              // 5
    emailSent: "Email sent",                                                                                           // 58
    emailVerified: "Email verified",                                                                                   // 58
    passwordChanged: "Password changed",                                                                               // 58
    passwordReset: "Password reset"                                                                                    // 58
  },                                                                                                                   //
  alert: {                                                                                                             // 5
    ok: 'Ok',                                                                                                          // 64
    type: {                                                                                                            // 64
      info: 'Notice',                                                                                                  // 66
      error: 'Error',                                                                                                  // 66
      warning: 'Warning'                                                                                               // 66
    }                                                                                                                  //
  },                                                                                                                   //
  error: {                                                                                                             // 5
    emailRequired: "Email is required.",                                                                               // 71
    minChar: "7 character minimum password.",                                                                          // 71
    pwdsDontMatch: "Passwords don't match",                                                                            // 71
    pwOneDigit: "Password must have at least one digit.",                                                              // 71
    pwOneLetter: "Password requires 1 letter.",                                                                        // 71
    signInRequired: "You must be signed in to do that.",                                                               // 71
    signupCodeIncorrect: "Registration code is incorrect.",                                                            // 71
    signupCodeRequired: "Registration code is required.",                                                              // 71
    usernameIsEmail: "Username cannot be an email address.",                                                           // 71
    usernameRequired: "Username is required.",                                                                         // 71
    accounts: {                                                                                                        // 71
      "Email already exists.": "Email already exists.",                                                                // 87
      "Email doesn't match the criteria.": "Email doesn't match the criteria.",                                        // 87
      "Invalid login token": "Invalid login token",                                                                    // 87
      "Login forbidden": "Login forbidden",                                                                            // 87
      "Service unknown": "Service unknown",                                                                            // 87
      "Unrecognized options for login request": "Unrecognized options for login request",                              // 87
      "User validation failed": "User validation failed",                                                              // 87
      "Username already exists.": "Username already exists.",                                                          // 87
      "You are not logged in.": "You are not logged in.",                                                              // 87
      "You've been logged out by the server. Please log in again.": "You've been logged out by the server. Please log in again.",
      "Your session has expired. Please log in again.": "Your session has expired. Please log in again.",              // 87
      "Already verified": "Already verified",                                                                          // 87
      "Invalid email or username": "Invalid email or username",                                                        // 87
      "Internal server error": "Internal server error",                                                                // 87
      "undefined": "Somthing went wrong",                                                                              // 87
      "No matching login attempt found": "No matching login attempt found",                                            // 87
      "Password is old. Please reset your password.": "Password is old. Please reset your password.",                  // 87
      "Incorrect password": "Incorrect password",                                                                      // 87
      "Invalid email": "Invalid email",                                                                                // 87
      "Must be logged in": "Must be logged in",                                                                        // 87
      "Need to set a username or email": "Need to set a username or email",                                            // 87
      "old password format": "old password format",                                                                    // 87
      "Password may not be empty": "Password may not be empty",                                                        // 87
      "Signups forbidden": "Signups forbidden",                                                                        // 87
      "Token expired": "Token expired",                                                                                // 87
      "Token has invalid email address": "Token has invalid email address",                                            // 87
      "User has no password set": "User has no password set",                                                          // 87
      "User not found": "User not found",                                                                              // 87
      "Verify email link expired": "Verify email link expired",                                                        // 87
      "Verify email link is for unknown address": "Verify email link is for unknown address",                          // 87
      "At least 1 digit, 1 lowercase and 1 uppercase": "At least 1 digit, 1 lowercase and 1 uppercase",                // 87
      "Please verify your email first. Check the email and follow the link!": "Please verify your email first. Check the email and follow the link!",
      "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
      "Match failed": "Match failed",                                                                                  // 87
      "Unknown error": "Unknown error",                                                                                // 87
      "Error, too many requests. Please slow down. You must wait 1 seconds before trying again.": "Error, too many requests. Please slow down. You must wait 1 seconds before trying again."
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("en", en);                                                                                                     // 3
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/es.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var es;                                                                                                                // 4
                                                                                                                       //
es = {                                                                                                                 // 4
  t9Name: 'Español',                                                                                                   // 6
  add: "agregar",                                                                                                      // 6
  and: "y",                                                                                                            // 6
  back: "atrás",                                                                                                       // 6
  changePassword: "Cambiar contraseña",                                                                                // 6
  choosePassword: "Eligir contraseña",                                                                                 // 6
  clickAgree: "Al hacer clic en Sucribir apruebas la",                                                                 // 6
  configure: "Disposición",                                                                                            // 6
  createAccount: "Crear cuenta",                                                                                       // 6
  currentPassword: "Contraseña actual",                                                                                // 6
  dontHaveAnAccount: "No tienes una cuenta?",                                                                          // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Dirección de email",                                                                                  // 6
  emailResetLink: "Reiniciar email",                                                                                   // 6
  forgotPassword: "Olvidó su contraseña?",                                                                             // 6
  ifYouAlreadyHaveAnAccount: "Si ya tiene una cuenta",                                                                 // 6
  newPassword: "Nueva contraseña",                                                                                     // 6
  newPasswordAgain: "Nueva contraseña (repetir)",                                                                      // 6
  optional: "Opcional",                                                                                                // 6
  OR: "O",                                                                                                             // 6
  password: "Contraseña",                                                                                              // 6
  passwordAgain: "Contraseña (repetir)",                                                                               // 6
  privacyPolicy: "Póliza de Privacidad",                                                                               // 6
  remove: "remover",                                                                                                   // 6
  resetYourPassword: "Resetear tu contraseña",                                                                         // 6
  setPassword: "Definir contraseña",                                                                                   // 6
  sign: "Ingresar",                                                                                                    // 6
  signIn: "Entrar",                                                                                                    // 6
  signin: "entrar",                                                                                                    // 6
  signOut: "Salir",                                                                                                    // 6
  signUp: "Registrarse",                                                                                               // 6
  signupCode: "Código de registro",                                                                                    // 6
  signUpWithYourEmailAddress: "Registrarse con tu email",                                                              // 6
  terms: "Términos de uso",                                                                                            // 6
  updateYourPassword: "Actualizar tu contraseña",                                                                      // 6
  username: "Usuario",                                                                                                 // 6
  usernameOrEmail: "Usuario o email",                                                                                  // 6
  "with": "con",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "Email enviado",                                                                                        // 47
    emailVerified: "Email verificado",                                                                                 // 47
    passwordChanged: "Contraseña cambiada",                                                                            // 47
    passwordReset: "Resetear contraseña"                                                                               // 47
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "El email es requerido.",                                                                           // 53
    minChar: "7 caracteres mínimo.",                                                                                   // 53
    pwdsDontMatch: "Las contraseñas no coinciden",                                                                     // 53
    pwOneDigit: "mínimo un dígito.",                                                                                   // 53
    pwOneLetter: "mínimo una letra.",                                                                                  // 53
    signInRequired: "Debes iniciar sesión para hacer eso.",                                                            // 53
    signupCodeIncorrect: "El código de suscripción no coincide.",                                                      // 53
    signupCodeRequired: "Se requiere el código de suscripción.",                                                       // 53
    usernameIsEmail: "El usuario no puede ser el email.",                                                              // 53
    usernameRequired: "Se requiere un usuario.",                                                                       // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "El email ya existe.",                                                                  // 70
      "Email doesn't match the criteria.": "El email no coincide con los criterios.",                                  // 70
      "User validation failed": "No se ha podido validar el usuario",                                                  // 70
      "Username already exists.": "El usuario ya existe.",                                                             // 70
      "You've been logged out by the server. Please log in again.": "Has sido desconectado por el servidor. Por favor ingresa de nuevo.",
      "Your session has expired. Please log in again.": "Tu sesión ha expirado. Por favor ingresa de nuevo.",          // 70
      "Incorrect password": "Contraseña inválida",                                                                     // 70
      "Must be logged in": "Debes ingresar",                                                                           // 70
      "Need to set a username or email": "Tienes que especificar un usuario o un email",                               // 70
      "Signups forbidden": "Registro prohibido",                                                                       // 70
      "Token expired": "Token expirado",                                                                               // 70
      "Token has invalid email address": "Token contiene un email inválido",                                           // 70
      "User has no password set": "Usuario no tiene contraseña",                                                       // 70
      "User not found": "Usuario no encontrado",                                                                       // 70
      "Verify email link expired": "El enlace para verificar el email ha expirado",                                    // 70
      "Verify email link is for unknown address": "El enlace para verificar el email contiene una dirección desconocida"
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("es", es);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/et.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var et;                                                                                                                // 4
                                                                                                                       //
et = {                                                                                                                 // 4
  t9Name: 'Estonian',                                                                                                  // 6
  add: "lisa",                                                                                                         // 6
  and: "ja",                                                                                                           // 6
  back: "tagasi",                                                                                                      // 6
  cancel: "Katkesta",                                                                                                  // 6
  changePassword: "Muuda salasõna",                                                                                    // 6
  choosePassword: "Vali salasõna",                                                                                     // 6
  clickAgree: "Vajutades nupule Registreeru, nõustud meie",                                                            // 6
  configure: "Seadista",                                                                                               // 6
  createAccount: "Loo konto",                                                                                          // 6
  currentPassword: "Praegune salasõna",                                                                                // 6
  dontHaveAnAccount: "Sul ei ole kontot?",                                                                             // 6
  email: "E-post",                                                                                                     // 6
  emailAddress: "E-posti aadress",                                                                                     // 6
  emailResetLink: "Saada lähestamise link",                                                                            // 6
  forgotPassword: "Unustasid salasõna?",                                                                               // 6
  ifYouAlreadyHaveAnAccount: "Kui Sul juba on konto",                                                                  // 6
  newPassword: "Uus salasõna",                                                                                         // 6
  newPasswordAgain: "Uus salasõna (uuesti)",                                                                           // 6
  optional: "Valikuline",                                                                                              // 6
  OR: "või",                                                                                                           // 6
  password: "salasõna",                                                                                                // 6
  passwordAgain: "Salasõna (uuesti)",                                                                                  // 6
  privacyPolicy: "Privaatsuspoliitika",                                                                                // 6
  remove: "eemalda",                                                                                                   // 6
  resetYourPassword: "Lähesta oma salasõna",                                                                           // 6
  setPassword: "Seadista salasõna",                                                                                    // 6
  sign: "Logi",                                                                                                        // 6
  signIn: "Logi sisse ",                                                                                               // 6
  signin: "logi sisse",                                                                                                // 6
  signOut: "Logi välja",                                                                                               // 6
  signUp: "Registreeru",                                                                                               // 6
  signupCode: "Registreerumiskood",                                                                                    // 6
  signUpWithYourEmailAddress: "Registreeru oma e-posti aadressiga",                                                    // 6
  terms: "Kasutustingimused",                                                                                          // 6
  updateYourPassword: "Uuenda oma salasõna",                                                                           // 6
  username: "Kasutajanimi",                                                                                            // 6
  usernameOrEmail: "Kasutaja või e-post",                                                                              // 6
  "with": "koos",                                                                                                      // 6
  maxAllowedLength: "Suurim lubatud pikkus",                                                                           // 6
  minRequiredLength: "Väikseim lubatud pikkus",                                                                        // 6
  resendVerificationEmail: "Saada e-kiri uuesti",                                                                      // 6
  resendVerificationEmailLink_pre: "Kinnitus e-kiri on kadunud?",                                                      // 6
  resendVerificationEmailLink_link: "Saada uuesti",                                                                    // 6
  enterPassword: "Sisesta salasõna",                                                                                   // 6
  enterNewPassword: "Sisesta uus salasõna",                                                                            // 6
  enterEmail: "Sisesta e-posti aadress",                                                                               // 6
  enterUsername: "Sisesta kasutajanimi",                                                                               // 6
  enterUsernameOrEmail: "Sisesta kasutajanimi või e-posti aadress",                                                    // 6
  orUse: "Või kasuta",                                                                                                 // 6
  info: {                                                                                                              // 6
    emailSent: "E-kiri saadetud",                                                                                      // 59
    emailVerified: "E-posti aadress kinnitatud",                                                                       // 59
    passwordChanged: "Salasõna muudetud",                                                                              // 59
    passwordReset: "Salasõna lähestatud"                                                                               // 59
  },                                                                                                                   //
  alert: {                                                                                                             // 6
    ok: 'OK',                                                                                                          // 65
    type: {                                                                                                            // 65
      info: 'Teate',                                                                                                   // 67
      error: 'Viga',                                                                                                   // 67
      warning: 'Hoiatus'                                                                                               // 67
    }                                                                                                                  //
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "E-post aadress on kohustuslik.",                                                                   // 72
    minChar: "Salasõna peab olema vähemalt 7 märgi pikkune.",                                                          // 72
    pwdsDontMatch: "Salasõnad ei vasta",                                                                               // 72
    pwOneDigit: "Salasõna peab sisaldama vähemalt ühte numbrit.",                                                      // 72
    pwOneLetter: "Salasõna peab sisaldama vähemalt ühte tähte.",                                                       // 72
    signInRequired: "Selle jaoks pead olema sisse logitud.",                                                           // 72
    signupCodeIncorrect: "Registreerimiskood on vale.",                                                                // 72
    signupCodeRequired: "Registreerimiskood on kohustuslik.",                                                          // 72
    usernameIsEmail: "Kasutajanimi ei saa olla e-posti aadress.",                                                      // 72
    usernameRequired: "Kasutajanimi on kohustuslik.",                                                                  // 72
    accounts: {                                                                                                        // 72
      "Email already exists.": "See e-posti aadress on juba registreeritud.",                                          // 88
      "Email doesn't match the criteria.": "E-posti aadress ei vasta nõuetele.",                                       // 88
      "Invalid login token": "Vigane sisselogimise žetoon",                                                            // 88
      "Login forbidden": "Sisse logimine keelatud",                                                                    // 88
      "Service unknown": "Tundmatu teenus",                                                                            // 88
      "Unrecognized options for login request": "Tundmatud seaded sisselogimise palves",                               // 88
      "User validation failed": "Kasutaja kinnitamine ei õnnestunud",                                                  // 88
      "Username already exists.": "See kasutajanimi on juba registreeritud.",                                          // 88
      "You are not logged in.": "Sa ei ole sisse logitud.",                                                            // 88
      "You've been logged out by the server. Please log in again.": "Sa oled serveri poolt välja logitud. Palun logi uuesti sisse.",
      "Your session has expired. Please log in again.": "Sinu sessioon on aegunud. Palun logi uuesti sisse.",          // 88
      "Already verified": "Juba kinnitatud",                                                                           // 88
      "Invalid email or username": "Vale e-posti aadress või kasutajanimi",                                            // 88
      "Internal server error": "Sisemine serveri viga",                                                                // 88
      "undefined": "Midagi läks valesti",                                                                              // 88
      "No matching login attempt found": "Sobivat logimisproovi ei leitud",                                            // 88
      "Password is old. Please reset your password.": "Salasõna on vana. Palun lähesta oma salasõna.",                 // 88
      "Incorrect password": "Vale salasõna",                                                                           // 88
      "Invalid email": "Vale e-posti aadress",                                                                         // 88
      "Must be logged in": "Pead olema sisse logitud",                                                                 // 88
      "Need to set a username or email": "Vaja on seadistada kasutajanimi või e-post",                                 // 88
      "old password format": "vana salasõna formaat",                                                                  // 88
      "Password may not be empty": "Salasõna ei või olla tühi",                                                        // 88
      "Signups forbidden": "Registreerumine on suletud",                                                               // 88
      "Token expired": "Aegunud žetoon",                                                                               // 88
      "Token has invalid email address": "Žetoon on seotud vale e-posti aadressiga",                                   // 88
      "User has no password set": "Kasutajal on salasõna seadmata",                                                    // 88
      "User not found": "Sellist kasutajat ei leitud",                                                                 // 88
      "Verify email link expired": "Kinnitus e-kirja viide on aegunud",                                                // 88
      "Verify email link is for unknown address": "Kinnitus e-kirja viide on tundmatule aadressile",                   // 88
      "At least 1 digit, 1 lowercase and 1 uppercase": "Vähemalt 1 number, 1 väike täht ja 1 suur täht",               // 88
      "Please verify your email first. Check the email and follow the link!": "Palun kinnita oma e-posti aadress. E-kirjas vajuta viitele!",
      "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "Sulle on saadetud uus e-kiri. Kui sa kirja ei näe, vaata palun rämpsposti kausta.",
      "Match failed": "Ei sobi",                                                                                       // 88
      "Unknown error": "Teadmata viga",                                                                                // 88
      "Error, too many requests. Please slow down. You must wait 1 seconds before trying again.": "Viga, liiga palju proovimisi. Palun võta aeg maha. Pead ootama vähemalt 1 sekundi, enne kui uuesti proovid."
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("et", et);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/es_ES.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var es_ES;                                                                                                             // 4
                                                                                                                       //
es_ES = {                                                                                                              // 4
  add: "agregar",                                                                                                      // 6
  and: "y",                                                                                                            // 6
  back: "atrás",                                                                                                       // 6
  changePassword: "Cambiar Contraseña",                                                                                // 6
  choosePassword: "Eligir Contraseña",                                                                                 // 6
  clickAgree: "Si haces clic en Crear Cuenta estás de acuerdo con la",                                                 // 6
  configure: "Configurar",                                                                                             // 6
  createAccount: "Crear cuenta",                                                                                       // 6
  currentPassword: "Contraseña actual",                                                                                // 6
  dontHaveAnAccount: "¿No estás registrado?",                                                                          // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Dirección de email",                                                                                  // 6
  emailResetLink: "Restaurar email",                                                                                   // 6
  forgotPassword: "¿Has olvidado tu contraseña?",                                                                      // 6
  ifYouAlreadyHaveAnAccount: "Ya tienes una cuenta, ",                                                                 // 6
  newPassword: "Nueva Contraseña",                                                                                     // 6
  newPasswordAgain: "Nueva Contraseña (repetición)",                                                                   // 6
  optional: "Opcional",                                                                                                // 6
  OR: "O",                                                                                                             // 6
  password: "Contraseña",                                                                                              // 6
  passwordAgain: "Contraseña (repetición)",                                                                            // 6
  privacyPolicy: "Póliza de Privacidad",                                                                               // 6
  remove: "remover",                                                                                                   // 6
  resetYourPassword: "Recuperar tu contraseña",                                                                        // 6
  setPassword: "Definir Contraseña",                                                                                   // 6
  sign: "Entrar",                                                                                                      // 6
  signIn: "Entrar",                                                                                                    // 6
  signin: "entra",                                                                                                     // 6
  signOut: "Salir",                                                                                                    // 6
  signUp: "Regístrate",                                                                                                // 6
  signupCode: "Código para registrarte",                                                                               // 6
  signUpWithYourEmailAddress: "Regístrate con tu email",                                                               // 6
  terms: "Términos de Uso",                                                                                            // 6
  updateYourPassword: "Actualizar tu contraseña",                                                                      // 6
  username: "Usuario",                                                                                                 // 6
  usernameOrEmail: "Usuario o email",                                                                                  // 6
  "with": "con",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "Email enviado",                                                                                        // 45
    emailVerified: "Email verificado",                                                                                 // 45
    passwordChanged: "Contraseña cambiado",                                                                            // 45
    passwordReset: "Resetar Contraseña"                                                                                // 45
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "El email es necesario.",                                                                           // 51
    minChar: "7 carácteres mínimo.",                                                                                   // 51
    pwdsDontMatch: "Contraseñas no coninciden",                                                                        // 51
    pwOneDigit: "mínimo un dígito.",                                                                                   // 51
    pwOneLetter: "mínimo una letra.",                                                                                  // 51
    signInRequired: "Debes iniciar sesión para esta opción.",                                                          // 51
    signupCodeIncorrect: "Código de registro inválido.",                                                               // 51
    signupCodeRequired: "Se requiere un código de registro.",                                                          // 51
    usernameIsEmail: "El usuario no puede ser una dirección de correo.",                                               // 51
    usernameRequired: "Se quiere nombre de usuario.",                                                                  // 51
    accounts: {                                                                                                        // 51
      "Email already exists.": "El correo ya existe.",                                                                 // 68
      "Email doesn't match the criteria.": "El correo no coincide.",                                                   // 68
      "User validation failed": "No hemos podido verificar el usuario",                                                // 68
      "Username already exists.": "Este usuario ya existe.",                                                           // 68
      "You've been logged out by the server. Please log in again.": "Has sido desconectado por el servidor. Por favor inicia sesión de nuevo.",
      "Your session has expired. Please log in again.": "Tu session ha expirado. Por favor inicia sesión de nuevo.",   // 68
      "Incorrect password": "Contraseña inválida",                                                                     // 68
      "Must be logged in": "Debes iniciar sesión",                                                                     // 68
      "Need to set a username or email": "Debes especificar un usuario o email",                                       // 68
      "Signups forbidden": "Los registros no están permitidos en este momento",                                        // 68
      "Token expired": "El token ha expirado",                                                                         // 68
      "Token has invalid email address": "EL token contiene un email inválido",                                        // 68
      "User has no password set": "El usuario no tiene contraseña",                                                    // 68
      "User not found": "Usuario no encontrado",                                                                       // 68
      "Verify email link expired": "El enlace para verificar el email ha expierado",                                   // 68
      "Verify email link is for unknown address": "El enlace para verificar el email está asociado a una dirección desconocida"
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("es_ES", es_ES);                                                                                               // 4
                                                                                                                       //
T9n.map("es-ES", es_ES);                                                                                               // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/fa.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var fa;                                                                                                                // 4
                                                                                                                       //
fa = {                                                                                                                 // 4
  add: "افزودن",                                                                                                       // 6
  and: "و",                                                                                                            // 6
  back: "برگشت",                                                                                                       // 6
  changePassword: "تعویض گذرواژه",                                                                                     // 6
  choosePassword: "انتخاب یک گذرواژه",                                                                                 // 6
  clickAgree: "با انتخاب ثبت‌نام، شما موافق هستید با",                                                                 // 6
  configure: "پیکربندی",                                                                                               // 6
  createAccount: "ایجاد یک حساب",                                                                                      // 6
  currentPassword: "گذرواژه کنونی",                                                                                    // 6
  dontHaveAnAccount: "یک حساب ندارید؟",                                                                                // 6
  email: "رایانامه",                                                                                                   // 6
  emailAddress: "آدرس رایانامه",                                                                                       // 6
  emailResetLink: "پیوند بازنشانی رایانامه",                                                                           // 6
  forgotPassword: "گذرواژه‌تان را فراموش کرده‌اید؟",                                                                   // 6
  ifYouAlreadyHaveAnAccount: "اگر هم‌اکنون یک حساب دارید",                                                             // 6
  newPassword: "گذرواژه جدید",                                                                                         // 6
  newPasswordAgain: "گذرواژه جدید (تکرار)",                                                                            // 6
  optional: "اختيارى",                                                                                                 // 6
  OR: "یا",                                                                                                            // 6
  password: "گذرواژه",                                                                                                 // 6
  passwordAgain: "گذرواژه (دوباره)",                                                                                   // 6
  privacyPolicy: "حریم خصوصی",                                                                                         // 6
  remove: "حذف",                                                                                                       // 6
  resetYourPassword: "بازنشانی گذرواژه شما",                                                                           // 6
  setPassword: "تنظیم گذرواژه",                                                                                        // 6
  sign: "نشان",                                                                                                        // 6
  signIn: "ورود",                                                                                                      // 6
  signin: "ورود",                                                                                                      // 6
  signOut: "خروج",                                                                                                     // 6
  signUp: "ثبت‌نام",                                                                                                   // 6
  signupCode: "کد ثبت‌نام",                                                                                            // 6
  signUpWithYourEmailAddress: "با آدرس رایانامه‌تان ثبت‌نام کنید",                                                     // 6
  terms: "قوانین استفاده",                                                                                             // 6
  updateYourPassword: "گذرواژه‌تان را به روز کنید",                                                                    // 6
  username: "نام کاربری",                                                                                              // 6
  usernameOrEmail: "نام کاربری یا رایانامه",                                                                           // 6
  "with": "با",                                                                                                        // 6
  info: {                                                                                                              // 6
    emailSent: "رایانامه ارسال شد",                                                                                    // 46
    emailVerified: "رایانامه تایید شد",                                                                                // 46
    passwordChanged: "گذرواژه تغییر کرد",                                                                              // 46
    passwordReset: "گذرواژه بازنشانی شد"                                                                               // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "رایانامه ضروری است.",                                                                              // 53
    minChar: "گذرواژه حداقل ۷ کاراکتر.",                                                                               // 53
    pwdsDontMatch: "گذرواژه‌ها تطابق ندارند",                                                                          // 53
    pwOneDigit: "گذرواژه باید لااقل یک رقم داشته باشد.",                                                               // 53
    pwOneLetter: "گذرواژه یک حرف نیاز دارد.",                                                                          // 53
    signInRequired: "برای انجام آن باید وارد شوید.",                                                                   // 53
    signupCodeIncorrect: "کد ثبت‌نام نادرست است.",                                                                     // 53
    signupCodeRequired: "کد ثبت‌نام ضروری است.",                                                                       // 53
    usernameIsEmail: "نام کاربری نمی‌توان آدرس رایانامه باشد.",                                                        // 53
    usernameRequired: "نام کاربری ضروری است.",                                                                         // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "رایانامه هم‌اکنون وجود دارد.",                                                         // 70
      "Email doesn't match the criteria.": "رایانامه با ضوابط تطابق ندارد.",                                           // 70
      "Invalid login token": "علامت ورود نامعتبر است",                                                                 // 70
      "Login forbidden": "ورود ممنوع است",                                                                             // 70
      "Service unknown": "سرویس ناشناس",                                                                               // 70
      "Unrecognized options for login request": "گزینه‌های نامشخص برای درخواست ورود",                                  // 70
      "User validation failed": "اعتبارسنجی کاربر ناموفق",                                                             // 70
      "Username already exists.": "نام کاربری هم‌اکنون وجود دارد.",                                                    // 70
      "You are not logged in.": "شما وارد نشده‌اید.",                                                                  // 70
      "You've been logged out by the server. Please log in again.": "شما توسط سرور خارج شده‌اید. لطفأ دوباره وارد شوید.",
      "Your session has expired. Please log in again.": "جلسه شما منقضی شده است. لطفا دوباره وارد شوید.",              // 70
      "No matching login attempt found": "تلاش ورود مطابق یافت نشد",                                                   // 70
      "Password is old. Please reset your password.": "گذرواژه قدیمی است. لطفأ گذرواژه‌تان را بازتنظیم کنید.",         // 70
      "Incorrect password": "گذرواژه نادرست",                                                                          // 70
      "Invalid email": "رایانامه نامعتبر",                                                                             // 70
      "Must be logged in": "باید وارد شوید",                                                                           // 70
      "Need to set a username or email": "یک نام کاربری یا ایمیل باید تنظیم شود",                                      // 70
      "old password format": "قالب گذرواژه قدیمی",                                                                     // 70
      "Password may not be empty": "گذرواژه نمی‌تواند خالی باشد",                                                      // 70
      "Signups forbidden": "ثبت‌نام ممنوع",                                                                            // 70
      "Token expired": "علامت رمز منقظی شده است",                                                                      // 70
      "Token has invalid email address": "علامت رمز دارای آدرس رایانامه نامعتبر است",                                  // 70
      "User has no password set": "کاربر گذرواژه‌ای تنظیم نکرده است",                                                  // 70
      "User not found": "کاربر یافت نشد",                                                                              // 70
      "Verify email link expired": "پیوند تایید رایانامه منقضی شده است",                                               // 70
      "Verify email link is for unknown address": "پیوند تایید رایانامه برای آدرس ناشناخته است",                       // 70
      "Match failed": "تطابق ناموفق",                                                                                  // 70
      "Unknown error": "خطای ناشناخته"                                                                                 // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("fa", fa);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/fr.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var fr;                                                                                                                // 4
                                                                                                                       //
fr = {                                                                                                                 // 4
  t9Name: 'Français',                                                                                                  // 6
  add: "Ajouter",                                                                                                      // 6
  and: "et",                                                                                                           // 6
  back: "retour",                                                                                                      // 6
  changePassword: "Modifier le mot de passe",                                                                          // 6
  choosePassword: "Choisir le mot de passe",                                                                           // 6
  clickAgree: "En cliquant sur « S'enregistrer », vous acceptez nos",                                                  // 6
  configure: "Configurer",                                                                                             // 6
  createAccount: "Créer un compte",                                                                                    // 6
  currentPassword: "Mot de passe actuel",                                                                              // 6
  dontHaveAnAccount: "Vous n'avez pas de compte ?",                                                                    // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "Adresse e-mail",                                                                                      // 6
  emailResetLink: "Envoyer l'e-mail de réinitialisation",                                                              // 6
  forgotPassword: "Mot de passe oublié ?",                                                                             // 6
  ifYouAlreadyHaveAnAccount: "Si vous avez déjà un compte",                                                            // 6
  newPassword: "Nouveau mot de passe",                                                                                 // 6
  newPasswordAgain: "Confirmer le nouveau mot de passe",                                                               // 6
  optional: "Facultatif",                                                                                              // 6
  OR: "OU",                                                                                                            // 6
  password: "Mot de passe",                                                                                            // 6
  passwordAgain: "Confirmer le mot de passe",                                                                          // 6
  privacyPolicy: "Politique de confidentialité",                                                                       // 6
  remove: "Supprimer",                                                                                                 // 6
  resetYourPassword: "Reinitialiser votre mot de passe",                                                               // 6
  setPassword: "Renseigner le mot de passe",                                                                           // 6
  sign: "S'enregistrer",                                                                                               // 6
  signIn: "Se connecter",                                                                                              // 6
  signin: "se connecter",                                                                                              // 6
  signOut: "Se déconnecter",                                                                                           // 6
  signUp: "S'enregistrer",                                                                                             // 6
  signupCode: "Code d'inscription",                                                                                    // 6
  signUpWithYourEmailAddress: "S'enregistrer avec votre adresse e-mail",                                               // 6
  terms: "Conditions d'utilisation",                                                                                   // 6
  updateYourPassword: "Mettre à jour le mot de passe",                                                                 // 6
  username: "Nom d'utilisateur",                                                                                       // 6
  usernameOrEmail: "Nom d'utilisateur ou adresse e-mail",                                                              // 6
  "with": "avec",                                                                                                      // 6
  "Verification email lost?": "Vous n'avez pas reçu votre email de vérification?",                                     // 6
  "Send again": "Recevoir un nouvel email",                                                                            // 6
  "Send the verification email again": "Recevoir un nouvel email de vérification",                                     // 6
  "Send email again": "Renvoyer un email",                                                                             // 6
  "Minimum required length: 6": "Veuillez entrer au moins 6 caractères",                                               // 6
  "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "Un nouvel email vient de vous être envoyé. Si vous ne le trouvez pas dans votre boite de réception, vérifiez dans vos spams.",
  "Required Field": "Ce champ est obligatoire",                                                                        // 6
  "Successful Registration! Please check your email and follow the instructions.": "Votre compte est enregistré. Vous allez recevoir un email contenant les instructions pour valider votre compte",
  info: {                                                                                                              // 6
    emailSent: "E-mail envoyé",                                                                                        // 56
    emailVerified: "Adresse e-mail verifiée",                                                                          // 56
    passwordChanged: "Mot de passe modifié",                                                                           // 56
    passwordReset: "Mot de passe réinitialisé",                                                                        // 56
    emailSent: "L'email est envoyé",                                                                                   // 56
    emailVerified: "L'email est vérifié",                                                                              // 56
    passwordChanged: "Le mot de passe a été modifié",                                                                  // 56
    passwordReset: "Le mot de passe a été mis à jour"                                                                  // 56
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Une adresse e-mail est requise.",                                                                  // 67
    minChar: "Votre mot de passe doit contenir au moins 7 caractères.",                                                // 67
    pwdsDontMatch: "Les mots de passe ne correspondent pas",                                                           // 67
    pwOneDigit: "Votre mot de passe doit contenir au moins un chiffre.",                                               // 67
    pwOneLetter: "Votre mot de passe doit contenir au moins une lettre.",                                              // 67
    signInRequired: "Vous devez être connecté pour continuer.",                                                        // 67
    signupCodeIncorrect: "Le code d'enregistrement est incorrect.",                                                    // 67
    signupCodeRequired: "Un code d'inscription est requis.",                                                           // 67
    usernameIsEmail: "Le nom d'utilisateur ne peut être le même que l'adresse email.",                                 // 67
    usernameRequired: "Un nom d'utilisateur est requis.",                                                              // 67
    accounts: {                                                                                                        // 67
      "Email already exists.": "Adresse e-mail déjà utilisée.",                                                        // 84
      "Email doesn't match the criteria.": "L'adresse e-mail ne correspond pas aux critères.",                         // 84
      "Invalid login token": "Jeton d'authentification invalide",                                                      // 84
      "Login forbidden": "Votre identifiant ou votre mot de passe est incorrect",                                      // 84
      "Service unknown": "Service inconnu",                                                                            // 84
      "Unrecognized options for login request": "Options inconnues pour la requête d'authentification",                // 84
      "User validation failed": "Échec de la validation de l'utilisateur",                                             // 84
      "Username already exists.": "Nom d'utilisateur déjà utilisé.",                                                   // 84
      "You are not logged in.": "Vous n'êtes pas connecté.",                                                           // 84
      "You've been logged out by the server. Please log in again.": "Vous avez été déconnecté par le serveur. Veuillez vous reconnecter.",
      "Your session has expired. Please log in again.": "Votre session a expiré. Veuillez vous reconnecter.",          // 84
      "No matching login attempt found": "Aucune tentative d'authentification ne correspond",                          // 84
      "Password is old. Please reset your password.": "Votre mot de passe est trop ancien. Veuillez le modifier.",     // 84
      "Incorrect password": "Mot de passe incorrect",                                                                  // 84
      "Invalid email": "Adresse e-mail invalide",                                                                      // 84
      "Must be logged in": "Vous devez être connecté",                                                                 // 84
      "Need to set a username or email": "Vous devez renseigner un nom d'utilisateur ou une adresse e-mail",           // 84
      "old password format": "Ancien format de mot de passe",                                                          // 84
      "Password may not be empty": "Le mot de passe ne peut être vide",                                                // 84
      "Signups forbidden": "Vous ne pouvez pas créer de compte",                                                       // 84
      "Token expired": "Jeton expiré",                                                                                 // 84
      "Token has invalid email address": "Le jeton contient une adresse e-mail invalide",                              // 84
      "User has no password set": "L'utilisateur n'a pas de mot de passe",                                             // 84
      "User not found": "Utilisateur inconnu",                                                                         // 84
      "Verify email link expired": "Lien de vérification d'e-mail expiré",                                             // 84
      "Please verify your email first. Check the email and follow the link!": "Votre email n'est pas validé. Merci de cliquer sur le lien que vous avez reçu",
      "Verify email link is for unknown address": "Le lien de vérification d'e-mail réfère à une adresse inconnue",    // 84
      "Match failed": "La correspondance a échoué",                                                                    // 84
      "Unknown error": "Erreur inconnue"                                                                               // 84
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("fr", fr);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/he.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var he;                                                                                                                // 5
                                                                                                                       //
he = {                                                                                                                 // 5
  add: "הוסף",                                                                                                         // 7
  and: "ו",                                                                                                            // 7
  back: "חזרה",                                                                                                        // 7
  changePassword: "שינוי סיסמא",                                                                                       // 7
  choosePassword: "בחירת סיסמא",                                                                                       // 7
  clickAgree: "על ידי לחיצה על הירשם, הינך מסכים",                                                                     // 7
  configure: "הגדרות",                                                                                                 // 7
  createAccount: "הוספת חשבון",                                                                                        // 7
  currentPassword: "סיסמא נוכחית",                                                                                     // 7
  dontHaveAnAccount: "אין לך חשבון?",                                                                                  // 7
  email: "דוא\"ל",                                                                                                     // 7
  emailAddress: "דוא\"ל",                                                                                              // 7
  emailResetLink: "שלח קישור לאיפוס סיסמא",                                                                            // 7
  forgotPassword: "שכחת סיסמא?",                                                                                       // 7
  ifYouAlreadyHaveAnAccount: "אם יש לך חשבון",                                                                         // 7
  newPassword: "סיסמא חדשה",                                                                                           // 7
  newPasswordAgain: "סיסמא חדשה (שוב)",                                                                                // 7
  optional: "רשות",                                                                                                    // 7
  OR: "או",                                                                                                            // 7
  password: "סיסמא",                                                                                                   // 7
  passwordAgain: "סיסמא (שוב)",                                                                                        // 7
  privacyPolicy: "למדיניות הפרטיות",                                                                                   // 7
  remove: "הסרה",                                                                                                      // 7
  resetYourPassword: "איפוס סיסמא",                                                                                    // 7
  setPassword: "עדכון סיסמא",                                                                                          // 7
  signIn: "כניסה",                                                                                                     // 7
  signin: "כניסה",                                                                                                     // 7
  signOut: "יציאה",                                                                                                    // 7
  signUp: "הרשמה לחשבון",                                                                                              // 7
  signupCode: "קוד הרשמה",                                                                                             // 7
  signUpWithYourEmailAddress: "הירשם באמצעות הדוא\"ל",                                                                 // 7
  terms: "לתנאי השימוש",                                                                                               // 7
  updateYourPassword: "עדכון סיסמא",                                                                                   // 7
  username: "שם משתמש",                                                                                                // 7
  usernameOrEmail: "שם משמש או דוא\"ל",                                                                                // 7
  "with": "עם",                                                                                                        // 7
  info: {                                                                                                              // 7
    emailSent: "נשלחה הודעה לדוא\"ל",                                                                                  // 47
    emailVerified: "כתובת הדוא\"ל וודאה בהצלחה",                                                                       // 47
    passwordChanged: "סיסמתך שונתה בהצלחה",                                                                            // 47
    passwordReset: "סיסמתך אופסה בהצלחה"                                                                               // 47
  },                                                                                                                   //
  error: {                                                                                                             // 7
    emailRequired: "חובה להזין כתובת דוא\"ל",                                                                          // 54
    minChar: "חובה להזין סיסמא בעלת 7 תווים לפחות.",                                                                   // 54
    pwdsDontMatch: "הסיסמאות אינן זהות.",                                                                              // 54
    pwOneDigit: "הסיסמא חייבת לכלול ספרה אחת לפחות.",                                                                  // 54
    pwOneLetter: "הסיסמא חייבת לכלול אות אחת לפחות.",                                                                  // 54
    signInRequired: "חובה להיכנס למערכת כדי לבצע פעולה זו.",                                                           // 54
    signupCodeIncorrect: "קוד ההרשמה שגוי.",                                                                           // 54
    signupCodeRequired: "חובה להזין את קוד ההרשמה.",                                                                   // 54
    usernameIsEmail: "של המשתמש לא יכול להיות כתובת דוא\"ל.",                                                          // 54
    usernameRequired: "חובה להזין שם משתמש.",                                                                          // 54
    accounts: {                                                                                                        // 54
      "Email already exists.": "הדוא\"ל כבר רשום לחשבון.",                                                             // 71
      "Email doesn't match the criteria.": "הדוא\"ל לא מקיים את הקריטריונים.",                                         // 71
      "Invalid login token": "Token כניסה שגוי",                                                                       // 71
      "Login forbidden": "הכניסה נאסרה",                                                                               // 71
      "Service unknown": "Service לא ידוע",                                                                            // 71
      "Unrecognized options for login request": "נסיון הכניסה כלל אופציות לא מזוהות",                                  // 71
      "User validation failed": "אימות המשתמש נכשל",                                                                   // 71
      "Username already exists.": "שם המשתמש כבר קיים.",                                                               // 71
      "You are not logged in.": "לא נכנסת לחשבון.",                                                                    // 71
      "You've been logged out by the server. Please log in again.": "השרת הוציא אותך מהמערכת. נא להיכנס לחשבונך שוב.",
      "Your session has expired. Please log in again.": "ה-session שלך פג תוקף. נא להיכנס לחשבונך שוב.",               // 71
      "No matching login attempt found": "לא נמצא נסיון כניסה מתאים",                                                  // 71
      "Password is old. Please reset your password.": "סיסמתך ישנה. נא להחליך אותה.",                                  // 71
      "Incorrect password": "סיסמא שגויה",                                                                             // 71
      "Invalid email": "דוא\"ל שגוי",                                                                                  // 71
      "Must be logged in": "חובה להיכנס למערכת כדי לבצע פעולה זו.",                                                    // 71
      "Need to set a username or email": "חובה להגדיר שם משתמש או דוא\"ל",                                             // 71
      "old password format": "פורמט סיסמא ישן",                                                                        // 71
      "Password may not be empty": "הסיסמא לא יכולה להיות ריקה",                                                       // 71
      "Signups forbidden": "אסור להירשם",                                                                              // 71
      "Token expired": "ה-token פג תוקף",                                                                              // 71
      "Token has invalid email address": "ה-token מכיל כתובת דוא\"ל שגוייה",                                           // 71
      "User has no password set": "למשתמש אין סיסמא",                                                                  // 71
      "User not found": "המשתמש לא נמצא",                                                                              // 71
      "Verify email link expired": "קישור וידוי הדוא\"ל פג תוקף",                                                      // 71
      "Verify email link is for unknown address": "קישור וידוי הדוא\"ל הוא לכתובת לא ידועה",                           // 71
      "Match failed": "ההתאמה נכשלה",                                                                                  // 71
      "Unknown error": "שגיאה לא ידועה"                                                                                // 71
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("he", he);                                                                                                     // 5
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/hr.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var hr;                                                                                                                // 4
                                                                                                                       //
hr = {                                                                                                                 // 4
  add: "dodaj",                                                                                                        // 6
  and: "i",                                                                                                            // 6
  back: "nazad",                                                                                                       // 6
  changePassword: "Promjeni zaporku",                                                                                  // 6
  choosePassword: "Izaberi zaporku",                                                                                   // 6
  clickAgree: "Klikom na Registracija, prihvatate naše",                                                               // 6
  configure: "Podesi",                                                                                                 // 6
  createAccount: "Napravite račun",                                                                                    // 6
  currentPassword: "Trenutna zaporka",                                                                                 // 6
  dontHaveAnAccount: "Vi nemate račun?",                                                                               // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Email adresa",                                                                                        // 6
  emailResetLink: "Email reset link",                                                                                  // 6
  forgotPassword: "Zaboravili ste zaporku?",                                                                           // 6
  ifYouAlreadyHaveAnAccount: "Ako već imate račun",                                                                    // 6
  newPassword: "Nova zaporka",                                                                                         // 6
  newPasswordAgain: "Nova zaporka (ponovno)",                                                                          // 6
  optional: "neobavezno",                                                                                              // 6
  OR: "ili",                                                                                                           // 6
  password: "Zaporka",                                                                                                 // 6
  passwordAgain: "Zaporka (ponovno)",                                                                                  // 6
  privacyPolicy: "Izjava o privatnosti",                                                                               // 6
  remove: "ukloni",                                                                                                    // 6
  resetYourPassword: "Resetirajte",                                                                                    // 6
  setPassword: "Postavite zaporku",                                                                                    // 6
  sign: "Prijava",                                                                                                     // 6
  signIn: "Prijavi se",                                                                                                // 6
  signin: "prijavi se",                                                                                                // 6
  signOut: "Odjavi se",                                                                                                // 6
  signUp: "Registracija",                                                                                              // 6
  signupCode: "Registracijski kod",                                                                                    // 6
  signUpWithYourEmailAddress: "Registrirajte se sa vašom email adresom",                                               // 6
  terms: "Uslovi korištenja",                                                                                          // 6
  updateYourPassword: "Ažurirajte lozinku",                                                                            // 6
  username: "Korisničko ime",                                                                                          // 6
  usernameOrEmail: "Korisničko ime ili lozinka",                                                                       // 6
  "with": "sa",                                                                                                        // 6
  info: {                                                                                                              // 6
    emailSent: "Email je poslan",                                                                                      // 46
    emailVerified: "Email je verificiran",                                                                             // 46
    passwordChanged: "Zaproka promjenjena",                                                                            // 46
    passwordReset: "Zaporka resetirana"                                                                                // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email je potreban.",                                                                               // 53
    minChar: "Zaporka mora sadržavati više od 7 znakova.",                                                             // 53
    pwdsDontMatch: "Zaporke se ne poklapaju.",                                                                         // 53
    pwOneDigit: "Zaporka mora sadržavati barem jednu brojku.",                                                         // 53
    pwOneLetter: "Zaporka mora sadržavati barem jedno slovo.",                                                         // 53
    signInRequired: "Morate biti prijavljeni za to.",                                                                  // 53
    signupCodeIncorrect: "Registracijski kod je netočan.",                                                             // 53
    signupCodeRequired: "Registracijski kod je potreban.",                                                             // 53
    usernameIsEmail: "Korisničko ime ne može biti email.",                                                             // 53
    usernameRequired: "Korisničko ime je potrebno.",                                                                   // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Email već postoji.",                                                                   // 70
      "Email doesn't match the criteria.": "Email ne zadovoljava kriterij.",                                           // 70
      "Invalid login token": "Nevažeći  token za prijavu",                                                             // 70
      "Login forbidden": "Prijava zabranjena",                                                                         // 70
      "Service unknown": "Servis nepoznat",                                                                            // 70
      "Unrecognized options for login request": "Neprepoznate opcije zahtjeva za prijavu",                             // 70
      "User validation failed": "Provjera valjanosti za korisnika neuspješna.",                                        // 70
      "Username already exists.": "Korisnik već postoji.",                                                             // 70
      "You are not logged in.": "Niste prijavljeni.",                                                                  // 70
      "You've been logged out by the server. Please log in again.": "Odjavljeni ste sa servera. Molimo Vas ponovno se prijavite.",
      "Your session has expired. Please log in again.": "Vaša sesija je istekla. Molimo prijavite se ponovno.",        // 70
      "No matching login attempt found": "Pokušaj prijave se ne podudara sa podatcima u bazi.",                        // 70
      "Password is old. Please reset your password.": "Zaporka je stara. Molimo resetujte zaporku.",                   // 70
      "Incorrect password": "Netočna zaporka",                                                                         // 70
      "Invalid email": "Nevažeći email",                                                                               // 70
      "Must be logged in": "Morate biti prijavljeni",                                                                  // 70
      "Need to set a username or email": "Morate postaviti korisničko ime ili email",                                  // 70
      "old password format": "stari format zaporke",                                                                   // 70
      "Password may not be empty": "Zaporka ne može biti prazna",                                                      // 70
      "Signups forbidden": "Prijave zabranjenje",                                                                      // 70
      "Token expired": "Token je istekao",                                                                             // 70
      "Token has invalid email address": "Token ima nevažeću email adresu",                                            // 70
      "User has no password set": "Korisnik nema postavljenu zaporku",                                                 // 70
      "User not found": "Korisnik nije pronađen",                                                                      // 70
      "Verify email link expired": "Link za verifikaciju emaila je istekao",                                           // 70
      "Verify email link is for unknown address": "Link za verifikaciju emaila je za nepoznatu adresu",                // 70
      "Match failed": "Usporedba neuspjela",                                                                           // 70
      "Unknown error": "Nepoznata pogreška"                                                                            // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("hr", hr);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/hu.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var hu;                                                                                                                // 4
                                                                                                                       //
hu = {                                                                                                                 // 4
  add: "hozzáadás",                                                                                                    // 6
  and: "és",                                                                                                           // 6
  back: "vissza",                                                                                                      // 6
  changePassword: "Jelszó megváltoztatása",                                                                            // 6
  choosePassword: "Válassz egy jelszót",                                                                               // 6
  clickAgree: "A regisztráció gombra kattintva egyetértesz a mi",                                                      // 6
  configure: "Beállítás",                                                                                              // 6
  createAccount: "Felhasználó létrehozása",                                                                            // 6
  currentPassword: "Jelenlegi jelszó",                                                                                 // 6
  dontHaveAnAccount: "Nincs még felhasználód?",                                                                        // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Email cím",                                                                                           // 6
  emailResetLink: "Visszaállító link küldése",                                                                         // 6
  forgotPassword: "Elfelejtetted a jelszavadat?",                                                                      // 6
  ifYouAlreadyHaveAnAccount: "Ha már van felhasználód, ",                                                              // 6
  newPassword: "Új jelszó",                                                                                            // 6
  newPasswordAgain: "Új jelszó (ismét)",                                                                               // 6
  optional: "Opcionális",                                                                                              // 6
  OR: "VAGY",                                                                                                          // 6
  password: "Jelszó",                                                                                                  // 6
  passwordAgain: "Jelszó (ismét)",                                                                                     // 6
  privacyPolicy: "Adatvédelmi irányelvek",                                                                             // 6
  remove: "eltávolítás",                                                                                               // 6
  resetYourPassword: "Jelszó visszaállítása",                                                                          // 6
  setPassword: "Jelszó beállítása",                                                                                    // 6
  sign: "Bejelentkezés",                                                                                               // 6
  signIn: "Bejelentkezés",                                                                                             // 6
  signin: "jelentkezz be",                                                                                             // 6
  signOut: "Kijelentkezés",                                                                                            // 6
  signUp: "Regisztráció",                                                                                              // 6
  signupCode: "Regisztrációs kód",                                                                                     // 6
  signUpWithYourEmailAddress: "Regisztráció email címmel",                                                             // 6
  terms: "Használati feltételek",                                                                                      // 6
  updateYourPassword: "Jelszó módosítása",                                                                             // 6
  username: "Felhasználónév",                                                                                          // 6
  usernameOrEmail: "Felhasználónév vagy email",                                                                        // 6
  "with": "-",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "Email elküldve",                                                                                       // 46
    emailVerified: "Email cím igazolva",                                                                               // 46
    passwordChanged: "Jelszó megváltoztatva",                                                                          // 46
    passwordReset: "Jelszó visszaállítva"                                                                              // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email cím megadása kötelező.",                                                                     // 53
    minChar: "A jelszónak legalább 7 karakter hoszúnak kell lennie.",                                                  // 53
    pwdsDontMatch: "A jelszavak nem egyeznek",                                                                         // 53
    pwOneDigit: "A jelszónak legalább egy számjegyet tartalmaznia kell.",                                              // 53
    pwOneLetter: "A jelszónak legalább egy betűt tartalmaznia kell.",                                                  // 53
    signInRequired: "A művelet végrehajtásához be kell jelentkezned.",                                                 // 53
    signupCodeIncorrect: "A regisztrációs kód hibás.",                                                                 // 53
    signupCodeRequired: "A regisztrációs kód megadása kötelező.",                                                      // 53
    usernameIsEmail: "A felhasználónév nem lehet egy email cím.",                                                      // 53
    usernameRequired: "Felhasználónév megadása kötelező.",                                                             // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "A megadott email cím már létezik.",                                                    // 70
      "Email doesn't match the criteria.": "Email cím nem felel meg a feltételeknek.",                                 // 70
      "Invalid login token": "Érvénytelen belépési token",                                                             // 70
      "Login forbidden": "Belépés megtagadva",                                                                         // 70
      "Service unknown": "Ismeretlen szolgáltatás",                                                                    // 70
      "Unrecognized options for login request": "Ismeretlen beállítások a belépési kérelemhez",                        // 70
      "User validation failed": "Felhasználó azonosítás sikertelen",                                                   // 70
      "Username already exists.": "A felhasználónév már létezik.",                                                     // 70
      "You are not logged in.": "Nem vagy bejelentkezve.",                                                             // 70
      "You've been logged out by the server. Please log in again.": "A szerver kijelentkeztetett. Kérjük, jelentkezz be újra.",
      "Your session has expired. Please log in again.": "A munkamenet lejárt. Kérjük, jelentkezz be újra.",            // 70
      "No matching login attempt found": "Nem található megegyező belépési próbálkozás",                               // 70
      "Password is old. Please reset your password.": "A jelszó túl régi. Kérjük, változtasd meg a jelszavad.",        // 70
      "Incorrect password": "Helytelen jelszó",                                                                        // 70
      "Invalid email": "Érvénytelen email cím",                                                                        // 70
      "Must be logged in": "A művelet végrehajtásához bejelentkezés szükséges",                                        // 70
      "Need to set a username or email": "Felhasználónév vagy email cím beállítása kötelező",                          // 70
      "old password format": "régi jelszó formátum",                                                                   // 70
      "Password may not be empty": "A jelszó nem lehet üres",                                                          // 70
      "Signups forbidden": "Regisztráció megtagadva",                                                                  // 70
      "Token expired": "Token lejárt",                                                                                 // 70
      "Token has invalid email address": "A token érvénytelen email címet tartalmaz",                                  // 70
      "User has no password set": "A felhasználóhoz nincs jelszó beállítva",                                           // 70
      "User not found": "Felhasználó nem található",                                                                   // 70
      "Verify email link expired": "Igazoló email link lejárt",                                                        // 70
      "Verify email link is for unknown address": "Az igazoló email link ismeretlen címhez tartozik",                  // 70
      "Match failed": "Megegyeztetés sikertelen",                                                                      // 70
      "Unknown error": "Ismeretlen hiba"                                                                               // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("hu", hu);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/id.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var id;                                                                                                                // 4
                                                                                                                       //
id = {                                                                                                                 // 4
  add: "tambah",                                                                                                       // 6
  and: "dan",                                                                                                          // 6
  back: "kembali",                                                                                                     // 6
  changePassword: "Ganti Password",                                                                                    // 6
  choosePassword: "Masukkan Password",                                                                                 // 6
  clickAgree: "Dengan Anda mendaftar, Anda setuju dengan",                                                             // 6
  configure: "Mengaturkan",                                                                                            // 6
  createAccount: "Buat Account",                                                                                       // 6
  currentPassword: "Password Anda Saat Ini",                                                                           // 6
  dontHaveAnAccount: "Tidak punya account?",                                                                           // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Alamat email",                                                                                        // 6
  emailResetLink: "Link untuk email reset",                                                                            // 6
  forgotPassword: "Lupa password?",                                                                                    // 6
  ifYouAlreadyHaveAnAccount: "Jika Anda sudah punya akun",                                                             // 6
  newPassword: "Password Baru",                                                                                        // 6
  newPasswordAgain: "Password Baru (ulang)",                                                                           // 6
  optional: "Opsional",                                                                                                // 6
  OR: "ATAU",                                                                                                          // 6
  password: "Password",                                                                                                // 6
  passwordAgain: "Password (ulang)",                                                                                   // 6
  privacyPolicy: "Kebijakan Privasi",                                                                                  // 6
  remove: "hapus",                                                                                                     // 6
  resetYourPassword: "Reset password anda",                                                                            // 6
  setPassword: "Masukkan Password",                                                                                    // 6
  sign: "Sign",                                                                                                        // 6
  signIn: "Sign In",                                                                                                   // 6
  signin: "sign in",                                                                                                   // 6
  signOut: "Sign Out",                                                                                                 // 6
  signUp: "Mendaftar",                                                                                                 // 6
  signupCode: "Kode Registrasi",                                                                                       // 6
  signUpWithYourEmailAddress: "Mendaftar dengan alamat email Anda",                                                    // 6
  terms: "Persyaratan Layanan",                                                                                        // 6
  updateYourPassword: "Perbarui password Anda",                                                                        // 6
  username: "Username",                                                                                                // 6
  usernameOrEmail: "Username atau email",                                                                              // 6
  "with": "dengan",                                                                                                    // 6
  info: {                                                                                                              // 6
    emailSent: "Email terkirim",                                                                                       // 46
    emailVerified: "Email diverifikasi",                                                                               // 46
    passwordChanged: "Password terganti",                                                                              // 46
    passwordReset: "Password direset"                                                                                  // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Alamat email dibutuhkan.",                                                                         // 53
    minChar: "Minimum password 7 karakter.",                                                                           // 53
    pwdsDontMatch: "Password yang diulang tidak sama.",                                                                // 53
    pwOneDigit: "Password harus ada minimum 1 angka.",                                                                 // 53
    pwOneLetter: "Password harus ada minimum 1 huruf.",                                                                // 53
    signInRequired: "Anda harus sign in untuk melakukan itu.",                                                         // 53
    signupCodeIncorrect: "Kode registrasi salah.",                                                                     // 53
    signupCodeRequired: "Kode registrasi dibutuhkan.",                                                                 // 53
    usernameIsEmail: "Username Anda tidak bisa sama dengan email address.",                                            // 53
    usernameRequired: "Username dibutuhkan.",                                                                          // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Alamat email sudah dipakai.",                                                          // 70
      "Email doesn't match the criteria.": "Alamat email tidak sesuai dengan kriteria.",                               // 70
      "Invalid login token": "Login token tidak valid",                                                                // 70
      "Login forbidden": "Login dilarang",                                                                             // 70
      "Service unknown": "Layanan unknown",                                                                            // 70
      "Unrecognized options for login request": "Options tidak tersedia untuk permintaan login",                       // 70
      "User validation failed": "Validasi user gagal",                                                                 // 70
      "Username already exists.": "Username sudah dipakai.",                                                           // 70
      "You are not logged in.": "Anda belum login.",                                                                   // 70
      "You've been logged out by the server. Please log in again.": "Anda belum dilogout oleh server. Silahkan coba login lagi.",
      "Your session has expired. Please log in again.": "Session Anda telah kadaluarsa. Silahkan coba login lagi.",    // 70
      "No matching login attempt found": "Usaha login tidak ditemukan.",                                               // 70
      "Password is old. Please reset your password.": "Password Anda terlalu tua. Silahkan ganti password Anda.",      // 70
      "Incorrect password": "Password salah",                                                                          // 70
      "Invalid email": "Alamat email tidak valid",                                                                     // 70
      "Must be logged in": "Anda harus login",                                                                         // 70
      "Need to set a username or email": "Anda harus masukkan username atau email",                                    // 70
      "old password format": "format password lama",                                                                   // 70
      "Password may not be empty": "Password tidak boleh kosong",                                                      // 70
      "Signups forbidden": "Signup dilarang",                                                                          // 70
      "Token expired": "Token telah kadaluarsa",                                                                       // 70
      "Token has invalid email address": "Token memberikan alamat email yang tidak valid",                             // 70
      "User has no password set": "User belum memasukkan password",                                                    // 70
      "User not found": "User tidak ditemukan",                                                                        // 70
      "Verify email link expired": "Link untuk verifikasi alamat email telah kadaluarsa",                              // 70
      "Verify email link is for unknown address": "Link untuk verifikasi alamat email memberikan alamat email yang tidak dikenalkan",
      "Match failed": "Mencocokan gagal",                                                                              // 70
      "Unknown error": "Error tidak dikenalkan"                                                                        // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("id", id);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/it.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var it;                                                                                                                // 4
                                                                                                                       //
it = {                                                                                                                 // 4
  t9Name: 'Italiano',                                                                                                  // 6
  add: "aggiungi",                                                                                                     // 6
  and: "e",                                                                                                            // 6
  back: "indietro",                                                                                                    // 6
  changePassword: "Cambia Password",                                                                                   // 6
  choosePassword: "Scegli una Password",                                                                               // 6
  clickAgree: "Cliccando Registrati, accetti la nostra",                                                               // 6
  configure: "Configura",                                                                                              // 6
  createAccount: "Crea un Account",                                                                                    // 6
  currentPassword: "Password Corrente",                                                                                // 6
  dontHaveAnAccount: "Non hai un account?",                                                                            // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Indirizzo Email",                                                                                     // 6
  emailResetLink: "Invia Link di Reset",                                                                               // 6
  forgotPassword: "Hai dimenticato la password?",                                                                      // 6
  ifYouAlreadyHaveAnAccount: "Se hai già un account",                                                                  // 6
  newPassword: "Nuova Password",                                                                                       // 6
  newPasswordAgain: "Nuova Password (di nuovo)",                                                                       // 6
  optional: "Opzionale",                                                                                               // 6
  OR: "OPPURE",                                                                                                        // 6
  password: "Password",                                                                                                // 6
  passwordAgain: "Password (di nuovo)",                                                                                // 6
  privacyPolicy: "Privacy Policy",                                                                                     // 6
  remove: "rimuovi",                                                                                                   // 6
  resetYourPassword: "Reimposta la password",                                                                          // 6
  setPassword: "Imposta Password",                                                                                     // 6
  sign: "Accedi",                                                                                                      // 6
  signIn: "Accedi",                                                                                                    // 6
  signin: "accedi",                                                                                                    // 6
  signOut: "Esci",                                                                                                     // 6
  signUp: "Registrati",                                                                                                // 6
  signupCode: "Codice di Registrazione",                                                                               // 6
  signUpWithYourEmailAddress: "Registrati con il tuo indirizzo email",                                                 // 6
  terms: "Termini di Servizio",                                                                                        // 6
  updateYourPassword: "Aggiorna la password",                                                                          // 6
  username: "Username",                                                                                                // 6
  usernameOrEmail: "Nome utente o email",                                                                              // 6
  "with": "con",                                                                                                       // 6
  "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "Ti è stata inviata una nuova email. Se non trovi l' email nella tua posta in arrivo controllate che non sia stata spostata nella cartella SPAM.",
  "Already verified": "Gi\à verificato",                                                                               // 6
  "At least 1 digit, 1 lowercase and 1 uppercase": "Almeno 1 numero, 1 carattere minuscolo e 1 maiuscolo",             // 6
  "Invalid email": "Email non valida",                                                                                 // 6
  "Please verify your email first. Check the email and follow the link!": "Per favore, verifica prima la tua email. Controlla la tua email e segui il collegamento che ti è stato inviato.",
  "Required Field": "Campo richiesto",                                                                                 // 6
  "Send again": "Invia di nuovo",                                                                                      // 6
  "Send email again": "Invia di nuovo l' email",                                                                       // 6
  "Send the verification email again": "Invia di nuovo l' email di verifica",                                          // 6
  "Verification email lost?": "Hai smarrito l' email di verifica?",                                                    // 6
  info: {                                                                                                              // 6
    emailSent: "Email inviata",                                                                                        // 58
    emailVerified: "Email verificata",                                                                                 // 58
    passwordChanged: "Password cambiata",                                                                              // 58
    passwordReset: "Password reimpostata"                                                                              // 58
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "L'Email è obbligatoria.",                                                                          // 64
    minChar: "La Password deve essere di almeno 7 caratteri.",                                                         // 64
    pwdsDontMatch: "Le Password non corrispondono",                                                                    // 64
    pwOneDigit: "La Password deve contenere almeno un numero.",                                                        // 64
    pwOneLetter: "La Password deve contenere 1 lettera.",                                                              // 64
    signInRequired: "Per fare questo devi accedere.",                                                                  // 64
    signupCodeIncorrect: "Codice di Registrazione errato.",                                                            // 64
    signupCodeRequired: "Il Codice di Registrazione è obbligatorio.",                                                  // 64
    usernameIsEmail: "Il Nome Utente non può essere un indirizzo email.",                                              // 64
    usernameRequired: "Il Nome utente è obbligatorio.",                                                                // 64
    accounts: {                                                                                                        // 64
      "Email already exists.": "Indirizzo email già esistente.",                                                       // 80
      "Email doesn't match the criteria.": "L'indirizzo email non soddisfa i requisiti.",                              // 80
      "Invalid login token": "Codice di accesso non valido",                                                           // 80
      "Login forbidden": "Accesso non consentito",                                                                     // 80
      "Service unknown": "Servizio sconosciuto",                                                                       // 80
      "Unrecognized options for login request": "Opzioni per la richiesta di accesso non ricunosciute",                // 80
      "User validation failed": "Validazione utente fallita",                                                          // 80
      "Username already exists.": "Nome utente già esistente.",                                                        // 80
      "You are not logged in.": "Non hai effettuato l'accesso.",                                                       // 80
      "You've been logged out by the server. Please log in again.": "Sei stato disconnesso dal server. Per favore accedi di nuovo.",
      "Your session has expired. Please log in again.": "La tua sessione è scaduta. Per favore accedi di nuovo.",      // 80
      "No matching login attempt found": "Tentativo di accesso corrispondente non trovato",                            // 80
      "Password is old. Please reset your password.": "La password è vecchia. Per favore reimposta la tua password.",  // 80
      "Incorrect password": "Password non corretta",                                                                   // 80
      "Must be logged in": "Devi aver eseguito l'accesso",                                                             // 80
      "Need to set a username or email": "È necessario specificare un nome utente o un indirizzo email",               // 80
      "old password format": "vecchio formato password",                                                               // 80
      "Password may not be empty": "La password non può essere vuota",                                                 // 80
      "Signups forbidden": "Registrazioni non consentite",                                                             // 80
      "Token expired": "Codice scaduto",                                                                               // 80
      "Token has invalid email address": "Il codice ha un indirizzo email non valido",                                 // 80
      "User has no password set": "L'utente non ha una password impostata",                                            // 80
      "User not found": "Utente non trovato",                                                                          // 80
      "Verify email link expired": "Link per la verifica dell'email scaduto",                                          // 80
      "Verify email link is for unknown address": "Il link per la verifica dell'email fa riferimento ad un indirizzo sconosciuto",
      "Match failed": "Riscontro fallito",                                                                             // 80
      "Unknown error": "Errore Sconosciuto"                                                                            // 80
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("it", it);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/ja.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ja;                                                                                                                // 4
                                                                                                                       //
ja = {                                                                                                                 // 4
  t9Name: '日本語',                                                                                                       // 6
  add: "アカウント連携：",                                                                                                     // 6
  and: "と",                                                                                                            // 6
  back: "戻る",                                                                                                          // 6
  changePassword: "パスワードを変更する",                                                                                        // 6
  choosePassword: "パスワードを選ぶ",                                                                                          // 6
  clickAgree: "アカウント登録をクリックすると、次の内容に同意したことになります。",                                                                     // 6
  configure: "設定する",                                                                                                   // 6
  createAccount: "新しいアカウントの登録",                                                                                        // 6
  currentPassword: "現在のパスワード",                                                                                         // 6
  dontHaveAnAccount: "まだアカウントをお持ちでない場合は",                                                                              // 6
  Email: "メールアドレス",                                                                                                    // 6
  email: "メールアドレス",                                                                                                    // 6
  emailAddress: "メールアドレス",                                                                                             // 6
  emailResetLink: "パスワードリセットのメールを送る",                                                                                  // 6
  forgotPassword: "パスワードをお忘れですか？",                                                                                     // 6
  ifYouAlreadyHaveAnAccount: "既にアカウントをお持ちの場合は",                                                                        // 6
  newPassword: "新しいパスワード",                                                                                             // 6
  newPasswordAgain: "新しいパスワード（確認）",                                                                                    // 6
  optional: "オプション",                                                                                                   // 6
  OR: "または",                                                                                                           // 6
  password: "パスワード",                                                                                                   // 6
  passwordAgain: "パスワード（確認）",                                                                                          // 6
  privacyPolicy: "プライバシーポリシー",                                                                                         // 6
  remove: "連携の解除：",                                                                                                    // 6
  resetYourPassword: "パスワードのリセット",                                                                                     // 6
  setPassword: "パスワードを設定する",                                                                                           // 6
  sign: "署名",                                                                                                          // 6
  signIn: "ログイン",                                                                                                      // 6
  signin: "ログイン",                                                                                                      // 6
  signOut: "ログアウト",                                                                                                    // 6
  signUp: "アカウント登録",                                                                                                   // 6
  signupCode: "登録用コード",                                                                                                // 6
  signUpWithYourEmailAddress: "メールアドレスで登録する",                                                                          // 6
  terms: "利用規約",                                                                                                       // 6
  updateYourPassword: "パスワードを変更する",                                                                                    // 6
  username: "ユーザー名",                                                                                                   // 6
  usernameOrEmail: "ユーザー名またはメールアドレス",                                                                                  // 6
  "with": "：",                                                                                                         // 6
  maxAllowedLength: "最大文字数",                                                                                           // 6
  minRequiredLength: "最低文字数",                                                                                          // 6
  resendVerificationEmail: "認証メールの再送",                                                                                 // 6
  resendVerificationEmailLink_pre: "認証メールが届いていない場合は",                                                                  // 6
  resendVerificationEmailLink_link: "再送",                                                                              // 6
  info: {                                                                                                              // 6
    emailSent: "メールを送りました",                                                                                            // 53
    emailVerified: "メールアドレスを確認しました",                                                                                   // 53
    passwordChanged: "パスワードを変更しました",                                                                                   // 53
    passwordReset: "パスワードをリセットしました"                                                                                    // 53
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "メールアドレスを入力してください。",                                                                                // 60
    minChar: "パスワードの文字数が足りません。",                                                                                       // 60
    pwdsDontMatch: "パスワードが一致しません。",                                                                                    // 60
    pwOneDigit: "パスワードに1文字以上の数字を含めてください。",                                                                             // 60
    pwOneLetter: "パスワードに1文字以上のアルファベットを含めてください。",                                                                       // 60
    signInRequired: "その操作にはログインが必要です。",                                                                                // 60
    signupCodeIncorrect: "登録用コードが間違っています。",                                                                            // 60
    signupCodeRequired: "登録用コードが必要です。",                                                                                // 60
    usernameIsEmail: "ユーザー名にメールアドレスは使えません。",                                                                           // 60
    usernameRequired: "ユーザー名が必要です。",                                                                                   // 60
    accounts: {                                                                                                        // 60
      "Email already exists.": "そのメールアドレスは既に登録されています。",                                                                // 76
      "Email doesn't match the criteria.": "正しいメールアドレスを入力してください。",                                                     // 76
      "Invalid login token": "無効なログイントークンです。",                                                                         // 76
      "Login forbidden": "ログインできません。",                                                                                 // 76
      "Service unknown": "不明なサービスです",                                                                                  // 76
      "Unrecognized options for login request": "不明なログインオプションです",                                                      // 76
      "User validation failed": "ユーザ認証に失敗しました",                                                                        // 76
      "Username already exists.": "そのユーザー名は既に使われています。",                                                                // 76
      "You are not logged in.": "ログインしていません。",                                                                         // 76
      "You've been logged out by the server. Please log in again.": "既にログアウトしています。再度ログインしてください。",                      // 76
      "Your session has expired. Please log in again.": "セッションが切れました。再度ログインしてください。",                                   // 76
      "Already verified": "認証済です",                                                                                     // 76
      "No matching login attempt found": "対応するログイン試行が見つかりません",                                                         // 76
      "Password is old. Please reset your password.": "古いパスワードです。パスワードをリセットしてください。",                                   // 76
      "Incorrect password": "パスワードが正しくありません",                                                                          // 76
      "Invalid email": "無効なメールアドレスです",                                                                                 // 76
      "Must be logged in": "ログインが必要です",                                                                                // 76
      "Need to set a username or email": "ユーザー名かメールアドレスを入力してください",                                                     // 76
      "old password format": "古いパスワード形式です",                                                                            // 76
      "Password may not be empty": "パスワードを入力してください",                                                                   // 76
      "Signups forbidden": "アカウントを登録できません",                                                                            // 76
      "Token expired": "無効なトークンです",                                                                                    // 76
      "Token has invalid email address": "トークンに無効なメールアドレスが含まれています",                                                    // 76
      "User has no password set": "パスワードが設定されていません",                                                                   // 76
      "User not found": "ユーザー名が見つかりません",                                                                               // 76
      "Verify email link expired": "期限の切れた認証メールのリンクです",                                                                // 76
      "Verify email link is for unknown address": "不明なメールアドレスに対する認証メールのリンクです",                                         // 76
      "At least 1 digit, 1 lowercase and 1 uppercase": "数字、小文字、大文字をそれぞれ1文字以上入力してください",                                 // 76
      "Please verify your email first. Check the email and follow the link!": "まず認証メールが届いているか確認して、リンクを押してください！",       // 76
      "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.": "新しいメールを送信しました。もしメールが届いていなければ、迷惑メールに分類されていないか確認してください。",
      "Match failed": "一致しません",                                                                                        // 76
      "Unknown error": "不明なエラー"                                                                                        // 76
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("ja", ja);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/kh.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var kh;                                                                                                                // 4
                                                                                                                       //
kh = {                                                                                                                 // 4
  add: "បន្ថែម",                                                                                                       // 6
  and: "និង",                                                                                                          // 6
  back: "ត្រឡប់ក្រោយ",                                                                                                 // 6
  changePassword: "ផ្លាស់ប្តូរពាក្យសម្ងាត់",                                                                           // 6
  choosePassword: "ជ្រើសពាក្យសម្ងាត់",                                                                                 // 6
  clickAgree: "សូមចុះឈ្មោះ បើអ្នកយល់ព្រម",                                                                             // 6
  configure: "កំណត់រចនាសម្ព័ន្ធ",                                                                                      // 6
  createAccount: "បង្កើតគណនី",                                                                                         // 6
  currentPassword: "ពាក្យសម្ងាត់បច្ចុប្បន្ន",                                                                          // 6
  dontHaveAnAccount: "មិនមានគណនីទេឬ?",                                                                                 // 6
  email: "អ៊ីម៉ែល",                                                                                                    // 6
  emailAddress: "អាសយដ្ឋានអ៊ីម៉ែល",                                                                                    // 6
  emailResetLink: "អ៊ីម៉ែលតំណភ្ជាប់ សម្រាប់កំណត់ឡើងវិញ",                                                               // 6
  forgotPassword: "ភ្លេចពាក្យសម្ងាត់?",                                                                                // 6
  ifYouAlreadyHaveAnAccount: "បើអ្នកមានគណនីមួយរួចទៅហើយ",                                                               // 6
  newPassword: "ពាក្យសម្ងាត់ថ្មី",                                                                                     // 6
  newPasswordAgain: "ពាក្យសម្ងាត់ថ្មី (ម្ដងទៀត)",                                                                      // 6
  optional: "ជម្រើស",                                                                                                  // 6
  OR: "ឬ",                                                                                                             // 6
  password: "ពាក្យសម្ងាត់",                                                                                            // 6
  passwordAgain: "ពាក្យសម្ងាត់ (ម្ដងទៀត)",                                                                             // 6
  privacyPolicy: "គោលការណ៍ភាពឯកជន",                                                                                    // 6
  remove: "លុប",                                                                                                       // 6
  resetYourPassword: "កំណត់ពាក្យសម្ងាត់ឡើងវិញ",                                                                        // 6
  setPassword: "កំណត់ពាក្យសម្ងាត់",                                                                                    // 6
  sign: "ចូលគណនី",                                                                                                     // 6
  signIn: "ពិនិត្យចូល",                                                                                                // 6
  signin: "ចូល",                                                                                                       // 6
  signOut: "ចាកចេញ",                                                                                                   // 6
  signUp: "ចុះឈ្មោះ",                                                                                                  // 6
  signupCode: "លេខ​កូដចុះឈ្មោះ",                                                                                       // 6
  signUpWithYourEmailAddress: "ចុះឈ្មោះជាមួយអាសយដ្ឋានអ៊ីមែល",                                                          // 6
  terms: "លក្ខខណ្ឌនៃការប្រើប្រាស់",                                                                                    // 6
  updateYourPassword: "ធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់",                                                                // 6
  username: "ឈ្មោះអ្នកប្រើ",                                                                                           // 6
  usernameOrEmail: "ឈ្មោះអ្នកប្រើ ឬអ៊ីម៉ែល",                                                                           // 6
  "with": "ជាមួយនឹង",                                                                                                  // 6
  info: {                                                                                                              // 6
    emailSent: "អ៊ីម៉ែលដែលបានផ្ញើរ",                                                                                   // 46
    emailVerified: "អ៊ីម៉ែលបានផ្ទៀងផ្ទាត់",                                                                            // 46
    passwordChanged: "ពាក្យសម្ងាត់បាន​ផ្លាស់ប្តូរ",                                                                    // 46
    passwordReset: "កំណត់ពាក្យសម្ងាត់ឡើងវិញ"                                                                           // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "អ៊ីម៉ែលត្រូវបានទាមទារ",                                                                            // 53
    minChar: "ពាក្យសម្ងាត់អប្បបរមា ៧ តួអក្សរលេខ",                                                                      // 53
    pwdsDontMatch: "ពាក្យសម្ងាត់មិនត្រូវគ្នា",                                                                         // 53
    pwOneDigit: "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ ១ តួលេខ",                                                           // 53
    pwOneLetter: "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ ១ តួអក្សរ​",                                                       // 53
    signInRequired: "អ្នកត្រូវតែបានចូលគណនី ដើម្បីធ្វើការងារផ្សេងៗ",                                                    // 53
    signupCodeIncorrect: "លេខកូដការចុះឈ្មោះមិនត្រឹមត្រូវ",                                                             // 53
    signupCodeRequired: "លេខកូដការចុះឈ្មោះត្រូវបានទាមទារ",                                                             // 53
    usernameIsEmail: "ឈ្មោះអ្នកប្រើមិនអាចជាអាសយដ្ឋានអ៊ីមែល",                                                           // 53
    usernameRequired: "ឈ្មោះអ្នកប្រើត្រូវបានទាមទារ",                                                                   // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "អ៊ីម៉ែលមានរួចហើយ",                                                                     // 70
      "Email doesn't match the criteria.": "អ៊ីម៉ែលមិនផ្គូផ្គងនឹងលក្ខណៈវិនិច្ឆ័យ",                                     // 70
      "Invalid login token": "សញ្ញាសម្ងាត់ចូលមិនត្រឹមត្រូវ",                                                           // 70
      "Login forbidden": "បានហាមឃាត់ការចូល",                                                                           // 70
      "Service unknown": "សេវាមិនស្គាល់",                                                                              // 70
      "Unrecognized options for login request": "មិនស្គាល់ជម្រើសសម្រាប់សំណើកត់ត្រាចូល",                                // 70
      "User validation failed": "សុពលភាពរបស់អ្នកប្រើបានបរាជ័យ",                                                        // 70
      "Username already exists.": "ឈ្មោះអ្នកប្រើមាន​រួចហើយ",                                                           // 70
      "You are not logged in.": "អ្នកមិនបានចូលគណនីទេ",                                                                 // 70
      "You've been logged out by the server. Please log in again.": "អ្នកបានចាកចេញ ពីគណនី, សូមចូលម្តងទៀត",             // 70
      "Your session has expired. Please log in again.": "សុពលភាពរបស់អ្នកបានផុតកំណត់, សូមចូលម្តងទៀត",                   // 70
      "No matching login attempt found": "គ្មានការផ្គូផ្គងចូលត្រូវបានរកឃើញ",                                           // 70
      "Password is old. Please reset your password.": "ពាក្យសម្ងាត់គឺចាស់,​ សូមកំណត់ពាក្យសម្ងាត់ឡើងវិញ",               // 70
      "Incorrect password": "ពាក្យសម្ងាត់មិនត្រឹមត្រូវ",                                                               // 70
      "Invalid email": "អ៊ីម៉ែលមិនត្រឹមត្រូវ",                                                                         // 70
      "Must be logged in": "ត្រូវតែចូលគណនី",                                                                           // 70
      "Need to set a username or email": "ត្រូវកំណត់ឈ្មោះអ្នកប្រើ​ ឬអ៊ីម៉ែល",                                          // 70
      "old password format": "ទ្រង់ទ្រាយពាក្យសម្ងាត់ចាស់",                                                             // 70
      "Password may not be empty": "ពាក្យសម្ងាត់ប្រហែលជាមិនអាចទទេ",                                                    // 70
      "Signups forbidden": "ការចូលត្រូវបានហាមឃាត់",                                                                    // 70
      "Token expired": "សញ្ញាសម្ងាត់ផុតកំណត់",                                                                         // 70
      "Token has invalid email address": "សញ្ញាសម្ងាត់ដែលមានអាសយដ្ឋានអ៊ីមែលមិនត្រឹមត្រូវ",                             // 70
      "User has no password set": "អ្នកប្រើមិនមានសំណុំពាក្យសម្ងាត់",                                                   // 70
      "User not found": "រកមិនឃើញអ្នកប្រើ",                                                                            // 70
      "Verify email link expired": "ផ្ទៀងផ្ទាត់តំណភ្ជាប់អ៊ីម៉ែលផុតកំណត់",                                              // 70
      "Verify email link is for unknown address": "ផ្ទៀងផ្ទាត់តំណភ្ជាប់អ៊ីម៉ែល គឺសម្រាប់អាសយដ្ឋានមិនស្គាល់",           // 70
      "Match failed": "ការផ្ទៀងផ្ទាត់បានបរាជ័យ",                                                                       // 70
      "Unknown error": "មិនស្គាល់កំហុស"                                                                                // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("kh", kh);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/ko.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ko;                                                                                                                // 1
                                                                                                                       //
ko = {                                                                                                                 // 1
  add: "추가",                                                                                                           // 3
  and: "그리고",                                                                                                          // 3
  back: "뒤로",                                                                                                          // 3
  changePassword: "비밀번호 변경",                                                                                           // 3
  choosePassword: "비밀번호 선택",                                                                                           // 3
  clickAgree: "클릭함으로써 위 약관에 동의합니다",                                                                                    // 3
  configure: "설정",                                                                                                     // 3
  createAccount: "계정 생성",                                                                                              // 3
  currentPassword: "현재 비밀번호",                                                                                          // 3
  dontHaveAnAccount: "계정이 없으세요?",                                                                                      // 3
  email: "이메일",                                                                                                        // 3
  emailAddress: "이메일 주소",                                                                                              // 3
  emailResetLink: "이메일 리셋 링크",                                                                                         // 3
  forgotPassword: "비밀번호를 잊으셨나요?",                                                                                      // 3
  ifYouAlreadyHaveAnAccount: "이미 계정이 있으시면",                                                                            // 3
  newPassword: "새 비밀번호",                                                                                               // 3
  newPasswordAgain: "새 비밀번호(확인)",                                                                                      // 3
  optional: "선택",                                                                                                      // 3
  OR: "혹은",                                                                                                            // 3
  password: "비밀번호",                                                                                                    // 3
  passwordAgain: "비밀번호 (확인)",                                                                                          // 3
  privacyPolicy: "개인정보보호정책",                                                                                           // 3
  remove: "삭제",                                                                                                        // 3
  resetYourPassword: "비밀번호 초기화",                                                                                       // 3
  setPassword: "비밀번호 선택",                                                                                              // 3
  sign: "로그인",                                                                                                         // 3
  signIn: "로그인",                                                                                                       // 3
  signin: "로그인",                                                                                                       // 3
  signOut: "로그아웃",                                                                                                     // 3
  signUp: "회원가입",                                                                                                      // 3
  signupCode: "회원가입 코드",                                                                                               // 3
  signUpWithYourEmailAddress: "이메일로 가입하기",                                                                             // 3
  terms: "약관",                                                                                                         // 3
  updateYourPassword: "비밀번호 업데이트",                                                                                     // 3
  username: "아이디",                                                                                                     // 3
  usernameOrEmail: "아이디 혹은 이메일",                                                                                       // 3
  "with": "와",                                                                                                         // 3
  info: {                                                                                                              // 3
    emailSent: "이메일 발송",                                                                                               // 42
    emailVerified: "이메일 인증성공",                                                                                         // 42
    passwordChanged: "비밀번호 변경됨",                                                                                       // 42
    passwordReset: "비밀번호 초기화",                                                                                         // 42
    error: {                                                                                                           // 42
      emailRequired: "이메일이 필요합니다.",                                                                                    // 48
      minChar: "비밀번호는 최소 7자 이상입니다.",                                                                                   // 48
      pwdsDontMatch: "비밀번호가 일치하지 않습니다",                                                                                // 48
      pwOneDigit: "비밀번호에 숫자 하나 이상이 필요합니다.",                                                                            // 48
      pwOneLetter: "비밀번호에 문자 하나 이상이 필요합니다.",                                                                           // 48
      signInRequired: "로그인이 필요한 서비스입니다.",                                                                              // 48
      signupCodeIncorrect: "가입 코드가 맞지 않습니다.",                                                                          // 48
      signupCodeRequired: "가입 코드가 필요합니다.",                                                                             // 48
      usernameIsEmail: "아이디와 이메일은 달라야 합니다.",                                                                           // 48
      usernameRequired: "아이디가 필요합니다.",                                                                                 // 48
      accounts: {                                                                                                      // 48
        "Email already exists.": "중복된 이메일입니다.",                                                                        // 64
        "Email doesn't match the criteria.": "이메일이 요구 조건에 맞지 않습니다.",                                                   // 64
        "Invalid login token": "잘못된 로그인 토큰",                                                                           // 64
        "Login forbidden": "허용되지 않은 로그인",                                                                              // 64
        "Service unknown": "알 수 없는 서비스",                                                                               // 64
        "Unrecognized options for login request": "알 수 없는 로그인 요청 정보입니다",                                               // 64
        "User validation failed": "인증 실패",                                                                             // 64
        "Username already exists.": "중복된 아이디입니다.",                                                                     // 64
        "You are not logged in.": "로그인 상태가 아닙니다.",                                                                     // 64
        "You've been logged out by the server. Please log in again.": "서버에 의해 로그아웃되었습니다. 다시 로그인해주세요.",                 // 64
        "Your session has expired. Please log in again.": "세션이 만료되었습니다. 다시 로그인해주세요.",                                  // 64
        "No matching login attempt found": "해당 로그인 시도를 찾지 못했습니다",                                                      // 64
        "Password is old. Please reset your password.": "오래된 비밀번호입니다. 변경해주세요.",                                        // 64
        "Incorrect password": "잘못된 비밀번호입니다",                                                                           // 64
        "Invalid email": "잘못된 이메일 주소입니다",                                                                              // 64
        "Must be logged in": "로그인이 필요합니다",                                                                             // 64
        "Need to set a username or email": "아이디나 이메일을 입력해주세요",                                                         // 64
        "old password format": "오래된 비밀번호 형식입니다",                                                                       // 64
        "Password may not be empty": "비밀번호를 입력해주세요",                                                                   // 64
        "Signups forbidden": "가입이 거부되었습니다",                                                                            // 64
        "Token expired": "토큰이 만료되었습니다",                                                                                // 64
        "Token has invalid email address": "토큰에 포함된 이메일 주소가 유효하지 않습니다",                                                // 64
        "User has no password set": "설정된 암호가 없습니다",                                                                    // 64
        "User not found": "사용자를 찾을 수 없습니다",                                                                            // 64
        "Verify email link expired": "확인 코드가 만료되었습니다",                                                                 // 64
        "Verify email link is for unknown address": "알 수 없는 인증 메일 주소입니다",                                              // 64
        "Match failed": "매치되지 않습니다",                                                                                   // 64
        "Unknown error": "알 수 없는 오류"                                                                                   // 64
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("ko", ko);                                                                                                     // 1
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/nl.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var nl;                                                                                                                // 4
                                                                                                                       //
nl = {                                                                                                                 // 4
  add: "toevoegen",                                                                                                    // 6
  and: "en",                                                                                                           // 6
  back: "terug",                                                                                                       // 6
  changePassword: "Wachtwoord wijzigen",                                                                               // 6
  choosePassword: "Wachtwoord kiezen",                                                                                 // 6
  clickAgree: "Door te registreren accepteert u onze",                                                                 // 6
  configure: "Configureer",                                                                                            // 6
  createAccount: "Account aanmaken",                                                                                   // 6
  currentPassword: "Huidig wachtwoord",                                                                                // 6
  dontHaveAnAccount: "Nog geen account?",                                                                              // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "E-mailadres",                                                                                         // 6
  emailResetLink: "Verzenden",                                                                                         // 6
  forgotPassword: "Wachtwoord vergeten?",                                                                              // 6
  ifYouAlreadyHaveAnAccount: "Heeft u al een account?",                                                                // 6
  newPassword: "Nieuw wachtwoord",                                                                                     // 6
  newPasswordAgain: "Nieuw wachtwoord (herhalen)",                                                                     // 6
  optional: "Optioneel",                                                                                               // 6
  OR: "OF",                                                                                                            // 6
  password: "Wachtwoord",                                                                                              // 6
  passwordAgain: "Wachtwoord (herhalen)",                                                                              // 6
  privacyPolicy: "privacyverklaring",                                                                                  // 6
  remove: "verwijderen",                                                                                               // 6
  resetYourPassword: "Wachtwoord resetten",                                                                            // 6
  setPassword: "Wachtwoord instellen",                                                                                 // 6
  sign: "Aanmelden",                                                                                                   // 6
  signIn: "Aanmelden",                                                                                                 // 6
  signin: "Aanmelden",                                                                                                 // 6
  signOut: "Afmelden",                                                                                                 // 6
  signUp: "Registreren",                                                                                               // 6
  signupCode: "Registratiecode",                                                                                       // 6
  signUpWithYourEmailAddress: "Met e-mailadres registreren",                                                           // 6
  terms: "gebruiksvoorwaarden",                                                                                        // 6
  updateYourPassword: "Wachtwoord veranderen",                                                                         // 6
  username: "Gebruikersnaam",                                                                                          // 6
  usernameOrEmail: "Gebruikersnaam of e-mailadres",                                                                    // 6
  "with": "met",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "E-mail verzonden",                                                                                     // 46
    emailVerified: "E-mail geverifieerd",                                                                              // 46
    PasswordChanged: "Wachtwoord gewijzigd",                                                                           // 46
    PasswordReset: "Wachtwoord gereset"                                                                                // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "E-mailadres is verplicht",                                                                         // 53
    minChar: "Wachtwoord moet tenminste 7 tekens lang zijn.",                                                          // 53
    pwdsDontMatch: "Wachtwoorden zijn niet gelijk.",                                                                   // 53
    pwOneDigit: "Wachtwoord moet tenminste 1 cijfer bevatten.",                                                        // 53
    pwOneLetter: "Wachtwoord moet tenminste 1 letter bevatten.",                                                       // 53
    signInRequired: "U moet aangemeld zijn.",                                                                          // 53
    signupCodeIncorrect: "Registratiecode is ongeldig.",                                                               // 53
    signupCodeRequired: "Registratiecode is verplicht.",                                                               // 53
    usernameIsEmail: "Gebruikersnaam is gelijk aan e-mail.",                                                           // 53
    usernameRequired: "Gebruikersnaam is verplicht.",                                                                  // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Dit e-mailadres is al in gebruik.",                                                    // 70
      "Email doesn't match the criteria.": "e-mail voldoet niet aan de voorwaarden.",                                  // 70
      "Invalid login token": "Ongeldig inlogtoken",                                                                    // 70
      "Login forbidden": "Aanmelding geweigerd",                                                                       // 70
      "Service unknown": "Sevice onbekend",                                                                            // 70
      "Unrecognized options for login request": "Onbekende optie voor inlogverzoek",                                   // 70
      "User validation failed": "Gebruikersvalidatie mislukt",                                                         // 70
      "Username already exists.": "Gebruikersnaam bestaat al.",                                                        // 70
      "You are not logged in.": "U bent niet ingelogd.",                                                               // 70
      "You've been logged out by the server. Please log in again.": "U bent door de server afgemeld. Meld a.u.b. opnieuw aan.",
      "Your session has expired. Please log in again.": "Uw sessie is verlopen. Meld a.u.b. opnieuw aan.",             // 70
      "No matching login attempt found": "Geen overeenkomstig inlogverzoek gevonden.",                                 // 70
      "Password is old. Please reset your Password.": "Wachtwoord is verlopen. Reset a.u.b. uw wachtwoord.",           // 70
      "Incorrect password": "Onjuist wachtwoord",                                                                      // 70
      "Invalid email": "Ongeldig e-mailadres",                                                                         // 70
      "Must be logged in": "U moet aangemeld zijn",                                                                    // 70
      "Need to set a username or email": "Gebruikersnaam of e-mailadres moet ingesteld zijn",                          // 70
      "Password may not be empty": "Wachtwoord mag niet leeg zijn",                                                    // 70
      "Signups forbidden": "Registratie verboden",                                                                     // 70
      "Token expired": "Token is verlopen",                                                                            // 70
      "Token has invalid email address": "Token heeft ongeldig e-mailadres",                                           // 70
      "User has no Password set": "Geen wachtwoord ingesteld voor gebruiker",                                          // 70
      "User not found": "Gebruiker niet gevonden",                                                                     // 70
      "Verify email link expired": "Verificatielink is verlopen",                                                      // 70
      "Verify email link is for unknown address": "Verificatielink is voor onbekend e-mailadres",                      // 70
      "Match failed": "Geen match",                                                                                    // 70
      "Unknown error": "Onbekende fout"                                                                                // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("nl", nl);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/no_NB.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var no_NB;                                                                                                             // 4
                                                                                                                       //
no_NB = {                                                                                                              // 4
  add: "legg til",                                                                                                     // 6
  and: "og",                                                                                                           // 6
  back: "tilbake",                                                                                                     // 6
  changePassword: "Bytt passord",                                                                                      // 6
  choosePassword: "Velg passord",                                                                                      // 6
  clickAgree: "Ved å klikke meld på godtar du vår",                                                                    // 6
  configure: "Konfigurer",                                                                                             // 6
  createAccount: "Oprett konto",                                                                                       // 6
  currentPassword: "Nåværende passord",                                                                                // 6
  dontHaveAnAccount: "Har du ikke en konto?",                                                                          // 6
  email: "E-post",                                                                                                     // 6
  emailAddress: "E-postadresse",                                                                                       // 6
  emailResetLink: "Epost nullstillingslenke",                                                                          // 6
  forgotPassword: "Glemt passord?",                                                                                    // 6
  ifYouAlreadyHaveAnAccount: "Hvis du allerede har en konto",                                                          // 6
  newPassword: "Nytt passord",                                                                                         // 6
  newPasswordAgain: "Gjengi nytt passord",                                                                             // 6
  optional: "Frivillig",                                                                                               // 6
  OR: "eller",                                                                                                         // 6
  password: "Passord",                                                                                                 // 6
  passwordAgain: "Gjengi passord",                                                                                     // 6
  privacyPolicy: "Personvern",                                                                                         // 6
  remove: "fjern",                                                                                                     // 6
  resetYourPassword: "Nullstill passord",                                                                              // 6
  setPassword: "Sett passord",                                                                                         // 6
  sign: "Logg",                                                                                                        // 6
  signIn: "Logg inn",                                                                                                  // 6
  signin: "Logg inn",                                                                                                  // 6
  signOut: "Logg ut",                                                                                                  // 6
  signUp: "Meld på",                                                                                                   // 6
  signupCode: "Påmeldingskode",                                                                                        // 6
  signUpWithYourEmailAddress: "Meld på med din e-postadresse",                                                         // 6
  terms: "Betingelser for bruk",                                                                                       // 6
  updateYourPassword: "Oppdater passord",                                                                              // 6
  username: "Brukernavn",                                                                                              // 6
  usernameOrEmail: "Brukernavn eller e-epost",                                                                         // 6
  "with": "med",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "E-post sendt",                                                                                         // 46
    emailVerified: "E-post bekreftet",                                                                                 // 46
    passwordChanged: "Passord endret",                                                                                 // 46
    passwordReset: "Passord nullstillt"                                                                                // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "E-post obligatorisk.",                                                                             // 53
    minChar: "Passordet må ha minst 7 tegn.",                                                                          // 53
    pwdsDontMatch: "Passordene er ikke like.",                                                                         // 53
    pwOneDigit: "Passordet må ha minst ett tall.",                                                                     // 53
    pwOneLetter: "Passordet må ha minst en bokstav.",                                                                  // 53
    signInRequired: "Du må være logget inn for å gjøre dette.",                                                        // 53
    signupCodeIncorrect: "Påmelding gikk galt.",                                                                       // 53
    signupCodeRequired: "Påmeldingskode kreves.",                                                                      // 53
    usernameIsEmail: "Brukernavn kan ikke være en e-postadresse.",                                                     // 53
    usernameRequired: "Brukernavn må utfylles.",                                                                       // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "E-postadressen finnes allerede.",                                                      // 70
      "Email doesn't match the criteria.": "E-postadressen møter ikke kriteriet.",                                     // 70
      "Invalid login token": "Ugyldig innloggingstegn",                                                                // 70
      "Login forbidden": "Innlogging forbudt",                                                                         // 70
      "Service unknown": "Ukjent tjeneste",                                                                            // 70
      "Unrecognized options for login request": "Ukjendte valg ved innloggingsforsøk",                                 // 70
      "User validation failed": "Brukergodkjenning gikk galt",                                                         // 70
      "Username already exists.": "Brukernavnet finnes allerede.",                                                     // 70
      "You are not logged in.": "Du er ikke logget inn.",                                                              // 70
      "You've been logged out by the server. Please log in again.": "Tjeneren loggt deg ut. Logg inn på ny.",          // 70
      "Your session has expired. Please log in again.": "Din økt er utløpt. Logg inn på ny.",                          // 70
      "No matching login attempt found": "Fant ingen samsvarende innloggingsførsøk",                                   // 70
      "Password is old. Please reset your password.": "Passordet er for gammelt. Nullstill passordet ditt.",           // 70
      "Incorrect password": "Feil passord",                                                                            // 70
      "Invalid email": "Ugyldig e-postadresse",                                                                        // 70
      "Must be logged in": "Du må være innlogget",                                                                     // 70
      "Need to set a username or email": "Oppgi brukernavn eller e-postadresse",                                       // 70
      "old password format": "gammelt passordformat",                                                                  // 70
      "Password may not be empty": "Passord må være utfyllt",                                                          // 70
      "Signups forbidden": "Påmeldinger ikke tillatt",                                                                 // 70
      "Token expired": "Økten er utløpt",                                                                              // 70
      "Token has invalid email address": "Innloggingstegnet har ugyldig e-postadresse",                                // 70
      "User has no password set": "Brukeren har ikke angitt passord",                                                  // 70
      "User not found": "Bruker ikke funnet",                                                                          // 70
      "Verify email link expired": "Lenke for e-postbekreftelse er utløpt",                                            // 70
      "Verify email link is for unknown address": "Lenke for e-postbekreftelse er for en ukjent adresse",              // 70
      "Match failed": "Ikke samsvar",                                                                                  // 70
      "Unknown error": "Ukjent feil"                                                                                   // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("no_NB", no_NB);                                                                                               // 4
                                                                                                                       //
T9n.map("no-NB", no_NB);                                                                                               // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/pl.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var pl;                                                                                                                // 4
                                                                                                                       //
pl = {                                                                                                                 // 4
  add: "dodaj",                                                                                                        // 6
  and: "i",                                                                                                            // 6
  back: "powrót",                                                                                                      // 6
  changePassword: "Zmień hasło",                                                                                       // 6
  choosePassword: "Wybierz hasło",                                                                                     // 6
  clickAgree: "Klikając na Zarejestruj się zgadzasz się z naszą",                                                      // 6
  configure: "Konfiguruj",                                                                                             // 6
  createAccount: "Utwórz konto",                                                                                       // 6
  currentPassword: "Aktualne hasło",                                                                                   // 6
  dontHaveAnAccount: "Nie masz konta?",                                                                                // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "Adres e-mail",                                                                                        // 6
  emailResetLink: "Wyślij e-mail z linkiem do zmiany hasła",                                                           // 6
  forgotPassword: "Zapomniałeś hasła?",                                                                                // 6
  ifYouAlreadyHaveAnAccount: "Jeżeli już masz konto",                                                                  // 6
  newPassword: "Nowe hasło",                                                                                           // 6
  newPasswordAgain: "Nowe hasło (powtórz)",                                                                            // 6
  optional: "Nieobowiązkowe",                                                                                          // 6
  OR: "LUB",                                                                                                           // 6
  password: "Hasło",                                                                                                   // 6
  passwordAgain: "Hasło (powtórz)",                                                                                    // 6
  privacyPolicy: "polityką prywatności",                                                                               // 6
  remove: "usuń",                                                                                                      // 6
  resetYourPassword: "Ustaw nowe hasło",                                                                               // 6
  setPassword: "Ustaw hasło",                                                                                          // 6
  sign: "Podpisz",                                                                                                     // 6
  signIn: "Zaloguj się",                                                                                               // 6
  signin: "zaloguj się",                                                                                               // 6
  signOut: "Wyloguj się",                                                                                              // 6
  signUp: "Zarejestruj się",                                                                                           // 6
  signupCode: "Kod rejestracji",                                                                                       // 6
  signUpWithYourEmailAddress: "Zarejestruj się używając adresu e-mail",                                                // 6
  terms: "warunkami korzystania z serwisu",                                                                            // 6
  updateYourPassword: "Zaktualizuj swoje hasło",                                                                       // 6
  username: "Nazwa użytkownika",                                                                                       // 6
  usernameOrEmail: "Nazwa użytkownika lub adres e-mail",                                                               // 6
  "with": "z",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "Adres e-mail wysłany",                                                                                 // 46
    emailVerified: "Adres e-mail zweryfikowany",                                                                       // 46
    passwordChanged: "Hasło zmienione",                                                                                // 46
    passwordReset: "Hasło wyzerowane"                                                                                  // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Wymagany jest adres e-mail.",                                                                      // 53
    minChar: "7 znaków to minimalna długość hasła.",                                                                   // 53
    pwdsDontMatch: "Hasła są różne",                                                                                   // 53
    pwOneDigit: "Hasło musi zawierać przynajmniej jedną cyfrę.",                                                       // 53
    pwOneLetter: "Hasło musi zawierać 1 literę.",                                                                      // 53
    signInRequired: "Musisz być zalogowany, aby to zrobić.",                                                           // 53
    signupCodeIncorrect: "Kod rejestracji jest nieprawidłowy.",                                                        // 53
    signupCodeRequired: "Wymagany jest kod rejestracji.",                                                              // 53
    usernameIsEmail: "Adres e-mail nie może być nazwą użytkownika.",                                                   // 53
    usernameRequired: "Wymagana jest nazwa użytkownika.",                                                              // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Adres e-mail już istnieje.",                                                           // 70
      "Email doesn't match the criteria.": "Adres e-mail nie spełnia kryteriów.",                                      // 70
      "Invalid login token": "Błędny token logowania",                                                                 // 70
      "Login forbidden": "Logowanie zabronione",                                                                       // 70
      "Service unknown": "Nieznana usługa",                                                                            // 70
      "Unrecognized options for login request": "Nieznane parametry w żądaniu logowania",                              // 70
      "User validation failed": "Niepoprawna nazwa użytkownika",                                                       // 70
      "Username already exists.": "Nazwa użytkownika już istnieje.",                                                   // 70
      "You are not logged in.": "Nie jesteś zalogowany.",                                                              // 70
      "You've been logged out by the server. Please log in again.": "Zostałeś wylogowane przez serwer. Zaloguj się ponownie.",
      "Your session has expired. Please log in again.": "Twoja sesja wygasła. Zaloguj się ponownie.",                  // 70
      "No matching login attempt found": "Nie dopasowano danych logowania",                                            // 70
      "Password is old. Please reset your password.": "Hasło jest stare. Proszę wyzerować hasło.",                     // 70
      "Incorrect password": "Niepoprawne hasło",                                                                       // 70
      "Invalid email": "Błędny adres e-mail",                                                                          // 70
      "Must be logged in": "Musisz być zalogowany",                                                                    // 70
      "Need to set a username or email": "Wymagane ustawienie nazwy użytkownika lub adresu e-mail",                    // 70
      "old password format": "stary format hasła",                                                                     // 70
      "Password may not be empty": "Hasło nie może być puste",                                                         // 70
      "Signups forbidden": "Rejestracja zabroniona",                                                                   // 70
      "Token expired": "Token wygasł",                                                                                 // 70
      "Token has invalid email address": "Token ma niewłaściwy adres e-mail",                                          // 70
      "User has no password set": "Użytkownik nie ma ustawionego hasła",                                               // 70
      "User not found": "Nie znaleziono użytkownika",                                                                  // 70
      "Verify email link expired": "Link weryfikacyjny wygasł",                                                        // 70
      "Verify email link is for unknown address": "Link weryfikacyjny jest dla nieznanego adresu",                     // 70
      "Match failed": "Błędne dopasowanie",                                                                            // 70
      "Unknown error": "Nieznany błąd"                                                                                 // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("pl", pl);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/pt.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var pt;                                                                                                                // 4
                                                                                                                       //
pt = {                                                                                                                 // 4
  t9Name: 'Português',                                                                                                 // 6
  add: "Adicionar",                                                                                                    // 6
  and: "e",                                                                                                            // 6
  back: "Voltar",                                                                                                      // 6
  changePassword: "Alterar senha",                                                                                     // 6
  choosePassword: "Escolha uma senha",                                                                                 // 6
  clickAgree: "Ao clicar em Criar Conta, você estará reconhecendo que aceita nossos Termos de Uso",                    // 6
  configure: "Configurar",                                                                                             // 6
  createAccount: "Criar Conta",                                                                                        // 6
  currentPassword: "Senha Atual",                                                                                      // 6
  dontHaveAnAccount: "Não tem conta?",                                                                                 // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "Endereço de e-mail",                                                                                  // 6
  emailResetLink: "E-mail com link para gerar Nova Senha",                                                             // 6
  forgotPassword: "Esqueceu sua senha?",                                                                               // 6
  ifYouAlreadyHaveAnAccount: "Se você já tem uma conta",                                                               // 6
  newPassword: "Nova Senha",                                                                                           // 6
  newPasswordAgain: "Nova Senha (novamente)",                                                                          // 6
  optional: "Opcional",                                                                                                // 6
  OR: "OU",                                                                                                            // 6
  password: "Senha",                                                                                                   // 6
  passwordAgain: "Senha (novamente)",                                                                                  // 6
  privacyPolicy: "Política de Privacidade",                                                                            // 6
  remove: "remover",                                                                                                   // 6
  resetYourPassword: "Gerar nova senha",                                                                               // 6
  setPassword: "Cadastrar Senha",                                                                                      // 6
  sign: "Entrar",                                                                                                      // 6
  signIn: "Entrar",                                                                                                    // 6
  signin: "entrar",                                                                                                    // 6
  signOut: "Sair",                                                                                                     // 6
  signUp: "Criar conta",                                                                                               // 6
  signupCode: "Código de Registro",                                                                                    // 6
  signUpWithYourEmailAddress: "Criar conta utilizando seu endereço de e-mail",                                         // 6
  terms: "Termos de Uso",                                                                                              // 6
  updateYourPassword: "Atualizar senha",                                                                               // 6
  username: "Nome de usuário",                                                                                         // 6
  usernameOrEmail: "Usuário ou e-mail",                                                                                // 6
  "with": "com",                                                                                                       // 6
  "Send the verification email again": "Reenviar e-mail de verificação",                                               // 6
  "Send email again": "Reenviar e-mail",                                                                               // 6
  info: {                                                                                                              // 6
    emailSent: "E-mail enviado",                                                                                       // 50
    emailVerified: "E-mail verificado",                                                                                // 50
    passwordChanged: "Senha atualizada",                                                                               // 50
    passwordReset: "Senha alterada"                                                                                    // 50
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "E-mail é obrigatório.",                                                                            // 57
    minChar: "Senha requer um mínimo de 7 caracteres.",                                                                // 57
    pwdsDontMatch: "Senhas não coincidem",                                                                             // 57
    pwOneDigit: "A Senha deve conter pelo menos um dígito.",                                                           // 57
    pwOneLetter: "A Senha deve conter pelo menos uma letra.",                                                          // 57
    signInRequired: "Você precisa estar logado para fazer isso.",                                                      // 57
    signupCodeIncorrect: "Código de acesso incorreto.",                                                                // 57
    signupCodeRequired: "É necessário um código de acesso.",                                                           // 57
    usernameIsEmail: "Nome de usuário não pode ser um endereço de e-mail.",                                            // 57
    usernameRequired: "Nome de usuário é obrigatório.",                                                                // 57
    accounts: {                                                                                                        // 57
      "Email already exists.": "E-mail já existe.",                                                                    // 74
      "Email doesn't match the criteria.": "E-mail inválido.",                                                         // 74
      "Invalid login token": "Token de login inválido",                                                                // 74
      "Login forbidden": "Login não permitido",                                                                        // 74
      "Service unknown": "Serviço desconhecido",                                                                       // 74
      "Unrecognized options for login request": "Opções desconhecidas para solicitação de login",                      // 74
      "User validation failed": "Validação de usuário falhou",                                                         // 74
      "Username already exists.": "Nome de usuário já existe.",                                                        // 74
      "You are not logged in.": "Você não está logado.",                                                               // 74
      "You've been logged out by the server. Please log in again.": "Você foi desconectado pelo servidor. Por favor, efetue login novamente.",
      "Your session has expired. Please log in again.": "Sua sessão expirou. Por favor, efetue login novamente.",      // 74
      "No matching login attempt found": "Não foi encontrada nenhuma tentativa de login que coincida.",                // 74
      "Password is old. Please reset your password.": "Senha expirou. Por favor, cadastre uma nova senha.",            // 74
      "Incorrect password": "Senha incorreta",                                                                         // 74
      "Invalid email": "E-mail inválido",                                                                              // 74
      "Must be logged in": "É necessário efetuar login",                                                               // 74
      "Need to set a username or email": "É necessário configurar um Nome de Usuário ou E-mail",                       // 74
      "old password format": "Formato de senha antigo",                                                                // 74
      "Password may not be empty": "Senha não pode estar em branco",                                                   // 74
      "Signups forbidden": "Não permitido Criar Conta",                                                                // 74
      "Token expired": "Token expirou",                                                                                // 74
      "Token has invalid email address": "Token tem endereço de e-mail inválido",                                      // 74
      "User has no password set": "Usuário não possui senha cadastrada",                                               // 74
      "User not found": "Usuário não encontrado",                                                                      // 74
      "Verify email link expired": "O link de verificação de e-mail expirou",                                          // 74
      "Verify email link is for unknown address": "O link de verificação de e-mail está configurado para um endereço desconhecido",
      "Verify email link expired": "E-mail de verificação recebido?",                                                  // 74
      "Send again": "Renviar",                                                                                         // 74
      "Match failed": "Senhas não coincidem",                                                                          // 74
      "Unknown error": "Erro desconhecido"                                                                             // 74
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("pt", pt);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/pt_PT.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var pt_PT;                                                                                                             // 4
                                                                                                                       //
pt_PT = {                                                                                                              // 4
  add: "adicionar",                                                                                                    // 6
  and: "e",                                                                                                            // 6
  back: "voltar",                                                                                                      // 6
  changePassword: "Alterar palavra-passe",                                                                             // 6
  choosePassword: "Escolha uma palavra-passe",                                                                         // 6
  clickAgree: "Ao clicar em Registar, está a aceitar os nossos",                                                       // 6
  configure: "Configurar",                                                                                             // 6
  createAccount: "Criar uma Conta",                                                                                    // 6
  currentPassword: "Palavra-passe Atual",                                                                              // 6
  dontHaveAnAccount: "Não tem conta?",                                                                                 // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "Endereço de e-mail",                                                                                  // 6
  emailResetLink: "Enviar e-mail para redefinir a palavra-passe",                                                      // 6
  forgotPassword: "Esqueci-me da palavra-passe",                                                                       // 6
  ifYouAlreadyHaveAnAccount: "Se já tem uma conta",                                                                    // 6
  newPassword: "Nova Palavra-passe",                                                                                   // 6
  newPasswordAgain: "Nova Palavra-passe (novamente)",                                                                  // 6
  optional: "Opcional",                                                                                                // 6
  OR: "OU",                                                                                                            // 6
  password: "Palavra-passe",                                                                                           // 6
  passwordAgain: "Palavra-passe (novamente)",                                                                          // 6
  privacyPolicy: "Política de Privacidade",                                                                            // 6
  remove: "remover",                                                                                                   // 6
  resetYourPassword: "Redefinir a palavra-passe",                                                                      // 6
  setPassword: "Definir Palavra-passe",                                                                                // 6
  sign: "Iniciar",                                                                                                     // 6
  signIn: "Iniciar Sessão",                                                                                            // 6
  signin: "iniciar sessão",                                                                                            // 6
  signOut: "Sair",                                                                                                     // 6
  signUp: "Criar conta",                                                                                               // 6
  signupCode: "Código de Registo",                                                                                     // 6
  signUpWithYourEmailAddress: "Registar com o endereço de e-mail",                                                     // 6
  terms: "Termos de Uso",                                                                                              // 6
  updateYourPassword: "Alterar a palavra-passe",                                                                       // 6
  username: "Nome do ulilizador",                                                                                      // 6
  usernameOrEmail: "Ulilizador ou e-mail",                                                                             // 6
  "with": "com",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "E-mail enviado",                                                                                       // 46
    emailVerified: "E-mail verificado",                                                                                // 46
    passwordChanged: "Palavra-passe alterada",                                                                         // 46
    passwordReset: "Palavra-passe redefinida"                                                                          // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "O e-mail é obrigatório.",                                                                          // 53
    minChar: "A palavra-passe tem de ter no mínimo 7 caracteres.",                                                     // 53
    pwdsDontMatch: "As palavra-passes não coincidem",                                                                  // 53
    pwOneDigit: "A palavra-passe tem de conter pelo menos um dígito.",                                                 // 53
    pwOneLetter: "A palavra-passe tem de conter pelo menos uma letra.",                                                // 53
    signInRequired: "É necessário iniciar sessão para fazer isso.",                                                    // 53
    signupCodeIncorrect: "Código de registo incorreto.",                                                               // 53
    signupCodeRequired: "É necessário um código de registo.",                                                          // 53
    usernameIsEmail: "O nome do utilizador não pode ser um endereço de e-mail.",                                       // 53
    usernameRequired: "O nome de usuário é obrigatório.",                                                              // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "O e-mail já existe.",                                                                  // 70
      "Email doesn't match the criteria.": "E-mail inválido.",                                                         // 70
      "Invalid login token": "Token de início de sessão inválido",                                                     // 70
      "Login forbidden": "Início de sessão impedido",                                                                  // 70
      "Service unknown": "Serviço desconhecido",                                                                       // 70
      "Unrecognized options for login request": "Pedido de início de sessão com opções não reconhecidas",              // 70
      "User validation failed": "A validação do utilizador falhou",                                                    // 70
      "Username already exists.": "O nome do utilizador já existe.",                                                   // 70
      "You are not logged in.": "Não tem sessão iniciada.",                                                            // 70
      "You've been logged out by the server. Please log in again.": "Sessão terminada pelo servidor. Por favor, inicie sessão novamente.",
      "Your session has expired. Please log in again.": "A sua sessão expirou. Por favor, inicie sessão novamente.",   // 70
      "No matching login attempt found": "Não foi encontrada nenhuma tentativa de início de sessão que coincida.",     // 70
      "Password is old. Please reset your password.": "A palavra-passe é antiga. Por favor, redefina a sua palavra-passe.",
      "Incorrect password": "Palavra-passe incorreta",                                                                 // 70
      "Invalid email": "E-mail inválido",                                                                              // 70
      "Must be logged in": "É necessário iniciar sessão",                                                              // 70
      "Need to set a username or email": "É necessário definir um nome de utilizador ou e-mail",                       // 70
      "old password format": "Formato de palavra-passe antigo",                                                        // 70
      "Password may not be empty": "A palavra-passe não pode estar em branco",                                         // 70
      "Signups forbidden": "Criação de contas proibida",                                                               // 70
      "Token expired": "O token expirou",                                                                              // 70
      "Token has invalid email address": "O token tem um endereço de e-mail inválido",                                 // 70
      "User has no password set": "O utilizador não defeniu a palavra-passe",                                          // 70
      "User not found": "Utilizador não encontrado",                                                                   // 70
      "Verify email link expired": "O link de verificação de e-mail expirou",                                          // 70
      "Verify email link is for unknown address": "O link de verificação de e-mail está definido para um endereço desconhecido",
      "Match failed": "Comparação falhou",                                                                             // 70
      "Unknown error": "Erro desconhecido"                                                                             // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("pt_PT", pt_PT);                                                                                               // 4
                                                                                                                       //
T9n.map("pt-PT", pt_PT);                                                                                               // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/ro.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ro;                                                                                                                // 4
                                                                                                                       //
ro = {                                                                                                                 // 4
  add: "adaugă",                                                                                                       // 6
  and: "și",                                                                                                           // 6
  back: "înapoi",                                                                                                      // 6
  changePassword: "Schimbare parolă",                                                                                  // 6
  choosePassword: "Alege o parolă",                                                                                    // 6
  clickAgree: "Click pe Register, sunteți de acord",                                                                   // 6
  configure: "Configurare",                                                                                            // 6
  createAccount: "Creați un cont",                                                                                     // 6
  currentPassword: "Parola curentă",                                                                                   // 6
  dontHaveAnAccount: "Nu ai un cont?",                                                                                 // 6
  email: "E-mail",                                                                                                     // 6
  emailAddress: "Adresa de e-mail",                                                                                    // 6
  emailResetLink: "Link de resetare parolă",                                                                           // 6
  forgotPassword: "Ți-ai uitat parola?",                                                                               // 6
  ifYouAlreadyHaveAnAccount: "Dacă ai deja un cont",                                                                   // 6
  newPassword: "Parolă nouă",                                                                                          // 6
  newPasswordAgain: "Parolă nouă (din nou)",                                                                           // 6
  optional: "Opțional",                                                                                                // 6
  OR: "SAU",                                                                                                           // 6
  password: "Parolă",                                                                                                  // 6
  passwordAgain: "Parolă (din nou)",                                                                                   // 6
  privacyPolicy: "Politica de confidentialitate",                                                                      // 6
  remove: "Elimină",                                                                                                   // 6
  resetYourPassword: "Schimbati parola",                                                                               // 6
  setPassword: "Setati parola",                                                                                        // 6
  sign: "Înregistrează",                                                                                               // 6
  signIn: "Autentificare",                                                                                             // 6
  signin: "Autentificare",                                                                                             // 6
  signOut: "Deconectare",                                                                                              // 6
  signUp: "Înregistrare",                                                                                              // 6
  signupCode: "Codul de înregistrare",                                                                                 // 6
  signUpWithYourEmailAddress: "Înregistrați-vă adresa de e-mail",                                                      // 6
  terms: "Condiții de utilizare",                                                                                      // 6
  updateYourPassword: "Actualizați parola dvs.",                                                                       // 6
  username: "Nume utilizator",                                                                                         // 6
  usernameOrEmail: "Nume utilizator sau e-mail",                                                                       // 6
  "with": "cu",                                                                                                        // 6
  info: {                                                                                                              // 6
    emailSent: "Email trimis",                                                                                         // 46
    emailVerified: "Email verificat",                                                                                  // 46
    passwordChanged: "Parola a fost schimbata",                                                                        // 46
    passwordReset: "Resetare parola"                                                                                   // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Introduceti Email-ul.",                                                                            // 53
    minChar: "Parolă minima de 7 caractere ",                                                                          // 53
    pwdsDontMatch: "Parolele nu se potrivesc",                                                                         // 53
    pwOneDigit: "Parola trebuie să contină cel puțin o cifră.",                                                        // 53
    pwOneLetter: "Parola necesită o scrisoare.",                                                                       // 53
    signInRequired: "Autentificare.",                                                                                  // 53
    signupCodeIncorrect: "Codul de înregistrare este incorectă.",                                                      // 53
    signupCodeRequired: "Aveti nevoie de cod de înregistrare.",                                                        // 53
    usernameIsEmail: "Numele de utilizator nu poate fi o adresă de e-mail.",                                           // 53
    usernameRequired: "Introduceti numele de utilizator.",                                                             // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "E-mail există deja.",                                                                  // 70
      "Email doesn't match the criteria.": "E-mail nu se potrivește cu criteriile.",                                   // 70
      "Invalid login token": "Token invalid",                                                                          // 70
      "Login forbidden": "Autentificare interzisă",                                                                    // 70
      "Service unknown": "Service necunoscut",                                                                         // 70
      "Unrecognized options for login request": "Opțiuni nerecunoscute de cerere de conectare",                        // 70
      "User validation failed": "Validare utilizator nereușit",                                                        // 70
      "Username already exists.": "Numele de utilizator existent.",                                                    // 70
      "You are not logged in.": "Nu sunteti autentificat.",                                                            // 70
      "You've been logged out by the server. Please log in again.": "Ați fost deconectat de către server rugam sa va logati din nou.",
      "Your session has expired. Please log in again.": "Sesiunea a expirat rugam sa va logati din nou.",              // 70
      "No matching login attempt found": "Autentificare nereusită",                                                    // 70
      "Password is old. Please reset your password.": "Parola expirata, Vă rugăm să resetati parola.",                 // 70
      "Incorrect password": "Parola incorectă",                                                                        // 70
      "Invalid email": "E-mail invalid",                                                                               // 70
      "Must be logged in": "Trebuie sa fii logat",                                                                     // 70
      "Need to set a username or email": "Adaugati un nume utilizator sau un e-mail",                                  // 70
      "old password format": "Parola cu format vechi",                                                                 // 70
      "Password may not be empty": "Parola nu poate fi gol",                                                           // 70
      "Signups forbidden": "Înscrieri interzisă",                                                                      // 70
      "Token expired": "Token expirat",                                                                                // 70
      "Token has invalid email address": "Token are adresă de email invalidă",                                         // 70
      "User has no password set": "Utilizator nu are parola setată",                                                   // 70
      "User not found": "Utilizator nu a fost găsit",                                                                  // 70
      "Verify email link expired": "Link-ul de e-mail a expirat",                                                      // 70
      "Verify email link is for unknown address": "Link-ul de e-mail nu corespunde",                                   // 70
      "Match failed": "Potrivire nereușită",                                                                           // 70
      "Unknown error": "Eroare necunoscută"                                                                            // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("ro", ro);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/ru.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ru;                                                                                                                // 4
                                                                                                                       //
ru = {                                                                                                                 // 4
  add: "добавить",                                                                                                     // 6
  and: "и",                                                                                                            // 6
  back: "назад",                                                                                                       // 6
  changePassword: "Сменить пароль",                                                                                    // 6
  choosePassword: "Придумайте пароль",                                                                                 // 6
  clickAgree: "Нажав на Регистрация, вы соглашаетесь с условиями",                                                     // 6
  configure: "Конфигурировать",                                                                                        // 6
  createAccount: "Создать аккаунт",                                                                                    // 6
  currentPassword: "Текущий пароль",                                                                                   // 6
  dontHaveAnAccount: "Нет аккаунта?",                                                                                  // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Email",                                                                                               // 6
  emailResetLink: "Отправить ссылку для сброса",                                                                       // 6
  forgotPassword: "Забыли пароль?",                                                                                    // 6
  ifYouAlreadyHaveAnAccount: "Если у вас уже есть аккаунт",                                                            // 6
  newPassword: "Новый пароль",                                                                                         // 6
  newPasswordAgain: "Новый пароль (еще раз)",                                                                          // 6
  optional: "Необязательно",                                                                                           // 6
  OR: "ИЛИ",                                                                                                           // 6
  password: "Пароль",                                                                                                  // 6
  passwordAgain: "Пароль (еще раз)",                                                                                   // 6
  privacyPolicy: "Политики безопасности",                                                                              // 6
  remove: "Удалить",                                                                                                   // 6
  resetYourPassword: "Сбросить пароль",                                                                                // 6
  setPassword: "Установить пароль",                                                                                    // 6
  sign: "Подпись",                                                                                                     // 6
  signIn: "Войти",                                                                                                     // 6
  signin: "войти",                                                                                                     // 6
  signOut: "Выйти",                                                                                                    // 6
  signUp: "Регистрация",                                                                                               // 6
  signupCode: "Регистрационный код",                                                                                   // 6
  signUpWithYourEmailAddress: "Зарегистрируйтесь с вашим email адресом",                                               // 6
  terms: "Условиями пользования",                                                                                      // 6
  updateYourPassword: "Обновить пароль",                                                                               // 6
  username: "Имя пользователя",                                                                                        // 6
  usernameOrEmail: "Имя пользователя или email",                                                                       // 6
  "with": "через",                                                                                                     // 6
  info: {                                                                                                              // 6
    emailSent: "Email отправлен",                                                                                      // 46
    emailVerified: "Email прошел проверку",                                                                            // 46
    passwordChanged: "Пароль изменен",                                                                                 // 46
    passwordReset: "Пароль сброшен"                                                                                    // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email обязательно.",                                                                               // 53
    minChar: "Минимальное кол-во символов для пароля 7.",                                                              // 53
    pwdsDontMatch: "Пароли не совпадают",                                                                              // 53
    pwOneDigit: "В пароле должна быть хотя бы одна цифра.",                                                            // 53
    pwOneLetter: "В пароле должна быть хотя бы одна буква.",                                                           // 53
    signInRequired: "Необходимо войти для чтобы продолжить.",                                                          // 53
    signupCodeIncorrect: "Неправильный регистрационный код.",                                                          // 53
    signupCodeRequired: "Необходим регистрационый код.",                                                               // 53
    usernameIsEmail: "Имя пользователя не может быть адресом email.",                                                  // 53
    usernameRequired: "Имя пользователя обязательно.",                                                                 // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Email уже существует",                                                                 // 70
      "Email doesn't match the criteria.": "Email не соответствует критериям.",                                        // 70
      "Invalid login token": "Неверный токен для входа",                                                               // 70
      "Login forbidden": "Вход запрещен",                                                                              // 70
      "Service unknown": "Cервис неизвестен",                                                                          // 70
      "Unrecognized options for login request": "Неизвестные параметры для запроса входа",                             // 70
      "User validation failed": "Проверка пользователя неудалась",                                                     // 70
      "Username already exists.": "Пользователь существует.",                                                          // 70
      "You are not logged in.": "Вы не вошли.",                                                                        // 70
      "You've been logged out by the server. Please log in again.": "Сервер инициировал выход. Пожалуйста войдите еще раз.",
      "Your session has expired. Please log in again.": "Ваша сессия устарела. Пожалуйста войдите еще раз.",           // 70
      "No matching login attempt found": "Не было найдено соответствующей попытки войти",                              // 70
      "Password is old. Please reset your password.": "Пароль устарел. Пожалуйста, сбросьте Ваш пароль.",              // 70
      "Incorrect password": "Неправильный пароль",                                                                     // 70
      "Invalid email": "Несуществующий Email",                                                                         // 70
      "Must be logged in": "Необходимо войти",                                                                         // 70
      "Need to set a username or email": "Необходимо имя пользователя или email",                                      // 70
      "old password format": "старый формат пароля",                                                                   // 70
      "Password may not be empty": "Пароль не может быть пустым",                                                      // 70
      "Signups forbidden": "Регистрация отключена",                                                                    // 70
      "Token expired": "Время действия токена истекло",                                                                // 70
      "Token has invalid email address": "У токена неправильный email адрес",                                          // 70
      "User has no password set": "У пользователя не установлен пароль",                                               // 70
      "User not found": "Пользователь не найден",                                                                      // 70
      "Verify email link expired": "Ссылка подтверждения email устарела",                                              // 70
      "Verify email link is for unknown address": "Ссылка подтверждения email для неизвестного адреса",                // 70
      "Match failed": "Не совпадают",                                                                                  // 70
      "Unknown error": "Неизвестная ошибка"                                                                            // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("ru", ru);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/sk.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var sk;                                                                                                                // 4
                                                                                                                       //
sk = {                                                                                                                 // 4
  add: "pridať",                                                                                                       // 6
  and: "a",                                                                                                            // 6
  back: "späť",                                                                                                        // 6
  changePassword: "Zmena hesla",                                                                                       // 6
  choosePassword: "Zvoľte si heslo",                                                                                   // 6
  clickAgree: "Stlačením tlačidla \"Registrovať\" akceptujete",                                                        // 6
  configure: "Nastaviť",                                                                                               // 6
  createAccount: "Vytvoriť konto",                                                                                     // 6
  currentPassword: "Súčasné heslo",                                                                                    // 6
  dontHaveAnAccount: "Nemáte účet?",                                                                                   // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Emailová adresa",                                                                                     // 6
  emailResetLink: "Odoslať na email overovací odkaz",                                                                  // 6
  forgotPassword: "Zabudli ste heslo?",                                                                                // 6
  ifYouAlreadyHaveAnAccount: "Ak už máte vytvorený účet prejdite na",                                                  // 6
  newPassword: "Nové heslo",                                                                                           // 6
  newPasswordAgain: "Nové heslo (opakujte)",                                                                           // 6
  optional: "Voliteľné",                                                                                               // 6
  OR: "alebo",                                                                                                         // 6
  password: "Heslo",                                                                                                   // 6
  passwordAgain: "Heslo (opakujte)",                                                                                   // 6
  privacyPolicy: "pravidlá ochrany súkromia",                                                                          // 6
  remove: "odstrániť",                                                                                                 // 6
  resetYourPassword: "Obnovenie hesla",                                                                                // 6
  setPassword: "Nastaviť heslo",                                                                                       // 6
  sign: "Prihlásiť",                                                                                                   // 6
  signIn: "Prihlásenie",                                                                                               // 6
  signin: "prihlásenie",                                                                                               // 6
  signOut: "Odhlásiť",                                                                                                 // 6
  signUp: "Registrovať",                                                                                               // 6
  signupCode: "Registračný kód",                                                                                       // 6
  signUpWithYourEmailAddress: "Registrácia pomocou emailovej adresy",                                                  // 6
  terms: "pravidlá požívania",                                                                                         // 6
  updateYourPassword: "Aktualizovať heslo",                                                                            // 6
  username: "Užívateľské meno",                                                                                        // 6
  usernameOrEmail: "Užívateľské meno alebo email",                                                                     // 6
  "with": "s",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "Email odoslaný",                                                                                       // 46
    emailVerified: "Email bol overený",                                                                                // 46
    passwordChanged: "Heslo bolo zmenené",                                                                             // 46
    passwordReset: "Obnova hesla"                                                                                      // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email je vyžadovaný.",                                                                             // 53
    minChar: "minimálne 7 znakov heslo.",                                                                              // 53
    pwdsDontMatch: "Heslá sa nezhodujú",                                                                               // 53
    pwOneDigit: "Heslo musí mať aspoň jeden znak.",                                                                    // 53
    pwOneLetter: "Heslo musí mať aspoň 1 znak..",                                                                      // 53
    signInRequired: "Je vyžadované prihlásenie na túto akciu.",                                                        // 53
    signupCodeIncorrect: "Registračný kód je nesprávny.",                                                              // 53
    signupCodeRequired: "Je vyžadovaný registračný kód.",                                                              // 53
    usernameIsEmail: "Užvateľské meno nemôže byť email.",                                                              // 53
    usernameRequired: "Je vyžadované užívateľské meno.",                                                               // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Email už bol registrovaný.",                                                           // 70
      "Email doesn't match the criteria.": "Email nevyhovuje kritériam.",                                              // 70
      "Invalid login token": "Neplatný token prihlásenia",                                                             // 70
      "Login forbidden": "Prihlásenie neuspešné",                                                                      // 70
      "Service unknown": "Neznáma služba",                                                                             // 70
      "Unrecognized options for login request": "Neroznali sa podmienky pre požiadavku prihlásenia",                   // 70
      "User validation failed": "Overenie užívateľa zlyhalo",                                                          // 70
      "Username already exists.": "Užívateľ už existuje.",                                                             // 70
      "You are not logged in.": "Vyžaduje sa prihlásenie.",                                                            // 70
      "You've been logged out by the server. Please log in again.": "Boli ste odhlásený/á zo servera. Prosím prihláste sa znova.",
      "Your session has expired. Please log in again.": "Vaše príhlásenie expirovalo. Prosím prihláste sa znova.",     // 70
      "No matching login attempt found": "Prihlásenie nesúhlasí",                                                      // 70
      "Password is old. Please reset your password.": "Heslo je zastaralé. Prosím obnovte si ho.",                     // 70
      "Incorrect password": "Nesprávne heslo",                                                                         // 70
      "Invalid email": "Nesprávaný email",                                                                             // 70
      "Must be logged in": "Je vyžadované prihlásenie",                                                                // 70
      "Need to set a username or email": "Je potrebné nastaviť užívateľské meno a email",                              // 70
      "old password format": "formát starého hesla",                                                                   // 70
      "Password may not be empty": "Heslo nesmie byť prázdne",                                                         // 70
      "Signups forbidden": "Prihlásenie je zakázané",                                                                  // 70
      "Token expired": "Token expiroval",                                                                              // 70
      "Token has invalid email address": "Token obsahuje nesprávnu emailovú adresu",                                   // 70
      "User has no password set": "Užívateľ nemá nastavené heslo",                                                     // 70
      "User not found": "Užívateľ sa nenašiel",                                                                        // 70
      "Verify email link expired": "Odkazu pre overenie emailu vypršala platnosť.",                                    // 70
      "Verify email link is for unknown address": "Overovací odkaz je z nenámej adresy",                               // 70
      "Match failed": "Nezhodné",                                                                                      // 70
      "Unknown error": "Neznáma chyba"                                                                                 // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("sk", sk);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/sl.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var sl;                                                                                                                // 4
                                                                                                                       //
sl = {                                                                                                                 // 4
  add: "dodaj",                                                                                                        // 6
  and: "in",                                                                                                           // 6
  back: "nazaj",                                                                                                       // 6
  changePassword: "Spremeni geslo",                                                                                    // 6
  choosePassword: "Izberi geslo",                                                                                      // 6
  clickAgree: "S klikom na Registracija se strinjaš",                                                                  // 6
  configure: "Nastavi",                                                                                                // 6
  createAccount: "Nova registracija",                                                                                  // 6
  currentPassword: "Trenutno geslo",                                                                                   // 6
  dontHaveAnAccount: "Nisi registriran(a)?",                                                                           // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Email naslov",                                                                                        // 6
  emailResetLink: "Pošlji ponastavitveno povezavo",                                                                    // 6
  forgotPassword: "Pozabljeno geslo?",                                                                                 // 6
  ifYouAlreadyHaveAnAccount: "Če si že registriran(a),",                                                               // 6
  newPassword: "Novo geslo",                                                                                           // 6
  newPasswordAgain: "Novo geslo (ponovno)",                                                                            // 6
  optional: "Po želji",                                                                                                // 6
  OR: "ALI",                                                                                                           // 6
  password: "Geslo",                                                                                                   // 6
  passwordAgain: "Geslo (ponovno)",                                                                                    // 6
  privacyPolicy: "z našimi pogoji uporabe",                                                                            // 6
  remove: "briši",                                                                                                     // 6
  resetYourPassword: "Ponastavi geslo",                                                                                // 6
  setPassword: "Nastavi geslo",                                                                                        // 6
  sign: "Prijava",                                                                                                     // 6
  signIn: "Prijava",                                                                                                   // 6
  signin: "se prijavi",                                                                                                // 6
  signOut: "Odjava",                                                                                                   // 6
  signUp: "Registracija",                                                                                              // 6
  signupCode: "Prijavna koda",                                                                                         // 6
  signUpWithYourEmailAddress: "Prijava z email naslovom",                                                              // 6
  terms: "Pogoji uporabe",                                                                                             // 6
  updateYourPassword: "Spremeni geslo",                                                                                // 6
  username: "Uporabniško ime",                                                                                         // 6
  usernameOrEmail: "Uporabniško ime ali email",                                                                        // 6
  "with": "z",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "E-pošta poslana",                                                                                      // 46
    emailVerified: "Email naslov preverjen",                                                                           // 46
    passwordChanged: "Geslo spremenjeno",                                                                              // 46
    passwordReset: "Geslo ponastavljeno"                                                                               // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email je obvezen vnos.",                                                                           // 53
    minChar: "Geslo mora imeti vsaj sedem znakov.",                                                                    // 53
    pwdsDontMatch: "Gesli se ne ujemata",                                                                              // 53
    pwOneDigit: "V geslu mora biti vsaj ena številka.",                                                                // 53
    pwOneLetter: "V geslu mora biti vsaj ena črka.",                                                                   // 53
    signInRequired: "Za to moraš biti prijavljen(a).",                                                                 // 53
    signupCodeIncorrect: "Prijavna koda je napačna.",                                                                  // 53
    signupCodeRequired: "Prijavna koda je obvezen vnos.",                                                              // 53
    usernameIsEmail: "Uporabniško ime ne more biti email naslov.",                                                     // 53
    usernameRequired: "Uporabniško ime je obvezen vnos.",                                                              // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Email že obstaja.",                                                                    // 70
      "Email doesn't match the criteria.": "Email ne odgovarja kriterijem.",                                           // 70
      "Invalid login token": "Napačen prijavni žeton",                                                                 // 70
      "Login forbidden": "Prijava ni dovoljena",                                                                       // 70
      "Service unknown": "Neznana storitev",                                                                           // 70
      "Unrecognized options for login request": "Neznane možnosti v prijavnem zahtevku",                               // 70
      "User validation failed": "Preverjanje uporabnika neuspešno",                                                    // 70
      "Username already exists.": "Uporabniško ime že obstaja",                                                        // 70
      "You are not logged in.": "Nisi prijavljen(a).",                                                                 // 70
      "You've been logged out by the server. Please log in again.": "Odjavljen(a) si s strežnika. Ponovi prijavo.",    // 70
      "Your session has expired. Please log in again.": "Seja je potekla. Ponovi prijavo.",                            // 70
      "No matching login attempt found": "Prijava ne obstaja",                                                         // 70
      "Password is old. Please reset your password.": "Geslo je staro. Zamenjaj ga.",                                  // 70
      "Incorrect password": "Napačno geslo",                                                                           // 70
      "Invalid email": "Napačen email",                                                                                // 70
      "Must be logged in": "Moraš biti prijavljane(a)",                                                                // 70
      "Need to set a username or email": "Prijava ali email sta obvezna",                                              // 70
      "old password format": "stara oblika gesla",                                                                     // 70
      "Password may not be empty": "Geslo ne sme biti prazno",                                                         // 70
      "Signups forbidden": "Prijave onemogočene",                                                                      // 70
      "Token expired": "Žeton je potekel",                                                                             // 70
      "Token has invalid email address": "Žeton vsebuje napačen email",                                                // 70
      "User has no password set": "Uporabnik nima gesla",                                                              // 70
      "User not found": "Uporabnik ne obstaja",                                                                        // 70
      "Verify email link expired": "Povezava za potrditev je potekla",                                                 // 70
      "Verify email link is for unknown address": "Povezava za potrditev vsebuje neznan naslov",                       // 70
      "Match failed": "Prijava neuspešna",                                                                             // 70
      "Unknown error": "Neznana napaka"                                                                                // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("sl", sl);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/sv.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var sv;                                                                                                                // 4
                                                                                                                       //
sv = {                                                                                                                 // 4
  add: "lägg till",                                                                                                    // 6
  and: "och",                                                                                                          // 6
  back: "tillbaka",                                                                                                    // 6
  cancel: "Avbryt",                                                                                                    // 6
  changePassword: "Ändra lösenord",                                                                                    // 6
  choosePassword: "Välj lösenord",                                                                                     // 6
  clickAgree: "När du väljer att skapa ett konto så godkänner du också vår",                                           // 6
  configure: "Konfigurera",                                                                                            // 6
  createAccount: "Skapa ett konto",                                                                                    // 6
  currentPassword: "Nuvarande lösenord",                                                                               // 6
  dontHaveAnAccount: "Har du inget konto?",                                                                            // 6
  email: "E-postadress",                                                                                               // 6
  emailAddress: "E-postadress",                                                                                        // 6
  emailResetLink: "Återställningslänk för e-post",                                                                     // 6
  forgotPassword: "Glömt ditt lösenord?",                                                                              // 6
  ifYouAlreadyHaveAnAccount: "Om du redan har ett konto",                                                              // 6
  newPassword: "Nytt lösenord",                                                                                        // 6
  newPasswordAgain: "Nytt lösenord (upprepa)",                                                                         // 6
  optional: "Valfri",                                                                                                  // 6
  OR: "ELLER",                                                                                                         // 6
  password: "Lösenord",                                                                                                // 6
  passwordAgain: "Lösenord (upprepa)",                                                                                 // 6
  privacyPolicy: "integritetspolicy",                                                                                  // 6
  remove: "ta bort",                                                                                                   // 6
  resetYourPassword: "Återställ ditt lösenord",                                                                        // 6
  setPassword: "Välj lösenord",                                                                                        // 6
  sign: "Logga",                                                                                                       // 6
  signIn: "Logga in",                                                                                                  // 6
  signin: "logga in",                                                                                                  // 6
  signOut: "Logga ut",                                                                                                 // 6
  signUp: "Skapa konto",                                                                                               // 6
  signupCode: "Registreringskod",                                                                                      // 6
  signUpWithYourEmailAddress: "Skapa ett konto med din e-postadress",                                                  // 6
  terms: "användarvillkor",                                                                                            // 6
  updateYourPassword: "Uppdatera ditt lösenord",                                                                       // 6
  username: "Användarnamn",                                                                                            // 6
  usernameOrEmail: "Användarnamn eller e-postadress",                                                                  // 6
  "with": "med",                                                                                                       // 6
  enterPassword: "Lösenord",                                                                                           // 6
  enterNewPassword: "Nytt lösenord",                                                                                   // 6
  enterEmail: "E-post",                                                                                                // 6
  enterUsername: "Användarnamn",                                                                                       // 6
  enterUsernameOrEmail: "Användarnamn eller e-post",                                                                   // 6
  orUse: "Eller använd",                                                                                               // 6
  info: {                                                                                                              // 6
    emailSent: "E-post skickades",                                                                                     // 53
    emailVerified: "E-post verifierades",                                                                              // 53
    passwordChanged: "Lösenordet har ändrats",                                                                         // 53
    passwordReset: "Återställ lösenordet"                                                                              // 53
  },                                                                                                                   //
  alert: {                                                                                                             // 6
    ok: 'Ok',                                                                                                          // 59
    type: {                                                                                                            // 59
      info: 'Info',                                                                                                    // 61
      error: 'Fel',                                                                                                    // 61
      warning: 'Varning'                                                                                               // 61
    }                                                                                                                  //
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Det krävs en e-postaddress.",                                                                      // 66
    minChar: "Det krävs minst 7 tecken i ditt lösenord.",                                                              // 66
    pwdsDontMatch: "Lösenorden matchar inte.",                                                                         // 66
    pwOneDigit: "Lösenordet måste ha minst 1 siffra.",                                                                 // 66
    pwOneLetter: "Lösenordet måste ha minst 1 bokstav.",                                                               // 66
    signInRequired: "Inloggning krävs här.",                                                                           // 66
    signupCodeIncorrect: "Registreringskoden är felaktig.",                                                            // 66
    signupCodeRequired: "Det krävs en registreringskod.",                                                              // 66
    usernameIsEmail: "Användarnamnet kan inte vara en e-postadress.",                                                  // 66
    usernameRequired: "Det krävs ett användarnamn.",                                                                   // 66
    accounts: {                                                                                                        // 66
      "Email already exists.": "E-postadressen finns redan.",                                                          // 83
      "Email doesn't match the criteria.": "E-postadressen uppfyller inte kriterierna.",                               // 83
      "Invalid login token": "Felaktig login-token",                                                                   // 83
      "Login forbidden": "Inloggning tillåts ej",                                                                      // 83
      "Service unknown": "Okänd service",                                                                              // 83
      "Unrecognized options for login request": "Okända val för inloggningsförsöket",                                  // 83
      "User validation failed": "Validering av användare misslyckades",                                                // 83
      "Username already exists.": "Användarnamn finns redan.",                                                         // 83
      "You are not logged in.": "Du är inte inloggad.",                                                                // 83
      "You've been logged out by the server. Please log in again.": "Du har loggats ut av servern. Vänligen logga in igen.",
      "Your session has expired. Please log in again.": "Din session har gått ut. Vänligen ligga in igen.",            // 83
      "Invalid email or username": "Ogiltig e-post eller användarnamn",                                                // 83
      "Internal server error": "Internt server problem",                                                               // 83
      "undefined": "Något gick fel",                                                                                   // 83
      "No matching login attempt found": "Inget matchande loginförsök kunde hittas",                                   // 83
      "Password is old. Please reset your password.": "Ditt lösenord är gammalt. Vänligen återställ ditt lösenord.",   // 83
      "Incorrect password": "Felaktigt lösenord",                                                                      // 83
      "Invalid email": "Ogiltig e-postadress",                                                                         // 83
      "Must be logged in": "Måste vara inloggad",                                                                      // 83
      "Need to set a username or email": "Ett användarnamn eller en e-postadress krävs.",                              // 83
      "old password format": "gammalt lösenordsformat",                                                                // 83
      "Password may not be empty": "Lösenordet får inte vara tomt",                                                    // 83
      "Signups forbidden": "Registrering förbjuden",                                                                   // 83
      "Token expired": "Token har gått ut",                                                                            // 83
      "Token has invalid email address": "Token har ogiltig e-postadress",                                             // 83
      "User has no password set": "Användaren har inget lösenord",                                                     // 83
      "User not found": "Användaren hittades inte",                                                                    // 83
      "Verify email link expired": "Länken för att verifera e-postadress har gått ut",                                 // 83
      "Verify email link is for unknown address": "Länken för att verifiera e-postadress är för en okänd adress.",     // 83
      "Match failed": "Matchning misslyckades",                                                                        // 83
      "Unknown error": "Okänt fel"                                                                                     // 83
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("sv", sv);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/tr.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var tr;                                                                                                                // 4
                                                                                                                       //
tr = {                                                                                                                 // 4
  add: "ekle",                                                                                                         // 6
  and: "ve",                                                                                                           // 6
  back: "geri",                                                                                                        // 6
  changePassword: "Şifre Değiştir",                                                                                    // 6
  choosePassword: "Şifre Belirle",                                                                                     // 6
  clickAgree: "Kayıta tıklayarak kabul etmiş olacağınız",                                                              // 6
  configure: "Yapılandır",                                                                                             // 6
  createAccount: "Hesap Oluştur",                                                                                      // 6
  currentPassword: "Mevcut Şifre",                                                                                     // 6
  dontHaveAnAccount: "Hesabın yok mu?",                                                                                // 6
  email: "Eposta",                                                                                                     // 6
  emailAddress: "Eposta Adresi",                                                                                       // 6
  emailResetLink: "Email Reset Link",                                                                                  // 6
  forgotPassword: "Şifreni mi unuttun?",                                                                               // 6
  ifYouAlreadyHaveAnAccount: "Zaten bir hesabın varsa",                                                                // 6
  newPassword: "Yeni Şifre",                                                                                           // 6
  newPasswordAgain: "Yeni Şifre (tekrar)",                                                                             // 6
  optional: "İsteğe Bağlı",                                                                                            // 6
  OR: "VEYA",                                                                                                          // 6
  password: "Şifre",                                                                                                   // 6
  passwordAgain: "Şifre (tekrar)",                                                                                     // 6
  privacyPolicy: "Gizlilik Politikası",                                                                                // 6
  remove: "kaldır",                                                                                                    // 6
  resetYourPassword: "Şifreni sıfırla",                                                                                // 6
  setPassword: "Şifre Belirle",                                                                                        // 6
  sign: "Giriş",                                                                                                       // 6
  signIn: "Giriş",                                                                                                     // 6
  signin: "Giriş",                                                                                                     // 6
  signOut: "Çıkış",                                                                                                    // 6
  signUp: "Kayıt",                                                                                                     // 6
  signupCode: "Kayıt Kodu",                                                                                            // 6
  signUpWithYourEmailAddress: "Eposta adresin ile kaydol",                                                             // 6
  terms: "Kullanım Şartları",                                                                                          // 6
  updateYourPassword: "Şifreni güncelle",                                                                              // 6
  username: "Kullanıcı adı",                                                                                           // 6
  usernameOrEmail: "Kullanıcı adı veya şifre",                                                                         // 6
  "with": "için",                                                                                                      // 6
  info: {                                                                                                              // 6
    emailSent: "Eposta iletildi",                                                                                      // 46
    emailVerified: "Eposta doğrulandı",                                                                                // 46
    passwordChanged: "Şifre değişti",                                                                                  // 46
    passwordReset: "Şifre sıfırlandı"                                                                                  // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Eposta gerekli.",                                                                                  // 53
    minChar: "En az 7 karakterli şifre.",                                                                              // 53
    pwdsDontMatch: "Şifreler uyuşmuyor",                                                                               // 53
    pwOneDigit: "Şifre en az bir rakam içermeli.",                                                                     // 53
    pwOneLetter: "Şifre bir harf gerektiriyor.",                                                                       // 53
    signInRequired: "Bunun için önce giriş yapmış olmalısın.",                                                         // 53
    signupCodeIncorrect: "Kayıt kodu hatalı.",                                                                         // 53
    signupCodeRequired: "Kayıt kodu gerekli.",                                                                         // 53
    usernameIsEmail: "Kullanıcı adı bir eposta adresi olamaz.",                                                        // 53
    usernameRequired: "Kullanıcı adı gerekli.",                                                                        // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Eposta zaten kayıtlı.",                                                                // 70
      "Email doesn't match the criteria.": "Eposta kriterleri karşılamıyor.",                                          // 70
      "Invalid login token": "Geçersiz giriş işaretçisi",                                                              // 70
      "Login forbidden": "Girişe izin verilmiyor",                                                                     // 70
      "Service unknown": "Servis tanınmıyor",                                                                          // 70
      "Unrecognized options for login request": "Giriş isteği için tanınmayan seçenekler",                             // 70
      "User validation failed": "Kullanıcı doğrulama başarısız",                                                       // 70
      "Username already exists.": "Kullanıcı adı zaten kayıtlı.",                                                      // 70
      "You are not logged in.": "Kullanıcı girişi yapmadın.",                                                          // 70
      "You've been logged out by the server. Please log in again.": "Sunucu tarafından çıkarıldın. Lütfen tekrar kullanıcı girişi yap.",
      "Your session has expired. Please log in again.": "Oturumun zaman aşımına uğradı. Lütfen tekrar kullanıcı girişi yap.",
      "No matching login attempt found": "Eşleşen bir giriş teşebbüsü bulunamadı",                                     // 70
      "Password is old. Please reset your password.": "Şifre eski. Lütfen şifreni sıfırla.",                           // 70
      "Incorrect password": "Hatalı şifre",                                                                            // 70
      "Invalid email": "Hatalı eposta",                                                                                // 70
      "Must be logged in": "Giriş yapmış olmalısın",                                                                   // 70
      "Need to set a username or email": "Kullanıcı adı veya eposta tanımlamalısın",                                   // 70
      "old password format": "eski şifre biçimi",                                                                      // 70
      "Password may not be empty": "Şifre boş bırakılamaz",                                                            // 70
      "Signups forbidden": "Kayıt yapmaya izin verilmiyor",                                                            // 70
      "Token expired": "İşaretçinin süresi geçti",                                                                     // 70
      "Token has invalid email address": "İşaretçide geçersiz eposta adresi var",                                      // 70
      "User has no password set": "Kullanıcının şifresi tanımlanmamış",                                                // 70
      "User not found": "Kullanıcı bulunamadı",                                                                        // 70
      "Verify email link expired": "Eposta doğrulama bağlantısı zaman aşımına uğradı",                                 // 70
      "Verify email link is for unknown address": "Eposta doğrulama bağlantısı bilinmeyen bir adres içeriyor",         // 70
      "Match failed": "Eşleşme başarısız",                                                                             // 70
      "Unknown error": "Bilinmeyen hata"                                                                               // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("tr", tr);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/uk.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var uk;                                                                                                                // 4
                                                                                                                       //
uk = {                                                                                                                 // 4
  add: "додати",                                                                                                       // 6
  and: "та",                                                                                                           // 6
  back: "назад",                                                                                                       // 6
  changePassword: "Змінити пароль",                                                                                    // 6
  choosePassword: "Придумайте пароль",                                                                                 // 6
  clickAgree: "Натиснувши на Реєстрація ви погоджуєтеся з умовами",                                                    // 6
  configure: "Налаштувати",                                                                                            // 6
  createAccount: "Створити аккаунт",                                                                                   // 6
  currentPassword: "Діючий пароль",                                                                                    // 6
  dontHaveAnAccount: "Немає аккаунта?",                                                                                // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Email",                                                                                               // 6
  emailResetLink: "Отримати посилання для оновлення паролю",                                                           // 6
  forgotPassword: "Забули пароль?",                                                                                    // 6
  ifYouAlreadyHaveAnAccount: "Якщо у вас вже є аккаунт:",                                                              // 6
  newPassword: "Новий пароль",                                                                                         // 6
  newPasswordAgain: "Новий пароль (ще раз)",                                                                           // 6
  optional: "Необов’язково",                                                                                           // 6
  OR: "АБО",                                                                                                           // 6
  password: "Пароль",                                                                                                  // 6
  passwordAgain: "Пароль (ще раз)",                                                                                    // 6
  privacyPolicy: "Політики безпеки",                                                                                   // 6
  remove: "Видалити",                                                                                                  // 6
  resetYourPassword: "Відновити пароль",                                                                               // 6
  setPassword: "Встановити пароль",                                                                                    // 6
  sign: "Підпис",                                                                                                      // 6
  signIn: "Увійти",                                                                                                    // 6
  signin: "увійти",                                                                                                    // 6
  signOut: "Вийти",                                                                                                    // 6
  signUp: "Зареєструватися",                                                                                           // 6
  signupCode: "Реєстраційний код",                                                                                     // 6
  signUpWithYourEmailAddress: "Зареєструйтесь з вашою email адресою",                                                  // 6
  terms: "Умовами користування",                                                                                       // 6
  updateYourPassword: "Оновити пароль",                                                                                // 6
  username: "Ім’я користувача",                                                                                        // 6
  usernameOrEmail: "Ім’я користувача або email",                                                                       // 6
  "with": "з",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "Email відправлено",                                                                                    // 46
    emailVerified: "Email пройшов перевірку",                                                                          // 46
    passwordChanged: "Пароль змінено",                                                                                 // 46
    passwordReset: "Пароль скинуто"                                                                                    // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email є обов’язковим.",                                                                            // 53
    minChar: "Мінімальна кіл-ть символів для паролю 7.",                                                               // 53
    pwdsDontMatch: "Паролі не співпадають",                                                                            // 53
    pwOneDigit: "Пароль повинен містити хоча б одну цифру.",                                                           // 53
    pwOneLetter: "Пароль повинен містити хоча б одну букву.",                                                          // 53
    signInRequired: "Для продовження необхідно увійти.",                                                               // 53
    signupCodeIncorrect: "Невірний реєстраційний код.",                                                                // 53
    signupCodeRequired: "Необхідний реєстраційний код.",                                                               // 53
    usernameIsEmail: "Ім’я користувача не може бути email адресою.",                                                   // 53
    usernameRequired: "Ім’я користувача є обов’язковим.",                                                              // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "Email вже існує",                                                                      // 70
      "Email doesn't match the criteria.": "Email відповідає критеріям.",                                              // 70
      "Invalid login token": "Невірний токен для входу",                                                               // 70
      "Login forbidden": "Вхід заборонено",                                                                            // 70
      "Service unknown": "Невідомий сервіс",                                                                           // 70
      "Unrecognized options for login request": "Невідомі параметри для запиту входу",                                 // 70
      "User validation failed": "Перевірка користувача не вдалася",                                                    // 70
      "Username already exists.": "Користувач існує.",                                                                 // 70
      "You are not logged in.": "Ви не ввійшли.",                                                                      // 70
      "You've been logged out by the server. Please log in again.": "Сервер ініціював вихід. Будь ласка увійдіть ще раз.",
      "Your session has expired. Please log in again.": "Ваша сесія застаріла. Будь ласка увійдіть ще раз.",           // 70
      "No matching login attempt found": "Не було знайдено відповідної спроби увійти",                                 // 70
      "Password is old. Please reset your password.": "Пароль застарів. Будь ласка, скиньте Ваш пароль.",              // 70
      "Incorrect password": "Невірний пароль",                                                                         // 70
      "Invalid email": "Неіснуючий Email",                                                                             // 70
      "Must be logged in": "Необхідно увійти",                                                                         // 70
      "Need to set a username or email": "Необхідно ім’я користувача або email",                                       // 70
      "old password format": "старий формат паролю",                                                                   // 70
      "Password may not be empty": "Пароль не може бути пустим",                                                       // 70
      "Signups forbidden": "Реєстрацію відключено",                                                                    // 70
      "Token expired": "Час дії токена вичерпано",                                                                     // 70
      "Token has invalid email address": "Невірна email адреса для токена",                                            // 70
      "User has no password set": "У користувача не встановлено пароль",                                               // 70
      "User not found": "Користувач не знайдений",                                                                     // 70
      "Verify email link expired": "Посилання підтвердження email застаріло",                                          // 70
      "Verify email link is for unknown address": "Посилання підтвердження email для невідомої адреси",                // 70
      "Match failed": "Не співпадають",                                                                                // 70
      "Unknown error": "Невідома помилка"                                                                              // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("uk", uk);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/vi.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var vi;                                                                                                                // 4
                                                                                                                       //
vi = {                                                                                                                 // 4
  add: "thêm",                                                                                                         // 6
  and: "và",                                                                                                           // 6
  back: "trở lại",                                                                                                     // 6
  changePassword: "Đổi mật khẩu",                                                                                      // 6
  choosePassword: "Chọn một mật khẩu",                                                                                 // 6
  clickAgree: "Bằng cách nhấn vào Đăng ký, bạn đã đồng ý với",                                                         // 6
  configure: "Cấu hình",                                                                                               // 6
  createAccount: "Tạo Tài khoản",                                                                                      // 6
  currentPassword: "Mật khẩu hiện tại",                                                                                // 6
  dontHaveAnAccount: "Chưa có tài khoản?",                                                                             // 6
  email: "Email",                                                                                                      // 6
  emailAddress: "Địa chỉ Email",                                                                                       // 6
  emailResetLink: "Gửi",                                                                                               // 6
  forgotPassword: "Quên mật khẩu?",                                                                                    // 6
  ifYouAlreadyHaveAnAccount: "Nếu bạn đã có tài khoản",                                                                // 6
  newPassword: "Mật khẩu mới",                                                                                         // 6
  newPasswordAgain: "Mật khẩu mới (nhập lại)",                                                                         // 6
  optional: "Tùy chọn",                                                                                                // 6
  OR: "Hoặc",                                                                                                          // 6
  password: "Mật khẩu",                                                                                                // 6
  passwordAgain: "Mật khẩu (nhập lại)",                                                                                // 6
  privacyPolicy: "Chính sách bảo mật",                                                                                 // 6
  remove: "xóa",                                                                                                       // 6
  resetYourPassword: "Lấy lại mật khẩu",                                                                               // 6
  setPassword: "Thiết lập mật khẩu",                                                                                   // 6
  sign: "Ký",                                                                                                          // 6
  signIn: "Đăng nhập",                                                                                                 // 6
  signin: "đăng nhập",                                                                                                 // 6
  signOut: "Đăng xuất",                                                                                                // 6
  signUp: "Đăng ký",                                                                                                   // 6
  signupCode: "Mã đăng ký",                                                                                            // 6
  signUpWithYourEmailAddress: "Đăng ký với email của bạn",                                                             // 6
  terms: "Điều khoản sử dụng",                                                                                         // 6
  updateYourPassword: "Cập nhật mật khẩu",                                                                             // 6
  username: "Tên đăng nhập",                                                                                           // 6
  usernameOrEmail: "Tên đăng nhập hoặc email",                                                                         // 6
  "with": "với",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "Email đã được gửi đi!",                                                                                // 46
    emailVerified: "Email đã được xác minh",                                                                           // 46
    passwordChanged: "Đã đổi mật khẩu",                                                                                // 46
    passwordReset: "Lất lại mật khẩu"                                                                                  // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "Email phải có.",                                                                                   // 53
    minChar: "Mật khẩu phải có ít nhất 7 ký tự.",                                                                      // 53
    pwdsDontMatch: "Mật khẩu không giống nhau",                                                                        // 53
    pwOneDigit: "Mật khẩu phải có ít nhất 1 chữ số.",                                                                  // 53
    pwOneLetter: "Mật khẩu phải có 1 ký tự chữ.",                                                                      // 53
    signInRequired: "Phải đăng nhập.",                                                                                 // 53
    signupCodeIncorrect: "Mã số đăng ký sai.",                                                                         // 53
    signupCodeRequired: "Phải có mã số đăng ký.",                                                                      // 53
    usernameIsEmail: "Tên đăng nhập không thể là địa chỉ email.",                                                      // 53
    usernameRequired: "Phải có tên đăng nhập.",                                                                        // 53
    accounts: {                                                                                                        // 53
      "A login handler should return a result or undefined": "Bộ xử lý đăng nhập phải trả về một kết quả hoặc undefined",
      "Email already exists.": "Email đã tồn tại.",                                                                    // 69
      "Email doesn't match the criteria.": "Email không phù hợp.",                                                     // 69
      "Invalid login token": "Mã đăng nhập không đúng",                                                                // 69
      "Login forbidden": "Đăng nhập bị cấm",                                                                           // 69
      "Service unknown": "Chưa biết Dịch vụ",                                                                          // 69
      "Unrecognized options for login request": "Tùy chọn không được công nhận đối với yêu cầu đăng nhập",             // 69
      "User validation failed": "Xác nhận người dùng thất bại",                                                        // 69
      "Username already exists.": "Tên đăng nhập đã tồn tại.",                                                         // 69
      "You are not logged in.": "Bạn chưa đăng nhập.",                                                                 // 69
      "You've been logged out by the server. Please log in again.": "Bạn đã bị đăng xuất bởi máy chủ. Vui lòng đăng nhập lại.",
      "Your session has expired. Please log in again.": "Thời gian đăng nhập đã hết. Vui lòng đăng nhập lại.",         // 69
      "No matching login attempt found": "Không tìm thấy đăng nhập phù hợp",                                           // 69
      "Password is old. Please reset your password.": "Mật khẩu đã cũ. Vui lòng lấy lại mật khẩu.",                    // 69
      "Incorrect password": "Mật khẩu sai",                                                                            // 69
      "Invalid email": "Email sai",                                                                                    // 69
      "Must be logged in": "Phải đăng nhập",                                                                           // 69
      "Need to set a username or email": "Phải điền tên đăng nhập hoặc email",                                         // 69
      "old password format": "định dạng mật khẩu cũ",                                                                  // 69
      "Password may not be empty": "mật khẩu không được để trống",                                                     // 69
      "Signups forbidden": "Đăng ký đã bị cấm",                                                                        // 69
      "Token expired": "Hết phiên đăng nhập",                                                                          // 69
      "Token has invalid email address": "Phiên đăng nhập chứa địa chỉ email sai",                                     // 69
      "User has no password set": "Người dùng chưa có mật khẩu",                                                       // 69
      "User not found": "Không tìm thấy người dùng",                                                                   // 69
      "Verify email link expired": "Đường dẫn xác nhận email đã hết hạn",                                              // 69
      "Verify email link is for unknown address": "Đường dẫn xác nhận email là cho địa chỉ chưa xác định",             // 69
      "Match failed": "Không đúng",                                                                                    // 69
      "Unknown error": "Lỗi chưa được biết"                                                                            // 69
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("vi", vi);                                                                                                     // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/zh_CN.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var zh_CN;                                                                                                             // 4
                                                                                                                       //
zh_CN = {                                                                                                              // 4
  add: "添加",                                                                                                           // 6
  and: "和",                                                                                                            // 6
  back: "返回",                                                                                                          // 6
  cancel: "取消",                                                                                                        // 6
  changePassword: "修改密码",                                                                                              // 6
  choosePassword: "新密码",                                                                                               // 6
  clickAgree: "点击注册表示您同意",                                                                                             // 6
  configure: "配置",                                                                                                     // 6
  createAccount: "创建账户",                                                                                               // 6
  currentPassword: "当前密码",                                                                                             // 6
  dontHaveAnAccount: "没有账户？",                                                                                          // 6
  email: "电子邮箱",                                                                                                       // 6
  emailAddress: "电邮地址",                                                                                                // 6
  emailResetLink: "邮件重置链接",                                                                                            // 6
  forgotPassword: "忘记密码？",                                                                                             // 6
  ifYouAlreadyHaveAnAccount: "如果您已有账户",                                                                                // 6
  newPassword: "新密码",                                                                                                  // 6
  newPasswordAgain: "再输一遍新密码",                                                                                         // 6
  optional: "可选的",                                                                                                     // 6
  OR: "或",                                                                                                             // 6
  password: "密码",                                                                                                      // 6
  passwordAgain: "再输一遍密码",                                                                                             // 6
  privacyPolicy: "隐私条例",                                                                                               // 6
  remove: "移除",                                                                                                        // 6
  resetYourPassword: "重置您的密码",                                                                                         // 6
  setPassword: "设置密码",                                                                                                 // 6
  sign: "登",                                                                                                           // 6
  signIn: "登录",                                                                                                        // 6
  signin: "登录",                                                                                                        // 6
  signOut: "登出",                                                                                                       // 6
  signUp: "注册",                                                                                                        // 6
  signupCode: "注册码",                                                                                                   // 6
  signUpWithYourEmailAddress: "用您的电子邮件地址注册",                                                                           // 6
  terms: "使用条例",                                                                                                       // 6
  updateYourPassword: "更新您的密码",                                                                                        // 6
  username: "用户名",                                                                                                     // 6
  usernameOrEmail: "用户名或电子邮箱",                                                                                         // 6
  "with": "与",                                                                                                         // 6
  enterPassword: "输入密码",                                                                                               // 6
  enterNewPassword: "输入新密码",                                                                                           // 6
  enterEmail: "输入电子邮件",                                                                                                // 6
  enterUsername: "输入用户名",                                                                                              // 6
  enterUsernameOrEmail: "输入用户名或电子邮件",                                                                                  // 6
  orUse: "或是使用",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "邮件已发出",                                                                                                // 52
    emailVerified: "邮件验证成功",                                                                                           // 52
    passwordChanged: "密码修改成功",                                                                                         // 52
    passwordReset: "密码重置成功"                                                                                            // 52
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "必须填写电子邮件",                                                                                         // 59
    minChar: "密码至少7个字符长",                                                                                              // 59
    pwdsDontMatch: "两次密码不一致",                                                                                          // 59
    pwOneDigit: "密码中至少有一位数字",                                                                                          // 59
    pwOneLetter: "密码中至少有一位字母",                                                                                         // 59
    signInRequired: "您必须登录后才能查看",                                                                                      // 59
    signupCodeIncorrect: "注册码错误",                                                                                      // 59
    signupCodeRequired: "必须有注册码",                                                                                      // 59
    usernameIsEmail: "是用户名而不是电子邮件地址",                                                                                  // 59
    usernameRequired: "必须填写用户名。",                                                                                      // 59
    accounts: {                                                                                                        // 59
      "Email already exists.": "该电子邮件地址已被使用。",                                                                         // 76
      "Email doesn't match the criteria.": "错误的的电子邮件地址。",                                                              // 76
      "Invalid login token": "登录密匙错误",                                                                                 // 76
      "Login forbidden": "登录被阻止",                                                                                      // 76
      "Service unknown": "未知服务",                                                                                       // 76
      "Unrecognized options for login request": "登录请求存在无法识别的选项",                                                       // 76
      "User validation failed": "用户验证失败",                                                                              // 76
      "Username already exists.": "用户名已被占用。",                                                                          // 76
      "You are not logged in.": "您还没有登录。",                                                                             // 76
      "You've been logged out by the server. Please log in again.": "您被服务器登出了。请重新登录。",                                 // 76
      "Your session has expired. Please log in again.": "会话过期，请重新登录。",                                                 // 76
      "Invalid email or username": "不合法的电子邮件或用户名",                                                                     // 76
      "Internal server error": "内部服务器错误",                                                                              // 76
      "undefined": "未知错误",                                                                                             // 76
      "No matching login attempt found": "未发现对应登录请求",                                                                  // 76
      "Password is old. Please reset your password.": "密码过于老了，请重置您的密码。",                                               // 76
      "Incorrect password": "错误的密码",                                                                                   // 76
      "Invalid email": "不合法的电子邮件地址",                                                                                   // 76
      "Must be logged in": "必须先登录",                                                                                    // 76
      "Need to set a username or email": "必须设置用户名或电子邮件地址",                                                             // 76
      "old password format": "较老的密码格式",                                                                                // 76
      "Password may not be empty": "密码不应该为空",                                                                          // 76
      "Signups forbidden": "注册被禁止",                                                                                    // 76
      "Token expired": "密匙过期",                                                                                         // 76
      "Token has invalid email address": "密匙对应的电子邮箱地址不合法",                                                             // 76
      "User has no password set": "用户没有密码",                                                                            // 76
      "User not found": "未找到该用户",                                                                                      // 76
      "Verify email link expired": "激活验证邮件的链接已过期",                                                                     // 76
      "Verify email link is for unknown address": "验证邮件的链接去向未知地址",                                                     // 76
      "Match failed": "匹配失败",                                                                                          // 76
      "Unknown error": "未知错误"                                                                                          // 76
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("zh_CN", zh_CN);                                                                                               // 4
                                                                                                                       //
T9n.map("zh-CN", zh_CN);                                                                                               // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/zh_TW.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var zh_TW;                                                                                                             // 4
                                                                                                                       //
zh_TW = {                                                                                                              // 4
  add: "添加",                                                                                                           // 6
  and: "和",                                                                                                            // 6
  back: "返回",                                                                                                          // 6
  cancel: "取消",                                                                                                        // 6
  changePassword: "修改密碼",                                                                                              // 6
  choosePassword: "選擇密碼",                                                                                              // 6
  clickAgree: "點擊註冊, 您同意我們的",                                                                                          // 6
  configure: "配置",                                                                                                     // 6
  createAccount: "建立帳號",                                                                                               // 6
  currentPassword: "當前密碼",                                                                                             // 6
  dontHaveAnAccount: "還沒有賬戶?",                                                                                         // 6
  email: "電子郵箱",                                                                                                       // 6
  emailAddress: "電郵地址",                                                                                                // 6
  emailResetLink: "電子郵件重設連結",                                                                                          // 6
  forgotPassword: "忘記密碼?",                                                                                             // 6
  ifYouAlreadyHaveAnAccount: "如果您已有賬戶",                                                                                // 6
  newPassword: "新密碼",                                                                                                  // 6
  newPasswordAgain: "新密碼 (重新輸入)",                                                                                      // 6
  optional: "可選的",                                                                                                     // 6
  OR: "或",                                                                                                             // 6
  password: "密碼",                                                                                                      // 6
  passwordAgain: "密碼 (重新輸入)",                                                                                          // 6
  privacyPolicy: "隱私政策",                                                                                               // 6
  remove: "刪除",                                                                                                        // 6
  resetYourPassword: "重置您的密碼",                                                                                         // 6
  setPassword: "設置密碼",                                                                                                 // 6
  sign: "登",                                                                                                           // 6
  signIn: "登入",                                                                                                        // 6
  signin: "登入",                                                                                                        // 6
  signOut: "登出",                                                                                                       // 6
  signUp: "註冊",                                                                                                        // 6
  signupCode: "註冊碼",                                                                                                   // 6
  signUpWithYourEmailAddress: "使用您的電郵地址註冊",                                                                            // 6
  terms: "使用條款",                                                                                                       // 6
  updateYourPassword: "更新您的密碼",                                                                                        // 6
  username: "用戶名",                                                                                                     // 6
  usernameOrEmail: "用戶名或電子郵箱",                                                                                         // 6
  "with": "與",                                                                                                         // 6
  enterPassword: "輸入密碼",                                                                                               // 6
  enterNewPassword: "輸入新密碼",                                                                                           // 6
  enterEmail: "輸入電子郵件",                                                                                                // 6
  enterUsername: "輸入用戶名",                                                                                              // 6
  enterUsernameOrEmail: "輸入用戶名或電子郵件",                                                                                  // 6
  orUse: "或是使用",                                                                                                       // 6
  info: {                                                                                                              // 6
    emailSent: "郵件已發送",                                                                                                // 53
    emailVerified: "郵件已驗證",                                                                                            // 53
    passwordChanged: "密碼已修改",                                                                                          // 53
    passwordReset: "密碼重置"                                                                                              // 53
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "必須填寫電子郵件。",                                                                                        // 60
    minChar: "密碼至少需要7個字符。",                                                                                            // 60
    pwdsDontMatch: "密碼不一致。",                                                                                           // 60
    pwOneDigit: "密碼必須至少有一位數字。",                                                                                        // 60
    pwOneLetter: "密碼必須至少有一位字母。",                                                                                       // 60
    signInRequired: "您必須先登錄才能繼續。",                                                                                     // 60
    signupCodeIncorrect: "註冊碼錯誤。",                                                                                     // 60
    signupCodeRequired: "必須有註冊碼。",                                                                                     // 60
    usernameIsEmail: "用戶名不能為電郵地址。",                                                                                    // 60
    usernameRequired: "必須有用戶名。",                                                                                       // 60
    accounts: {                                                                                                        // 60
      "Email already exists.": "電郵地址已被使用。",                                                                            // 77
      "Email doesn't match the criteria.": "電郵地址不符合條件。",                                                               // 77
      "Invalid login token": "無效的登錄令牌",                                                                                // 77
      "Login forbidden": "禁止登錄",                                                                                       // 77
      "Service unknown": "未知服務",                                                                                       // 77
      "Unrecognized options for login request": "無法識別的登錄請求選項",                                                         // 77
      "User validation failed": "用戶驗證失敗",                                                                              // 77
      "Username already exists.": "用戶名已經存在。",                                                                          // 77
      "You are not logged in.": "您尚未登入。",                                                                              // 77
      "You've been logged out by the server. Please log in again.": "你已被伺服器登出，請重新登入。",                                 // 77
      "Your session has expired. Please log in again.": "您的協定已過期，請重新登入。",                                              // 77
      "Invalid email or username": "無效的電子郵件或用戶名",                                                                      // 77
      "Internal server error": "内部服务器错误",                                                                              // 77
      "undefined": "未知錯誤",                                                                                             // 77
      "No matching login attempt found": "沒有找到匹配的登入請求",                                                                // 77
      "Password is old. Please reset your password.": "密碼是舊的。請重置您的密碼。",                                                // 77
      "Incorrect password": "密碼不正確",                                                                                   // 77
      "Invalid email": "無效的電子郵件",                                                                                      // 77
      "Must be logged in": "必須先登入",                                                                                    // 77
      "Need to set a username or email": "必須設置用戶名或電郵地址",                                                               // 77
      "old password format": "舊密碼格式",                                                                                  // 77
      "Password may not be empty": "密碼不能為空的",                                                                          // 77
      "Signups forbidden": "註冊被禁止",                                                                                    // 77
      "Token expired": "密匙過期",                                                                                         // 77
      "Token has invalid email address": "密匙具有無效的電郵地址",                                                                // 77
      "User has no password set": "用戶沒有設置密碼",                                                                          // 77
      "User not found": "找不到用戶",                                                                                       // 77
      "Verify email link expired": "驗證電郵連結已過期",                                                                        // 77
      "Verify email link is for unknown address": "驗證電郵連結是未知的地址",                                                      // 77
      "Match failed": "匹配失敗",                                                                                          // 77
      "Unknown error": "未知錯誤"                                                                                          // 77
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("zh_TW", zh_TW);                                                                                               // 4
                                                                                                                       //
T9n.map("zh-TW", zh_TW);                                                                                               // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/softwarerero_accounts-t9n/t9n/zh_HK.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var zh_HK;                                                                                                             // 4
                                                                                                                       //
zh_HK = {                                                                                                              // 4
  add: "新增",                                                                                                           // 6
  and: "和",                                                                                                            // 6
  back: "返回",                                                                                                          // 6
  changePassword: "修改密碼",                                                                                              // 6
  choosePassword: "選擇密碼",                                                                                              // 6
  clickAgree: "點擊註冊, 您同意我們的",                                                                                          // 6
  configure: "設定",                                                                                                     // 6
  createAccount: "建立帳號",                                                                                               // 6
  currentPassword: "現有密碼",                                                                                             // 6
  dontHaveAnAccount: "還沒有賬號？",                                                                                         // 6
  email: "電郵",                                                                                                         // 6
  emailAddress: "電郵地址",                                                                                                // 6
  emailResetLink: "重設電郵連結",                                                                                            // 6
  forgotPassword: "忘記密碼?",                                                                                             // 6
  ifYouAlreadyHaveAnAccount: "如果已有賬號",                                                                                 // 6
  newPassword: "新密碼",                                                                                                  // 6
  newPasswordAgain: "新密碼 (重新輸入)",                                                                                      // 6
  optional: "可選填",                                                                                                     // 6
  OR: "或",                                                                                                             // 6
  password: "密碼",                                                                                                      // 6
  passwordAgain: "密碼（重新輸入）",                                                                                           // 6
  privacyPolicy: "私隱條款",                                                                                               // 6
  remove: "刪除",                                                                                                        // 6
  resetYourPassword: "重置密碼",                                                                                           // 6
  setPassword: "設定密碼",                                                                                                 // 6
  sign: "登",                                                                                                           // 6
  signIn: "登入",                                                                                                        // 6
  signin: "登入",                                                                                                        // 6
  signOut: "登出",                                                                                                       // 6
  signUp: "註冊",                                                                                                        // 6
  signupCode: "註冊碼",                                                                                                   // 6
  signUpWithYourEmailAddress: "使用您的電郵地址註冊",                                                                            // 6
  terms: "使用條款",                                                                                                       // 6
  updateYourPassword: "更新您的密碼",                                                                                        // 6
  username: "用戶名",                                                                                                     // 6
  usernameOrEmail: "用戶名或電子郵箱",                                                                                         // 6
  "with": "與",                                                                                                         // 6
  info: {                                                                                                              // 6
    emailSent: "已發送郵件",                                                                                                // 46
    emailVerified: "已驗證郵件",                                                                                            // 46
    passwordChanged: "已修改密碼",                                                                                          // 46
    passwordReset: "密碼重置"                                                                                              // 46
  },                                                                                                                   //
  error: {                                                                                                             // 6
    emailRequired: "必須填寫電子郵件。",                                                                                        // 53
    minChar: "密碼至少需要 7 個字符。",                                                                                          // 53
    pwdsDontMatch: "密碼不一致。",                                                                                           // 53
    pwOneDigit: "密碼必須至少包括一個數字。",                                                                                       // 53
    pwOneLetter: "密碼必須至少有包括一個字符。",                                                                                     // 53
    signInRequired: "您必須先登錄才能繼續。",                                                                                     // 53
    signupCodeIncorrect: "註冊碼不符。",                                                                                     // 53
    signupCodeRequired: "必須有註冊碼。",                                                                                     // 53
    usernameIsEmail: "用戶名不能設為電郵地址。",                                                                                   // 53
    usernameRequired: "必須有用戶名。",                                                                                       // 53
    accounts: {                                                                                                        // 53
      "Email already exists.": "電郵地址已在本服務登記使用。",                                                                       // 70
      "Email doesn't match the criteria.": "電郵地址不符合條件。",                                                               // 70
      "Invalid login token": "無效的登錄編碼",                                                                                // 70
      "Login forbidden": "禁止登錄",                                                                                       // 70
      "Service unknown": "未知服務",                                                                                       // 70
      "Unrecognized options for login request": "無法識別的登錄請求",                                                           // 70
      "User validation failed": "用戶驗證失敗",                                                                              // 70
      "Username already exists.": "用戶名已存在。",                                                                           // 70
      "You are not logged in.": "您尚未登入。",                                                                              // 70
      "You've been logged out by the server. Please log in again.": "您已被強制登出，請重新登入。",                                  // 70
      "Your session has expired. Please log in again.": "閒置時間過長，請重新登入。",                                               // 70
      "No matching login attempt found": "沒有找到匹配的登入請求",                                                                // 70
      "Password is old. Please reset your password.": "密碼已失效，請重置。",                                                    // 70
      "Incorrect password": "密碼不正確",                                                                                   // 70
      "Invalid email": "無效的電子郵件",                                                                                      // 70
      "Must be logged in": "必須先登入",                                                                                    // 70
      "Need to set a username or email": "必須設置用戶名或電郵地址",                                                               // 70
      "old password format": "舊密碼格式",                                                                                  // 70
      "Password may not be empty": "密碼不能為空",                                                                           // 70
      "Signups forbidden": "註冊被禁止",                                                                                    // 70
      "Token expired": "編碼已經過期",                                                                                       // 70
      "Token has invalid email address": "編碼中的電郵地址無效",                                                                 // 70
      "User has no password set": "用戶尚未設置密碼",                                                                          // 70
      "User not found": "找不到用戶",                                                                                       // 70
      "Verify email link expired": "驗證電郵連結已過期",                                                                        // 70
      "Verify email link is for unknown address": "驗證電郵連結是未知的地址",                                                      // 70
      "Match failed": "無法配對",                                                                                          // 70
      "Unknown error": "無法確認的系統問題"                                                                                     // 70
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
T9n.map("zh_HK", zh_HK);                                                                                               // 4
                                                                                                                       //
T9n.map("zh-HK", zh_HK);                                                                                               // 4
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['softwarerero:accounts-t9n'] = {}, {
  T9n: T9n
});

})();
