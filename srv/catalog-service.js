const cds = require('@sap/cds');

const { Readable, PassThrough } = require('stream');

cds.env.features.fetch_csrf = true

module.exports = cds.service.impl(async function (srv) {
  const {
    IntroSet, empDetailsSet
  } = srv.entities('CatalogService');

  const {
    FilesSet
  } = srv.entities('Attachments');


  /**
   * Handler method called before creating data entry
   * for entity FilesSet.
   */


  //// Creating attachments - Start ////

  srv.before('CREATE', 'FilesSet', req => {
    console.log('Create called');
    console.log(JSON.stringify(req.data));
    var FileID = req.data.ID;
    req.data.url = '/attachments/FilesSet(' + FileID + ')/content';
  })

  //// Creating attachments - End ////

  ////// this method should trigger from UI - but filter parameters not received in "req" /////
  // srv.on('READ', 'FileSet', async (req) => {
  //   debugger;
  //   const mediaType = req.data.mediaType;
  //   const fileName = req.data.fileName;
  //   const tx = cds.transaction(req);
  //   return await tx.run(
  //     SELECT
  //       .from(FileSet)
  //       .where({
  //         mediaType: mediaType, fileName: fileName
  //       })
  //   );
  // });

 


})


//// When port 4004 or other ports already in use. the below code will assign a radom code and from there we can launch the app 
//// on debugging - Start ////
const app = require('express')()
cds.serve('all').in(app)
app.listen()
//// When port 4004 or other ports already in use. the below code will assign a radom code and from there we can launch the app 
//// on debugging - End ////