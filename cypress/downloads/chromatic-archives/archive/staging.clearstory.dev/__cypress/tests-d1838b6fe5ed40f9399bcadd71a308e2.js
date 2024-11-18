/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./cypress/e2e/login.spec.cy.js ***!
  \**************************************/


/// <reference types="cypress" />
describe('template spec', () => {
  it('Login with invalid credentails ', () => {
    cy.visit('https://staging.clearstory.dev');
    cy.get('[name="username"]').type('ext.gc.company@gmail.com');
    cy.get('[name="action"]').click();
    // cy.get('[name="password"]').type('Shaik@1996');
    cy.get('[name="action"]').click();
    // cy.get('[id="error-element-password"]').should('be.visible');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0FBLFFBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTTtFQUM5QkMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLE1BQU07SUFDMUNDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO0lBQzFDRCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDNURILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDO0lBQ0FKLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXJpLy4vY3lwcmVzcy9lMmUvbG9naW4uc3BlYy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuZGVzY3JpYmUoJ3RlbXBsYXRlIHNwZWMnLCAoKSA9PiB7XG4gIGl0KCdMb2dpbiB3aXRoIGludmFsaWQgY3JlZGVudGFpbHMgJywgKCkgPT4ge1xuICAgIGN5LnZpc2l0KCdodHRwczovL3N0YWdpbmcuY2xlYXJzdG9yeS5kZXYnKTtcbiAgICBjeS5nZXQoJ1tuYW1lPVwidXNlcm5hbWVcIl0nKS50eXBlKCdleHQuZ2MuY29tcGFueUBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJ1tuYW1lPVwiYWN0aW9uXCJdJykuY2xpY2soKTtcbiAgICAvLyBjeS5nZXQoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS50eXBlKCdTaGFpa0AxOTk2Jyk7XG4gICAgY3kuZ2V0KCdbbmFtZT1cImFjdGlvblwiXScpLmNsaWNrKCk7XG4gICAgLy8gY3kuZ2V0KCdbaWQ9XCJlcnJvci1lbGVtZW50LXBhc3N3b3JkXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gIH0pXG59KSJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsImdldCIsInR5cGUiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=