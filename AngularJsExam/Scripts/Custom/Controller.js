
myapp.controller('tourist-controller', function ($scope, touristService) {


    loadTourists();

    function loadTourists() {
        var TouristRecords = touristService.getAllTourists();
        TouristRecords.then(function (d) {
            $scope.Tourists = d.data;
        },
            function () {
                alert("Error occured while fetching tourist list...");
            });
    }


    $scope.save = function () {
        var Tourist = {
            TouNo: $scope.TouNo,
            Name: $scope.Name,
            Email: $scope.Email,
            Address: $scope.Address,
            Contact: $scope.Contact
        };
        var saverecords = touristService.save(Tourist);
        saverecords.then(function (d) {
            if (d.data.success === true) {
                loadTourists();
                alert("Tourist added successfully");
                $scope.resetSave();
            }
            else { alert("Tourist not added."); }
        },
            function () {
                alert("Error occurred while adding tourist.");
            });
    }


    $scope.resetSave = function () {
        $scope.TouNo = '';
        $scope.Name = '';
        $scope.Email = '';
        $scope.Address = '';
        $scope.Contact = '';
    }


    $scope.getForUpdate = function (Tourist) {
        $scope.UpdateTouNo = Tourist.TouristID;
        $scope.UpdateName = Tourist.Name;
        $scope.UpdateEmail = Tourist.Email;
        $scope.UpdateAddress = Tourist.Address;
        $scope.UpdateContact = Tourist.Contact;
    }


    $scope.getForDelete = function (Tourist) {
        $scope.UpdateTouNo = Tourist.TouristID;
        $scope.UpdateName = Tourist.Name;
    }


    $scope.update = function () {
        var Tourist = {
            TouristID: $scope.UpdateTouNo,
            Name: $scope.UpdateName,
            Email: $scope.UpdateEmail,
            Address: $scope.UpdateAddress,
            Contact: $scope.UpdateContact
        };
        var updaterecords = touristService.update(Tourist);
        updaterecords.then(function (d) {
            if (d.data.success === true) {
                loadTourists();
                alert("Tourist updated successfully");
                $scope.resetUpdate();
            }
            else {
                alert("Tourist not updated.");
            }
        },
            function () {
                alert("Error occured while updating tourist record");
            });
    }

    $scope.resetUpdate = function () {
        $scope.UpdateTouNo = '';
        $scope.UpdateName = '';
        $scope.UpdateEmail = '';
        $scope.UpdateAddress = '';
        $scope.UpdateContact = '';
    }


    $scope.delete = function (UpdateTouNo) {
        var deleterecord = touristService.delete($scope.UpdateTouNo);
        deleterecord.then(function (d) {
            if (d.data.success === true) {
                loadTourists();
                alert("Tourist deleted succussfully");
            }
            else {
                alert("Tourist not deleted.");
            }
        });
    }
});
