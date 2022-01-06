//                                   --- CHECK IMPLEMENTATION ---

// -------------------------------------------------------------common function---------------------------------------------------

function succerror(elem, checkElement) {
    if (checkElement) {
        elem.style.backgroundColor = "#ED7777";
        elem.style.color = "white";
        elem.style.border = "1px solid #ED7777";
    } else {
        elem.style.backgroundColor = "#48B736";
        elem.style.color = "white";
        elem.style.border = "1px solid #48B736";
    }
}

// добавляем иконку статуса после номера вопроса

function addImage(status, ancestor, appClass, position) {
    let object = document.createElement("img");
    object.style.marginLeft = "10px";

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");

    // получаем ширину элемента, чтобы выровнять по горизонтали
    let widthAdjacentElement = elem.getBoundingClientRect().width;

    // получаем отступы элемента, для того же
    let leftIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-left");

    let rightIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-right");

    // устанавливаем её нашему блоку
    objDiv.style.width = widthAdjacentElement;

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginLeft = "85px";
        objDiv.style.position = "absolute";

        let parent = elem.parentElement;

        parent.style.width = "150px";
        parent.style.display = "flex";
        parent.style.alignItems = "center";
        parent.style.justifyContent = "space-between";

        parent.style.marginRight = "15px";

        document.getElementsByClassName("content2")[0].style.width = "268px";
    } else if (elem.parentElement.parentElement.className === "content8") {
        if (elem.parentElement.className === "rightExpression8") {
            objDiv.style.marginLeft = "80px";
        } else {
            objDiv.style.marginLeft = "55px";
        }

        objDiv.style.position = "absolute";

        let parent = elem.parentElement;

        parent.style.width = "150px";
        parent.style.alignItems = "center";
        parent.style.justifyContent = "space-between";

        parent.style.marginRight = "15px";

        document.getElementsByClassName("content8")[0].style.width = "458px";
    } else {
        objDiv.style.marginLeft = leftIndent;
    }

    objDiv.style.marginRight = rightIndent;

    if (
        elem.parentElement.parentElement.parentElement.className === "content10"
    ) {
        objDiv.style.paddingBottom = "5px";
    } else {
        objDiv.style.paddingBottom = "10px";
    }

    objDiv.style.display = "flex";
    objDiv.style.justifyContent = "center";
    objDiv.style.alignItems = "center";

    let obj = document.createElement("img");

    if (status === "success") {
        obj.src = "./pictures/successMiniIcon.svg";
    } else {
        obj.src = "./pictures/failureMiniIcon.svg";
    }

    objDiv.appendChild(obj);

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginTop = "-45px";
    } else if (elem.parentElement.parentElement.className === "content8") {
        objDiv.style.marginTop = "-55px";
    } else {
        objDiv.style.marginTop = "-23px";
    }

    // устанавливаем её в нужное место
    let elementParent = elem.parentElement;
    elementParent.insertBefore(objDiv, elem);
}

// делаем появление мини-иконок над областью проверки

function createMiniIcon(property, element) {
    if (property === "right") {
        addMiniIcon(element, "success");
    } else {
        addMiniIcon(element, "failure");
    }
}
// ----------------------------------------------------------------------------------------------------------------------------

// 1 QUESTION

let numbers1 = {
    leftNumber: "",
    centerNumber: "",
    rightNumber: "",
};

document.getElementById("leftNumber").onchange = function (e) {
    if (e.target.value == 12) {
        numbers1.leftNumber = "right";
    } else {
        numbers1.leftNumber = "wrong";
    }
};

document.getElementById("centerNumber").onchange = function (e) {
    if (e.target.value == 4) {
        numbers1.centerNumber = "right";
    } else {
        numbers1.centerNumber = "wrong";
    }
};

document.getElementById("rightNumber").onchange = function (e) {
    if (e.target.value == 8) {
        numbers1.rightNumber = "right";
    } else {
        numbers1.rightNumber = "wrong";
    }
};

function question1() {
    if (
        numbers1.leftNumber != "" &&
        numbers1.centerNumber != "" &&
        numbers1.rightNumber != ""
    ) {
        succerror(
            document.getElementById("leftNumber"),
            numbers1.leftNumber === "wrong"
        );

        succerror(
            document.getElementById("centerNumber"),
            numbers1.centerNumber === "wrong"
        );

        succerror(
            document.getElementById("rightNumber"),
            numbers1.rightNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers1.leftNumber,
            document.getElementById("leftNumber")
        );
        createMiniIcon(
            numbers1.centerNumber,
            document.getElementById("centerNumber")
        );
        createMiniIcon(
            numbers1.rightNumber,
            document.getElementById("rightNumber")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers1.leftNumber === "right" &&
            numbers1.centerNumber === "right" &&
            numbers1.rightNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        }
    } else {
        document.getElementById("leftNumber").style.border =
            "2px solid #FFB47D";
        document.getElementById("centerNumber").style.border =
            "2px solid #FFB47D";
        document.getElementById("rightNumber").style.border =
            "2px solid #FFB47D";
    }
}

// 2 QUESTION

let numbers2 = {
    leftNumber: "",
    rightNumber: "",
};

document.getElementById("leftNumber2").onchange = function (e) {
    if (e.target.value == 16) {
        numbers2.leftNumber = "right";
    } else {
        numbers2.leftNumber = "wrong";
    }
};

document.getElementById("rightNumber2").onchange = function (e) {
    if (e.target.value == 2) {
        numbers2.rightNumber = "right";
    } else {
        numbers2.rightNumber = "wrong";
    }
};

function question2() {
    if (numbers2.leftNumber != "" && numbers2.rightNumber != "") {
        succerror(
            document.getElementById("leftNumber2"),
            numbers2.leftNumber === "wrong"
        );

        succerror(
            document.getElementById("rightNumber2"),
            numbers2.rightNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers2.leftNumber,
            document.getElementById("leftNumber2")
        );

        createMiniIcon(
            numbers2.rightNumber,
            document.getElementById("rightNumber2")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers2.leftNumber === "right" &&
            numbers2.rightNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );
        }
    } else {
        document.getElementById("leftNumber2").style.border =
            "2px solid #FFB47D";

        document.getElementById("rightNumber2").style.border =
            "2px solid #FFB47D";
    }
}

// 3 QUESTION

let numbers3 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

document.getElementById("firstNumber3").onchange = function (e) {
    if (e.target.value == 2) {
        numbers3.firstNumber = "right";
    } else {
        numbers3.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber3").onchange = function (e) {
    if (e.target.value == 4) {
        numbers3.secondNumber = "right";
    } else {
        numbers3.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber3").onchange = function (e) {
    if (e.target.value == 5) {
        numbers3.thirdNumber = "right";
    } else {
        numbers3.thirdNumber = "wrong";
    }
};

document.getElementById("fourthNumber3").onchange = function (e) {
    if (e.target.value == 11) {
        numbers3.fourthNumber = "right";
    } else {
        numbers3.fourthNumber = "wrong";
    }
};

function question3() {
    if (
        numbers3.firstNumber != "" &&
        numbers3.secondNumber != "" &&
        numbers3.thirdNumber != "" &&
        numbers3.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber3"),
            numbers3.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber3"),
            numbers3.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber3"),
            numbers3.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber3"),
            numbers3.fourthNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers3.firstNumber,
            document.getElementById("firstNumber3")
        );

        createMiniIcon(
            numbers3.secondNumber,
            document.getElementById("secondNumber3")
        );

        createMiniIcon(
            numbers3.thirdNumber,
            document.getElementById("thirdNumber3")
        );

        createMiniIcon(
            numbers3.fourthNumber,
            document.getElementById("fourthNumber3")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers3.firstNumber === "right" &&
            numbers3.secondNumber === "right" &&
            numbers3.thirdNumber === "right" &&
            numbers3.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        }
    } else {
        document.getElementById("firstNumber3").style.border =
            "2px solid #FFB47D";

        document.getElementById("secondNumber3").style.border =
            "2px solid #FFB47D";

        document.getElementById("thirdNumber3").style.border =
            "2px solid #FFB47D";

        document.getElementById("fourthNumber3").style.border =
            "2px solid #FFB47D";
    }
}

// 4 QUESTION

let numbers4 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

document.getElementById("firstNumber4").onchange = function (e) {
    if (e.target.value == 5) {
        numbers4.firstNumber = "right";
    } else {
        numbers4.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber4").onchange = function (e) {
    if (e.target.value == 4) {
        numbers4.secondNumber = "right";
    } else {
        numbers4.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber4").onchange = function (e) {
    if (e.target.value == 9) {
        numbers4.thirdNumber = "right";
    } else {
        numbers4.thirdNumber = "wrong";
    }
};

function question4() {
    if (
        numbers4.firstNumber != "" &&
        numbers4.secondNumber != "" &&
        numbers4.thirdNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber4"),
            numbers4.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber4"),
            numbers4.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber4"),
            numbers4.thirdNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers4.firstNumber,
            document.getElementById("firstNumber4")
        );

        createMiniIcon(
            numbers4.secondNumber,
            document.getElementById("secondNumber4")
        );

        createMiniIcon(
            numbers4.thirdNumber,
            document.getElementById("thirdNumber4")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers4.firstNumber === "right" &&
            numbers4.secondNumber === "right" &&
            numbers4.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
        }
    } else {
        document.getElementById("firstNumber4").style.border =
            "2px solid #FFB47D";

        document.getElementById("secondNumber4").style.border =
            "2px solid #FFB47D";

        document.getElementById("thirdNumber4").style.border =
            "2px solid #FFB47D";
    }
}

// 5 QUESTION

let selectedButton = "",
    selectedNameButton;

document.getElementById("firstBtn5").onclick = function () {
    let clickedElement = document.getElementById("firstBtn5");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "right";
    selectedNameButton = "firstBtn5";

    document.getElementById("secondBtn5").style.backgroundColor = "white";
    document.getElementById("secondBtn5").style.color = "black";
    document.getElementById("secondBtn5").style.border = "1px solid black";

    document.getElementById("thirdBtn5").style.backgroundColor = "white";
    document.getElementById("thirdBtn5").style.color = "black";
    document.getElementById("thirdBtn5").style.border = "1px solid black";

    document.getElementById("fourthBtn5").style.backgroundColor = "white";
    document.getElementById("fourthBtn5").style.color = "black";
    document.getElementById("fourthBtn5").style.border = "1px solid black";
};

document.getElementById("secondBtn5").onclick = function () {
    let clickedElement = document.getElementById("secondBtn5");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "secondBtn5";

    document.getElementById("thirdBtn5").style.backgroundColor = "white";
    document.getElementById("thirdBtn5").style.color = "black";
    document.getElementById("thirdBtn5").style.border = "1px solid black";

    document.getElementById("fourthBtn5").style.backgroundColor = "white";
    document.getElementById("fourthBtn5").style.color = "black";
    document.getElementById("fourthBtn5").style.border = "1px solid black";

    document.getElementById("firstBtn5").style.backgroundColor = "white";
    document.getElementById("firstBtn5").style.color = "black";
    document.getElementById("firstBtn5").style.border = "1px solid black";
};

document.getElementById("thirdBtn5").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn5");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "thirdBtn5";

    document.getElementById("fourthBtn5").style.backgroundColor = "white";
    document.getElementById("fourthBtn5").style.color = "black";
    document.getElementById("fourthBtn5").style.border = "1px solid black";

    document.getElementById("firstBtn5").style.backgroundColor = "white";
    document.getElementById("firstBtn5").style.color = "black";
    document.getElementById("firstBtn5").style.border = "1px solid black";

    document.getElementById("secondBtn5").style.backgroundColor = "white";
    document.getElementById("secondBtn5").style.color = "black";
    document.getElementById("secondBtn5").style.border = "1px solid black";
};

document.getElementById("fourthBtn5").onclick = function () {
    let clickedElement = document.getElementById("fourthBtn5");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "fourthBtn5";

    document.getElementById("firstBtn5").style.backgroundColor = "white";
    document.getElementById("firstBtn5").style.color = "black";
    document.getElementById("firstBtn5").style.border = "1px solid black";

    document.getElementById("secondBtn5").style.backgroundColor = "white";
    document.getElementById("secondBtn5").style.color = "black";
    document.getElementById("secondBtn5").style.border = "1px solid black";

    document.getElementById("thirdBtn5").style.backgroundColor = "white";
    document.getElementById("thirdBtn5").style.color = "black";
    document.getElementById("thirdBtn5").style.border = "1px solid black";
};

function question5() {
    if (selectedButton != "") {
        succerror(
            document.getElementById(selectedNameButton),
            selectedButton === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        }
    } else {
        document.getElementById("firstBtn5").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn5").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn5").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn5").style.border =
            "2px solid #FFB47D";
    }
}

// 6 QUESTION

let selectedButton6 = {
    firstBtn6: "",
    secondBtn6: "",
    thirdBtn6: "",
    fourthBtn6: "",
    fifthBtn6: "",
};

document.getElementById("firstBtn6").onclick = function () {
    let clickedElement = document.getElementById("firstBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton6.firstBtn6 = "right";
};

document.getElementById("secondBtn6").onclick = function () {
    let clickedElement = document.getElementById("secondBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton6.secondBtn6 = "right";
};

document.getElementById("thirdBtn6").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton6.thirdBtn6 = "right";
};

document.getElementById("fourthBtn6").onclick = function () {
    let clickedElement = document.getElementById("fourthBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton6.fourthBtn6 = "right";
};

document.getElementById("fifthBtn6").onclick = function () {
    let clickedElement = document.getElementById("fifthBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton6.fifthBtn6 = "right";
};

function question6() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton6) {
        if (selectedButton6[key] !== "") {
            selectedButtons.push(selectedButton6[key]);
            namesSelectedButtons.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        namesSelectedButtons.map((el, index) => {
            succerror(
                document.getElementById(el),
                selectedButtons[index] === "wrong"
            );
        });

        // выносим общий статус к номеру вопроса

        if (selectedButtons.includes("right") === true) {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        }
    } else {
        document.getElementById("firstBtn6").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn6").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn6").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn6").style.border =
            "2px solid #FFB47D";
        document.getElementById("fifthBtn6").style.border = "2px solid #FFB47D";
    }
}

// 8 QUESTION

let numbers8 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

document.getElementById("firstNumber8").onchange = function (e) {
    if (e.target.value == 3) {
        numbers8.firstNumber = "right";
    } else {
        numbers8.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber8").onchange = function (e) {
    if (e.target.value == 8) {
        numbers8.secondNumber = "right";
    } else {
        numbers8.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber8").onchange = function (e) {
    if (e.target.value == 12) {
        numbers8.thirdNumber = "right";
    } else {
        numbers8.thirdNumber = "wrong";
    }
};

function question8() {
    if (
        numbers8.firstNumber != "" &&
        numbers8.secondNumber != "" &&
        numbers8.thirdNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber8"),
            numbers8.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber8"),
            numbers8.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber8"),
            numbers8.thirdNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers8.firstNumber,
            document.getElementById("firstNumber8")
        );

        createMiniIcon(
            numbers8.secondNumber,
            document.getElementById("secondNumber8")
        );

        createMiniIcon(
            numbers8.thirdNumber,
            document.getElementById("thirdNumber8")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers8.firstNumber === "right" &&
            numbers8.secondNumber === "right" &&
            numbers8.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        }
    } else {
        document.getElementById("firstNumber8").style.border =
            "2px solid #FFB47D";

        document.getElementById("secondNumber8").style.border =
            "2px solid #FFB47D";

        document.getElementById("thirdNumber8").style.border =
            "2px solid #FFB47D";
    }
}

// 10 QUESTION

let numbers10 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

document.getElementById("firstNumber10").onchange = function (e) {
    if (e.target.value == 1) {
        numbers10.firstNumber = "right";
    } else {
        numbers10.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber10").onchange = function (e) {
    if (e.target.value == 9) {
        numbers10.secondNumber = "right";
    } else {
        numbers10.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber10").onchange = function (e) {
    if (e.target.value == 8) {
        numbers10.thirdNumber = "right";
    } else {
        numbers10.thirdNumber = "wrong";
    }
};

document.getElementById("fourthNumber10").onchange = function (e) {
    if (e.target.value == 0) {
        numbers10.fourthNumber = "right";
    } else {
        numbers10.fourthNumber = "wrong";
    }
};

function question10() {
    if (
        numbers10.firstNumber != "" &&
        numbers10.secondNumber != "" &&
        numbers10.thirdNumber != "" &&
        numbers10.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber10"),
            numbers10.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber10"),
            numbers10.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber10"),
            numbers10.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber10"),
            numbers10.fourthNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers10.firstNumber,
            document.getElementById("firstNumber10")
        );

        createMiniIcon(
            numbers10.secondNumber,
            document.getElementById("secondNumber10")
        );

        createMiniIcon(
            numbers10.thirdNumber,
            document.getElementById("thirdNumber10")
        );

        createMiniIcon(
            numbers10.fourthNumber,
            document.getElementById("fourthNumber10")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers10.firstNumber === "right" &&
            numbers10.secondNumber === "right" &&
            numbers10.thirdNumber === "right" &&
            numbers10.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        }
    } else {
        document.getElementById("firstNumber10").style.border =
            "2px solid #FFB47D";

        document.getElementById("secondNumber10").style.border =
            "2px solid #FFB47D";

        document.getElementById("thirdNumber10").style.border =
            "2px solid #FFB47D";

        document.getElementById("fourthNumber10").style.border =
            "2px solid #FFB47D";
    }
}

// 12 QUESTION

let numbers12 = {
    firstNumber: "",
    secondNumber: "",
};

document.getElementById("leftNumber12").onchange = function (e) {
    if (e.target.value == 45) {
        numbers12.firstNumber = "right";
    } else {
        numbers12.firstNumber = "wrong";
    }
};

document.getElementById("rightNumber12").onchange = function (e) {
    if (e.target.value == 75) {
        numbers12.secondNumber = "right";
    } else {
        numbers12.secondNumber = "wrong";
    }
};

function question12() {
    if (numbers12.firstNumber != "" && numbers12.secondNumber != "") {
        succerror(
            document.getElementById("leftNumber12"),
            numbers12.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("rightNumber12"),
            numbers12.secondNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers12.firstNumber === "right" &&
            numbers12.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        }
    } else {
        document.getElementById("leftNumber12").style.border =
            "2px solid #FFB47D";

        document.getElementById("rightNumber12").style.border =
            "2px solid #FFB47D";
    }
}

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
};

document.getElementById("firstNumber13").onchange = function (e) {
    if (e.target.value == 18) {
        numbers13.firstNumber = "right";
    } else {
        numbers13.firstNumber = "wrong";
    }
};

function question13() {
    if (numbers13.firstNumber != "") {
        succerror(
            document.getElementById("firstNumber13"),
            numbers13.firstNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers13.firstNumber,
            document.getElementById("firstNumber13")
        );

        // выносим общий статус к номеру вопроса

        if (numbers13.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        }
    } else {
        document.getElementById("firstNumber13").style.border =
            "2px solid #FFB47D";
    }
}

// 14 QUESTION

let selectedButton14 = "",
    selectedNameButton14;

document.getElementById("firstBtn14").onclick = function () {
    let clickedElement = document.getElementById("firstBtn14");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton14 = "right";
    selectedNameButton14 = "firstBtn14";

    document.getElementById("secondBtn14").style.backgroundColor = "white";
    document.getElementById("secondBtn14").style.color = "black";
    document.getElementById("secondBtn14").style.border = "1px solid black";

    document.getElementById("thirdBtn14").style.backgroundColor = "white";
    document.getElementById("thirdBtn14").style.color = "black";
    document.getElementById("thirdBtn14").style.border = "1px solid black";
};

document.getElementById("secondBtn14").onclick = function () {
    let clickedElement = document.getElementById("secondBtn14");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton14 = "wrong";
    selectedNameButton14 = "secondBtn14";

    document.getElementById("thirdBtn14").style.backgroundColor = "white";
    document.getElementById("thirdBtn14").style.color = "black";
    document.getElementById("thirdBtn14").style.border = "1px solid black";

    document.getElementById("firstBtn14").style.backgroundColor = "white";
    document.getElementById("firstBtn14").style.color = "black";
    document.getElementById("firstBtn14").style.border = "1px solid black";
};

document.getElementById("thirdBtn14").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn14");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton14 = "wrong";
    selectedNameButton14 = "thirdBtn14";

    document.getElementById("secondBtn14").style.backgroundColor = "white";
    document.getElementById("secondBtn14").style.color = "black";
    document.getElementById("secondBtn14").style.border = "1px solid black";

    document.getElementById("firstBtn14").style.backgroundColor = "white";
    document.getElementById("firstBtn14").style.color = "black";
    document.getElementById("firstBtn14").style.border = "1px solid black";
};

function question14() {
    if (selectedButton14 != "") {
        succerror(
            document.getElementById(selectedNameButton14),
            selectedButton14 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton14 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        }
    } else {
        document.getElementById("firstBtn14").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn14").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn14").style.border =
            "2px solid #FFB47D";
    }
}

// 15 QUESTION

function question15() {
    let wrongOrder = "yes";
    let correctOrder = ["centerTree", "rightTree", "leftTree"];
    let currentOrder = [];
    let howManyAreSelected = 0;
    let childs = document.getElementsByClassName("topRow15")[0].children;

    for (let i = 0; i < childs.length; i++) {
        if (childs[i].children[0].id.slice(0, -1) !== "emptyPlace") {
            currentOrder.push(childs[i].children[0].id.slice(0, -1));
            howManyAreSelected++;
        }
    }

    if (howManyAreSelected > 0) {
        // теперь нужно проверить на соответствие данных
        currentOrder.map((el, index) => {
            if (el === correctOrder[index]) {
                // alert("true");
                document.getElementById(el + "0").style.border =
                    "2px solid green";
            } else {
                document.getElementById(el + "0").style.border =
                    "2px solid red";
                wrongOrder = "no";
            }

            document.getElementById(el + "0").style.borderRadius = "5px";
        });

        if (wrongOrder === "yes") {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        }
    } else {
        document.getElementById("emptyPlace0").style.border =
            "2px solid #FFB47D";
        document.getElementById("emptyPlace0").style.borderRadius = "5px";

        document.getElementById("emptyPlace1").style.border =
            "2px solid #FFB47D";
        document.getElementById("emptyPlace1").style.borderRadius = "5px";

        document.getElementById("emptyPlace2").style.border =
            "2px solid #FFB47D";
        document.getElementById("emptyPlace2").style.borderRadius = "5px";
    }
}

// 16 QUESTION

let selectedFigures16 = {
    firstFigure16: "",
    secondFigure16: "",
    thirdFigure16: "",
    fourthFigure16: "",
};

document.getElementById("firstFigure16").onclick = function () {
    let clickedElement = document.getElementById("firstFigure16");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures16.firstFigure16 = "right";
};

document.getElementById("secondFigure16").onclick = function () {
    let clickedElement = document.getElementById("secondFigure16");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures16.secondFigure16 = "wrong";
};

document.getElementById("thirdFigure16").onclick = function () {
    let clickedElement = document.getElementById("thirdFigure16");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures16.thirdFigure16 = "right";
};

document.getElementById("fourthFigure16").onclick = function () {
    let clickedElement = document.getElementById("fourthFigure16");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures16.fourthFigure16 = "wrong";
};

function question16() {
    let selectedFigures = [],
        selButsName = [],
        isTheArrayEmpty = 0;

    for (let key in selectedFigures16) {
        if (selectedFigures16[key] !== "") {
            selectedFigures.push(selectedFigures16[key]);
            selButsName.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        selButsName.map((el, index) => {
            if (selectedFigures[index] === "wrong") {
                document.getElementById(el).style.border = "2px solid #ED7777";
            } else {
                document.getElementById(el).style.border = "2px solid #48B736";
            }
        });

        // выносим общий статус к номеру вопроса

        if (selectedFigures.includes("right") === true) {
            addImage(
                "success",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        }
    } else {
        document.getElementById("firstFigure16").style.border =
            "2px solid #FFB47D";
        document.getElementById("firstFigure16").style.borderRadius = "5px";

        document.getElementById("secondFigure16").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondFigure16").style.borderRadius = "5px";

        document.getElementById("thirdFigure16").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdFigure16").style.borderRadius = "5px";

        document.getElementById("fourthFigure16").style.border =
            "2px solid #FFB47D";
        document.getElementById("fourthFigure16").style.borderRadius = "5px";
    }
}

// 19 QUESTION

let selectedFigures19 = {
    firstFigure19: "",
    secondFigure19: "",
    thirdFigure19: "",
    fourthFigure19: "",
};

document.getElementById("firstFigure19").onclick = function () {
    let clickedElement = document.getElementById("firstFigure19");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures19.firstFigure19 = "right";
};

document.getElementById("secondFigure19").onclick = function () {
    let clickedElement = document.getElementById("secondFigure19");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures19.secondFigure19 = "wrong";
};

document.getElementById("thirdFigure19").onclick = function () {
    let clickedElement = document.getElementById("thirdFigure19");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures19.thirdFigure19 = "right";
};

document.getElementById("fourthFigure19").onclick = function () {
    let clickedElement = document.getElementById("fourthFigure19");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures19.fourthFigure19 = "wrong";
};

function question19() {
    let selectedFigures = [],
        selButsName = [],
        isTheArrayEmpty = 0;

    for (let key in selectedFigures19) {
        if (selectedFigures19[key] !== "") {
            selectedFigures.push(selectedFigures19[key]);
            selButsName.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        selButsName.map((el, index) => {
            if (selectedFigures[index] === "wrong") {
                document.getElementById(el).style.border = "2px solid #ED7777";
            } else {
                document.getElementById(el).style.border = "2px solid #48B736";
            }
        });

        // выносим общий статус к номеру вопроса

        if (selectedFigures.includes("right") === true) {
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        }
    } else {
        document.getElementById("firstFigure19").style.border =
            "2px solid #FFB47D";
        document.getElementById("firstFigure19").style.borderRadius = "5px";

        document.getElementById("secondFigure19").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondFigure19").style.borderRadius = "5px";

        document.getElementById("thirdFigure19").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdFigure19").style.borderRadius = "5px";

        document.getElementById("fourthFigure19").style.border =
            "2px solid #FFB47D";
        document.getElementById("fourthFigure19").style.borderRadius = "5px";
    }
}

// 20 QUESTION

let selectedButton20 = "",
    selectedNameButton20;

document.getElementById("firstBtn20").onclick = function () {
    let clickedElement = document.getElementById("firstBtn20");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton20 = "wrong";
    selectedNameButton20 = "firstBtn20";

    document.getElementById("secondBtn20").style.backgroundColor = "white";
    document.getElementById("secondBtn20").style.color = "black";
    document.getElementById("secondBtn20").style.border = "1px solid black";

    document.getElementById("thirdBtn20").style.backgroundColor = "white";
    document.getElementById("thirdBtn20").style.color = "black";
    document.getElementById("thirdBtn20").style.border = "1px solid black";
};

document.getElementById("secondBtn20").onclick = function () {
    let clickedElement = document.getElementById("secondBtn20");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton20 = "right";
    selectedNameButton20 = "secondBtn20";

    document.getElementById("thirdBtn20").style.backgroundColor = "white";
    document.getElementById("thirdBtn20").style.color = "black";
    document.getElementById("thirdBtn20").style.border = "1px solid black";

    document.getElementById("firstBtn20").style.backgroundColor = "white";
    document.getElementById("firstBtn20").style.color = "black";
    document.getElementById("firstBtn20").style.border = "1px solid black";
};

document.getElementById("thirdBtn20").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn20");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton20 = "wrong";
    selectedNameButton20 = "thirdBtn20";

    document.getElementById("secondBtn20").style.backgroundColor = "white";
    document.getElementById("secondBtn20").style.color = "black";
    document.getElementById("secondBtn20").style.border = "1px solid black";

    document.getElementById("firstBtn20").style.backgroundColor = "white";
    document.getElementById("firstBtn20").style.color = "black";
    document.getElementById("firstBtn20").style.border = "1px solid black";
};

function question20() {
    if (selectedButton20 != "") {
        succerror(
            document.getElementById(selectedNameButton20),
            selectedButton20 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton20 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );
        }
    } else {
        document.getElementById("firstBtn20").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn20").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn20").style.border =
            "2px solid #FFB47D";
    }
}

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question8();
    question10();
    question12();
    question13();
    question14();
    question15();
    question16();
    question19();
    question20();
};

// -------------------------------------------------------------- ROTATE RULER FOR 14 QUESTION -----------------------------------------------

let ruler14question = document.getElementsByClassName("ruler14")[0];

dragElement(ruler14question);

const rotationFunction = new Propeller(ruler14question, {
    inertia: 0,
});

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

ruler14question.addEventListener("mousedown", (e) => {
    if (
        (e.target.className !== "leftEdge" ||
            e.target.className !== "rightEdge") &&
        e.target.className === "imgRuler"
    ) {
        rotationFunction.stop();
        dragElement(ruler14question);
    }

    if (
        (e.target.className === "leftEdge" ||
            e.target.className === "rightEdge") &&
        e.target.className !== "imgRuler"
    ) {
        rotationFunction.onRotated(e);
    }
});

// ------------------------------------------------------------ ALL DRAG AND DROP -------------------------------------------------------------

// common commands

function allowDrop(e) {
    e.preventDefault();
}

// 15 QUESTION

function drag15(e) {
    localStorage.setItem("idOrigin15question15class", e.target.id);
}

function drop15(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin15question15class");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/15que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/15que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}
