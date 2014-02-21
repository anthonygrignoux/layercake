if (typeof cook == "undefined" || !cook) {
    var cook = {};
}
if (typeof cook.Muffin == "undefined" || !cook.Muffin) {
    cook.Muffin = {};
}
cook.Muffin.Global = function() {
    this.init();
};

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Prototype
cook.Muffin.Global.prototype = {

    width_window: null,
    elFaq: jQuery('.faq-item'),
    elNavRD: jQuery('.mod--rd .rd-nav a'),
    elColorbox: jQuery('a.link--pic'),

    // --------------------------------------------------------------------------------------------

    init: function() {
        jQuery(document).ready(jQuery.proxy(this, 'onDocumentReady'));
        jQuery(window).load(jQuery.proxy(this, 'onWindowLoad'));
        jQuery(window).resize(jQuery.proxy(this, 'onWindowResize'));
    },

    // --------------------------------------------------------------------------------------------

    onDocumentReady: function() {
        this.width_window = jQuery(window).width();

        // Polyfills
        // this.polyfillSelector(':nth-child(odd)', '.section', 'odd');

        // Forms (requires jquery.uniform.js)
        this.prettyForms('.pretty');

        // Loaders
        this.initImageLoaders('.loader','#ffffff');
        this.initImageLoaders('.mosaic-loader','#999999');

        // SliderHP - on ajoute le pager
        this.fnAddPager();

        // Page FAQ
        this.elFaq.bind('click',jQuery.proxy(this,'fnShowFaq'));

        // Mosaïque
        this.fnElasticColumns();

        // Colorbox
        this.fnColorbox(this.elColorbox);

        // Recherche et développement
        this.elNavRD.bind('click',jQuery.proxy(this,'fnShowRD'));

    },

    // --------------------------------------------------------------------------------------------

    onWindowLoad: function() {

    },

    // --------------------------------------------------------------------------------------------

    onWindowResize: function() {
        if (this.width_window != jQuery(window).width()) {
            // Functions to call on resize

            this.width_window = jQuery(window).width();
        }
    },

    // --------------------------------------------------------------------------------------------
    // SKIN FORM ELEMENTS
    // --------------------------------------------------------------------------------------------

    prettyForms: function(el) {
        if (jQuery(el).length) {
            jQuery(el).uniform();
        }
    },

    // --------------------------------------------------------------------------------------------
    // LOADERS
    // --------------------------------------------------------------------------------------------

    initImageLoaders: function(el,color) {
        if (jQuery(el).length) {
            var spinner = new Spinner({
                color: color,
                width: 3,
                length: 5,
                radius: 8,
                zIndex: 1
            }).spin();
            jQuery(el).append(spinner.el);
        }
    },

    // --------------------------------------------------------------------------------------------
    // FAQ
    // --------------------------------------------------------------------------------------------
    fnShowFaq: function(event) {
        var elFaqCurrent = jQuery(event.currentTarget);
        elFaqCurrent.toggleClass('open');
    },

    // --------------------------------------------------------------------------------------------
    // Slider HP
    // --------------------------------------------------------------------------------------------

    elSlides: jQuery('.mod--slider-hp .slide'),

    // ajout pager et initialisation de la taille du slider
    fnAddPager: function() {
        if (this.elSlides.length) {
            this.elSlides.closest('.mod-content').append('<div class="pager"></div>');
            var sliderPager = this.elSlides.siblings('.pager');
            var i = 1;
            this.elSlides.each(function(){
                jQuery(this).attr('id','slide-'+i);
                if (jQuery(this).hasClass('current')){
                    sliderPager.append('<a href="#slide-'+i+'" class="current">'+i+'</a>');
                    jQuery(this).closest('.mod-content').css('min-height',jQuery(this).height());
                } else {
                    sliderPager.append('<a href="#slide-'+i+'">'+i+'</a>');
                }
                i = i + 1;
            });
            sliderPager.find('a').bind('click',jQuery.proxy(this,'fnChangeSlide'));
        }
    },

    // Au clic sur mobile on anime le changement de slide
    fnChangeSlide: function(event) {

        event.preventDefault()

        // on détermine d'où on part et où on va
        var elTrigger = jQuery(event.currentTarget);
        var urlHash = elTrigger.prop('hash');
        var elSlideTarget = jQuery(urlHash);
        var elSlideCurrent = this.elSlides.filter(jQuery('.current'));

        // animation
        this.fnAnimateSlides(elSlideCurrent,elSlideTarget);

    },

    // Animation
    fnAnimateSlides: function(elSlideCurrent,elSlideTarget) {

        var indexSlideCurrent = this.elSlides.index(elSlideCurrent);
        var indexSlideTarget = this.elSlides.index(elSlideTarget);
        var sliderPagerLinks = this.elSlides.siblings('.pager').find('a');
        var elTrigger = sliderPagerLinks.eq(indexSlideTarget);
        var that = this;

        console.log(sliderPagerLinks);

        // On change le panneau courant
        if (indexSlideCurrent != indexSlideTarget) {
            // état current du menu
            sliderPagerLinks.removeClass('current');
            elTrigger.addClass('current');
            // animation horizontale
            if (indexSlideCurrent > indexSlideTarget) {
                elSlideTarget.addClass('slide--prev');
            } else {
                elSlideTarget.addClass('slide--next');
            }
            // on obscurcit le panneau courant
            elSlideCurrent.animate({
                opacity: 0.25
            }, 600, function(){
                elSlideCurrent.removeClass('current')
                    .css('opacity','');
                    elSlideTarget.closest('.mod-content').css('min-height',elSlideTarget.height());
            });
            elSlideTarget.css('opacity','').animate({
                left: 0,
                top: 0
            }, 400, function(){
                elSlideTarget.removeClass('slide--next').removeClass('slide--prev')
                    .css('left','')
                    .css('top','')
                    .addClass('current')
                    .css('opacity','');
                elSlideCurrent.removeClass('current')
                    .css('opacity','');
            });
        }
    },

    // --------------------------------------------------------------------------------------------
    // Mosaïque du newscenter
    // --------------------------------------------------------------------------------------------

    fnElasticColumns: function() {
        // DOM
        this.$container =   $('.mosaic-list');
        //this.$loader =      $('.mosaic-loader');

        // Creates and displays the grid
        this.$container.addClass('js-elastic').elasticColumns({
            columns:        3,
            innerMargin:    20,
            outerMargin:    0
        });

        // Resize event: tell the plugin to refresh the layout
        $(window).on('resize', $.proxy(this, 'onResize'));

    },

    // --------------------------------------------------------------------------------------------
    // R&D
    // --------------------------------------------------------------------------------------------

    fnShowRD: function(event) {

        event.preventDefault();

        // on détermine d'où on part et où on va
        var elTrigger = jQuery(event.currentTarget);
        var urlHash = elTrigger.prop('hash');
        var elTarget = jQuery(urlHash);

        elTrigger.parent().addClass('current')
            .siblings().removeClass('current');
        elTarget.addClass('current')
            .siblings().removeClass('current');

    },

    // --------------------------------------------------------------------------------------------
    // Photothèque -> colorbox
    // --------------------------------------------------------------------------------------------

    fnColorbox: function(links) {

        links.colorbox({
            rel:'gallery'
        });

    }

};

// ------------------------------------------------------------------------------------------------

// Run instance
new cook.Muffin.Global();