const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('Task is running every minute');
});
