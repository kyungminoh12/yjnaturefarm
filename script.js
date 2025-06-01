
document.getElementById("missionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("missionForm").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
});
