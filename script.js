function showFields() {
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (gender === "male") {
        document.getElementById('ageGroup').classList.remove('hidden');
        document.getElementById('incomeGroup').classList.add('hidden');
    } else if (gender === "female") {
        document.getElementById('ageGroup').classList.add('hidden');
        document.getElementById('incomeGroup').classList.remove('hidden');
    }
}