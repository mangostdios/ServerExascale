var exascaleAJAX = {
recieve: function(server,encodedPassword) {},
post: function(server,encodedPassword,data) {}
};
function startCalc(data) {
exascaleAJAX.post("serverName0","password",data);
var lol = [];
for(var i=0; i<data.length; i++) {
lol.push(1);
}
exascaleAJAX.post("serverName2","password",0);
}
function calculate() {
var num = exascaleAJAX.recieve("serverName2");
exascaleAJAX.post("serverName2","password",num+1);
var code = eval(exascaleAJAX.recieve("serverName0")[num]);
var d = exascaleAJAX.recieve("serverName0");
d[num] = code;
exascaleAJAX.post("serverName0","password",d);
}
/*
calculate() = calculate next function
startCalc() = create new calculation inside the exascale network
*/
