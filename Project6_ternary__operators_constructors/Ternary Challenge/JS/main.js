function Check_Voting_Age() {
    var Age, Voting_Status;
    Age = document.getElementById("Age").value;
    Voting_Status = (Age >= 18) ? "You can vote!" : "You are not old enough to vote";
    document.getElementById("Result").innerHTML = Voting_Status;
}