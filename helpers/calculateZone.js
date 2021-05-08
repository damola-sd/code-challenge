const zones = require('./zones');
exports.calculateZone = (resting, current) => {
  const maximum = 180;
  const percentageOfMaxHR = (current/maximum) * 100;
  if(percentageOfMaxHR <= 100 && percentageOfMaxHR >= 50) {
    const zone = zones.zones.find(function (hrZone) {
      if (percentageOfMaxHR >= hrZone.min_percent && percentageOfMaxHR <= hrZone.max_percent) {
        return hrZone;
      }
    }
    );
    
    return `Current HR: ${current} - Resting HR: ${resting} - Zone: ${zone.zone}`;
  } else if(percentageOfMaxHR < 50) {
    return `You are not exercising hard enough. Do more`;

  }else {
    return `Slow down, you could injure yourself`;

  }
  
};
