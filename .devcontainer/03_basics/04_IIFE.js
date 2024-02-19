//  Immediately Invoked Function Expression

(function chai(){  // named IIFE ...qki function ka nam hai
    console.log(`DB CONNECTED`);
})();

((name /*parameter*/)=>{  // unnamed IIFE
    console.log(`DB CONNECTED ${name}`);
})('vipul'  /* aurgument*/) 