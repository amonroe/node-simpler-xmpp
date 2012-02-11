Node Simple XMPP
================

Potentially Simpler High Level NodeJS XMPP Library, which supports listening to
more than one account.

Status
------
Beta

Dependencies
------------
	sudo apt-get install libexpat1 libexpat1-dev libicu-dev

Install
-------
	npm install simpler-xmpp

Example
-------
	var xmpp = require('simple-xmpp')({
	    jid         : username@gmail.com,
	    password    : password,
	    host        : 'talk.google.com',
	    port        : 5222
	});

	xmpp.on('online', function() {
		console.log('Yes, I\'m connected!');
	});

	xmpp.on('chat', function(from, message) {
		xmpp.send(from, 'echo: ' + message);
	});

	xmpp.on('error', function(err) {
		console.error(err);
	});

	xmpp.connect();

Documentation
-------------

### Events

#### Online 
event where emits when successfully connected 

	xmpp.on('online', function() {
		console.log('Yes, I\'m online');
	});

#### Chat
event where emits when somebody sends a chat message to you

	xmpp.on('chat', function(from, message) {
		console.log('%s says %s', from, message);
	});

#### Buddy
event where emits when state of the buddy on your chat list changes

	/**
		@param jid - is the id of buddy (eg:- hello@gmail.com)
		@param state - state of the buddy. value will be one of the following constant can be access via require('simple-xmpp').STATUS
			"away" - Buddy goes away
		    "dnd" - Buddy set its status as "Do Not Disturb" or  "Busy",
		    "online" - Buddy comes online or available to chat
		    "offline" - Buddy goes offline
	*/
	xmpp.on('buddy', function(jid, state) {
		console.log('%s is in %s state', jid, state);
	});

#### Stanza
access core stanza element when such received
Fires for every incoming stanza

	/**
		@param stanza - the core object
		xmpp.on('stanza', function(stanza) {
			console.log(stanza);
		});
	*/

### Methods

#### Send
Send Chat Messages

	/**
		@param to - Address to send (eg:- abc@gmail.com) 
		@param message - message to be sent 
	*/
	
	xmpp.send(to, message);

#### Probe
Probe the state of the buddy

	/**
		@param jid - Buddy's id (eg:- abc@gmail.com)
		@param state -  State of the buddy.  value will be one of the following constant can be access via require('simple-xmpp').STATUS
			AWAY - Buddy goes away
			DND - Buddy set its status as "Do Not Disturb" or  "Busy",
			ONLINE - Buddy comes online or available to chat
			OFFLINE - Buddy goes offline
	*/

	xmpp.probe(jid, function(state) {
		
	})
