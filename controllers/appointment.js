(function () {
    'use strict';
    angular.module('docApp')
    .controller('appointmentController', appointmentController);
    
    appointmentController.$inject = [
        'docApp.services.sharedService',
        'docApp.constants.appointmentReason',
        'docApp.constants.appointmentTimeBracket'
    ];
    
    function appointmentController(sharedService, appointmentReason, appointmentTimeBracket) {
        var vm = this;
        var appHostUrl = "http://localhost:5000/";
        var appointmentUrl = "api/appointment";
        vm.appointment = {};
        vm.reasons = appointmentReason;
        vm.timeBrackets = appointmentTimeBracket;
        
        function init() {
            
        };
        
        vm.addAppointment = function addAppointment() {
            vm.appointment.reason = vm.appointment.reasonObject.reason;
            vm.appointment.timeBracket = vm.appointment.timeBracketObject.timeBracket;
            sharedService.callPostUrl(appHostUrl + appointmentUrl, vm.appointment,
                function () {
                    BootstrapDialog.alert("Appointment logged.");
                },
                function () {
                    BootstrapDialog.alert("Something went wrong, please try again.");
                }
            );
        };
        
        init();
    }
})();