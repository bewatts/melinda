function(root){  
  var Melinda = root.Melinda = (root.Melinda || {})
  var queue = Melinda.queue = [];
  var paused = Melinda.paused = false;
  var results = Melinda.results;
  
  var test = Melinda.test = function(name, fn){
    queue.push(function(){
      results = document.getElementById("results");
      results = assert(true, name).appendChild(document.createElement("ul"));
      fn();
    });
    runTest();
  };
  
  var pause = Melinda.pause = function(){
    paused = true;
  };
  
  var resume = Melinda.resume = function(){
    paused = false;
    setTimeout(runTest, 1);
  };
  
  var runTest = Melinda.runTest = function(){
    if (!paused && queue.length){
     queue.shift()();
     if(!paused){
       resume();
     } 
    }
  };
  
  var assert = Melinda.assert = function(value, desc){
   var li = document.createElement("li");
   li.className = value ? "pass" : "fail";
   li.appendChild(document.createTextNode(desc));
   results.appendChild(li);
   if(!value){
     li.parentNode.parentNode.className = "fail";
   } 
   return li;
  };
}(this)


// SPECS 

window.onload = function(){
  Melinda.test("TestName1", function(){
    Melinda.pause();
    setTimeout( function(){
      Melinda.assert(true, "First Test");
      resume();
    }, 1000);
  });
  
  Melinda.test("TestName2", function(){
    Melinda.pause();
    setTimeout( function(){
      Melinda.assert(false, "Second Test");
      resume();
    }, 1000);
  });
  
  Melinda.test("TestName3", function(){
    Melinda.pause();
    setTimeout( function(){
      Melinda.assert(true, "Third Test");
      resume();
    }, 1000);
  });
  
};
