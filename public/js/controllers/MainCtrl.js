busApp.controller('MainController',['$scope','appStaticData', function($scope,appStaticData) {

	$scope.cityNames=appStaticData.city; // app static data.
	



var _selected;

  $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously


 

/*Date Picker*/ 

  $scope.dateOptions = {
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
   	format : 'dd-MMMM-yyyy',
   	opened1: false,
   	opened2:false
  };


  $scope.open1 = function() {
    $scope.dateOptions.opened1 = true;
  };
  $scope.open2 = function() {
    $scope.dateOptions.opened2 = true;
    $scope.dateOptions.minDate= $scope.fromDate;
  };

/*Date Picker*/ 

$scope.swipeName = function(fromCity, toCity){
 $scope.toCityModel= fromCity;
 $scope.fromCityModel= toCity;
}

}]);