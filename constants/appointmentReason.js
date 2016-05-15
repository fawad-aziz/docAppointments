(function () {
    'use restrict';
    
    angular.module('docApp')
        .constant('docApp.constants.appointmentReason', [
            { "id": 1, "reason": "Any Reason" },
            { "id": 2, "reason": "ADD / ADHD / Hyperactive" },
            { "id": 3, "reason": "Addiction / Substance abuse" },
            { "id": 4, "reason": "Alcoholism" },
            { "id": 5, "reason": "Alzheimer's Disease" },
            { "id": 6, "reason": "Analytical Therapy / psychoanalysis" },
            { "id": 7, "reason": "Anger Management" },
            { "id": 8, "reason": "Anxiety" },
            { "id": 9, "reason": "Asthma" },
            { "id": 10, "reason": "Autism" },
            { "id": 11, "reason": "Behavioral Therapy" },
        ]);
})();