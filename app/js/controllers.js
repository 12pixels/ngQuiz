'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('quizController', ['$scope', function($scope){
	    $scope.quest = quiz.questions;
	    $scope.scoreCard = [];

	    $scope.scores = function(){
	      $scope.finalScore=0;
	      angular.forEach($scope.scoreCard, function(choice, question){ 
	        if ($scope.scoreCard[question]==$scope.quest[question].answer) $scope.finalScore++; 
	      });
	    };
  }]);
var quiz = {
	  "uid" : 1,
	  "name": "Wanna be a Front-end AngularJS Engineer",

	  "questions" : [
	      {
	          "question" : "Which is not an advantage of using a closure?",
	          "choices"  : [
	              "Prevent pollution of global scope",
	              "Encapsulation",
	              "Private properties and methods",
	              "Allow conditional use of ‘strict mode"
	          ],
	          "answer"   : "2"
	      },
	      {
	          "question" : "To create a columned list of two-line email subjects and dates for a master-detail view, which are the most semantically correct?",
	          "choices"  : [
	              "<div>+<span>",
	              "<tr>+<td>",
	              "<ul>+<li>",
	              "<p>+<br>",
	              "none of these",
	              "all of these"
	          ],
	          "answer"   : "2"
	      },
	      {
	          "question" : "To pass an array of strings to a function, you should not use...",
	          "choices"  : [
	              "fn.apply(this, stringsArray)",
	              "fn.call(this, stringsArray)",
	              "fn.bind(this, stringsArray)"
	          ],
	          "answer"   : "2"
	      },
	      {
	          "question" : "____ and ____ would be the HTML tags you would use to display a menu item and its description.",
	          "choices"  : [
	              "<li> + <a>",
	              "<div> + <span>",
	              "<menu> + <menuItem>"
	          ],
	          "answer"   : "0"
	      },
	      {
	          "question" : "Given <div id='outer'><div class='inner'></div></div>, which of these two is the most performant way to select the inner div ?",
	          "choices"  : [
	              "getElementById('outer').children[0]",
	              "getElementsByClassName('inner')[0]"
	          ],
	          "answer"   : "0"
	      },
	      {
	          "question" : "Given this:",
	          "details"  : "<img src='./assets/data/images/q1_1.jpg' /><p>Which message will be returned by injecting this service and executing 'myService.getMessage()'?</p>",
	          "choices"  : [
	              "Message one!",
	              "Message two!",
	              "Message three!"
	          ],
	          "answer"   : "2"
	      },
	      {
	          "question" : "When using Jasmine for TDD, what would you use to determine if an event handler was called:",
	          "choices"  : [
	              "spyOn(object, 'eventHandlerMethodName')!",
	              "stub(object, 'eventHandlerMethodName')!",
	              "mock(object, 'eventHandlerMethodName')!",
	              "all three",
	              "none of these"
	          ],
	          "answer"   : "0"
	      },
	      {
	          "question" : "In AngularJS, when do you need to use $scope.apply()? Which is the best answer:",
	          "choices"  : [
	              "Anytime you want to trigger databinding changes to update the UI.",
	              "Only after $http remote service calls",
	              "For any model changes during event callback/notifications",
	              "For async callbacks outside AngularJS context",
	              "all of these",
	              "none of these"
	          ],
	          "answer"   : "3"
	      },
	      {
	          "question" : "In AngularJS, where should DOM manipulation occur ?",
	          "choices"  : [
	              "Only in Controllers",
	              "Only in Directives",
	              "In Both Controllers and Directives",
	              "Only in async callback code",
	              "all of these",
	              "none of these"
	          ],
	          "answer"   : "1"
	      }
	  ]
	};
