(function () {
    'use strict';

    angular
        .module('speakeasy')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$scope', '$http', 'adminFactory'];

    function AdminController($scope, $http, adminFactory) {

        var vm = this;

        vm.AdminData = AdminData;
         vm.AdminDataQuiz = AdminDataQuiz;
          vm.AdminDataProfile = AdminDataProfile;
        vm.SubmitQuiz = SubmitQuiz;
        vm.SubmitQuestion = SubmitQuestion;

       
        adminFactory.getQuiz().then(AdminDataQuiz);
         adminFactory.getQuestion().then(AdminData);
        adminFactory.getProfile().then(AdminDataProfile);
        

        function AdminDataQuiz(quiz) {
            vm.quiz = quiz.data.item

        }
          function AdminData(question) {
            vm.question = question.data.items

        }
         function AdminDataProfile(profile) {
            vm.profile = profile.data.item

        }

        function SubmitQuestion() {
            var formQ = {
                answerType: vm.question.answerType,
                question: vm.question.question,
                timer: null,
                openAnswer: null,
                answers : [ {
                    id:vm.question.id,
                   answer: vm.question.answers,
                   isCorrect: vm.question.isCorrect,
                   sortOrder: 2
                },
                {
                     id:vm.question.id,
                     answer: vm.question.answer2,
                     isCorrect:vm.question.isCorrect2,
                     sortOrder: 2
                } ] ,
              tags: [
                  {
                      id:1,
                     // name: French
                  },
                   {
                      id:1,
                      //name: French
                  } ],
                id: vm.question.id,
                quizId:957
            }

            adminFactory.putQuestion(formQ).then(onSuccess);
        }
        function onSuccess(){
             adminFactory.getQuiz().then(AdminData);
              adminFactory.getQuestion().then(AdminData);
        }

        function SubmitQuiz() {
            var formN = {
                quizName: vm.question.quizName,
                randomizeQuestions: false,
                randomizeAnswers: false
            }
            adminFactory.postQuiz(formN).then(AdminData);
        }
        

    };

})();