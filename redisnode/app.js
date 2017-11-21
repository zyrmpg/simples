var redis = require("redis");
var client = redis.createClient();

client.on('connect', function(){
    console.log('connected');
})

client.on('Error', function (err){
    console.log('Error: ' + err);
});

client.set("stringkey", "string val", redis.print);
client.hset("hashkey", "hashtest1", "somevale", redis.print);
client.hset(["hashkey", "hashtest2", "someothervale"], redis.print);
client.hkeys("hashkey", function(err, replies){
    console.log(replies.length + " replies:");
    replies.forEach(function(reply, i) {
        console.log("    " + i + ": " + reply);
    });
});
client.hmset('frameworks', 'js', 'angular', 'css', 'bootstrap', 'node', 'express');
/*sameas
clinet.hmset('frameworks', {
    'js': 'anglar',
    'css': 'bootstrap',
    'node': 'express'
})
*/
client.hgetall('frameworks', function(err, object){
    console.log(object);
});


//client.quit();


