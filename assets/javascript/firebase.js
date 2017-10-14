 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD64s9GqvJU0KWJfIgsexTdScFlVtQv81E",
    authDomain: "drizzy-b323a.firebaseapp.com",
    databaseURL: "https://drizzy-b323a.firebaseio.com",
    projectId: "drizzy-b323a",
    storageBucket: "drizzy-b323a.appspot.com",
    messagingSenderId: "649782104967"
  };
  firebase.initializeApp(config);

// Adding firebase into a variable
  var database = firebase.database();
//Creating variables
    var fb = database.ref();
    var messages = fb.child("messages");
    var btn = $('button');
    var wrap = $('.wrapper');
    var input = $('input.message');
    var usernameInput = $('input.username');

    var user = [];

//Cleaning up input text
    (function($) {
        $.sanitize = function(input) {
            var output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
            replace(/<[\/\!]*?[^<>]*?>/gi, '').
            replace(/<style[^>]*?>.*?<\/style>/gi, '').
            replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
            return output;
        };
    })($); 

//Listening when enter key is pressed on username
    usernameInput.on('keyup', function(e) {
        if (e.keyCode === 13 && usernameInput.val().length > 0) {
            var getTxt = usernameInput.val();
            user.push(getTxt);
            usernameInput.val('');
            $('.initModal').css('display', 'none');
            console.log(user);
        }
    });


//Listening when enter key is pressed on message
    input.on('keyup', function(e) {
        var curUsername = user.join();
        if (e.keyCode === 13 && input.val().length > 0) {
            var getTxt = input.val();
            messages.push({
                user: curUsername,
                message: getTxt
            });
            input.val('');
        }
    });

    messages.on("child_added", function(snap) {
        wrap.append('<li><span>' + $.sanitize(snap.val().user) + ':</span> ' + $.sanitize(snap.val().message) + '</li>');
        $('.wrapper').scrollTop($('.wrapper')[0].scrollHeight);
    });

    $("#minimize-button").click(function(){
    if($(this).html() == "_"){
        $(this).html("+");
    }
    else{
        $(this).html("_");
    }
    $("#chatwindow").slideToggle();
});
