function FactListController($scope) { //引数の名前が重要, 順番はどうでも良い
  
  $scope.persons = [
    { name: "Shindo", age: "20" },
    { name: "Kawahito", age: "21"}, 
    { name: "Yamane", age: "22"}
  ];

  $scope.save = function(name,age) {
    $scope.persons.push({ name:name, age:age })
  };

}
