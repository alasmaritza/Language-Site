(function(){
'use strict';
angular
.module('speakeasy')
.factory('faqsFactory', faqsFactory);

faqsFactory.$inject = ["$http"];

function faqsFactory($http) {
return {
  getFaqs: getFaqs
}

function getFaqs(){
  return $http.get('https://optiola.azurewebsites.net/api/faqs')
}
}

})();