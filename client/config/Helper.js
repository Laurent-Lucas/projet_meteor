UI.registerHelper('getGlobal', function(varName) {
    return Globals[varName];
});
UI.registerHelper('isAdmin', function () {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        return true
    }
    else return false;
});

UI.registerHelper('isBoulangerie', function (restauration){
    if(restauration == 'boulangerie')
    {

    }
});
