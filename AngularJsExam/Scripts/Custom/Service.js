
myapp.service('touristService', function ($http) {


    this.getAllTourists = function () {
        return $http.get('/Tourist/GetTourist');
    }

    this.save = function (Tourist) {
        var request = $http({
            method: 'post',
            url: '/Tourist/Insert',
            data: Tourist
        });
        return request;
    }

    this.update = function (Tourist) {
        var updaterequest = $http({
            method: 'post',
            url: '/Tourist/Update',
            data: Tourist
        });
        return updaterequest;
    }

    this.delete = function (UpdateTouNo) {
        return $http.post('/Tourist/Delete/' + UpdateTouNo);
    }
});
