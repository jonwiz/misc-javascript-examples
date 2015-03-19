/*jslint unparam:true*/
/*globals angular,$*/
angular.module('myApp')
    .controller('MyCtrl', function($scope) {
      //controller code
    .directive('myDatePicker', function() {

        return {
            
            restrict: 'A',
            link: function(scope, element, attrs) {
                var format = attrs.nhDatePicker !== '' ? attrs.nhDatePicker : 'M d, yy';
                element.datepicker("option", "dateFormat", format);
            }

        };

    })
    .filter('dateRange', function() {
        return function (candidates, search) {
            var filtered_list = [];

            if(search.target === 'date' && search.date !== undefined && search.date !== ''){
                for (var i = 0; i < candidates.length; i++) {
                    if(search.compare === 'greater'){
                        if(candidates[i].date >= new Date(search.date)){
                            filtered_list.push(candidates[i]);
                        }
                    }else if(search.compare === 'less'){
                        if(candidates[i].date <= new Date(search.date)){
                            filtered_list.push(candidates[i]);
                        }
                    }
                }
                return filtered_list;
            }else{
                return candidates;
            }
                
        }
    });
