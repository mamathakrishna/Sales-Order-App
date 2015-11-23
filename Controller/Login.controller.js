sap.ui.controller("sorderapp.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf salesorderapp.Login
*/
//	onInit: function() {
//
//	},

	OnLogin: function()
	{
		var oSelf= this;
		var val = oSelf.getView().byId("unameinput").getValue();
		var pswd = oSelf.getView().byId("pswdinput").getValue();
		if(val != "" && pswd != "")
		{
			
			if(val=="admin" && pswd=="admin")
			{
				app.to(page1);
				oSelf.getView().byId("unameinput").setValue(" ");
				oSelf.getView().byId("unameinput").setValue(" ");
		  
			}
			
			else
				{
					/*var oModel = new sap.ui.model.odata.ODataModel("http://ha1.utegration.com:8015/PKG_SO/services/login.xsodata", true, "mkrishna", "Tejuk_16");
					oModel.read("/Login",
							{
								async:false,
								success: function(oData, response)
								{
									var omodel = new sap.ui.model.json.JSONModel();
									omodel.setData(oData);
									oSelf.getView().setModel(omodel, "oLoginModel");
									
									var omod = omodel.getData();
									var len = omodel.getData().results.length; 
									for(var i = 0;i <= len;i++)
									{
									
									   if(val==omod.results[i].LoginId && pswd==omod.results[i].Password)
										{
										  //alert("Welcome:"+ val); 
										  var newValue= "Welcome:"+ val; 
										  sap.m.MessageToast.show(newValue); 
										  
										  return;
										}
									}
								}
				
			
		                    });*/
				
				if(val=="admin" && pswd!="admin")
				{
					var msg = "Password invalid";
					sap.m.MessageToast.show(msg);
					oSelf.getView().byId("unameinput").setValue(" ");
					oSelf.getView().byId("unameinput").setValue(" ");
			  
				}
				
				if(val!="admin" && pswd=="admin")
				{
					var msg = "Username invalid";
					sap.m.MessageToast.show(msg);
					oSelf.getView().byId("unameinput").setValue(" ");
					oSelf.getView().byId("unameinput").setValue(" ");
			  
				}
				}
			}
		
		else
			{
			  var msg = "Please enter the required fields";
			  sap.m.MessageToast.show(msg);
			}
		
				
	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf salesorderapp.Login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf salesorderapp.Login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf salesorderapp.Login
*/
//	onExit: function() {
//
//	}

});