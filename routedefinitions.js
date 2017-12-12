// Alle routes er definerede her. Filen burde være en selvstændig fil.
module.exports = {
    '/cat': require('./endpointhandlers/cat'), // Test route i forbindelse med intro
    '/menuitems': require('./endpointhandlers/menuitems'), // Henter menupunkter fra DB
    '/test': require('./endpointhandlers/test'), // Test route
    '/login': require('./endpointhandlers/login'), // Login route, handler håndterer både hent, tilføj
    '/article': require('./endpointhandlers/article'), // Article route handler håndterer hent, tilføj, fjern og update 
    '/logout': require('./endpointhandlers/logout'), // Logout route handler håndterer DELETE
    '/users': require('./endpointhandlers/users') // Users håndterer brugere (tilføj, fjern og update)
}