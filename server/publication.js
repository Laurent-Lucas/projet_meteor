Meteor.publish("allPostHeaders", function(){
    return Articles.find({}, {
        fields: {content: 0}
    });
});