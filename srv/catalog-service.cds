using {gowthamtest.db as db} from '../db/data-model';


//service CatalogService @(requires: 'authenticated-user')
service CatalogService @(path: '/CatalogService') {
    entity IntroSet      as projection on db.Intro;
    entity empDetailsSet as projection on db.empDetails;
    entity certificateSet as projection on db.certificates;
    entity profSummarySet as projection on db.profSummary;
    entity overViewSet as projection on db.overview;
    

}
// entity MediaFileSet  as projection on db.MediaFile;
service Attachments  @(path: '/Attachments') @(requires: 'authenticated-user'){

    entity FilesSet     as projection on db.Files;


}
