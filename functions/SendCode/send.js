exports.handler = function(context, event, callback) {
	
  const accountSid = 'ACce2d4"b78d2e2f025a2fae3d6c78577';
  const authToken = 'd29f1853d31c7ff794e1c7e74611cc53';
  const client = context.getTwilioClient();
  console.log(event.to);	
  console.log("VerifyService " + context.DEFAULT_VERIFY_SERVICE);
  client.verify.services(context.DEFAULT_VERIFY_SERVICE)
     .verifications
     .create({to: event.to, channel: 'sms'})
     .then(verification => callback(null,verification.sid));

};
