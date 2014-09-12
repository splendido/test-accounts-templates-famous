Router.configure({
    notFoundTemplate: 'pageNotFound',
    layoutTemplate: 'layout',
    yieldTemplates: {
        nav: {
            to: 'nav'
        },
        footer: {
            to: 'footer'
        },
    }
});


Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'home',
        /*
        onBeforeAction: function(){
            AccountsTemplates.setState('signIn');
            AccountsTemplates.clearFieldErrors();
        }
        */
    });


    this.route('fullPage', {
        path: '/full',
        template: 'fullPage',
        /*
        onBeforeAction: function(){
            AccountsTemplates.setState('signIn');
            AccountsTemplates.clearFieldErrors();
        }
        */
    });

});