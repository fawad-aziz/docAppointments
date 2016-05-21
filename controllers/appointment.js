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
        var appHostUrl = "http://172.245.56.21:5000/";
        var appointmentUrl = "api/appointment";
        vm.appointment = {};
        vm.reasons = appointmentReason;
        vm.timeBrackets = appointmentTimeBracket;
        vm.genders = [
            { "id": 1, "gender": "Male" },
            { "id": 2, "gender": "Female" },
            { "id": 3, "gender": "Not Specified" }
        ];
        vm.insuranceOptions = [
            { "id": 1, "option": "Self pay" },
            { "id": 2, "option": "Use insurance" }
        ];
        
        function init() {
            
        };
        
        vm.addAppointment = function addAppointment() {
            vm.appointment.reason = vm.appointment.reasonObject.reason;
            vm.appointment.appointmentTime = vm.appointment.timeBracketObject.timeBracket;
            vm.appointment.gender = vm.appointment.genderObject.gender;
            vm.appointment.insuranceOption = vm.appointment.insuranceOptionObject.option;
            sharedService.callPostUrl(appHostUrl + appointmentUrl, vm.appointment,
                function () {
                    BootstrapDialog.show({
                        title: 'Information',
                        message: 'Appointment has been logged.',
                        buttons: [
                            {
                                label: 'OK',
                                action: function(dialog) {
                                    dialog.close();
                                    location.href = '#/';
                                }
                            }
                        ]
                    });
                },
                function () {
                    BootstrapDialog.alert("Something went wrong, please try again.");
                }
            );
        };
        
        init();
    }
})();