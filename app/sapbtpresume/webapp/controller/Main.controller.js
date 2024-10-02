sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sapbtpresume/model/formatter",
    "sap/m/library",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox, formatter, mobileLibrary, Filter, FilterOperator) {
        "use strict";
        var test,
            URLHelper = mobileLibrary.URLHelper,
            resumeFileID,
            logoArray;

        return Controller.extend("sapbtpresume.controller.Main", {
            formatter: formatter,
            onInit: function () {
                // debugger;
                var oModel = this.getOwnerComponent().getModel("TestModel");
                var that = this;
                this._fileName = undefined;

                ///// Load the Media Files from cloud db and show in view.xml in Attachments tab////
                var mediaModel = this.getOwnerComponent().getModel("MediaModel");
                var aMediaFilters = [];
                aMediaFilters.push(new Filter("mediaType", FilterOperator.Contains, 'image/jpeg'));
                aMediaFilters.push(new Filter("fileName", FilterOperator.Contains, 'Gowtham'));
                debugger;
                mediaModel.read("/FilesSet", {
                    Filter: aMediaFilters,
                    success: function (oData, oResponse) {
                        debugger;
                        var mediaModel = new sap.ui.model.json.JSONModel();
                        mediaModel.setData(oData.results);
                        that.getView().setModel(mediaModel, "mediaModel");
                        ///// comment - not triggering backend call /////
                        if (oData.results.length !== 0) {
                            for (var i = 0; i < oData.results.length; i++) {
                                if (oData.results[i].mediaType === "image/jpeg" && oData.results[i].fileName.includes("Gowtham")) {
                                    that.byId("_IDGenAvatar1").setSrc(oData.results[i].url);
                                    that.byId("_IDGenAvatar2").setSrc(oData.results[i].url);
                                } else if (oData.results[i].mediaType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
                                    oData.results[i].fileName.includes("Gowtham")) {
                                    resumeFileID = oData.results[i].ID;
                                    this._fileName = oData.results[i].fileName;
                                }
                            }
                        }
                        ///// uncomment for database triggering /////
                        // that.byId("_IDGenAvatar1").setSrc(oData.results[0].url);
                        // that.byId("_IDGenAvatar2").setSrc(oData.results[0].url);


                        //// formation of employer log and then assigning in onUpdateFinished method - Start ////
                        var logo = {

                        };
                        logoArray = [];
                        if (oData.results.length !== 0) {
                            for (var i = 0; i < oData.results.length; i++) {
                                logo = {};
                                if (oData.results[i].fileName.includes("saudi aramco")) {
                                    logo.fileName = oData.results[i].fileName;
                                    logo.url = oData.results[i].url;
                                    logoArray.push(logo);
                                } else if (oData.results[i].fileName.includes("hexaware")) {
                                    logo.fileName = oData.results[i].fileName;
                                    logo.url = oData.results[i].url;
                                    logoArray.push(logo);
                                } else if (oData.results[i].fileName.includes("HTC")) {
                                    logo.fileName = oData.results[i].fileName;
                                    logo.url = oData.results[i].url;
                                    logoArray.push(logo);
                                } else if (oData.results[i].fileName.includes("EY")) {
                                    logo.fileName = oData.results[i].fileName;
                                    logo.url = oData.results[i].url;
                                    logoArray.push(logo);
                                } else if (oData.results[i].fileName.includes("Infosys")) {
                                    logo.fileName = oData.results[i].fileName;
                                    logo.url = oData.results[i].url;
                                    logoArray.push(logo);
                                } else if (oData.results[i].fileName.includes("Cognizant")) {
                                    logo.fileName = oData.results[i].fileName;
                                    logo.url = oData.results[i].url;
                                    logoArray.push(logo);
                                }

                            }
                        }
                        //// formation of employer log and then assigning in onUpdateFinished method - End ////


                    }.bind(this),
                    error: function (oData, oResponse) {
                        debugger;
                    }
                });


                oModel.read("/IntroSet", {
                    success: function (oData, oResponse) {

                        var newModel = new sap.ui.model.json.JSONModel();
                        newModel.setData(oData.results);
                        that.getView().setModel(newModel, "newModel");


                    },
                    error: function (oData, oResponse) {

                    }
                });

                oModel.read("/profSummarySet", {
                    success: function (oData, oResponse) {

                        var proSummaryModel = new sap.ui.model.json.JSONModel();
                        proSummaryModel.setData(oData.results);
                        that.getView().setModel(proSummaryModel, "proSummaryModel");


                    },
                    error: function (oData, oResponse) {

                    }
                });

                oModel.read("/certificateSet", {
                    success: function (oData, oResponse) {

                        var certModel = new sap.ui.model.json.JSONModel();
                        certModel.setData(oData.results);
                        that.getView().setModel(certModel, "certModel");


                    },
                    error: function (oData, oResponse) {

                    }
                });

                oModel.read("/overViewSet", {
                    success: function (oData, oResponse) {

                        var ovModel = new sap.ui.model.json.JSONModel();
                        ovModel.setData(oData.results);
                        that.getView().setModel(ovModel, "ovModel");


                    },
                    error: function (oData, oResponse) {

                    }
                });
            },

            _getBaseURL: function () {
                var oBaseUrl = this.getOwnerComponent().getManifestEntry("/sap.app/id").replaceAll(".", "/");
                return jQuery.sap.getModulePath(oBaseUrl)
            },

            onLinkedInPress: function (oEvents) {

                var link = this.getView().getModel("newModel").getData()[0].linkeinUrl;
                URLHelper.redirect(link, true);

            },

            onGithubPress: function (oEvents) {

                var gitLink = this.getView().getModel("newModel").getData()[0].githubUrl;
                URLHelper.redirect(gitLink, true);

            },

            onUpdateFinished: function (oEvent) {
                debugger;
                var currDate = new Date();
                if (oEvent.getSource().getAggregation("items").length !== 0) {
                    oEvent.getSource().getItems()[0].getAggregation("cells")[4].setValue(this.formatter.formatDate(currDate));

                    debugger;
                    var uploadSet = this.byId("uploadSet");

                    //// Setting the logo image in table - Start ////
                    var tableData = oEvent.getSource().getAggregation("items");
                    for (var i = 0; i < tableData.length; i++) {
                        for (var j = 0; j < logoArray.length; j++) {
                            if (tableData[i].getAggregation("cells")[1].getText().includes("Saudi")) {
                                if (logoArray[j].fileName.includes("saudi")) {
                                    tableData[i].getAggregation("cells")[0].setSrc(logoArray[j].url);
                                }

                            } else if (tableData[i].getAggregation("cells")[1].getText().includes("EY GDS")) {
                                if (logoArray[j].fileName.includes("EY")) {
                                    tableData[i].getAggregation("cells")[0].setSrc(logoArray[j].url);
                                }

                            }
                            else if (tableData[i].getAggregation("cells")[1].getText().includes("Infosys")) {
                                if (logoArray[j].fileName.includes("Infosys")) {
                                    tableData[i].getAggregation("cells")[0].setSrc(logoArray[j].url);
                                }

                            }
                            else if (tableData[i].getAggregation("cells")[1].getText().includes("HTC Global Services")) {
                                if (logoArray[j].fileName.includes("HTC")) {
                                    tableData[i].getAggregation("cells")[0].setSrc(logoArray[j].url);
                                }

                            }
                            else if (tableData[i].getAggregation("cells")[1].getText().includes("Cognizant")) {
                                if (logoArray[j].fileName.includes("Cognizant")) {
                                    tableData[i].getAggregation("cells")[0].setSrc(logoArray[j].url);
                                }

                            }
                            else if (tableData[i].getAggregation("cells")[1].getText().includes("Hexaware")) {
                                if (logoArray[j].fileName.includes("hexaware")) {
                                    tableData[i].getAggregation("cells")[0].setSrc(logoArray[j].url);
                                }

                            }
                        }

                    }
                    //// Setting the logo image in table - End ////

                }

            },

            onAfterRendering: function (oEvent) {
                // debugger;

            },




            //// Uploading attachment - Start////
            onAfterItemAdded: function (oEvent) {
                debugger;
                var item = oEvent.getParameter("item");
                this._createEntity(item)
                    .then((id) => {
                        this._uploadContent(item, id);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },

            _createEntity: function (item) {
                var data = {
                    mediaType: item.getMediaType(),
                    fileName: item.getFileName()

                };

                var settings = {
                    url: "/attachments/FilesSet",
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    data: JSON.stringify(data)
                }

                return new Promise((resolve, reject) => {
                    $.ajax(settings)
                        .done((results, textStatus, request) => {
                            test = results.ID;
                            resolve(results.ID);
                        })
                        .fail((err) => {
                            reject(err);
                        })
                })
            },

            _uploadContent: function (item, id) {
                // debugger;
                var url = '/attachments/FilesSet(' + id + ')/content';
                console.log(url);
                item.setUploadUrl(url);
                var oUploadSet = this.byId("uploadSet");
                oUploadSet.setHttpRequestMethod("PUT")
                oUploadSet.uploadItem(item);
            },

            onUploadCompleted: function (oEvent) {
                debugger;

                var mediaModel = this.getOwnerComponent().getModel("MediaModel");

                mediaModel.read("/FilesSet", {
                    success: function (oData, oResponse) {
                        debugger;
                        var mediaModel = new sap.ui.model.json.JSONModel();
                        mediaModel.setData(oData.results);
                        this.getView().setModel(mediaModel, "mediaModel");
                        var oUploadSet = this.byId("uploadSet");
                        oUploadSet.removeAllIncompleteItems();
                        oUploadSet.getBinding("items").refresh();
                        MessageToast.show("Uploaded Successfully. Refresh the browser to view the Files");

                    }.bind(this),
                    error: function (oData, oResponse) {

                    }.bind(this)
                });
            },

            //// Uploading attachment - End////            


            //// Downloading attachment - Start////
            onOpenPressed: function (oEvent) {

                oEvent.preventDefault();
                var item = oEvent.getSource();
                this._fileName = item.getFileName();
                this._download(item)
                    .then((blob) => {
                        var url = window.URL.createObjectURL(blob);


                        //download with same name
                        var link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', this._fileName);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },


            _download: function (item) {
                var settings = {
                    url: item.getUrl(),
                    method: "GET",
                    xhrFields: {
                        responseType: "blob"
                    }
                }

                return new Promise((resolve, reject) => {
                    $.ajax(settings)
                        .done((result, textStatus, request) => {
                            resolve(result);
                        })
                        .fail((err) => {
                            reject(err);
                        })
                });
            },

            onResumeDownload: function (oEvent) {
                debugger;
                var URL = window.location.href.split(".cloud.sap")[0];
                URL = URL + ".cloud.sap/v2/Attachments/FilesSet(" + resumeFileID + ")/content";
                var fullService = URL;

                //download with name
                var link = document.createElement('a');
                link.href = fullService;
                link.setAttribute('download', this._fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                this._fileName = undefined;

            }

            //// Downloading attachment - End////



        });
    });

