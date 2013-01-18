app.global.resize = function(){
};

app.global.setup = function(){
  // Don't delete these two lines
  if (app.global.didSetup) return;
  app.global.didSetup = true;
};

app.global.match = function(){
  console.log('match: ' + app.is);
};

app.global.unmatch = function(){
  console.log('unmatch: ' + app.was);
};


