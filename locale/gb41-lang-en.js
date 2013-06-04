Ext.onReady(function() {
	/**
	* English texts and links for GbHeader

	* Needs instantiation of toolbar after this script has executed.
	* Therefore include 
	*
	* 	@example
	* 	<script type="text/javascript" src="locale/gb41-lang-en.js"></script>
	*
	* or appropriate language file in header of app.html file 
	*/

	/**
	* English texts for GbTopicGrid
	*/	
	Ext.define('Gb41.locale.de.view.GbTopicGrid', {
		override: 'Gb41.view.GbTopicGrid',
			title: 'topics'
	});	
	
	/**
	* English texts for GbParzSearch
	*/	
	Ext.define('Gb41.locale.de.view.GbParzSearch', {
		override: 'Gb41.view.GbParzSearch',
			title: 'plot'
	});	
	
	/**
	* English texts for GbAddrSearch
	*/	
	Ext.define('Gb41.locale.de.view.GbAddrSearch', {
		override: 'Gb41.view.GbAddrSearch',
			title: 'address'
	});	
	
	/**
	* English texts for GbViewport
	*/	
	Ext.define('Gb41.locale.de.view.GbViewport', {
		override: 'Gb41.view.GbViewport',
			titleWestRegionPanel: 'GIS-Browser'
	});
	
	/**
	* English texts for GbSigninController
	*/	
	Ext.define('Gb41.locale.de.controller.GbSigninController', {
		override: 'Gb41.controller.GbSigninController',
			alertTitle: 'Login failed',
			alertText: 'Username or password not correct.<br />Please try again.'
	});

	/**
	* English texts for GbSigninWindow
	*/	
	Ext.define('Gb41.locale.de.view.GbSigninWindow', {
		override: 'Gb41.view.GbSigninWindow',
			txtUsername: 'Username',
			txtPassword: 'Password',
			btnCancel: 'Cancel',
			btnSignin: 'Sign in',
			htmlPwRecovery: '<a href="#" >Can\'t access your account?</a>'
	});
	
	/**
	* English texts for GbHeaderController
	*/	
	Ext.define('Gb41.locale.de.controller.GbHeaderController', {
		override: 'Gb41.controller.GbHeaderController',
			btnTextSignin: 'Sign in',
			btnTextLogout: 'Logout --- '
	});

	/**
	* English texts for GbHeader
	*/		
 	Ext.define('Gb41.locale.en.view.GbHeader', {
		override: 'Gb41.view.GbHeader',
			imgLogo: '../../img/zhlion.gif',
			htmlMapProvider: 'Canton of Zurich'
	});
	
	/**
	 * English texts for GbHeaderToolbar
	 */ 
	Ext.define('Gb41.locale.en.view.GbHeaderToolbar', {
		override: 'Gb41.view.GbHeaderToolbar',
			btnHomeText: 'home',
			btnHomeLink: 'http://www.gis.zh.ch/en/',
			btnHomeTip: 'homepage www.gis.zh.ch',
			btnHelpText: 'help',
			btnHelpLink: 'http://www.gis.zh.ch/help/en/',
			btnHelpTip: 'help GIS-Browser',
			btnContactText: 'contact',
			btnContactLink: 'http://www.gis.zh.ch/contact/en/',
			btnContactTip: 'contact',
			btnFeedbackText: 'feedback',
			btnFeedbackLink: 'mailto://gisbrowser@bd.zh.ch',
			btnFeedbackTip: 'mail to gisbrowser@bd.zh.ch',
			btnMoreText: 'more ...',
			btnHelpTip: 'more ...',
			btnMoreMenuItem1Text: 'logout -> debug',
			btnMoreMenuItem2Text: 'MenuItem2',
			btnLoginText: 'Sign in',
			btnLogoutText: 'logout - {user}',
			btnLoginTip: 'login',
			btnLogoutTip: '{user} logout'
	});
});
