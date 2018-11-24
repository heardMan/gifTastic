var app = {
    run: function () {
        app.logic.init();
    },
    state: {
        apiKey: "&api_key=XJTWbX6bWeFgqNg1cBvCHgX3PB7lbag2",
        giphySearchAPI: "https://api.giphy.com/v1/gifs/search?=",
        gifBank: [],
    },
    topics: [
        {animal: "elephant", clicked: "false",},
        {animal: "zebra", clicked: "false",},
        {animal: "antelope", clicked: "false",},
        {animal: "skunk", clicked: "false",},
        {animal: "lion", clicked: "false",},
        {animal: "cheetah", clicked: "false",},
        {animal: "gazelle", clicked: "false",},
    ],
    create: {
        newElement: function (type, id, destination) {
            var newElement = $("<" + type + ">");
            newElement.attr("id", id);
            $(destination).append(newElement);
            return newElement;
        },
        appContainer: function () {
            var appContainer = $("#gifTastic");
            //convert app destination to app container by changing id and class
            appContainer.attr("id", "appContainer");
            appContainer.attr("class", "container-fluid px-0");
        },
        titleElementContainer: function () {
            //create element
            var element = app.create.newElement("div", "titleElementContainer", "#appContainer");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        titleElement: function () {
            //create element
            var element = app.create.newElement("div", "titleElement", "#titleElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
        },
        topicsElementContainer: function () {
            //create element
            var element = app.create.newElement("div", "topicsElementContainer", "#appContainer");
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
            var element = app.create.newElement("button", topic + "Button", "#topicsElement");
            //style element
            $(element).attr({
                "class": "btn btn-primary m-2",
                "data-value": topic,
                "onClick": "app.logic.getNewGifs('" + topic + "')",
                //getNewGifs
            });
            $(element).html(topic);
        },
        gifDisplay: function (){
            //create element
            var element = app.create.newElement("div", "gifDisplay", "#appContainer");
            //style element
            $(element).attr("class", "col-12");
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
        moreGifsButton: function (topic){
            //create element
            var element = app.create.newElement("button", "moreGifsButton", "#gifControls");
            //style element
            $(element).attr({
                "class": "btn btn-primary m-2",
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
        gifElement: function (id, rating, animatedGif, stillGif) {
            //create element
            var element = app.create.newElement("div", "gifElement" + id, "#gifElementContainer");
            //style element
            $(element).attr("class", "col-12 col-sm-6 col-md-3 col-lg-4");
            //append instruction text
            app.create.gifImgElement(id, animatedGif);
        },
        gifImgElement: function (propID, gifAnimated) {
            //create element
            var element = app.create.newElement("img", propID, "#gifElement" + propID);
            //style element
            $(element).attr({
                class: "img img-fluid",
                src: gifAnimated,
            });
            //append instruction text
        },
        addTopicElementContainer: function () {
            //create element
            var element = app.create.newElement("div", "addTopicElementContainer", "#appContainer");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        addTopicElement: function () {
            //create element
            var element = app.create.newElement("div", "addTopicElement", "#addTopicElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
        },
        addTopicForm: function () {
            //create element
            var element = app.create.newElement("form", "addTopicForm", "#addTopicElement");
            $(element).attr("class", "");

        },
        addTopicFormGroup: function () {
            //create element
            var element = app.create.newElement("div", "addTopicFormGroup", "#addTopicForm");
            //style element
            $(element).attr("class", "form-group");
        },
        addTopicFormGroupLabel: function () {
            //create element
            var element = app.create.newElement("label", "addTopicFormGroupLabel", "#addTopicFormGroup");
            //style element
            $(element).attr("class", "");
        },
        addTopicFormGroupInput: function () {
            //create element
            var element = app.create.newElement("input", "addTopicFormGroupLabel", "#addTopicFormGroup");
            //style element
            $(element).attr({
                "type": "topic",
                "class": "form-control",
                "id": "exampleInputEmail1",
                "aria-describedby": "emailHelp",
                "placeholder": "Type Something Here"
            });
        },
        addTopicFormSubmit: function () {
            //create element
            var element = app.create.newElement("button", "addTopicFormGroupLabel", "#addTopicForm");
            //style element
            $(element).attr({
                "class": "btn btn-primary",
                "type": "submit",
                "onClick": "",
            });
            $(element).html("Add a Topic")
        },
    },
    reset: {
        gifBank: function () {
            app.state.gifBank = [];
        },
        gifDisplay: function () {
            $("#gifElementContainer").html("");
        },
        gifControls: function (){
            $("#gifControls").html("");
        },
        clickStatus: function (){
            for (var i = 0; i < app.topics.length; i ++){
                app.topics[i].clicked = false;
            }
        },
    },
    logic: {
        init: function () {
            app.create.appContainer();
            app.create.titleElementContainer();
            app.create.titleElement();
            app.create.topicsElementContainer();
            app.create.topicsElement();
            app.create.gifDisplay();
            app.create.gifGallery();
            app.create.gifElementContainer();
            app.create.gifControls();
            app.create.addTopicElementContainer();
            app.create.addTopicElement();
            app.logic.addTopicButtons();
            app.create.addTopicForm();
            app.create.addTopicFormGroup();
            app.create.addTopicFormGroupLabel();
            app.create.addTopicFormGroupInput();
            app.create.addTopicFormSubmit();
        },
        getGifs: function (topic) {
            var offset = app.state.gifBank.length;
            var apiKey = app.state.apiKey;
            var url = "https://api.giphy.com/v1/gifs/search?q=" + topic + apiKey + "&limit=10&offset=" + offset;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Action to be performed when the document is read;
                    var rawResponse = this.response;
                    var parsedResponse = JSON.parse(rawResponse);
                    var data = parsedResponse.data
                    for (var i = 0; i < data.length; i++) {
                        var gifObj = data[i];
                        var gifID = gifObj.id;
                        var animatedGif = gifObj.images.fixed_width.url;
                        var gifStill = gifObj.images.fixed_width_still.url;
                        var gifRating = gifObj.rating;
                        console.log();
                        app.state.gifBank.push({
                            id: gifID,
                            gif: animatedGif,
                            still: gifStill,
                            rating: gifRating,
                        });
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
        getMoreGifs: function () { },
        displayNewGifs: function () { },
        displayMoreGifs: function () { },
        displayGifs: function () {
            var gifBank = app.state.gifBank;
            var j = gifBank.length - 10;
            for (var i = j; i < gifBank.length; i++) {
                var gifID = gifBank[i].id;
                var gif = gifBank[i].gif;
                var gifStill = gifBank[i].still;
                var rate = gifBank[i].rate;
                app.create.gifElement(gifID, rate, gif, gifStill);
            }
            console.log("wtf");
        },
        addTopicButtons: function () {
            for (var i = 0; i < app.topics.length; i++) {
                app.create.topicButton(app.topics[i].animal);
            }
        },

    },
}
app.run();