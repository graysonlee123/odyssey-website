let servVersion, servHostName, servMOTD;

const servResults = $.ajax({
    url: "https://api.mcsrvstat.us/2/playodyssey.net",
    method: "GET"
}).then(function (stats) {
    servVersion = stats.version;
    servHostName = stats.hostname;
    servMOTD = stats.motd.clean;

    $("#playerCount").text(`${stats.players.online} / ${stats.players.max} players online.`);

});