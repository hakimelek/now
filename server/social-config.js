ServiceConfiguration.configurations.remove({
    service: 'facebook',
});

ServiceConfiguration.configurations.remove({
    service: 'twitter',
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: FACEBOOK.appId,
    secret: 'FACEBOOK.secret'
});