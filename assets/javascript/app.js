var app = {
    run: function (){
        app.logic.init();
    },
    state: {
        apiKey: "XJTWbX6bWeFgqNg1cBvCHgX3PB7lbag2",
    },
    topics: [
        "elephant",
        "zebra",
        "antelope",
        "skunk",
        "lion",
        "cheetah",
        "gazelle",
    ],
    create: {
        newElement: function (type, id, destination){
            var newElement = $("<" + type + ">");
            newElement.attr("id", id);
            $(destination).append(newElement);
            return newElement;
        },
        appContainer: function (){
            var appContainer = $("#gifTastic");
                //convert app destination to app container by changing id and class
                appContainer.attr("id", "appContainer");
                appContainer.attr("class", "container-fluid px-0");
        },
        titleElementContainer: function (){
            //create element
            var element = app.create.newElement("div", "titleElementContainer", "#appContainer");
            //style element
            $(element).attr("class", "row m-1");
            //append instruction text
        },
        titleElement: function (){
            //create element
            var element = app.create.newElement("div", "titleElement", "#titleElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
        },
        topicsElementContainer: function (){
             //create element
             var element = app.create.newElement("div", "topicsElementContainer", "#appContainer");
             //style element
             $(element).attr("class", "row m-1");
             //append instruction text
        },
        topicsElement: function (){
            //create element
            var element = app.create.newElement("div", "topicsElement", "#topicsElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
       },
       topicButton: function (topic){
           //create element
           var element = app.create.newElement("button", topic + "Button", "#topicsElement");
           //style element
           $(element).attr({
            "class": "btn btn-primary m-2",
            "data-value": topic,
           });
           $(element).html(topic);
       },
        gifElementContainer: function (){
             //create element
             var element = app.create.newElement("div", "gifElementContainer", "#appContainer");
             //style element
             $(element).attr("class", "row m-1");
             //append instruction text
        },
        gifElement: function (){
            //create element
            var element = app.create.newElement("div", "gifElement", "#gifElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
       },
        addTopicElementContainer: function(){
             //create element
             var element = app.create.newElement("div", "addTopicElementContainer", "#appContainer");
             //style element
             $(element).attr("class", "row m-1");
             //append instruction text
        },
        addTopicElement: function(){
            //create element
            var element = app.create.newElement("div", "addTopicElement", "#addTopicElementContainer");
            //style element
            $(element).attr("class", "col-12");
            //append instruction text
       },
       addTopicForm: function (){
           //create element
           var element = app.create.newElement("form", "addTopicForm", "#addTopicElement");
           $(element).attr("class", "");

       },
       addTopicFormGroup: function (){
           //create element
           var element = app.create.newElement("div", "addTopicFormGroup", "#addTopicForm");
           //style element
           $(element).attr("class", "form-group");
       },
       addTopicFormGroupLabel: function (){
           //create element
           var element = app.create.newElement("label", "addTopicFormGroupLabel", "#addTopicFormGroup");
           //style element
           $(element).attr("class", "");
       },
       addTopicFormGroupInput: function (){
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
       addTopicFormSubmit: function (){
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
    logic: {
        init: function (){
            app.create.appContainer();
            app.create.titleElementContainer();
            app.create.titleElement();
            app.create.topicsElementContainer();
            app.create.topicsElement();
            app.create.gifElementContainer();
            app.create.gifElement();
            app.create.addTopicElementContainer();
            app.create.addTopicElement();
            app.logic.addTopicButtons();
            app.create.addTopicForm();
            app.create.addTopicFormGroup();
            app.create.addTopicFormGroupLabel();
            app.create.addTopicFormGroupInput();
            app.create.addTopicFormSubmit();
        },
        addTopicButtons: function (){
            for(var i = 0; i < app.topics.length; i ++){
                app.create.topicButton(app.topics[i]);
            }
        },
    
    },
}
app.run();