$("#btnSubmit").click(function () {
    var name = $("#txtName").val();
    var hours = parseFloat($("#txtHours").val());

    if (!isNaN(hours) && hours >= 0) {
        var totalCost = hours * 25;
        $("#totalOutput").text(name + "'s Total Cost: $" + totalCost.toFixed(2));

        $("#txtName").val('');
        $("#txtHours").val('');
    } else {
        alert("Please enter a valid positive numeric value for hours.");
    }
});