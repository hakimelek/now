ServiceConfiguration.configurations.remove({
  service: 'facebook'
});

ServiceConfiguration.configurations.remove({
  service: 'twitter'
});

ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: process.env.FACEBOOK_APPID,
  secret: process.env.FACEBOOK_SECRET
});

ServiceConfiguration.configurations.insert({
  service: 'twitter',
  appId: process.env.TWITTER_APPID,
  secret: process.env.TWITTER_SECRET
});
