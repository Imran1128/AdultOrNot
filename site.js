
    var adultCard = document.getElementById("adult");
    var teenCard = document.getElementById("teenage");

    function adultOrNot() {
        var age = document.getElementById("age").value;

        if (age === "") {
            adultCard.style.display = "block";
            teenCard.style.display = "block";
        } else if (age < 18) {
            adultCard.style.display = "none";
            teenCard.style.display = "block";
        } else {
            adultCard.style.display = "block";
            teenCard.style.display = "none";
        }
    }

