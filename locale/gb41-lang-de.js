Ext.onReady(function () {
	/**
	* German texts and links for GbHeader

	* Needs instantiation of toolbar after this script has executed.
	* Therefore include 
	*
	*	@example
	*	<script type="text/javascript" src="locale/gb41-lang-de.js"></script>
	*
	* or appropriate language file in header of app.html file 
	*/

	/**
	* German texts for GbTopicGrid
	*/
	Ext.define('Gb41.locale.de.view.GbTopicGrid', {
		override: 'Gb41.view.GbTopicGrid',
			title: 'Karten',
			waitText: 'Laden der Karte ...'
	});

	/**
	* German texts for GbParzSearch
	*/
	Ext.define('Gb41.locale.de.view.GbParzSearch', {
		override: 'Gb41.view.GbParzSearch',
			title: 'Grundstück'
	});

	/**
	* German texts for GbAddrSearch
	*/
	Ext.define('Gb41.locale.de.view.GbAddrSearch', {
		override: 'Gb41.view.GbAddrSearch',
			title: 'Adresse'
	});

	/**
	* German texts for GbViewport
	*/
	Ext.define('Gb41.locale.de.view.GbViewport', {
		override: 'Gb41.view.GbViewport',
			titleWestRegionPanel: 'GIS-Browser'
	});

	/**
	* German texts for GbSigninController
	*/
	Ext.define('Gb41.locale.de.controller.GbSigninController', {
		override: 'Gb41.controller.GbSigninController',
			alertTitle: 'Anmeldung fehlgeschlagen',
			alertText: 'Benutzername oder Passwort nicht korrekt.<br />Bitte versuchen Sie es nocheinmal.'
	});

	/**
	* German texts for GbSigninWindow
	*/
	Ext.define('Gb41.locale.de.view.GbSigninWindow', {
		override: 'Gb41.view.GbSigninWindow',
			txtUsername: 'Name',
			txtPassword: 'Passwort',
			btnCancel: 'Abbrechen',
			btnSignin: 'Anmelden',
			htmlPwRecovery: '<a href="#" >Sie können nicht auf Ihr Konto zugreifen?</a>'
	});

	/**
	* German texts for GbHeaderController
	*/
	Ext.define('Gb41.locale.de.controller.GbHeaderController', {
		override: 'Gb41.controller.GbHeaderController',
			btnTextSignin: 'Anmelden',
			btnTextLogout: 'Abmelden --- '
	});

	/**
	* German texts for GbHeader
	*/
	Ext.define('Gb41.locale.de.view.GbHeader', {
		override: 'Gb41.view.GbHeader',
			imgLogo: '../../img/zhlion.gif',
			htmlMapProvider: 'Kanton Zürich'
	});

	/**
	* German texts for GbHeaderToolbar
	*/
	Ext.define('Gb41.locale.de.view.GbHeaderToolbar', {
		override: 'Gb41.view.GbHeaderToolbar',
			btnHomeText: 'GIS-ZH',
			btnHomeLink: 'http://www.are.zh.ch/internet/baudirektion/are/de/geoinformationen/gis-zh_gis-zentrum.html',
			btnHomeTip: 'Startseite www.gis.zh.ch',

			btnHelpText: 'Hilfe',
			btnHelpLink: 'http://www.are.zh.ch/internet/baudirektion/are/de/geoinformationen/gis-zh_gis-zentrum/gis-browser/gis-browser-info.html',
			btnHelpTip: 'Hilfe zum GIS-Browser',

			btnContactText: 'Kontakt',
			btnContactLink: 'http://www.are.zh.ch/internet/baudirektion/are/de/geoinformationen/gis-zh_gis-zentrum/gis-browser/gis-browser_fragen.html',
			btnContactTip: 'Kontaktmöglichkeiten für Fragen zum Karteninhalt und zur Bedienung des GIS-Browsers',

			btnFeedbackText: 'Feedback',
			btnFeedbackLink: 'mailto:gisbrowser@bd.zh.ch?subject=Feedback%20zum%20GIS-Browser',
			btnFeedbackTip: 'E-Mail an gisbrowser@bd.zh.ch',
			btnMoreText: 'mehr ...',
			btnMoreTip: 'mehr ...',
			btnMoreMenuItem1Text: 'Abmelden -> Debug',
			btnMoreMenuItem2Text: 'MenuItem2',
			btnLoginText: 'Anmelden',
			btnLogoutText: 'Abmelden - {user}',
			btnLoginTip: 'Anmelden',
			btnLogoutTip: '{user} abmelden'
	});

	/**
	* German texts for GbInfoPanel
	*/
	Ext.define('Gb41.locale.de.view.GbInfoPanel', {
		override: 'Gb41.view.GbInfoPanel',
			txtDistance: '<b>Länge</b> der gezeichneten Linie: ',
			txtArea: '<b>Fläche</b> des gezeichneten Polygons: '
	});


	/**
	* German texts for GbPermalinkPanel
	*/
	Ext.define('Gb41.locale.de.controller.GbPermalinkPanel', {
		override: 'Gb41.view.GbPermalinkPanel',
			txtLink: 'Der direkte Link auf diese Karte:',
			txtShortLink: 'verkürzte URL',
			txtIntro: 'Karte bei ',
			txtShare: 'Link teilen: ',
			bitlyUsername: 'o_2qabbn8ll9',
			bitlyApiKey: 'R_faf22404cfa2868638ba29bcd75cc80d'
	});


	/**
	* German texts for GbMapPanel
	*/
	Ext.define('Gb41.locale.de.controller.GbMapPanel', {
		override: 'Gb41.view.GbMapPanel',
			txtToolTipPrev: 'zurück zum <b>vorherigen</b> Kartenausschnitt',
			txtToolTipNext: 'weiter zum <b>nächsten</b> Kartenausschnitt',
			txtToolTipDefaultNavigation: '- <b>Verschieben</b> der Karte (Ziehen mit gedrückter Maustaste)<br>- <b>Zoomen</b> (Doppelklick)<br>- <b>Informationsabfrage</b> zu einem Objekt (einfacher Mausklick)',
			txtToolTipDistance: 'Messwerkzeug<br/>zum <b>Messen von Längen</b><br/><br/>Abschliessen eines Linienzugs mit Doppelklick',
			txtToolTipArea: 'Messwerkzeug<br/>zum <b>Messen von Flächen</b><br/><br/>Schliessen des Polygons mit Doppelklick',
			txtToolTipRedlining: 'Zeichnen',
			txtToolTipExport: 'Exportieren',
			txtToolTipEdit: 'Editieren',
			txtToolTipPrint: 'Drucken',
			txtToolTipPermalink: '<b>Link</b> zur aktuellen Karte',

			txtToolTipSelectionOff: 'Selektieres Element: <b>Auswahl aufheben</b>'

	});

	/**
	* German texts for GbPrintPanel
	*/
	Ext.define('Gb41.locale.de.controller.GbPrintPanel', {
		override: 'Gb41.view.GbPrintPanel',
			txtDescription: 'Beschriftung',
			txtTitle: 'Kartentitel',
			txtComment: 'Kommentar<br />(2 Zeilen)',
			txtPageSetup: 'Seiteneinstellungen',
			txtLayout: 'Layout',
			txtResolution: 'Auflösung',
			txtScale: 'Massstab',
			txtRotation: 'Rotation',
			txtOutputFormat: 'Dateiformat',
			txtResetButton: 'Zurücksetzen',
			txtCreateButton: 'Erstellen '
	});

	/**
	* German texts for FormAwelLhForstfeuerZH
	*/
	Ext.define('Gb41.locale.de.controller.edit.FormAwelLhForstfeuerZH', {
		override: 'Gb41.view.edit.FormAwelLhForstfeuerZH',
			txtBtnEdit: 'Bearbeiten',
			txtBtnEditTooltip: 'Bewilligungsinformationen bearbeiten oder Standort verschieben.',
			txtBtnAdd: 'Bewilligung hinzufügen',
			txtBtnAddTooltip: 'Forstfeuer auf der Karte erfassen und Bewilligungsinformationen eingeben.',
			txtBtnSelect: 'Forstfeuer auswählen',
			txtBtnSelectTooltip: 'Forstfeuer auf der Karte auswählen und anschliessend anpassen oder löschen.',
			txtBtnDelete: 'Löschen',
			txtBtnDeleteTooltip: 'Bewilligung aus der Datenbank entfernen.',
			txtBasicHelpMessage: 'Hinzufügen oder Verändern eines Forstfeuers.'
	});


});
