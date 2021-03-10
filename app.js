angular
        .module("myapp", [])

        .controller("MultiSelectController", function ($scope) {
            $scope.search = '';
            $('.selected-items-box').bind('click', function(e) {
                $('.wrapper .list').slideToggle('fast');
            });
            $scope.data = [{
                id: 'UK',
                name: 'United Kingdom'
            }];

            $scope.input  = {
                id: '',
                name: ''
            }
           

            $scope.selectedCountry = $scope.data[0];

            $scope.addCountry = function() {
                // let str = $scope.input.replace("\n", '')
                console.log("calle", $scope.input);
                $scope.data.push({id: $scope.input.id[0], name: $scope.input.name[0]});
                $scope.input= {};
            }

            $scope.getSelectedCountries = function(item){
                return item.selected;
            };
           
        });