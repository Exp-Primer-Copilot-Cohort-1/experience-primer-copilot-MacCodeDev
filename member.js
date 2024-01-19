function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'components/skills/member.html',
    scope: {
      data: '='
    },
    controller: function($scope) {
      $scope.isSkill = function(skill) {
        return skill.level > 0;
      };

      $scope.getSkillLevel = function(skill) {
        if (skill.level == 0) {
          return "Not Applicable";
        } else if (skill.level == 1) {
          return "Beginner";
        } else if (skill.level == 2) {
          return "Intermediate";
        } else if (skill.level == 3) {
          return "Advanced";
        } else if (skill.level == 4) {
          return "Expert";
        }
      };
    }
  };
}