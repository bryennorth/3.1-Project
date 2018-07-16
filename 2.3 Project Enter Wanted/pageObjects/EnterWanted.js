module.exports = {
    url: 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html',
    elements: {
        //Buttons
        submitButton: 'button[id="saveBtn"]',
        clearButton: 'button[id="clearBtn"]',
        //MISC
        submitQueryForValidationOrNoResultsGeneratedDueToError: 'span[name=queryTitle]',
        versionNumber: 'a[id=versionNumber]',
        validQueryBody: 'span[name="queryBody"]',
        //Headers
        headerHeader: 'span[name=hdrHeader]',
        MKEHeader: 'span[name=mkeHeader]',
        OAIHeader: 'span[name=oriHeader]',
        nameHeader: 'span[name=namHeader]',
        sexHeader: 'span[name=sexHeader]',
        raceHeader: 'span[name=racHeader]',
        heightHeader: 'span[name=hgtHeader]',
        weightHeader: 'span[name=wgtHeader]',
        hairHeader: 'span[name=haiHeader]',
        offenseHeader: 'span[name=offHeader]',
        dateOfWarrantViolationHeader: 'span[name=dowHeader]',
        driversLiceseHeader: 'span[name=olnHeader]',
        DLStateHeader: 'span[name=olsHeader]',
        DLExpirationDateHeader: 'span[name=olyHeader]',
        licensePlateHeader: 'span[name=licHeader]',
        licenseStateHeader: 'span[name=lisHeader]',
        licenseYearHeader: 'span[name=liyHeader]',
        //InputFields
        headerInput: 'input[name=hdrInput]',
        MKEInput: 'input[name=mkeInput]',
        OAIInput: 'input[name=oriInput]',
        nameInput: 'input[name=namInput]',
        sexInput: 'input[name=sexInput]',
        raceInput: 'input[name=racInput]',
        heightInput: 'input[name=hgtInput]',
        weightInput: 'input[name=wgtInput]',
        hairInput: 'input[name=haiInput]',
        offenseInput: 'input[name=offInput]',
        dateOfWarrantViolationInput: 'input[name=dowInput]',
        driversLiceseInput: 'input[name=licInput]',
        DLStateInput: 'input[name=olsInput]',
        DLExpirationDateInput: 'input[name=olyInput]',
        licensePlateInput: 'input[name=licInput]',
        licenseStateInput: 'input[name=lisInput]',
        licenseYearInput: 'input[name=liyInput]',
        //Errors
        errorsRecievedMessage: 'p[id=validHeader]',
        listOfErrors: 'list[id=errorList]',
        //EmptyErrors
        emptyHeaderHeader: {
            selector: "//li[contains(.,'The field named \"Header\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyMKE: {
            selector: "//li[contains(.,'The field named \"MKE\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyOAI: {
            selector: "//li[contains(.,'The field named \"Originating Agency Identifier\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyName: {
            selector: "//li[contains(.,'The field named \"Name\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptySex: {
            selector: "//li[contains(.,'The field named \"Sex\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyMKEHeader: {
            selector: "//li[contains(.,'The field named \"MKE\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyRace: {
            selector: "//li[contains(.,'The field named \"Race\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyHeight: {
            selector: "//li[contains(.,'The field named \"Height\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyWeight: {
            selector: "//li[contains(.,'The field named \"Weight\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyHair: {
            selector: "//li[contains(.,'The field named \"Hair\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyOffense: {
            selector: "//li[contains(.,'The field named \"Offense\" must be included.')]",
            locateStrategy: 'xpath',
        },
        emptyDateOfWarrantViolation: {
            selector: "//li[contains(.,'The field named \"Date of Warrant/Violation\" must be included.')]",
            locateStrategy: 'xpath',
        },
        //invalidTextInFieldErrors
        invalidHeader: {
            selector: "//li[contains(.,'The \"Header\" field should be between 9 and 19 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidMKE: {
            selector: "//li[contains(.,'The \"MKE\" field should be between 2 and 4 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidOAI: {
            selector: "//li[contains(.,'The \"Originating Agency Identifier\" field should be 9 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidName: {
            selector: "//li[contains(.,'The \"Name\" field should be between 1 and 30 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidSex: {
            selector: "//li[contains(.,'The \"Sex\" field must be entered in as a single character, M for male, F for female, U for unknown.')]",
            locateStrategy: 'xpath',
        },
        invalidRace: {
            selector: "//li[contains(.,'The \"Race\" field should be 1 character long.')]",
            locateStrategy: 'xpath',
        },
        invalidHeight: {
            selector: "//li[contains(.,'The \"Height\" field should be 3 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidWeight: {
            selector: "//li[contains(.,'The \"Weight\" field can only include numeric characters.')]",
            locateStrategy: 'xpath',
        },
        invalidHair: {
            selector: "//li[contains(.,'The \"Hair\" field should be between 3 and 10 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidOffense: {
            selector: "//li[contains(.,'The \"Offense\" field should be between 5 and 15 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidDateOfWarrantViolation: {
            selector: "//li[contains(.,'The \"Date of Warrant/Violation\" field should be 8 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidDateOfWarrantViolationFormat: {
            selector: "//li[contains(.,'The \"Date of Warrant/Violation\" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today')]",
            locateStrategy: 'xpath',
        },
        invalidDriversLicense: {
            selector: "//li[contains(.,'The \"Drivers License\" field should be between 1 and 20 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidDLState: {
            selector: "//li[contains(.,'The \"DL State\" field should be 2 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidDLExpirationDate: {
            selector: "//li[contains(.,'The \"DL Expiration Date\" field should be 8 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidLicensePlate: {
            selector: "//li[contains(.,'The \"License Plate\" field should be between 5 and 8 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidLicenseState: {
            selector: "//li[contains(.,'The \"License State\" field should be 2 characters long.')]",
            locateStrategy: 'xpath',
        },
        invalidLicenseYear: {
            selector: "//li[contains(.,'The \"License Year\" field should be 4 characters long.')]",
            locateStrategy: 'xpath',
        },

    }
}