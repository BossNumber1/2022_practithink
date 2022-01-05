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

    if (elem.parentElement.className === "row") {
        objDiv.classList.add("miniIcon");
    }

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
    objDiv.style.marginLeft = leftIndent;
    objDiv.style.marginRight = rightIndent;

    if (elem.parentElement.parentElement.className === "btns3") {
        objDiv.style.paddingBottom = "0px";
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

    if (
        elem.parentElement.className === "buttonContent" ||
        elem.parentElement.parentElement.className === "btns" ||
        elem.parentElement.parentElement.className === "btns3"
    ) {
        objDiv.style.backgroundColor = "white";
        objDiv.style.border = "none";
    } else {
        objDiv.style.marginTop = "-23px";
    }

    if (elem.parentElement.className === "buttonContent") {
        objDiv.style.marginTop = "-30px";
    } else if (elem.parentElement.parentElement.className === "btns") {
        objDiv.style.marginTop = "-45px";
    } else if (elem.parentElement.parentElement.className === "btns3") {
        objDiv.style.marginTop = "-45px";
        document.getElementsByClassName("question2")[0].style.zIndex = "2";
    }

    // устаанавливаем её в нужное место
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
            numbers1.leftNumber,
            document.getElementById("leftNumber2")
        );

        createMiniIcon(
            numbers1.rightNumber,
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

document.getElementById("submit").onclick = function () {
    question1();
    question2();
};
