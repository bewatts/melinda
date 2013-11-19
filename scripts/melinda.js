function(root){
  
  var Melinda = root.Melinda = (root.Melinda || {})
  
  var queue = Melinda.queue = [];
  var paused = Melinda.paused = false;
  var results = Melinda.results;
  
  Melinda.test = function(name, fn){
    queue.push(function(){
      results = document.getElementById("results");
      results = assert(true, name).appendChild(document.createElement("ul"));
      fn();
    });
    runTest();
  };
  
  Melinda.
  
  Melinda.assert = function(value, desc){
   var li = document.createElement("li");
   li.className = value ? "pass" : "fail";
   li.appendChild(document.createTextNode(desc)) 
  };
  
}(this)