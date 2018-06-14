$(function() {
  let twitchUsers = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "mtargetproduction",
  ];

  for (let i = 0; i < twitchUsers.length; i++) {
    $.ajax({
      type: "GET",
      url: "https://wind-bow.glitch.me/twitch-api/channels/" + twitchUsers[i],
      success: function(data) {
        // console.log(data);
        let logo = data.logo;
        let user = data.display_name;
        let userLowerCase = data.display_name.toLowerCase();
        // console.log(logo, user);
        $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + user).done(
          function(data2) {
            // console.log(data2);
            if (data2.stream === null) {
              $("ul").append(
                '<li><img src="' + logo + '"</img><span><a target="blank" href="https://www.twitch.tv/' + userLowerCase + '">' + user + '</a></span></li>'
              );
            } else { 
              $("ul").append(
                '<li class="online"><img src="' + logo + '"</img><span><a target="blank" href="https://www.twitch.tv/' + userLowerCase + '">' + user + '</a></span><span class="true">online</span><span class="true">' + data2.stream.game + '</span></li>'
              );       
            }
          }
        );
      },
      error: function(err) {
        alert('Error: User Not Found');
        
      }
    });
  } 
});