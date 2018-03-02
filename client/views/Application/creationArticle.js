Template.creationArticle.events({
    'submit form': function(e){
        e.preventDefault();

        var titre = $("input[name='titre']").val();
        var prix = $("input[name='prix']").val();
        var cheminImage = $("input[name='cheminImage']").val();
        var Restauration = $("select[name='Restauration']").val();




        var article = {
            titre : titre,
            prix : prix,
            cheminImage : cheminImage,
            Restauration : Restauration


        }

        Articles.insert(article);
        Router.go('mainLayout');
    }
});