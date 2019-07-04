let app = angular.module('app',[]);
app.controller('rate',$scope=>{
    $scope.title="simuLasi summon";
    $scope.selected = "";
    $scope.l = [
        "L1",
        "L2",
        "L3"
    ];
    $scope.m = [
        "m1",
        "m2",
        "m3",
        "m4",
        "m5",
        "m6",
        "m7",
        "m8",
        "m9",
        "m10"
    ];
    $scope.e = [
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7"
    ];
    $scope.r = [
        "r1",
        "r2",
        "r3",
        "r4",
        "r5",
        "r6",
        "r7",
        "r8",
        "r9",
        "r10",
        "r11",
        "r12"
    ];
    $scope.d = [
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "d10",
        "d11",
        "d12",
        "d13"
    ];
    $scope.n = [
        "n1",
        "n2",
        "n3",
        "n4",
        "n5",
        "n6",
        "n7",
        "n8",
        "n9",
        "n10",
        "n11",
        "n12",
        "n13",
        "n14",
        "n15",
        "n16",
        "n17",
        "n18",
        "n19",
        "n20"
    ];
$scope.lst = new Array();
    function rate(min,max){
    return min + Math.floor(Math.random()*Math.floor(max));
}
$scope.random = function(){
    $scope.lst = new Array();
    var r=0;
    var i=0;
    var j=0;
    var k=0;
    var l=0;
    var m=0;
    var n=0;
    while(i<99){
        if(j<5){
            r=rate(0,3);
            $scope.lst.push($scope.m[r]);
            j++
        }
        else if(k<5){
            r=rate(0,7);
            $scope.lst.push($scope.e[r]);
            k++;
        }
        else if(l<30){
            r=rate(0,12);
            $scope.lst.push($scope.r[r]);
            l++;
        }
        else if(m<15){
            r=rate(0,13);
            $scope.lst.push($scope.d[r]);
            m++;
        }
        else if(n<45){
            r=rate(0,20);
            $scope.lst.push($scope.n[r]);
            n++;
        }
        i++;
    }
    r=rate(0,100);
    $scope.selected = $scope.lst[r];
    
}
});