function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
)

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "do You Agree",
    () => alert("you agreed"),
    () => alert("you canceled the execution")
)