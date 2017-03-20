(function () {
    'use strict';
    angular
        .module('speakeasy')
        .controller('courseController', courseController)

    courseController.$inject = ['$scope', '$http', '$uibModal', 'quizFactory'];

    function courseController($scope, $http, $modal, quizFactory) {
        var vm = this;
        vm.displayQuizzes = displayQuizzes;
        vm.postAnswers = postAnswers;
        vm.postAnswers2 = postAnswers2;
        vm.answerSelected = answerSelected;
        vm.gradedQuiz = gradedQuiz;
        vm.results = results;
        vm.resetQuizzes = resetQuizzes;
        vm.showModal = showModal;
        vm.close = close;
       // vm.close = close;
        var answerChoice = [];
        var myChoice = {};
        var grade = {};

        quizFactory.getQuiz().then(displayQuizzes);

        function displayQuizzes(quiz) {
            vm.quiz = quiz.data.items;
           // showModal(displayQuizzes)
        }

        function showModal() {
            vm.optionModal = $modal.open({
                template: '<div class="modal-header"><span class="glyphicon glyphicon-remove" style="float: right; opacity: 0.3" ng-click="french.close()"></span><h3 class="modal-title">Leisure Vocabulary Quiz</h3></div><div class="modal-body"><div ng-repeat="question in french.quiz" ng-show="question.id==905"><h4>{{question.question}}</h4><div><button class="btn button btn-answer" ng-click="french.postAnswers($event)" value="1">{{question.answers[0].answer}}</button></div><div><button class="btn button btn-answer" ng-click="french.postAnswers($event)" value="2">{{question.answers[1].answer}}</button></div><div><button class="btn button btn-answer" ng-click="french.postAnswers($event)" value="3">{{question.answers[2].answer}}</button></div></div><br><div ng-repeat="question in french.quiz" ng-show="question.id==906"><h4>{{question.question}}</h4><div><button class="btn button btn-answer" ng-click="french.postAnswers2($event)" value="1">{{question.answers[0].answer}}</button></div><div><button class="btn button btn-answer" ng-click="french.postAnswers2($event)" value="2">{{question.answers[1].answer}}</button></div><div><button class="btn button btn-answer" ng-click="french.postAnswers2($event)" value="3">{{question.answers[2].answer}}</button></div><br><button class="btn btn-primary" ng-click="french.gradedQuiz()">Grade Quiz</button><br><br><button class="btn btn-danger" ng-click="french.resetQuizzes()">Retake Quiz</button><div><h2 class="ans3 hidden">Your Score Is: <span class="results ansC"></span></h2></div></div><div class="modal-footer"></div>',
                controller: 'courseController as french'
            })
        }

        function close () {
            $('.fade').trigger('click');
        }



        function postAnswers(choice) {
            $(choice.toElement).toggleClass('btn-success');
            vm.answer = $(choice.toElement).html();
            answerChoice.push(vm.answer);

            if ($.inArray('baignoire du soleil', answerChoice) == 0) {
                myChoice = {
                    quizResultId: 214,
                    QuestionId: [905],
                    answerChoice: [1],
                    openAnswer: [null]
                }

                quizFactory.postQuiz(myChoice).then(answerSelected);
            } else if ($.inArray('prendre un bain de soleil', answerChoice) == 0) {
                myChoice = {
                    quizResultId: 214,
                    QuestionId: [905],
                    answerChoice: [2],
                    openAnswer: [null]
                }
                quizFactory.postQuiz(myChoice).then(answerSelected);
            } else if ($.inArray('doucher au soleil', answerChoice) == 0) {
                myChoice = {
                    quizResultId: 214,
                    QuestionId: [905],
                    answerChoice: [3],
                    openAnswer: [null]
                }
                quizFactory.postQuiz(myChoice).then(answerSelected);
            }

            // if ('.answerA' == null) {
            //     $('.answerA').addAttr("disabled='disabled'");
            // }
        }

        function postAnswers2(choice) {
            answerChoice = [];
            $(choice.toElement).toggleClass('btn-success');
            vm.answer = $(choice.toElement).html();
            answerChoice.push(vm.answer);

            if ($.inArray('Ou est la plage la plus proche?', answerChoice) == 0) {
                myChoice = {
                        quizResultId: 214,
                        QuestionId: [906],
                        answerChoice: [1],
                        openAnswer: [null]
                    },
                    quizFactory.postQuiz(myChoice).then(answerSelected);
            } else if ($.inArray('Ou est la piscine?', answerChoice) == 0) {
                myChoice = {
                        quizResultId: 214,
                        QuestionId: [906],
                        answerChoice: [2],
                        openAnswer: [null]
                    },
                    quizFactory.postQuiz(myChoice).then(answerSelected);
            } else if ($.inArray('Ou est mon passport?', answerChoice) == 0) {
                myChoice = {
                        quizResultId: 214,
                        QuestionId: [906],
                        answerChoice: [3],
                        openAnswer: [null]
                    },
                    quizFactory.postQuiz(myChoice).then(answerSelected);
            }
        }

        function answerSelected() {
            console.log("Ajax Call Successful");
        }



        function gradedQuiz() {
            grade = {
                id: 214,
                quizId: 946,
                personId: 146
            }
            quizFactory.gradeQuiz(grade).then(results);
        }

        function results(data) {
            vm.data = data.data.item;
            $(".ans3").removeClass("hidden");
            $(".results").append(vm.data + '%');
        }

        function resetQuizzes() {
        $(".btn-answer").removeClass('btn-success');
        $(".results").empty();
        //$(".ans3").hide();
        answerChoice= [];
    }
    }

    



})();