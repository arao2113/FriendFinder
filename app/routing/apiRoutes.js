var friendArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendArray);
    });

    app.post("/api/friends", function(req, res) {
        var user;
        var totalDifference = 100;
        var temp = 0;
        console.log(req.body);

        for(var i = 0; i < friendArray.length; i++) {
            for (var j = 0; j < friendArray[i].scores.length; j++) {
                temp += Math.abs(friendArray[i].scores[j] - req.body.scores[j]);
                console.log(temp);
            };

            if (temp < totalDifference) {
                totalDifference = temp;
                user = friendArray[i];
                temp = 0;
            }
        }
        
        console.log(user.name);
        friendArray.push(req.body);
        res.json(user);
    });
}