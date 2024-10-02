namespace gowthamtest.db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Intro {
    key empName     : String      @title: 'Employee Name';
        mobile      : String(100) @title: 'Mobile';
        email       : String(100) @title: 'Email Id';
        designation : String(100) @title: 'Designation';
        location    : String(100) @title: 'Location';
        linkeinUrl  : String(100) @title: 'Linkedin Url';
        githubUrl   : String(100) @title: 'Github Url';
}

entity empDetails {
        employerLogo : String      @title: 'Employer Logo';
    key employer     : String      @title: 'Employer';
        designation  : String(100) @title: 'Designation';
        startDate    : Date        @title: 'Start Date';
        endDate      : Date        @title: 'End Date';
}

entity certificates {
    certName : String;
    certLink : String;

}

entity profSummary {
    summary : String;

}

entity overview {
    description : String;

}


entity Files : cuid, managed {

    @Core.MediaType  : mediaType
    content   : LargeBinary;

    @Core.IsMediaType: true
    mediaType : String;
    fileName  : String;
    url       : String;

};
