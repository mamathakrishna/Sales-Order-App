sap.ui.controller("sorderapp.Analysis", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sorderapp.Analysis
*/
	onInit: function() {
		
	},
	
	onPress : function(){
		app.to(page);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sorderapp.Analysis
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sorderapp.Analysis
*/
	onAfterRendering: function() {
		
		var oModel = new sap.ui.model.json.JSONModel({
			SOServices : [
			        		{
			        			name : "SO001",
			        			status : "Open",
			        			amount : 200
			        			 
			        			
			        			
			        		},
			        		{
			        			name : "SO002",
			        			status : "Processed",
			        			amount : 50
			        		},
			        		{
			        			name : "SO003",
			        			status : "Shipped",
			        		    amount : 75
			        		},
			        		{
			        			name : "SO004",
			        			status : "Open",
			        			amount : 300
			        		},
			        		{
			        			name : "SO005",
			        			status : "Open",
			        			amount : 400
			        		},
			        		{
			        			name : "SO006",
			        			status : "Shipped",
			        			amount : 350
			        		}
			        						]
		});

		this.getView().byId("myPieChart").setModel(oModel);

		
		var oModel1 = new sap.ui.model.json.JSONModel({
			SOServices1 : [
			        		{
			        			
			        			status : "Open",
			        			count : 10
			        			 
			        			
			        			
			        		},
			        		{
			        			
			        			status : "Processed",
			        			count : 50
			        		},
			        		{
			        			
			        			status : "Shipped",
			        		    count : 30
			        		}
			        		
			        						]
		});

		this.getView().byId("myPieC").setModel(oModel1);
		
		
		

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sorderapp.Analysis
*/
//	onExit: function() {
//
//	}

});