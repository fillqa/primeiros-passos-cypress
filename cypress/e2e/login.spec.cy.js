import userData from '../fixtures/user-data.json'


describe('Orange HRM Teste', () => {

  const selectorList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    LastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateClouseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location("pathname").should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).type('FirtNameTest')
    cy.get(selectorList.LastNameField).type('LastNameTest')
    cy.get(selectorList.genericField).eq(4).clear().type('EmployeeIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(6).clear().type('DriversLicenseNumberTest')
    cy.get(selectorList.genericField).eq(7).clear().type('2025-03-10') 
    cy.get(selectorList.dateClouseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
  
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})