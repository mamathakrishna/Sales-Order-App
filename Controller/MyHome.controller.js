sap.ui.controller("sorderapp.MyHome", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf salesorderapp.MyHome
*/
//	onInit: function() {
//
//	},

	handlePressConfiguration: function(oEvent) {
		
		var oButton = oEvent.getSource();

		// create action sheet only once
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment(
				"sorderapp.ActionSheet",
				this
			);
			this.getView().addDependent(this._actionSheet);
		}

		this._actionSheet.openBy(oButton);
		
		
		
	},
	
	
	
	onPress : function()
	{
		
	    app.to(page2);
	},
	
	handleLogoffPress :function()
	{
		app.to(page);
		
	},
	
	onPressEdit : function()
	{
		app.to(page5);
	},
	
	onPressTrack : function()
	{
		app.to(page6);
	},

	OnPressAnalytics:function()
	{
		app.to(page7);
	},
	
	onCSPress:function()
	{
		app.to(page2);
	},
	
	onESPress:function()
	{
		app.to(page5);
	},
	
	onTSPress:function()
	{
		app.to(page6);
	},
	
	onASPress: function()
	{
		app.to(page7);
	},
	/*onPressMyHome:function()
	{
		app.to(page);
	}*/
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf salesorderapp.MyHome
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf salesorderapp.MyHome
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf salesorderapp.MyHome
*/
//	onExit: function() {
//
//	}

});