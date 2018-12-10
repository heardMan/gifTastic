var app = {
    run: function () {
        app.logic.init();
    },
    state: {
        apiKey: "&api_key=XJTWbX6bWeFgqNg1cBvCHgX3PB7lbag2",
        giphySearchAPI: "https://api.giphy.com/v1/gifs/search?=",
        gifBank: [],
        currentTopic: null,
    },
    categories: [
        "Animals",
        "Sports",
        "Shows",
        "Movies",
        "Bands",
        "Memes",
    ],
    topics: [
        { query: "elephant", clicked: "false", caetgory: "animals" },
        { query: "gazelle", clicked: "false", caetgory: "animals" },
        { query: "surfing", clicked: "false", caetgory: "sports" },
        { query: "Rick and Morty", clicked: "false", caetgory: "shows" },
        { query: "alien", clicked: "false", caetgory: "movies" },
        { query: "Red Hot Chili Peppers", clicked: "false", caetgory: "bands" },
        { query: "One does not simply", clicked: "false", caetgory: "memes" },
    ],
    create: {
        newElement: function (type, id, destination) {
            var newElement = $("<" + type + ">");
            newElement.attr("id", id);
            $(destination).append(newElement);
            return newElement;
        },
        wrapper: function (){
            //create element
            var element = app.create.newElement("div", "wrapper", "#gifTastic");
            //style element
            element.attr({id: "wrapper",});

            this.sideBarWrapper();
            this.sideBarNav();
            this.sidebarNavBrand();
            this.pageContentWrapper();
            
        },
        sideBarWrapper: function (){
            //create element
            var element = app.create.newElement("div", "sidebar-wrapper", "#wrapper");
            //style element
            element.attr({
                id: "sidebar-wrapper",
            });
        },
        sideBarNav: function (){
            //create element
            var element = app.create.newElement("ul", "sidebar-nav", "#sidebar-wrapper");
            //style element
            element.attr({
                id: "sidebar-nav",
                class: "sidebar-nav",
            });
            
        },
        sidebarNavBrand: function (){
            //create element
            var element = app.create.newElement("li", "sidebar-brand", "#sidebar-nav");
            //style element
            element.attr({
                id: "sidebar-brand",
                class: "sidebar-brand autowide text-primary opaque",
            });
            element.text("gif - Tastic");
            //create element
             var divider = app.create.newElement("div", "drop-down-divider", "#sidebar-nav");
             //
             //style element
            divider.attr({
                class: "dropdown-divider m-0 border-primary", 
            });
        },
        sidebarNavItem: function (name, id){
            //create element
            var element = app.create.newElement("li", "sidebar-item-"+id, "#sidebar-nav");
            //style element
            element.attr({
                class: "text-light sideBarNavItem", 
                onClick: "app.logic.getNewGifs('" + name + "')", 
            });
            element.text(name);
        },
        divider: function (){
             //create element
             var element = app.create.newElement("div", "drop-down-divider", "#sidebar-nav");
             //
             //style element
            element.attr({
                class: "dropdown-divider m-0 border-secondary",  
            });
        },
        pageContentWrapper: function () {
            var element = app.create.newElement("div", "page-content-wrapper", "#wrapper");
            //convert app destination to app container by changing id and class
            element.attr({
                class: "container-fluid px-0",
            });
        },
        appContainer: function () {
            var appContainer = app.create.newElement("div", "appContainer", "#page-content-wrapper");
            //convert app destination to app container by changing id and class
            appContainer.attr({
                id: "appContainer",
                class: "container-fluid px-0",
            });
        },
        navbar: function (){
            var navbar = app.create.newElement("nav", "navbar", "#gifTastic");
            //convert app destination to app container by changing id and class
            navbar.attr({class: "navbar navbar-dark bg-dark fixed-top",});
            //
            var navbarBrand = app.create.newElement("a", "navbarBrand", "#navbar");
            //
            navbarBrand.attr({class: "navbar-brand mr-auto pl-3 autowide text-primary",});
            //
            navbarBrand.text("gif - Tastic");
            //
            this.addTopicForm();
            //
            var navbarToggle = app.create.newElement("button", "menu-toggle", "#navbar");
            //
            navbarToggle.attr({
                "id":"menu-toggle",
                "class":"navbar-toggler",
                "type":"button",
                // "data-toggle":"collapse",
                // "data-target":"#navbarSupportedContent",
                // "aria-controls":"navbarSupportedContent",
                // "aria-expanded":"false",
                // "aria-label":"Toggle navigation"
            });
            //
            navbarToggle.html("<span class='navbar-toggler-icon'></span>");
            //
            var navbarCollapse = app.create.newElement("div", "navbarCollapse", "#navbar");
            //
            navbarCollapse.attr({class: "collapse navbar-collapse",});
            //
            var navbarUL = app.create.newElement("ul", "navbarUL", "#navbarCollapse");
            //
            navbarUL.attr({class: "navbar-nav mr-auto",});
            

        },
        navbarItem: function (name, link) {
            //
            var navbarItem = app.create.newElement("li", "navbarItem" + name, "#navbarUL");
            //
            navbarItem.attr({
                class: "nav-item", 
                
            });
            //
            var navbarLink = app.create.newElement("a", "navbarLink" + name, "#navbarUL");
            //
            navbarLink.attr({class: "nav-link text-light",});
            navbarLink.html(link);
            navbarItem.html(navbarLink);
            
        },

        contentContainer: function () {
            //create element
            var element = app.create.newElement("div", "contentContainer", "#appContainer");
            //style element
            $(element).attr("class", "row");
        },
        mainContent: function () {
            //create element
            var element = app.create.newElement("div", "mainContent", "#contentContainer");
            //style element
            $(element).attr("class", "col");
        },
        topicsElementContainer: function () {
            //create element
            var element = app.create.newElement("div", "topicsElementContainer", "#mainContent");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        topicsElement: function () {
            //create element
            var element = app.create.newElement("div", "topicsElement", "#topicsElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
        },
        topicButton: function (topic) {
            //create element
            var element = app.create.newElement("button", topic + "Button", "#topicsElementContainer");
            //style element
            $(element).attr({
                "class": "btn btn-primary d-block mx-auto",
                "data-value": topic,
                "onClick": "app.logic.getNewGifs('" + topic + "')",
                //getNewGifs
            });
            $(element).html(topic);
        },
        gifDisplay: function () {
            //create element
            var element = app.create.newElement("div", "gifDisplay", "#mainContent");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        gifGallery: function () {
            //create element
            var element = app.create.newElement("div", "gifGallery", "#gifDisplay");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
        },
        gifControls: function () {
            //create element
            var element = app.create.newElement("div", "gifControls", "#gifDisplay");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
        },
        moreGifsButton: function (topic) {
            //create element
            var element = app.create.newElement("button", "moreGifsButton", "#gifControls");
            //style element
            $(element).attr({
                "class": "btn btn-primary d-block mx-auto",
                //"data-value": topic,
                "onClick": "app.logic.getGifs('" + topic + "')",
                //getNewGifs
            });
            $("#moreGifsButton").html("More .gifs");
            //append instruction text
        },
        gifElementContainer: function () {
            //create element
            var element = app.create.newElement("div", "gifElementContainer", "#gifGallery");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        gifElement: function (id, stillGif, number, gifRating) {
            //create element
            var element = app.create.newElement("div", "gifElement" + id, "#gifElementContainer");
            //style element
            $(element).attr("class", "col-12 col-sm-6 col-md-3 col-lg-4 py-2 border gifElement");
            //append instruction text
            app.create.gifImgElement(id, stillGif, number);
            element.prepend("<p class='text-center'>Rating : " + gifRating + "</p>");

        },
        gifImgElement: function (propID, gifSrc, num) {
            //create element
            var element = app.create.newElement("img", num, "#gifElement" + propID);
            //style element
            $(element).attr({
                class: "img img-fluid mx-auto d-block img-thumbnail gifImgElem",
                src: gifSrc,
                number: num,
            });
        },
        addTopicElementContainer: function () {
            //create element
            var element = app.create.newElement("div", "addTopicElementContainer", "#mainContent");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        addTopicElement: function () {
            //create element
            var element = app.create.newElement("div", "addTopicElement", "#addTopicElementContainer");
            //style element
            $(element).attr("class", "col-12");
        },
        addTopicForm: function () {
            //create form
            var formElement = app.create.newElement("form", "addTopicForm", "#navbar");
            //style form
            $(formElement).attr("class", "mr-auto form-inline");
            //create add topic input form group
            var formGroupTopicInput = app.create.newElement("div", "addTopicFormGroupTopicInput", "#addTopicForm");
            //style add topic input form group
            $(formGroupTopicInput).attr("class", "form-group");
            //create add topic input group
            var formInputGroup = app.create.newElement("div", "addTopicFormInputGroup", "#addTopicForm");
            //style add topic input group
            $(formInputGroup).attr("class", "input-group");
            //create add topic text input
            var addTopicInput = app.create.newElement("input", "addTopicFormAddTopicInput", "#addTopicFormInputGroup");
            //style add topic text input
            $(addTopicInput).attr({
                "type": "text",
                "class": "form-control",
                "placeholder": "Add a Topic",
            });
            //create append submit
            var appendButton = app.create.newElement("div", "addTopicAppendButton", "#addTopicFormInputGroup");
            //style append submit
            $(appendButton).attr({
                "id": "addTopicAppendButton",
                "class": "input-group-append",
            });
            //create input group submit
            var addTopicButton = app.create.newElement("button", "addTopicSubmitButton", "#addTopicAppendButton");
            //style input group submit
            $(addTopicButton).attr({
                "id": "addTopicSubmitButton",
                "class": "btn btn-outline-primary",
                type: "submit",
            });
            addTopicButton.html("<i class='fas fa-plus'></i>");
        },
    },
    reset: {
        gifBank: function () {
            app.state.gifBank = [];
        },
        gifDisplay: function () {
            $("#gifElementContainer").empty();
        },
        gifControls: function () {
            $("#gifControls").html("");
        },
        sideBarNav: function () {
            $("#sidebar-nav").html("");
        },
        clickStatus: function () {
            for (var i = 0; i < app.topics.length; i++) {
                app.topics[i].clicked = false;
            }
        },
    },
    logic: {
        init: function () {
            app.create.navbar();
            app.create.wrapper();
            app.create.appContainer();
            app.create.contentContainer();
            app.create.mainContent();
            app.create.topicsElementContainer();
            app.create.addTopicElementContainer();
            app.create.addTopicElement();
            app.logic.addTopicButtons();
            //app.create.addTopicForm();
            app.create.gifDisplay();
            app.create.gifGallery();
            app.create.gifElementContainer();
            app.create.gifControls();
            app.logic.addATopic();
            app.logic.toggleMenu();
        },
        getGifs: function (topic) {
            var offset = app.state.gifBank.length;
            var apiKey = app.state.apiKey;
            var url = "https://api.giphy.com/v1/gifs/search?q=" + topic + apiKey + "&limit=10&offset=" + offset;
            console.log(url);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Action to be performed when the document is read;
                    var rawResponse = this.response;
                    var parsedResponse = JSON.parse(rawResponse);
                    var data = parsedResponse.data
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        var gifObj = data[i];
                        var gifID = gifObj.id;
                        var animatedGif = gifObj.images.fixed_width.url;
                        var gifStill = gifObj.images.fixed_width_still.url;
                        var gifRating = gifObj.rating;

                        app.state.gifBank.push({
                            id: gifID,
                            gif: animatedGif,
                            still: gifStill,
                            rating: gifRating,
                            active: false,
                        });
                        //console.log(app.state.gifBank);
                    }
                    console.log(app.state.gifBank);
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
            setTimeout(app.logic.displayGifs, 1000);

        },
        getNewGifs: function (buttonTopic) {
            app.reset.gifControls();
            app.reset.gifBank();
            app.reset.gifDisplay();
            
            app.logic.getGifs(buttonTopic);
            app.create.moreGifsButton(buttonTopic);
        },
        displayGifs: function () {
            app.reset.gifDisplay();
            var gifBank = app.state.gifBank;
            var j = gifBank.length - 10;
            for (var i = 0; i < gifBank.length; i++) {
                var gifID = gifBank[i].id;
                var gif = gifBank[i].gif;
                var gifStill = gifBank[i].still;
                var rate = gifBank[i].rating;
                var index = i;

                app.create.gifElement(gifID, gifStill, index, rate);
            }
            app.logic.animateGif();
        },
        addTopicButtons: function () {
            for (var i = 0; i < app.topics.length; i++) {
                app.create.topicButton(app.topics[i].query);
                app.create.sidebarNavItem(app.topics[i].query, i);
                app.create.divider();
            }
        },
        addATopic: function () {
            //e.preventDefault();
            $('#addTopicSubmitButton').on('click', function (e) {
                e.preventDefault();
                var newTopic = $("#addTopicFormAddTopicInput").val();
                console.log(newTopic);
                app.topics.push({ query: newTopic, clicked: "false", });
                console.log(app.topics);
                $("#topicsElementContainer").empty();
                app.reset.sideBarNav();
                app.create.sidebarNavBrand();
                app.logic.addTopicButtons();
                $("#addTopicFormAddTopicInput").val("");
            });

        },
        animateGif: function () {
            $("img").on('click', function (e) {
                var imageActive = app.state.gifBank[this.id].active;
                var gifStill = app.state.gifBank[this.id].still;
                var gif = app.state.gifBank[this.id].gif;
                console.log(this.id);

                if (imageActive === true) {
                    $("#" + this.id).attr({
                        class: "img img-fluid mx-auto d-block img-thumbnail gifImgElem",
                        src: gifStill,
                        number: this.id,
                        id: this.id,
                    });
                    app.state.gifBank[this.id].active = false;
                    console.log("changed to" + imageActive);

                } else {
                    $("#" + this.id).attr({
                        class: "img img-fluid mx-auto d-block img-thumbnail gifImgElem",
                        src: gif,
                        number: this.id,
                        id: this.id,
                    });
                    app.state.gifBank[this.id].active = true;
                    console.log("changed to" + imageActive);

                }
            });

        },
        toggleMenu: function (){
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        },
    },
}
app.run();