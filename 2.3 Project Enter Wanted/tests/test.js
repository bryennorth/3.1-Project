let inputData = {
    header: 'Valid Header',
    MKE: 'WWW',
    OAI: '7Warlords',
    sex: 'M',
    race: 'C',
    height: '305',
    weight: '200',
    hair: 'Blonde',
    offense: 'Mutliation',
    dateOfWarrantViolation: '01011991',
}

let EnterWanted = {}
module.exports = {
    before: browser => {
        EnterWanted = browser.page.EnterWanted()
        EnterWanted.navigate()
    },
    after: browser => {
        browser.end()
    },
    // This test is generating a valid query and is using pageObjects now
    'WantedValidQuery': browser => {
        EnterWanted
            .waitForElementPresent('@headerInput', 5000)
            .setValue('@headerInput', inputData.header)
            .setValue('@MKEInput', inputData.MKE)
            .setValue('@OAIInput', inputData.OAI)
            .setValue('@nameInput', inputData.name)
            .setValue('@sexInput', inputData.sex)
            .setValue('@raceInput', inputData.race)
            .setValue('@heightInput', inputData.height)
            .setValue('@weightInput', inputData.weight)
            .setValue('@hairInput', inputData.hair)
            .setValue('@offenseInput', inputData.offense)
            .setValue('@dateOfWarrantViolationInput', inputData.dateOfWarrantViolation)
            .click('@submitButton')
            .waitForElementPresent('@validQueryBody', 3000)

    }
}