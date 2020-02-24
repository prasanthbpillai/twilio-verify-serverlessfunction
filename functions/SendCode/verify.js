exports.handler = function(context, event, callback) {
  
	const client = context.getTwilioClient();
	
	client.verify.services(context.DEFAULT_VERIFY_SERVICE)
		.verificationChecks
		.create ( {to: event.to, code: event.code})
		.then(verification_check => {
			//@todo add the code for the checking the verification status 
			console.log(verification_check.status);
			callback(null, verification_check.status);
			
		});



};
