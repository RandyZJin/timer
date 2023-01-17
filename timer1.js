const beeper = function(timers) {
  for (let i = 0; i < timers.length; i++) {
    if (timers[i] > 0 && Number(timers[i])) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(timers[i]) * 1000);
    }
    
    


  }
};

let input = process.argv.slice(2);
beeper(input);
