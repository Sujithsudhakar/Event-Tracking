'use strict';

/**
 * @ngdoc function
 * @name eventTrackingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eventTrackingApp
 */
angular.module('eventTrackingApp')
    .controller("MainCtrl", ['$scope', '$timeout', '$mdToast', 'roundProgressService', function($scope, $timeout, $mdToast, roundProgressService) {

        $scope.user = {};
        $scope.selectedIndex = 0;

        $scope.formSubmit = function(user) {
            var event = user;
            if (!$scope.report) {
                $scope.toastInvoke('Event has been added');
                $scope.selectedIndex = 1;
                $timeout(function() {
                    $scope.report = angular.copy(event);
                    $scope.user = {};
                }, 500);
            } else {
                $scope.toastInvoke('Event hss been already added! Please reset to add again');
            }
        }

        $scope.resetReport = function() {
            $scope.report = null;
            $scope.toastInvoke('Event hss been removed');
            $timeout(function() {
                $scope.selectedIndex = 0;
            }, 500);
        }

        $scope.toastInvoke = function(message) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position('bottom right')
                .hideDelay(3000)
            );
        }

        //--Angular progress code starts here--//
        $scope.progressMax = 100;
        $scope.offset = 0;
        $scope.timerCurrent = 0;
        $scope.uploadCurrent = 0;
        $scope.stroke = 20;
        $scope.radius = 125;
        $scope.clockwise = true;
        $scope.currentColor = '#ddaabb';
        $scope.duration = 800;
        $scope.currentAnimation = 'easeOutCubic';
        $scope.animationDelay = 0;

        $scope.getStyle = function() {
            var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
            return {
                'top': $scope.isSemi ? 'auto' : '50%',
                'bottom': $scope.isSemi ? '5%' : 'auto',
                'left': '50%',
                'transform': transform,
                '-moz-transform': transform,
                '-webkit-transform': transform,
                'font-size': $scope.radius / 3.5 + 'px'
            };
        };

        $scope.getColor = function() {
            return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
        };
        //--Angular progress code ends here--//

    }]);
