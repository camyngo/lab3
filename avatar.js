angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

function mainCtrl($scope) {

    $scope.users = [];

    $scope.addNew = function(user) {
        $scope.users.push({
            name: user.name,
            avatarUrl: user.url,
            email: user.email
        }); /* [1] */

        user.name = ''; /* [2] */
        user.url = '';
        user.email='';
    };
}



function avatarDirective() {
    return {
        scope: {
            user: '=' /* [1] */
        },
        restrict: 'E',
        /* [2] */
        replace: 'true',
        template: (
            '<div class="Avatar">' +
            '<img ng-src="{{user.avatarUrl}}" />' +
            '<h4>{{user.name}}</h4>' + '<h1>{{user.email}}</h1>' +
            '</div>'
        ),
        /* be careful with the name that you put in the controller */
        link: link
    };

/*if the avarta doesnt get added, it will show the default images*/
    function link(scope) { /* [4] */
        if (!scope.user.avatarUrl) {
            scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
    }

}
