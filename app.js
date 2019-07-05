let app = angular.module("app", []);
app.controller("rate", $scope => {
  $scope.title = "simulasi summon";
  $scope.selected = "";
  $scope.str = 0;
  $scope.back = "transparent";
  $scope.l = ["l/newgate", "l/reyleigh", "l/shiki"];
  $scope.m = [
    "m/akainu",
    "m/blackbeard",
    "m/garp",
    "m/issho",
    "m/kaido",
    "m/kizaru",
    "m/kuzan",
    "m/linlin",
    "m/sengoku",
    "m/shanks"
  ];
  $scope.e = [
    "e/boa",
    "e/doffy",
    "e/jinbei",
    "e/kuma",
    "e/mihawk",
    "e/moria",
    "e/mr0"
  ];
  $scope.r = [
    "r/apoo",
    "r/bege",
    "r/bonney",
    "r/drake",
    "r/hawkins",
    "r/kid",
    "r/killer",
    "r/law",
    "r/luffy",
    "r/teach",
    "r/urouge",
    "r/zoro"
  ];
  $scope.d = [
    "d/ace",
    "d/benn",
    "d/burgess",
    "d/cracker",
    "d/enel",
    "d/inu",
    "d/jack",
    "d/jozu",
    "d/katakuri",
    "d/marco",
    "d/neko",
    "d/sabo",
    "d/snake"
  ];
  $scope.n = [
    "n/barto",
    "n/brook",
    "n/buggy",
    "n/byrnndi",
    "n/caesar",
    "n/carrot",
    "n/chopper",
    "n/franky",
    "n/gan",
    "n/hakuba",
    "n/kuzan",
    "n/kyros",
    "n/nami",
    "n/robin",
    "n/sentomaru",
    "n/smoker",
    "n/tashigi",
    "n/usopp",
    "n/wiper",
    "n/yonji"
  ];
  $scope.lst = new Array();
  function rate(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }
  $scope.random = function() {
    $scope.lst = new Array();
    $scope.status = "";
    chance = "";
    var r = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    var n = 0;
    var o = 0;
    while (i < 99) {
      if (o < 1) {
        r = rate(0, 3);
        $scope.lst.push($scope.l[r]);
        o++;
      }
      if (j < 5) {
        r = rate(0, 10);
        $scope.lst.push($scope.m[r]);
        j++;
      } else if (k < 5) {
        r = rate(0, 7);
        $scope.lst.push($scope.e[r]);
        k++;
      } else if (l < 30) {
        r = rate(0, 12);
        $scope.lst.push($scope.r[r]);
        l++;
      } else if (m < 15) {
        r = rate(0, 13);
        $scope.lst.push($scope.d[r]);
        m++;
      } else if (n < 44) {
        r = rate(0, 20);
        $scope.lst.push($scope.n[r]);
        n++;
      }
      i++;
    }
    r = rate(0, 100);
    $scope.selected = $scope.lst[r];
    var res = $scope.selected.split("/");
    switch (res[0]) {
      case "m":
        $scope.back = "purple";
        $scope.status = "UR";
        $scope.chance = rate(85, 12);
        $scope.str = [1, 2, 3, 4];
        break;
      case "l":
        $scope.back = "yellow";
        $scope.status = "LR";
        $scope.chance = rate(99, 2);
        $scope.str = [1, 2, 3, 4, 5];
        break;
      case "n":
        $scope.back = "green";
        $scope.status = "NORMAL";
        $scope.chance = rate(0, 31);
        $scope.str = [1];
        break;
      case "r":
        $scope.back = "red";
        $scope.status = "R";
        $scope.chance = rate(70, 12);
        $scope.str = [1, 2];
        break;
      case "e":
        $scope.back = "orange";
        $scope.status = "SSR";
        $scope.chance = rate(80, 12);
        $scope.str = [1, 2, 3];
        break;
      case "d":
        $scope.back = "blue";
        $scope.status = "SSR";
        $scope.chance = rate(75, 12);
        $scope.str = [1, 2, 3];
        break;
    }
  };
});
