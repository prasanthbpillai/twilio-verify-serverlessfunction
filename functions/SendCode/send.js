exports.handler = function(context, event, callback) {
	

  const client = context.getTwilioClient();
  console.log(event.to);	
  console.log("VerifyService " + context.DEFAULT_VERIFY_SERVICE);
  client.verify.services(context.DEFAULT_VERIFY_SERVICE)
     .verifications
     .create({to: event.to, channel: 'sms'})
     .then(verification => callback(null,verification.sid));

};
