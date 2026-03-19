const feePerSeat = 1200;
const onlineFee = 100;
const campusFee = 250;
const discountLimit = 5000;

const seatsInput = document.getElementById("seats");
const seatError = document.getElementById("seatError");
const courseTotalText = document.getElementById("courseTotal");
const discountMessage = document.getElementById("discountMessage");
const classTypeSelect = document.getElementById("classType");
const finalAmountText = document.getElementById("finalAmount");
const confirmCheck = document.getElementById("confirmCheck");
const submitBtn = document.getElementById("submitBtn");

function calculateCourseTotal() {
    let seats = parseInt(seatsInput.value);

    if (isNaN(seats) || seats <= 0) {
        seatError.innerText = "Seats cannot be zero or negative. Reset to 1.";
        seats = 1;
        seatsInput.value = 1;
    } else {
        seatError.innerText = "";
    }

    const totalCourseFee = seats * feePerSeat;
    courseTotalText.innerText = "Total Course Fee: " + totalCourseFee + " Tk";

    if (totalCourseFee > discountLimit) {
        discountMessage.innerText = "You are eligible for a special discount.";
    } else {
        discountMessage.innerText = "";
    }

    return totalCourseFee;
}

function calculateFinalAmount() {
    const totalCourseFee = calculateCourseTotal();
    let extraFee = 0;

    if (classTypeSelect.value === "online") {
        extraFee = onlineFee;
    } else if (classTypeSelect.value === "campus") {
        extraFee = campusFee;
    }

    const finalAmount = totalCourseFee + extraFee;
    finalAmountText.innerText = "Final Payable Amount: " + finalAmount + " Tk";
}

function toggleSubmitButton() {
    if (confirmCheck.checked) {
        submitBtn.style.display = "block";
    } else {
        submitBtn.style.display = "none";
    }
}

seatsInput.addEventListener("input", calculateFinalAmount);
classTypeSelect.addEventListener("change", calculateFinalAmount);
confirmCheck.addEventListener("change", toggleSubmitButton);

calculateFinalAmount();
toggleSubmitButton();