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

// 7 QUESTION

function drag7(e) {
    localStorage.setItem("idOrigin7question3class", e.target.id);
    localStorage.setItem(
        "classElemGrandparent7",
        e.target.parentElement.parentElement.className
    );
    localStorage.setItem("positionElem7", e.target.dataset.position);
    localStorage.setItem("textElem7", e.target.dataset.text);
    localStorage.setItem("classElem7", e.target.dataset.class);
}

function drop7(e) {
    // получаем id несомого элемента и класс прародителя
    let classElemGrandparent = localStorage.getItem("classElemGrandparent7");
    let idTakenElement = localStorage.getItem("idOrigin7question3class");
    let positionElem = localStorage.getItem("positionElem7");
    let classElem = localStorage.getItem("classElem7");
    let textElem = localStorage.getItem("textElem7");
    let objectName = idTakenElement.slice(0, -1);

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orignalElem = document.getElementById(idTakenElement);
    let currentElem = document.getElementById(currentId);

    // создаём новый объект
    let objectBeingCreated = document.createElement("div");
    objectBeingCreated.textContent = textElem;
    objectBeingCreated.className = classElem;
    objectBeingCreated.setAttribute("draggable", true);
    objectBeingCreated.setAttribute("data-text", textElem);
    objectBeingCreated.style.marginLeft = "10px";
    objectBeingCreated.style.marginTop = "10px";
    objectBeingCreated.id = objectName;
    objectBeingCreated.setAttribute("data-position", positionElem);
    objectBeingCreated.alt = idTakenElement;
    objectBeingCreated.style.cursor = "grab";

    // меняем поля местами
    currentElem.appendChild(objectBeingCreated);

    if (classElemGrandparent != "true" || classElemGrandparent != "false") {
        orignalElem.style.opacity = "0.5";
        orignalElem.textContent = "";
        orignalElem.style.cursor = "default";
    }

    if (classElemGrandparent == "true" || classElemGrandparent == "false") {
        e.target.style.opacity = "1";
        e.target.textContent = textElem;
        e.target.id = idTakenElement + "7";
        e.target.style.cursor = "grab";

        document.getElementById(idTakenElement).remove();
    }
}

// 9 QUESTION

function drag9(e) {
    localStorage.setItem("idOrigin9question", e.target.id);
}

function drop9(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin9question");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/9que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/9que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    // if (nameObjectCurrent === "emptyPlace") {
    //     currentElement.parentElement.style.backgroundColor = "white";
    // }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 11 QUESTION

// для кубиков

function drag11(e) {
    localStorage.setItem("idOrig11", e.target.id);
}

function drop11(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrig11");
    let nameObjectOrig = idOrig.slice(0, -2);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -2);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/11que/" + nameObjectOrig + ".svg";
    currentElement.style.opacity = "1";
    currentElement.style.cursor = "grab";

    orig.src = "./pictures/11que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;

    // меняем вид курсора
    orig.style.cursor = "default";
}

// для полей ввода

function drag11p2(e) {
    localStorage.setItem("idSign11", e.target.id);
    localStorage.setItem(
        "classGrandparentElement11",
        e.target.parentElement.className
    );
}

function drop11p2(e) {
    // получаем id взятого элемента и класс прародителя
    let idSign = localStorage.getItem("idSign11");
    let classGrandparentElement = localStorage.getItem(
        "classGrandparentElement11"
    );

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orignalElem = document.getElementById(idSign);
    let currentElem = document.getElementById(currentId);

    // меняем поля местами
    currentElem.parentElement.className = classGrandparentElement;
    currentElem.id = idSign;
    currentElem.textContent = orignalElem.textContent;
    currentElem.setAttribute("draggable", true);

    orignalElem.textContent = "";
    orignalElem.id = currentId;

    if (orignalElem.parentElement.parentElement.className !== "inputs11") {
        currentElem.style.backgroundColor = "#369cb7";
        orignalElem.style.backgroundColor = "#c2e1e9";
        orignalElem.style.border = "1px solid #c2e1e9";
    } else {
        currentElem.style.backgroundColor = "#369cb7";
        orignalElem.style.backgroundColor = "#f4f4f4";
        orignalElem.style.border = "1px solid #d0d0d0";
    }
}

// 18 QUESTION

function drag18(e) {
    localStorage.setItem("idOrigin18question1grade", e.target.id);
}

function drop18(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin18question1grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/18que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/18que/" + nameObjectCurrent + ".svg";

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

// 22 QUESTION

function drag22(e) {
    localStorage.setItem("idOriginal22", e.target.id);
}

function drop22(e) {
    e = e || window.event;

    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idOriginal22");

    // получаем позицию области для вставки
    let positionCircleArea = e.target.dataset.position;

    // получаем текущий id
    let currentId = e.target.id;
    let currentClass = e.target.className;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = currentId
        ? document.getElementById(currentId)
        : currentClass === "background-circle" && positionCircleArea === "2"
        ? document.getElementsByClassName("background-circle")[1]
        : document.getElementsByClassName("circle-container")[
              positionCircleArea
          ];

    // начинаем уборку
    if (
        currentClass === "circle-container" ||
        currentClass === "circle-container right-circle-container" ||
        currentClass === "background-circle"
    ) {
        // добавляем объект в корзину
        let tray = document.createElement("div");
        tray.style.height = "50px";
        tray.style.width = "50px";
        tray.style.position = "absolute";
        tray.style.marginTop = e.offsetY + "px";
        tray.style.marginLeft = e.offsetX + "px";

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/22que/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        if (currentClass !== "circle-container") {
            objectBeingCreated.style.transform = "rotate(180deg)";
        }

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место объекта на квадрат
        orig.src = "./pictures/22que/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        currentElement.src = "./pictures/22que/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        currentElement.id = idFigure;

        orig.remove();
    }
}

// ---------------------------------------------------------------------- SHOWING THE CORRECT ANSWER --------------------------------------------

// для одной картинки

function addCorrectAnswer(
    numberCorrectAnswer,
    numberQue,
    numberContent,
    numberContentCorrectAnswer
) {
    let newElement = document.createElement("div");
    newElement.className = numberCorrectAnswer;

    let childNewElement = document.createElement("div"); // сосед 1
    childNewElement.className = "headerCorrectAnswer";
    childNewElement.textContent = "Correct answer";

    let secondChildNewElement = document.createElement("div"); // сосед 2
    secondChildNewElement.className = numberContentCorrectAnswer;

    let contentContent = document.createElement("img");
    contentContent.src = "./pictures/" + numberQue + "/correctAnswer.svg";
    contentContent.alt = "correct answer";

    secondChildNewElement.appendChild(contentContent);

    document.getElementsByClassName(numberContent)[0].appendChild(newElement);

    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(childNewElement);
    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(secondChildNewElement);
}

// realization

// 1 QUESTION

function addCorrectAnswerQuestion1() {
    document.getElementsByClassName("app1")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer1", "1que", "app1", "contentCorrectAnswer");
}

// 2 QUESTION

function addCorrectAnswerQuestion2() {
    document.getElementsByClassName("app2")[0].style.height = "400px";
    addCorrectAnswer("correctAnswer2", "2que", "app2", "contentCorrectAnswer");
}

// 3 QUESTION

function addCorrectAnswerQuestion3() {
    document.getElementsByClassName("app3")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer3", "3que", "app3", "contentCorrectAnswer");
}

// 4 QUESTION

function addCorrectAnswerQuestion4() {
    document.getElementsByClassName("app4")[0].style.height = "550px";
    addCorrectAnswer("correctAnswer4", "4que", "app4", "contentCorrectAnswer");
}

// 5 QUESTION

function addCorrectAnswerQuestion5() {
    document.getElementsByClassName("app5")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer5",
        "5que",
        "content5",
        "contentCorrectAnswer"
    );
}

// 6 QUESTION

function addCorrectAnswerQuestion6() {
    document.getElementsByClassName("app6")[0].style.height = "400px";
    addCorrectAnswer("correctAnswer6", "6que", "app6", "contentCorrectAnswer");
}

// 7 QUESTION

function addCorrectAnswerQuestion7() {
    document.getElementsByClassName("app7")[0].style.height = "1000px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer7");
}

// 8 QUESTION

function addCorrectAnswerQuestion8() {
    document.getElementsByClassName("app8")[0].style.height = "350px";
    addCorrectAnswer("correctAnswer8", "8que", "app8", "contentCorrectAnswer");
}

// 9 QUESTION

function addCorrectAnswerQuestion9() {
    document.getElementsByClassName("app9")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer9", "9que", "app9", "contentCorrectAnswer9");
}

// 10 QUESTION

function addCorrectAnswerQuestion10() {
    document.getElementsByClassName("app10")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer10",
        "10que",
        "app10",
        "contentCorrectAnswer10"
    );
}

// 11 QUESTION

function addCorrectAnswerQuestion11() {
    document.getElementsByClassName("app11")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "app11",
        "contentCorrectAnswer"
    );
}

// 12 QUESTION

function addCorrectAnswerQuestion12() {
    document.getElementsByClassName("app12")[0].style.height = "400px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "app12",
        "contentCorrectAnswer"
    );
}

// 13 QUESTION

function addCorrectAnswerQuestion13() {
    document.getElementsByClassName("app13")[0].style.height = "400px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "app13",
        "contentCorrectAnswer"
    );
}

// 14 QUESTION

function addCorrectAnswerQuestion14() {
    document.getElementsByClassName("app14")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "app14",
        "contentCorrectAnswer"
    );
}

// 18 QUESTION

function addCorrectAnswerQuestion18() {
    document.getElementsByClassName("app18")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer18",
        "18que",
        "app18",
        "contentCorrectAnswer18"
    );
}

// 19 QUESTION

function addCorrectAnswerQuestion19() {
    document.getElementsByClassName("app19")[0].style.height = "750px";
    addCorrectAnswer(
        "correctAnswer19",
        "19que",
        "app19",
        "contentCorrectAnswer19"
    );
}

// 21 QUESTION

function addCorrectAnswerQuestion21() {
    document.getElementsByClassName("app21")[0].style.height = "950px";
    addCorrectAnswer(
        "correctAnswer21",
        "21que",
        "app21",
        "contentCorrectAnswer21"
    );
}

// 22 QUESTION

function addCorrectAnswerQuestion22() {
    document.getElementsByClassName("app22")[0].style.height = "1100px";
    addCorrectAnswer(
        "correctAnswer22",
        "22que",
        "app22",
        "contentCorrectAnswer22"
    );
}

// 23 QUESTION

function addCorrectAnswerQuestion23() {
    document.getElementsByClassName("app23")[0].style.height = "800px";
    addCorrectAnswer(
        "correctAnswer23",
        "23que",
        "app23",
        "contentCorrectAnswer23"
    );
}

// 24 QUESTION

function addCorrectAnswerQuestion24() {
    document.getElementsByClassName("app24")[0].style.height = "650px";
    addCorrectAnswer(
        "correctAnswer24",
        "24que",
        "app24",
        "contentCorrectAnswer"
    );
}

// ---------------------------------------------------------- CHECK IMPLEMENTATION --------------------------------------------------------

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

            addCorrectAnswerQuestion1();
        }
    } else {
        if (numbers1.leftNumber === "") {
            document.getElementById("leftNumber").style.border =
                "2px solid #FFB47D";
        }

        if (numbers1.centerNumber === "") {
            document.getElementById("centerNumber").style.border =
                "2px solid #FFB47D";
        }

        if (numbers1.rightNumber === "") {
            document.getElementById("rightNumber").style.border =
                "2px solid #FFB47D";
        }
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

            addCorrectAnswerQuestion2();
        }
    } else {
        if (numbers2.leftNumber === "") {
            document.getElementById("leftNumber2").style.border =
                "2px solid #FFB47D";
        }

        if (numbers2.rightNumber === "") {
            document.getElementById("rightNumber2").style.border =
                "2px solid #FFB47D";
        }
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

            addCorrectAnswerQuestion3();
        }
    } else {
        if (numbers3.firstNumber === "") {
            document.getElementById("firstNumber3").style.border =
                "2px solid #FFB47D";
        }

        if (numbers3.secondNumber === "") {
            document.getElementById("secondNumber3").style.border =
                "2px solid #FFB47D";
        }

        if (numbers3.thirdNumber === "") {
            document.getElementById("thirdNumber3").style.border =
                "2px solid #FFB47D";
        }

        if (numbers3.fourthNumber === "") {
            document.getElementById("fourthNumber3").style.border =
                "2px solid #FFB47D";
        }
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

            addCorrectAnswerQuestion4();
        }
    } else {
        if (numbers4.firstNumber === "") {
            document.getElementById("firstNumber4").style.border =
                "2px solid #FFB47D";
        }

        if (numbers4.secondNumber === "") {
            document.getElementById("secondNumber4").style.border =
                "2px solid #FFB47D";
        }

        if (numbers4.thirdNumber === "") {
            document.getElementById("thirdNumber4").style.border =
                "2px solid #FFB47D";
        }
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

            addCorrectAnswerQuestion5();
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

        if (
            selectedButton6.firstBtn6 !== "" &&
            selectedButton6.secondBtn6 !== "" &&
            selectedButton6.thirdBtn6 !== "" &&
            selectedButton6.fourthBtn6 !== "" &&
            selectedButton6.fifthBtn6 !== ""
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            // подсветим невыбранные блоки
            if (selectedButton6.firstBtn6 === "") {
                document.getElementById("firstBtn6").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton6.secondBtn6 === "") {
                document.getElementById("secondBtn6").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton6.thirdBtn6 === "") {
                document.getElementById("thirdBtn6").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton6.fourthBtn6 === "") {
                document.getElementById("fourthBtn6").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton6.fifthBtn6 === "") {
                document.getElementById("fifthBtn6").style.border =
                    "2px solid #FFB47D";
            }

            // придадим статуса
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );

            addCorrectAnswerQuestion6();
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

// 7 QUESTION

function question7() {
    // получаем содержимое корзин
    let contentBasketTrue = document.getElementById(
        "placeOfDroppingFigures7true"
    ).children;

    let contentBasketFalse = document.getElementById(
        "placeOfDroppingFigures7false"
    ).children;

    // проверяем на пустоту
    if (contentBasketTrue.length > 0 && contentBasketFalse.length > 0) {
        let correctOrderBasketTrue = [
                "firstBtn",
                "secondBtn",
                "thirdBtn",
                "sixthBtn",
                "seventhBtn",
            ],
            correctOrderBasketFalse = ["fourthBtn", "fifthBtn"],
            theBasketTrueIsFilledCorrectly = "yes",
            theBasketFalseIsFilledCorrectly = "yes";

        // раскрашиваем блоки
        for (let i = 0; i < contentBasketTrue.length; i++) {
            let id = contentBasketTrue[i].id;

            succerror(
                document.getElementById(id),
                correctOrderBasketTrue.includes(id) === false
            );

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketTrue.includes(id) === false) {
                theBasketTrueIsFilledCorrectly = "no";
            }
        }

        for (let i = 0; i < contentBasketFalse.length; i++) {
            let id = contentBasketFalse[i].id;

            succerror(
                document.getElementById(id),
                correctOrderBasketFalse.includes(id) === false
            );

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketFalse.includes(id) === false) {
                theBasketFalseIsFilledCorrectly = "no";
            }
        }

        // проверяем на верность для создания статуса
        if (
            theBasketTrueIsFilledCorrectly === "yes" &&
            theBasketFalseIsFilledCorrectly === "yes"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            addCorrectAnswerQuestion7();
        }
    } else if (
        contentBasketTrue.length === 0 &&
        contentBasketFalse.length > 0
    ) {
        document.getElementsByClassName("true")[0].style.border =
            "2px solid #FFB47D";
    } else if (
        contentBasketFalse.length === 0 &&
        contentBasketTrue.length > 0
    ) {
        document.getElementsByClassName("false")[0].style.border =
            "2px solid #FFB47D";
    } else {
        document.getElementsByClassName("true")[0].style.border =
            "2px solid #FFB47D";

        document.getElementsByClassName("false")[0].style.border =
            "2px solid #FFB47D";
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

            addCorrectAnswerQuestion8();
        }
    } else {
        if (numbers8.firstNumber === "") {
            document.getElementById("firstNumber8").style.border =
                "2px solid #FFB47D";
        }

        if (numbers8.secondNumber === "") {
            document.getElementById("secondNumber8").style.border =
                "2px solid #FFB47D";
        }

        if (numbers8.thirdNumber === "") {
            document.getElementById("thirdNumber8").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 9 QUESTION

function question9() {
    let train = document.getElementsByClassName("train")[0];

    let fourthWagon = train.children[4].children[0].id;
    let twelfthWagon = train.children[12].children[0].id;
    let fourteenWagon = train.children[14].children[0].id;
    let eighteenWagon = train.children[18].children[0].id;

    if (
        fourthWagon === "wagonEmpty0" &&
        twelfthWagon === "wagonEmpty1" &&
        fourteenWagon === "wagonEmpty2" &&
        eighteenWagon === "wagonEmpty3"
    ) {
        document.getElementById("wagonEmpty0").style.border =
            "2px solid #FFB47D";

        document.getElementById("wagonEmpty1").style.border =
            "2px solid #FFB47D";

        document.getElementById("wagonEmpty2").style.border =
            "2px solid #FFB47D";

        document.getElementById("wagonEmpty3").style.border =
            "2px solid #FFB47D";
    } else {
        if (
            fourthWagon === "secondWagon9" &&
            twelfthWagon === "firstWagon9" &&
            fourteenWagon === "thirdWagon9" &&
            eighteenWagon === "fourthWagon9"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            // подсвечиваем неверновыбранные вагоны
            if (fourthWagon !== "secondWagon9") {
                document.getElementById(fourthWagon).style.border =
                    "2px solid #ED7777";
            }

            if (twelfthWagon !== "firstWagon9") {
                document.getElementById(twelfthWagon).style.border =
                    "2px solid #ED7777";
            }

            if (fourteenWagon !== "thirdWagon9") {
                document.getElementById(fourteenWagon).style.border =
                    "2px solid #ED7777";
            }

            if (eighteenWagon !== "fourthWagon9") {
                document.getElementById(eighteenWagon).style.border =
                    "2px solid #ED7777";
            }

            // ставим статус
            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );

            addCorrectAnswerQuestion9();
        }
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

            addCorrectAnswerQuestion10();
        }
    } else {
        if (numbers10.firstNumber === "") {
            document.getElementById("firstNumber10").style.border =
                "2px solid #FFB47D";
        }

        if (numbers10.secondNumber === "") {
            document.getElementById("secondNumber10").style.border =
                "2px solid #FFB47D";
        }

        if (numbers10.thirdNumber === "") {
            document.getElementById("thirdNumber10").style.border =
                "2px solid #FFB47D";
        }

        if (numbers10.fourthNumber === "") {
            document.getElementById("fourthNumber10").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 11 QUESTION

let numbers11 = {
    firstNumber: "",
    secondNumber: "",
};

document.getElementById("firstNumber11").onchange = function (e) {
    if (e.target.value == 27) {
        numbers11.firstNumber = "right";
    } else {
        numbers11.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber11").onchange = function (e) {
    if (e.target.value == 26) {
        numbers11.secondNumber = "right";
    } else {
        numbers11.secondNumber = "wrong";
    }
};

function question11() {
    // проверяем на присутствие знака
    let requiredElement =
        document.getElementsByClassName("inputs11")[0].children[1].children[0];
    let selectedSign = requiredElement.textContent.trim();

    if (
        numbers11.firstNumber != "" &&
        selectedSign != "" &&
        numbers11.secondNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber11"),
            numbers11.firstNumber === "wrong"
        );

        succerror(requiredElement, selectedSign !== ">");

        succerror(
            document.getElementById("secondNumber11"),
            numbers11.secondNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers11.firstNumber,
            document.getElementById("firstNumber11")
        );

        createMiniIcon(
            numbers11.secondNumber,
            document.getElementById("secondNumber11")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers11.firstNumber === "right" &&
            selectedSign === ">" &&
            numbers11.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );

            addCorrectAnswerQuestion11();
        }
    } else {
        if (numbers11.firstNumber === "") {
            document.getElementById("firstNumber11").style.border =
                "2px solid #FFB47D";
        }

        if (numbers11.secondNumber === "") {
            document.getElementById("secondNumber11").style.border =
                "2px solid #FFB47D";
        }

        if (selectedSign !== ">") {
            requiredElement.style.border = "2px solid #FFB47D";
        }
    }
}

// 12 QUESTION

let numbers12 = {
    firstNumber: "",
    secondNumber: "",
};

document.getElementById("firstNumber12").onchange = function (e) {
    if (e.target.value == 45) {
        numbers12.firstNumber = "right";
    } else {
        numbers12.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber12").onchange = function (e) {
    if (e.target.value == 75) {
        numbers12.secondNumber = "right";
    } else {
        numbers12.secondNumber = "wrong";
    }
};

function question12() {
    if (numbers12.firstNumber != "" && numbers12.secondNumber != "") {
        succerror(
            document.getElementById("firstNumber12"),
            numbers12.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber12"),
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

            addCorrectAnswerQuestion12();
        }
    } else {
        if (numbers12.firstNumber === "") {
            document.getElementById("firstNumber12").style.border =
                "2px solid #FFB47D";
        }

        if (numbers12.secondNumber === "") {
            document.getElementById("secondNumber12").style.border =
                "2px solid #FFB47D";
        }
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

            addCorrectAnswerQuestion13();
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

            addCorrectAnswerQuestion14();
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

// 18 QUESTION

function question18() {
    let wrongOrder = "yes";
    let correctOrder = ["centerTree", "rightTree", "leftTree"];
    let currentOrder = [];
    let howManyAreSelected = 0;
    let childs = document.getElementsByClassName("topRow18")[0].children;

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
                document.getElementsByClassName("question18"),
                "app18",
                18
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );

            addCorrectAnswerQuestion18();
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
    // создаём стартовые переменные
    let selectedFigures = [], // для верно-неверно
        selButsName = [], // для имён фигур
        isTheArrayEmpty = 0; // чтобы узнать - выбрано ли что-то

    for (let key in selectedFigures19) {
        if (selectedFigures19[key] !== "") {
            // данный блок выполняется, если что-то выбрано
            selectedFigures.push(selectedFigures19[key]); // добавляем статус фигуры
            selButsName.push(key); // добавляем имя фигуры
            isTheArrayEmpty++; // чтобы в будущем понять, что что-то было выбрано
        }
    }

    if (isTheArrayEmpty > 0) {
        // данный блок выполняется, если что-то выбрано
        selButsName.map((el, index) => {
            if (selectedFigures[index] === "wrong") {
                document.getElementById(el).style.border = "2px solid #ED7777";
            } else {
                document.getElementById(el).style.border = "2px solid #48B736";
            }
        });

        // выносим общий статус к номеру вопроса

        if (
            selectedFigures19.firstFigure19 !== "" &&
            selectedFigures19.thirdFigure19 !== ""
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        } else {
            // подсвечиваем ложновыбранные фигуры
            if (selectedFigures19.secondFigure19 !== "") {
                document.getElementById("secondFigure19").style.border =
                    "2px solid #ED7777";
            }

            if (selectedFigures19.fourthFigure19 !== "") {
                document.getElementById("fourthFigure19").style.border =
                    "2px solid #ED7777";
            }

            // подсвечиваем невыранные фигуры
            if (selectedFigures19.firstFigure19 === "") {
                document.getElementById("firstFigure19").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedFigures19.thirdFigure19 === "") {
                document.getElementById("thirdFigure19").style.border =
                    "2px solid #FFB47D";
            }

            // ставим статус
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );

            addCorrectAnswerQuestion19();
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

// 21 QUESTION

let numbers21 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

document.getElementById("firstInput21").onchange = function (e) {
    if (e.target.value == 12) {
        numbers21.firstNumber = "right";
    } else {
        numbers21.firstNumber = "wrong";
    }
};

document.getElementById("secondInput21").onchange = function (e) {
    if (e.target.value == 4) {
        numbers21.secondNumber = "right";
    } else {
        numbers21.secondNumber = "wrong";
    }
};

document.getElementById("thirdInput21").onchange = function (e) {
    if (e.target.value == 4) {
        numbers21.thirdNumber = "right";
    } else {
        numbers21.thirdNumber = "wrong";
    }
};

function question21() {
    if (
        numbers21.firstNumber != "" &&
        numbers21.secondNumber != "" &&
        numbers21.thirdNumber != ""
    ) {
        succerror(
            document.getElementById("firstInput21"),
            numbers21.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondInput21"),
            numbers21.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdInput21"),
            numbers21.thirdNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers21.firstNumber === "right" &&
            numbers21.secondNumber === "right" &&
            numbers21.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );

            addCorrectAnswerQuestion21();
        }
    } else {
        if (numbers21.firstNumber === "") {
            document.getElementById("firstInput21").style.border =
                "2px solid #FFB47D";
        }

        if (numbers21.secondNumber === "") {
            document.getElementById("secondInput21").style.border =
                "2px solid #FFB47D";
        }

        if (numbers21.thirdNumber === "") {
            document.getElementById("thirdInput21").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 22 QUESTION

let result22 = {
    areaFourSided: "",
    areaBlueShapes: "",
    intersection: "",
};

function checkFourSided() {
    let areaFourSided = document.getElementsByClassName("circle-container")[0];

    // таможня Левого круга
    let contentFourSidedArea = areaFourSided.children;
    let amountFourSidedArea = contentFourSidedArea.length;

    if (amountFourSidedArea > 1) {
        for (let i = 1; i < amountFourSidedArea; i++) {
            let selectedChildId = contentFourSidedArea[i].children[0].id;

            if (
                selectedChildId === "greenSquare" ||
                selectedChildId === "greenRectangle" ||
                selectedChildId === "darkPinkRectangle" ||
                selectedChildId === "yellowQuadrangle"
            ) {
                result18.areaFourSided = "right";
            } else {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";
                result22.areaFourSided = "wrong";
            }
        }
    }
}

function checkBlueShapes() {
    let areaBlueShapes = document.getElementsByClassName("circle-container")[1];

    // таможня Правого круга
    let contentBlueShapesArea = areaBlueShapes.children;
    let amountBlueShapesArea = contentBlueShapesArea.length;

    if (amountBlueShapesArea > 1) {
        for (let i = 1; i < amountBlueShapesArea; i++) {
            let selectedChildId = contentBlueShapesArea[i].children[0].id;

            if (
                selectedChildId === "blueCircle" ||
                selectedChildId === "bluePentagon" ||
                selectedChildId === "blueTriangle"
            ) {
                result22.areaBlueShapes = "right";
            } else {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";
                result22.areaBlueShapes = "wrong";
            }
        }
    }
}

function checkIntersection() {
    let element = document.getElementsByClassName("background-circle")[1];

    if (element.children.length === 1) {
        if (element.children[0].children[0].id === "blueSquare") {
            result22.intersection = "right";
        } else {
            document.getElementById(
                element.children[0].children[0].id
            ).style.border = "1px solid #FFB47D";
            document.getElementById(
                element.children[0].children[0].id
            ).style.borderRadius = "5px";

            result22.intersection = "wrong";
        }
    }
}

function question22() {
    checkFourSided();
    checkBlueShapes();
    checkIntersection();

    if (
        result22.areaFourSided !== "" &&
        result22.areaBlueShapes !== "" &&
        result22.intersection !== ""
    ) {
        if (
            result22.areaFourSided === "right" &&
            result22.areaBlueShapes === "right" &&
            result22.intersection === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );

            addCorrectAnswerQuestion22();
        }
    } else {
        document.getElementsByClassName("circle-container")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName(
            "circle-container right-circle-container"
        )[0].style.border = "2px solid #FFB47D";
    }
}

// 23 QUESTION

let selectedFigures23 = {
    firstFigure23: "",
    secondFigure23: "",
    thirdFigure23: "",
    fourthFigure23: "",
};

document.getElementById("firstFigure23").onclick = function () {
    let clickedElement = document.getElementById("firstFigure23");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures23.firstFigure23 = "right";
};

document.getElementById("secondFigure23").onclick = function () {
    let clickedElement = document.getElementById("secondFigure23");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures23.secondFigure23 = "wrong";
};

document.getElementById("thirdFigure23").onclick = function () {
    let clickedElement = document.getElementById("thirdFigure23");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures23.thirdFigure23 = "right";
};

document.getElementById("fourthFigure23").onclick = function () {
    let clickedElement = document.getElementById("fourthFigure23");

    clickedElement.style.boxShadow =
        "2px 2px 20px 1px rgba(54, 156, 183, 0.29)";
    clickedElement.style.border = "2px solid #369CB7";
    clickedElement.style.borderRadius = "10px";

    selectedFigures23.fourthFigure23 = "wrong";
};

function question23() {
    let selectedFigures = [],
        selButsName = [],
        isTheArrayEmpty = 0;

    for (let key in selectedFigures23) {
        if (selectedFigures23[key] !== "") {
            selectedFigures.push(selectedFigures23[key]);
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
                document.getElementsByClassName("question23"),
                "app23",
                23
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );

            addCorrectAnswerQuestion23();
        }
    } else {
        document.getElementById("firstFigure23").style.border =
            "2px solid #FFB47D";
        document.getElementById("firstFigure23").style.borderRadius = "5px";

        document.getElementById("secondFigure23").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondFigure23").style.borderRadius = "5px";

        document.getElementById("thirdFigure23").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdFigure23").style.borderRadius = "5px";

        document.getElementById("fourthFigure23").style.border =
            "2px solid #FFB47D";
        document.getElementById("fourthFigure23").style.borderRadius = "5px";
    }
}

// 24 QUESTION

let selectedButton24 = "",
    selectedNameButton24;

document.getElementById("firstBtn24").onclick = function () {
    let clickedElement = document.getElementById("firstBtn24");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton24 = "wrong";
    selectedNameButton24 = "firstBtn24";

    document.getElementById("secondBtn24").style.backgroundColor = "white";
    document.getElementById("secondBtn24").style.color = "black";
    document.getElementById("secondBtn24").style.border = "1px solid black";

    document.getElementById("thirdBtn24").style.backgroundColor = "white";
    document.getElementById("thirdBtn24").style.color = "black";
    document.getElementById("thirdBtn24").style.border = "1px solid black";
};

document.getElementById("secondBtn24").onclick = function () {
    let clickedElement = document.getElementById("secondBtn24");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton24 = "right";
    selectedNameButton24 = "secondBtn24";

    document.getElementById("thirdBtn24").style.backgroundColor = "white";
    document.getElementById("thirdBtn24").style.color = "black";
    document.getElementById("thirdBtn24").style.border = "1px solid black";

    document.getElementById("firstBtn24").style.backgroundColor = "white";
    document.getElementById("firstBtn24").style.color = "black";
    document.getElementById("firstBtn24").style.border = "1px solid black";
};

document.getElementById("thirdBtn24").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn24");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton24 = "wrong";
    selectedNameButton24 = "thirdBtn24";

    document.getElementById("secondBtn24").style.backgroundColor = "white";
    document.getElementById("secondBtn24").style.color = "black";
    document.getElementById("secondBtn24").style.border = "1px solid black";

    document.getElementById("firstBtn24").style.backgroundColor = "white";
    document.getElementById("firstBtn24").style.color = "black";
    document.getElementById("firstBtn24").style.border = "1px solid black";
};

function question24() {
    if (selectedButton24 != "") {
        succerror(
            document.getElementById(selectedNameButton24),
            selectedButton24 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton24 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question24"),
                "app24",
                24
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question24"),
                "app24",
                24
            );

            addCorrectAnswerQuestion24();
        }
    } else {
        document.getElementById("firstBtn24").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn24").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn24").style.border =
            "2px solid #FFB47D";
    }
}

// ------------------------------------------------------------------------------ RESULT --------------------------------------------------------

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    question12();
    question13();
    question14();
    question18();
    question19();
    question21();
    question22();
    question23();
    question24();
};

document.getElementById("clear").onclick = function () {
    let allInputs = document.querySelectorAll("input");

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].style.border = "1px solid";
        // allInputs[i].value = "";
    }

    document.getElementById("firstBtn5").style.border = "1px solid";
    document.getElementById("secondBtn5").style.border = "1px solid";
    document.getElementById("thirdBtn5").style.border = "1px solid";
    document.getElementById("fourthBtn5").style.border = "1px solid";

    document.getElementById("firstBtn6").style.border = "1px solid";
    document.getElementById("secondBtn6").style.border = "1px solid";
    document.getElementById("thirdBtn6").style.border = "1px solid";
    document.getElementById("fourthBtn6").style.border = "1px solid";
    document.getElementById("fifthBtn6").style.border = "1px solid";

    document.getElementsByClassName("true")[0].style.border =
        "1px solid #d0d0d0";
    document.getElementsByClassName("false")[0].style.border =
        "1px solid #d0d0d0";

    document.getElementById("wagonEmpty0").style.border = "none";
    document.getElementById("wagonEmpty1").style.border = "none";
    document.getElementById("wagonEmpty2").style.border = "none";
    document.getElementById("wagonEmpty3").style.border = "none";

    document.getElementById("selectInput11").style.border = "1px solid #d0d0d0";

    document.getElementById("firstBtn14").style.border = "1px solid";
    document.getElementById("secondBtn14").style.border = "1px solid";
    document.getElementById("thirdBtn14").style.border = "1px solid";

    document.getElementById("emptyPlace0").style.border = "none";
    document.getElementById("emptyPlace1").style.border = "none";
    document.getElementById("emptyPlace2").style.border = "none";

    document.getElementById("firstFigure19").style.border = "none";
    document.getElementById("secondFigure19").style.border = "none";
    document.getElementById("thirdFigure19").style.border = "none";
    document.getElementById("fourthFigure19").style.border = "none";

    document.getElementsByClassName("circles")[0].children[0].style.border =
        "1px solid #a1a6d9";
    document.getElementsByClassName("circles")[0].children[1].style.border =
        "1px solid #a1a6d9";

    document.getElementById("firstFigure23").style.border = "none";
    document.getElementById("secondFigure23").style.border = "none";
    document.getElementById("thirdFigure23").style.border = "none";
    document.getElementById("fourthFigure23").style.border = "none";

    document.getElementById("firstBtn24").style.border = "1px solid";
    document.getElementById("secondBtn24").style.border = "1px solid";
    document.getElementById("thirdBtn24").style.border = "1px solid";

    window.location.reload();
};
