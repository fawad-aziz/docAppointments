(function () {
    'use restrict';
    
    angular.module('docApp')
        .constant('docApp.constants.appointmentTimeBracket', [
            { "id": 1, "timeBracket": "7AM - 9AM" },
            { "id": 2, "timeBracket": "9AM - 11AM" },
            { "id": 3, "timeBracket": "11AM - 12PM" },
            { "id": 4, "timeBracket": "1PM - 3PM" },
            { "id": 5, "timeBracket": "3PM - 5PM" },
            { "id": 6, "timeBracket": "5PM - 6PM" }
        ]);
})();