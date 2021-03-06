$(function() {
    var lis = [],
        pulsePanels = [];

    /**
     * All functions needed to build the JS portion of the site go here
     */
    function startApp() {
        buildNavList();
        buildPulsePanels();
        buildHelpPanel();

        $('#help-link').on('click', onHelpClicked)
    }

    /**
     * Generates the HTML for the Nav list
     */
    function buildNavList() {
        var $ul = $('#left-nav-list');
        if($ul) {
            var $li;
            _.each(siteData.leftNav, function(item) {
                $li = createLeftNavLI(item);
                $ul.append($li);
            }, this);
        }
    }

    /**
     * Creates a single li for the nav list
     *
     * @param data
     * @returns {*|jQuery|HTMLElement}
     */
    function createLeftNavLI(data) {
        var $li = $('<li></li>');
        if(data.isSpacer) {
            $li.addClass('spacer')
                .html('<hr />')
        } else {
            var $a = $('<a></a>'),
                $span1 = $('<span></span>'),
                $span2 = $('<span></span>');

            $a.attr('href', data.url);
            $li.append($a);
            $span1.addClass(data.iconClass);

            $span2.addClass(data.textClass)
                  .html(data.text);
            $a.append($span1);
            $a.append($span2);

            lis.push($li);
        }
        return $li;
    }

    /**
     * Generates the HTML for the Pulse Panels
     */
    function buildPulsePanels() {
        var $pulse = $('#pulse-content');
        if($pulse) {
            var $panel;
            _.each(siteData.pulsePanels, function(item) {
                $panel = createPulsePanel(item);
                $pulse.append($panel);

            }, this);
        }
    }

    /**
     * Creates a single Pulse Panel
     *
     * @param data
     * @returns {*|jQuery|HTMLElement}
     */
    function createPulsePanel(data) {
        var $panel;
        switch(data.type) {
            case 'regular':
                $panel = createRegularPanel(data);
                break;

            case 'foursquare':
                $panel = createFoursquarePanel(data);
                break;

            case 'landing':
                $panel = createLandingPanel(data);
                break;
        }

        return $panel;
    }

    /**
     * Creates the HTML for the regular Pulse Panels
     * @param data
     * @returns {*|jQuery|HTMLElement}
     */
    function createRegularPanel(data) {
        var $panel = $('<div class="pulse-panel"></div>'),
            $h5 = $('<h5></h5>'),
            $div = $('<div></div>'),
            $line1 = $('<span></span>'),
            $line2 = $('<span></span>'),
            $line3 = $('<span></span>');

        $panel.addClass(data.startClass);
        $h5.html(data.panelTitle);

        $panel.append($h5);

        $line1.addClass(data.line1Class);
        $line1.html(data.line1Text);

        $line2.addClass(data.line2Class);
        $line2.html(data.line2Text);

        $line3.addClass(data.line3Class);
        $line3.html(data.line3Text);

        $div.append($line1);
        $div.append($line2);
        $div.append($line3);

        $panel.append($div);

        $panel.on('click', onPulsePanelClicked);

        pulsePanels.push($panel);

        return $panel;
    }

    /**
     * Creates the HTML for the FourSquare Pulse Panel
     * @param data
     * @returns {*|jQuery|HTMLElement}
     */
    function createFoursquarePanel(data) {
        var $panel = $('<div class="pulse-panel"></div>'),
            $h5 = $('<h5></h5>'),
            $div = $('<div></div>'),
            $line1 = $('<span></span>'),
            $line2 = $('<span></span>'),
            $line3 = $('<img></img>');

        $panel.addClass(data.startClass);
        $h5.html(data.panelTitle);

        $panel.append($h5);

        $line1.addClass(data.line1Class);
        $line1.html(data.line1Text);

        $line2.addClass(data.line2Class);
        $line2.html(data.line2Text);

        $line3.attr('src', data.image);

        $div.append($line1);
        $div.append($line2);
        $div.append($line3);

        $panel.append($div);

        $panel.on('click', onPulsePanelClicked);

        pulsePanels.push($panel);

        return $panel;
    }

    /**
     * Creates the HTML for the Landing Pulse Panel
     *
     * @param data
     * @returns {*|jQuery|HTMLElement}
     */
    function createLandingPanel(data) {
        var $panel = $('<div class="pulse-panel"></div>'),
            $h5 = $('<h5></h5>'),
            $div = $('<div></div>'),
            $line1 = $('<span></span>'),
            $line2a = $('<span></span>'),
            $line2b = $('<span></span>'),
            $line3 = $('<span></span>');

        $panel.addClass(data.startClass);
        $h5.html(data.panelTitle);

        $panel.append($h5);

        $line1.addClass(data.line1Class);
        $line1.html(data.line1Text);

        $line2a.addClass(data.line2Class1);
        $line2a.html(data.line2Text1);

        $line2b.addClass(data.line2Class2);
        $line2b.html(data.line2Text2);

        $line3.attr('src', data.image);

        $div.append($line1);
        $div.append($line2a);
        $div.append($line2b);
        $div.append($line3);

        $panel.append($div);

        $panel.on('click', onPulsePanelClicked);

        pulsePanels.push($panel);

        return $panel;
    }

    /**
     * Event handler for the Pulse Panels being clicked
     * @param event
     */
    function onPulsePanelClicked(event) {
        var $panel = $(event.currentTarget);
        // check to see if panel already has the small-panel class
        // if it has med-panel class, we dont want to reset and retransition
        // back to medium
        if($panel.hasClass('small-panel')) {
            resetAllPulsePanels();
            $panel.addClass('med-panel');
        }

    }

    /**
     * Resets all the pull panels back to the `small-panel` class
     */
    function resetAllPulsePanels() {
        _.each(pulsePanels, function(panel) {
            if(panel.hasClass('med-panel')) {
                panel.removeClass('med-panel').addClass('small-panel');
            }
        });
    }

    /**
     * Event handler for when the Help link is clicked
     *
     * @param event
     */
    function onHelpClicked(event) {
        event.preventDefault();
        console.log("display help");
        var $popupEl = $('#popup');
        if($popupEl.hasClass('popup-hidden')) {
            showPopup();
        } else {
            hidePopup();
        }
    }

    /**
     * Fetches the help.json data and calls createHelpPanel
     * to build the Help Panel
     */
    function buildHelpPanel() {
        var fetchHelpData = function(url) {
            $.get(url, createHelpPanel)
        }
        fetchHelpData('data/help.json');
    }

    /**
     * Generates the HTML for the Help Panel
     *
     * @param data
     */
    function createHelpPanel(data) {
        var $help = $('#help-content');
        if($help) {
            var $ul = $('<ul></ul>'),
                $li,
                $a;
            _.each(data.help, function(item) {
                $a = $('<a></a>');
                $a.attr('href', item.URL).html(item.title);

                $li = $('<li></li>');
                $li.append($a);

                $ul.append($li);
            }, this);

            $help.append($ul);
        }
    }

    /**
     * Makes the Help Popup... pop...up...
     */
    function showPopup() {
        var $popupEl = $('#popup');
        if($popupEl) {
            $popupEl.find('.close-icon').on('click', onCloseHelp);
            $popupEl.removeClass('popup-hidden').addClass('popup-visible');
        }
    }

    /**
     * Hides the Help Popup
     */
    function hidePopup() {
        var $popupEl = $('#popup');
        if($popupEl) {
            $popupEl.find('.close-icon').off('click', onCloseHelp);
            $popupEl.removeClass('popup-visible').addClass('popup-hidden');
        }
    }

    /**
     * Event handler for the Help popup's X close icon
     * Closes the Help Popup
     */
    function onCloseHelp() {
        hidePopup();
    }

    startApp();
});
