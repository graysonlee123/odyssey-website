let servVersion, servHostName, servMOTD;

const servResults = $.ajax({
    url: "https://api.mcsrvstat.us/2/playodyssey.net",
    method: "GET"
}).then(function (stats) {
    servVersion = stats.version;
    servHostName = stats.hostname;
    servMOTD = stats.motd.clean;

    $("#playerCount").text(`${stats.players.online} / ${stats.players.max} players online.`);
    console.log(stats);
    let players = stats.players.list;

    for (i = 0; i < players.length; i++) {
        $("#livePlayers").append(`<p>${players[i]}</p>`);
    }

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".playBtn").text("Copied!");
}