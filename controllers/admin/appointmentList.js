(function () {
	'use strict';

	angular.module('docApp')
	.controller('appointmentListController', appointmentListController);

	appointmentListController.$inject = [
		'docApp.services.sharedService',
		'docApp.constants.appointmentReason',
		'docApp.constants.appointmentTimeBracket'
	];

	function appointmentListController(sharedService, appointmentReason, appointmentTimeBracket) {
		var vm = this;
		var appHostUrl = "http://localhost:5000/";
		var appointmentUrl = "api/appointment";
		vm.appointments = [];

		function init() {
			sharedService.callGetUrl(appHostUrl + appointmentUrl,
				function (response) {
					vm.appointments = response;
				},
				function () {
					BootstrapDialog.alert("Something went wrong, please try again.");
				}
			);
		};

		init();
	}
})();