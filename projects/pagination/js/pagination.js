angular.module("pagination", []).component("pagination", 
	{
	templateUrl: "/pagination.html",
	controller: ['$scope', function($scope){
		this.createPage = function(type, value, active, disabled){
			return {
				type: type,
				value: value,
				active: active,
				disabled: disabled
			};
		};
		$scope.pageItems = [{
				type: 'arrow',
				value: -1,
				disabled: false
			},{
				type: 'number',
				value: 1,
				active: false
			},{
				type: 'dots',
				disabled: true
			},{
				type: 'number',
				value: 9,
				active: false
			},{
				type: 'number',
				value: 10,
				active: true
			},{
				type: 'number',
				value: 11,
				active: false
			},{
				type: 'dots',
				disabled: true
			},{
				type: 'number',
				value: 15,
				active: false
			},{
				type: 'arrow',
				value: 1,
				disabled: false
			}
		];
	}]
});
