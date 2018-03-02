Router.route('/', {
    name: "mainLayout"
});


Router.route('/menu', {
    name: "menu"
});

Router.route('/register', {
    name:"register"
});
Router.route('/login', {
    name : "login"
});

Router.route('/boulangerie', {
    name : "boulangerie",
    data: function(){
        var articles = Articles.find();

        return {
            articles: articles
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }

});

Router.route('/restaurant', {
    name : "restaurant"
});

Router.route('/fastFood', {
    name : "fastFood"
});

Router.route('/carte', {
    name: "carte"
});
Router.route('/creationArticle', {
    name: "creationArticle",
    data: function(){
        var articles = Articles.find();

        return {
            articles: articles
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
})

