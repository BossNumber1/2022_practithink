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
    object.classList.add("statusIcon");

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
    objDiv.classList.add("miniIcon");

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

function gettingDataFromFields(
    countId,
    correctNumbers,
    numberQuestion,
    number
) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            document.getElementById("firstNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.firstNumber = "right";
                    } else {
                        number.firstNumber = "wrong";
                    }
                };
        }

        if (i === 1) {
            document.getElementById("secondNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.secondNumber = "right";
                    } else {
                        number.secondNumber = "wrong";
                    }
                };
        }

        if (i === 2) {
            document.getElementById("thirdNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.thirdNumber = "right";
                    } else {
                        number.thirdNumber = "wrong";
                    }
                };
        }

        if (i === 3) {
            document.getElementById("fourthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fourthNumber = "right";
                    } else {
                        number.fourthNumber = "wrong";
                    }
                };
        }

        if (i === 4) {
            document.getElementById("fifthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fifthNumber = "right";
                    } else {
                        number.fifthNumber = "wrong";
                    }
                };
        }

        if (i === 5) {
            document.getElementById("sixthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.sixthNumber = "right";
                    } else {
                        number.sixthNumber = "wrong";
                    }
                };
        }

        if (i === 6) {
            document.getElementById("seventhNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.seventhNumber = "right";
                    } else {
                        number.seventhNumber = "wrong";
                    }
                };
        }

        if (i === 7) {
            document.getElementById("eighthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.eighthNumber = "right";
                    } else {
                        number.eighthNumber = "wrong";
                    }
                };
        }
    }
}

function succerrorAndCreateMiniIcon(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            succerror(
                document.getElementById("firstNumber" + numberQuestion),
                number.firstNumber === "wrong"
            );

            createMiniIcon(
                number.firstNumber,
                document.getElementById("firstNumber" + numberQuestion)
            );
        }

        if (i === 1) {
            succerror(
                document.getElementById("secondNumber" + numberQuestion),
                number.secondNumber === "wrong"
            );

            createMiniIcon(
                number.secondNumber,
                document.getElementById("secondNumber" + numberQuestion)
            );
        }

        if (i === 2) {
            succerror(
                document.getElementById("thirdNumber" + numberQuestion),
                number.thirdNumber === "wrong"
            );

            createMiniIcon(
                number.thirdNumber,
                document.getElementById("thirdNumber" + numberQuestion)
            );
        }

        if (i === 3) {
            succerror(
                document.getElementById("fourthNumber" + numberQuestion),
                number.fourthNumber === "wrong"
            );

            createMiniIcon(
                number.fourthNumber,
                document.getElementById("fourthNumber" + numberQuestion)
            );
        }

        if (i === 4) {
            succerror(
                document.getElementById("fifthNumber" + numberQuestion),
                number.fifthNumber === "wrong"
            );

            createMiniIcon(
                number.fifthNumber,
                document.getElementById("fifthNumber" + numberQuestion)
            );
        }

        if (i === 5) {
            succerror(
                document.getElementById("sixthNumber" + numberQuestion),
                number.sixthNumber === "wrong"
            );

            createMiniIcon(
                number.sixthNumber,
                document.getElementById("sixthNumber" + numberQuestion)
            );
        }

        if (i === 6) {
            succerror(
                document.getElementById("seventhNumber" + numberQuestion),
                number.seventhNumber === "wrong"
            );

            createMiniIcon(
                number.seventhNumber,
                document.getElementById("seventhNumber" + numberQuestion)
            );
        }

        if (i === 7) {
            succerror(
                document.getElementById("eighthNumber" + numberQuestion),
                number.eighthNumber === "wrong"
            );

            createMiniIcon(
                number.eighthNumber,
                document.getElementById("eighthNumber" + numberQuestion)
            );
        }
    }
}

function highlightUnselectedBlocks(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (number.firstNumber === "") {
                document.getElementById(
                    "firstNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (number.secondNumber === "") {
                document.getElementById(
                    "secondNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (number.thirdNumber === "") {
                document.getElementById(
                    "thirdNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (number.fourthNumber === "") {
                document.getElementById(
                    "fourthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (number.fifthNumber === "") {
                document.getElementById(
                    "fifthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (number.sixthNumber === "") {
                document.getElementById(
                    "sixthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (number.seventhNumber === "") {
                document.getElementById(
                    "seventhNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (number.eighthNumber === "") {
                document.getElementById(
                    "eighthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }
    }
}

function highlightingUnfillededBlocks(countId, numberQuestion) {
    let firstEmpty = document.getElementById("firstEmpty" + numberQuestion);
    let secondEmpty = document.getElementById("secondEmpty" + numberQuestion);
    let thirdEmpty = document.getElementById("thirdEmpty" + numberQuestion);
    let fourthEmpty = document.getElementById("fourthEmpty" + numberQuestion);
    let fifthEmpty = document.getElementById("fifthEmpty" + numberQuestion);
    let sixthEmpty = document.getElementById("sixthEmpty" + numberQuestion);
    let seventhEmpty = document.getElementById("seventhEmpty" + numberQuestion);
    let eighthEmpty = document.getElementById("eighthEmpty" + numberQuestion);

    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (firstEmpty.textContent === "") {
                firstEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (secondEmpty.textContent === "") {
                secondEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (thirdEmpty.textContent === "") {
                thirdEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (fourthEmpty.textContent === "") {
                fourthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (fifthEmpty.textContent === "") {
                fifthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (sixthEmpty.textContent === "") {
                sixthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (seventhEmpty.textContent === "") {
                seventhEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (eighthEmpty.textContent === "") {
                eighthEmpty.style.border = "2px solid #FFB47D";
            }
        }
    }
}

// -------------------------------------------------------------- ROTATE RULER FOR 14 QUESTION -----------------------------------------------

let ruler17question = document.getElementsByClassName("ruler17")[0];

dragElement(ruler17question);

const rotationFunction = new Propeller(ruler17question, {
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

ruler17question.addEventListener("mousedown", (e) => {
    if (
        (e.target.className !== "leftEdge" ||
            e.target.className !== "rightEdge") &&
        e.target.className === "imgRuler"
    ) {
        rotationFunction.stop();
        dragElement(ruler17question);
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

// 9 QUESTION

function drag9(e) {
    localStorage.setItem("idOrigin9question1grade", e.target.id);
    localStorage.setItem(
        "classElemGrandparent9",
        e.target.parentElement.parentElement.className
    );
    localStorage.setItem("positionElem9", e.target.dataset.position);
    localStorage.setItem("textElem9", e.target.dataset.text);
    localStorage.setItem("classElem9", e.target.dataset.class);
}

function drop9(e) {
    // получаем id несомого элемента и класс прародителя
    let classElemGrandparent = localStorage.getItem("classElemGrandparent9");
    let idTakenElement = localStorage.getItem("idOrigin9question1grade");
    let positionElem = localStorage.getItem("positionElem9");
    let classElem = localStorage.getItem("classElem9");
    let textElem = localStorage.getItem("textElem9");
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
        e.target.id = idTakenElement + "9";
        e.target.style.cursor = "grab";

        document.getElementById(idTakenElement).remove();
    }
}

// 12 QUESTION

function drag12(e) {
    localStorage.setItem("idOrigin12question", e.target.id);
}

function drop12(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin12question");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/12que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/12que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 14 QUESTION

// для кубиков

function drag14(e) {
    localStorage.setItem("idOrig14", e.target.id);
}

function drop14(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrig14");
    let nameObjectOrig = idOrig.slice(0, -2);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -2);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/14que/" + nameObjectOrig + ".svg";
    currentElement.style.opacity = "1";
    currentElement.style.cursor = "grab";

    orig.src = "./pictures/14que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;

    // меняем вид курсора
    orig.style.cursor = "default";
}

// для полей ввода

function drag14p2(e) {
    localStorage.setItem("idSign14", e.target.id);
    localStorage.setItem(
        "classGrandparentElement14",
        e.target.parentElement.className
    );
}

function drop14p2(e) {
    // получаем id взятого элемента и класс прародителя
    let idSign = localStorage.getItem("idSign14");
    let classGrandparentElement = localStorage.getItem(
        "classGrandparentElement14"
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

    if (orignalElem.parentElement.parentElement.className !== "inputs14") {
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
    document.getElementsByClassName("app2")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer2", "2que", "app2", "contentCorrectAnswer");
}

// 3 QUESTION

function addCorrectAnswerQuestion3() {
    document.getElementsByClassName("app3")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer3", "3que", "app3", "contentCorrectAnswer");
}

// 4 QUESTION

function addCorrectAnswerQuestion4() {
    document.getElementsByClassName("app4")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer4", "4que", "app4", "contentCorrectAnswer");
}

// 5 QUESTION

function addCorrectAnswerQuestion5() {
    document.getElementsByClassName("app5")[0].style.height = "550px";
    addCorrectAnswer("correctAnswer5", "5que", "app5", "contentCorrectAnswer");
}

// 6 QUESTION

function addCorrectAnswerQuestion6() {
    document.getElementsByClassName("app6")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer6",
        "6que",
        "content6",
        "contentCorrectAnswer"
    );
}

// 7 QUESTION

function addCorrectAnswerQuestion7() {
    document.getElementsByClassName("app7")[0].style.height = "400px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer");
}

// 8 QUESTION

function addCorrectAnswerQuestion8() {
    document.getElementsByClassName("app8")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer8",
        "8que",
        "content8",
        "contentCorrectAnswer"
    );
}

// 9 QUESTION

function addCorrectAnswerQuestion9() {
    document.getElementsByClassName("app9")[0].style.height = "1000px";
    addCorrectAnswer("correctAnswer9", "9que", "app9", "contentCorrectAnswer9");
}

// 10 QUESTION

function addCorrectAnswerQuestion10() {
    document.getElementsByClassName("app10")[0].style.height = "350px";
    addCorrectAnswer(
        "correctAnswer10",
        "10que",
        "app10",
        "contentCorrectAnswer"
    );
}

// 11 QUESTION

function addCorrectAnswerQuestion11() {
    document.getElementsByClassName("app11")[0].style.height = "450px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "app11",
        "contentCorrectAnswer11"
    );
}

// 12 QUESTION

function addCorrectAnswerQuestion12() {
    document.getElementsByClassName("app12")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "app12",
        "contentCorrectAnswer12"
    );
}

// 13 QUESTION

function addCorrectAnswerQuestion13() {
    document.getElementsByClassName("app13")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "app13",
        "contentCorrectAnswer13"
    );
}

// 14 QUESTION

function addCorrectAnswerQuestion14() {
    document.getElementsByClassName("app14")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "app14",
        "contentCorrectAnswer"
    );
}

// 15 QUESTION

function addCorrectAnswerQuestion15() {
    document.getElementsByClassName("app15")[0].style.height = "400px";
    addCorrectAnswer(
        "correctAnswer15",
        "15que",
        "app15",
        "contentCorrectAnswer"
    );
}

// 16 QUESTION

function addCorrectAnswerQuestion16() {
    document.getElementsByClassName("app16")[0].style.height = "400px";
    addCorrectAnswer(
        "correctAnswer16",
        "16que",
        "app16",
        "contentCorrectAnswer"
    );
}

// 17 QUESTION

function addCorrectAnswerQuestion17() {
    document.getElementsByClassName("app17")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer17",
        "17que",
        "app17",
        "contentCorrectAnswer"
    );
}

// 18 QUESTION

function addCorrectAnswerQuestion18() {
    document.getElementsByClassName("app18")[0].style.height = "800px";
    addCorrectAnswer(
        "correctAnswer18",
        "18que",
        "app18",
        "contentCorrectAnswer18"
    );
}

// 19 QUESTION

function addCorrectAnswerQuestion19() {
    document.getElementsByClassName("app19")[0].style.height = "850px";
    addCorrectAnswer(
        "correctAnswer19",
        "19que",
        "app19",
        "contentCorrectAnswer19"
    );
}

// 20 QUESTION

function addCorrectAnswerQuestion20() {
    document.getElementsByClassName("app20")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer20",
        "20que",
        "app20",
        "contentCorrectAnswer20"
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
    firstNumber: "",
};

document.getElementById("firstNumber2").onchange = function (e) {
    if (e.target.value == 18) {
        numbers2.firstNumber = "right";
    } else {
        numbers2.firstNumber = "wrong";
    }
};

function question2() {
    if (numbers2.firstNumber != "") {
        succerror(
            document.getElementById("firstNumber2"),
            numbers2.firstNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (numbers2.firstNumber === "right") {
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
        document.getElementById("firstNumber2").style.border =
            "2px solid #FFB47D";
    }
}

// 3 QUESTION

let numbers3 = {
    leftNumber: "",
    rightNumber: "",
};

document.getElementById("leftNumber3").onchange = function (e) {
    if (e.target.value == 16) {
        numbers3.leftNumber = "right";
    } else {
        numbers3.leftNumber = "wrong";
    }
};

document.getElementById("rightNumber3").onchange = function (e) {
    if (e.target.value == 2) {
        numbers3.rightNumber = "right";
    } else {
        numbers3.rightNumber = "wrong";
    }
};

function question3() {
    if (numbers3.leftNumber != "" && numbers3.rightNumber != "") {
        succerror(
            document.getElementById("leftNumber3"),
            numbers3.leftNumber === "wrong"
        );

        succerror(
            document.getElementById("rightNumber3"),
            numbers3.rightNumber === "wrong"
        );

        // расставляем мини-иконки

        // createMiniIcon(
        //     numbers3.leftNumber,
        //     document.getElementById("leftNumber3")
        // );

        // createMiniIcon(
        //     numbers3.rightNumber,
        //     document.getElementById("rightNumber3")
        // );

        // выносим общий статус к номеру вопроса

        if (
            numbers3.leftNumber === "right" &&
            numbers3.rightNumber === "right"
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
        if (numbers3.leftNumber === "") {
            document.getElementById("leftNumber3").style.border =
                "2px solid #FFB47D";
        }

        if (numbers3.rightNumber === "") {
            document.getElementById("rightNumber3").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 4 QUESTION

let numbers4 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

document.getElementById("firstNumber4").onchange = function (e) {
    if (e.target.value == 2) {
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
    if (e.target.value == 5) {
        numbers4.thirdNumber = "right";
    } else {
        numbers4.thirdNumber = "wrong";
    }
};

document.getElementById("fourthNumber4").onchange = function (e) {
    if (e.target.value == 11) {
        numbers4.fourthNumber = "right";
    } else {
        numbers4.fourthNumber = "wrong";
    }
};

function question4() {
    if (
        numbers4.firstNumber != "" &&
        numbers4.secondNumber != "" &&
        numbers4.thirdNumber != "" &&
        numbers4.fourthNumber != ""
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

        succerror(
            document.getElementById("fourthNumber4"),
            numbers4.fourthNumber === "wrong"
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

        createMiniIcon(
            numbers4.fourthNumber,
            document.getElementById("fourthNumber4")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers4.firstNumber === "right" &&
            numbers4.secondNumber === "right" &&
            numbers4.thirdNumber === "right" &&
            numbers4.fourthNumber === "right"
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

        if (numbers4.fourthNumber === "") {
            document.getElementById("fourthNumber4").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 5 QUESTION

let numbers5 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

document.getElementById("firstNumber5").onchange = function (e) {
    if (e.target.value == 5) {
        numbers5.firstNumber = "right";
    } else {
        numbers5.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber5").onchange = function (e) {
    if (e.target.value == 4) {
        numbers5.secondNumber = "right";
    } else {
        numbers5.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber5").onchange = function (e) {
    if (e.target.value == 9) {
        numbers5.thirdNumber = "right";
    } else {
        numbers5.thirdNumber = "wrong";
    }
};

function question5() {
    if (
        numbers5.firstNumber != "" &&
        numbers5.secondNumber != "" &&
        numbers5.thirdNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber5"),
            numbers5.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber5"),
            numbers5.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber5"),
            numbers5.thirdNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers5.firstNumber,
            document.getElementById("firstNumber5")
        );

        createMiniIcon(
            numbers5.secondNumber,
            document.getElementById("secondNumber5")
        );

        createMiniIcon(
            numbers5.thirdNumber,
            document.getElementById("thirdNumber5")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers5.firstNumber === "right" &&
            numbers5.secondNumber === "right" &&
            numbers5.thirdNumber === "right"
        ) {
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
        if (numbers5.firstNumber === "") {
            document.getElementById("firstNumber5").style.border =
                "2px solid #FFB47D";
        }

        if (numbers5.secondNumber === "") {
            document.getElementById("secondNumber5").style.border =
                "2px solid #FFB47D";
        }

        if (numbers5.thirdNumber === "") {
            document.getElementById("thirdNumber5").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 6 QUESTION

let selectedButton = "",
    selectedNameButton;

document.getElementById("firstBtn6").onclick = function () {
    let clickedElement = document.getElementById("firstBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "right";
    selectedNameButton = "firstBtn6";

    document.getElementById("secondBtn6").style.backgroundColor = "white";
    document.getElementById("secondBtn6").style.color = "black";
    document.getElementById("secondBtn6").style.border = "1px solid black";

    document.getElementById("thirdBtn6").style.backgroundColor = "white";
    document.getElementById("thirdBtn6").style.color = "black";
    document.getElementById("thirdBtn6").style.border = "1px solid black";

    document.getElementById("fourthBtn6").style.backgroundColor = "white";
    document.getElementById("fourthBtn6").style.color = "black";
    document.getElementById("fourthBtn6").style.border = "1px solid black";
};

document.getElementById("secondBtn6").onclick = function () {
    let clickedElement = document.getElementById("secondBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "secondBtn6";

    document.getElementById("thirdBtn6").style.backgroundColor = "white";
    document.getElementById("thirdBtn6").style.color = "black";
    document.getElementById("thirdBtn6").style.border = "1px solid black";

    document.getElementById("fourthBtn6").style.backgroundColor = "white";
    document.getElementById("fourthBtn6").style.color = "black";
    document.getElementById("fourthBtn6").style.border = "1px solid black";

    document.getElementById("firstBtn6").style.backgroundColor = "white";
    document.getElementById("firstBtn6").style.color = "black";
    document.getElementById("firstBtn6").style.border = "1px solid black";
};

document.getElementById("thirdBtn6").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "thirdBtn6";

    document.getElementById("fourthBtn6").style.backgroundColor = "white";
    document.getElementById("fourthBtn6").style.color = "black";
    document.getElementById("fourthBtn6").style.border = "1px solid black";

    document.getElementById("firstBtn6").style.backgroundColor = "white";
    document.getElementById("firstBtn6").style.color = "black";
    document.getElementById("firstBtn6").style.border = "1px solid black";

    document.getElementById("secondBtn6").style.backgroundColor = "white";
    document.getElementById("secondBtn6").style.color = "black";
    document.getElementById("secondBtn6").style.border = "1px solid black";
};

document.getElementById("fourthBtn6").onclick = function () {
    let clickedElement = document.getElementById("fourthBtn6");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "fourthBtn6";

    document.getElementById("firstBtn6").style.backgroundColor = "white";
    document.getElementById("firstBtn6").style.color = "black";
    document.getElementById("firstBtn6").style.border = "1px solid black";

    document.getElementById("secondBtn6").style.backgroundColor = "white";
    document.getElementById("secondBtn6").style.color = "black";
    document.getElementById("secondBtn6").style.border = "1px solid black";

    document.getElementById("thirdBtn6").style.backgroundColor = "white";
    document.getElementById("thirdBtn6").style.color = "black";
    document.getElementById("thirdBtn6").style.border = "1px solid black";
};

function question6() {
    if (selectedButton != "") {
        succerror(
            document.getElementById(selectedNameButton),
            selectedButton === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton === "right") {
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

            addCorrectAnswerQuestion6();
        }
    } else {
        document.getElementById("firstBtn6").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn6").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn6").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn6").style.border =
            "2px solid #FFB47D";
    }
}

// 7 QUESTION

let selectedButton7 = {
    firstBtn7: "",
    secondBtn7: "",
    thirdBtn7: "",
    fourthBtn7: "",
    fifthBtn7: "",
};

document.getElementById("firstBtn7").onclick = function () {
    let clickedElement = document.getElementById("firstBtn7");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton7.firstBtn7 = "right";
};

document.getElementById("secondBtn7").onclick = function () {
    let clickedElement = document.getElementById("secondBtn7");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton7.secondBtn7 = "right";
};

document.getElementById("thirdBtn7").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn7");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton7.thirdBtn7 = "right";
};

document.getElementById("fourthBtn7").onclick = function () {
    let clickedElement = document.getElementById("fourthBtn7");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton7.fourthBtn7 = "right";
};

document.getElementById("fifthBtn7").onclick = function () {
    let clickedElement = document.getElementById("fifthBtn7");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton7.fifthBtn7 = "right";
};

function question7() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton7) {
        if (selectedButton7[key] !== "") {
            selectedButtons.push(selectedButton7[key]);
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
            selectedButton7.firstBtn7 !== "" &&
            selectedButton7.secondBtn7 !== "" &&
            selectedButton7.thirdBtn7 !== "" &&
            selectedButton7.fourthBtn7 !== "" &&
            selectedButton7.fifthBtn7 !== ""
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            // подсветим невыбранные блоки
            if (selectedButton7.firstBtn7 === "") {
                document.getElementById("firstBtn7").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton7.secondBtn7 === "") {
                document.getElementById("secondBtn7").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton7.thirdBtn7 === "") {
                document.getElementById("thirdBtn7").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton7.fourthBtn7 === "") {
                document.getElementById("fourthBtn7").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton7.fifthBtn7 === "") {
                document.getElementById("fifthBtn7").style.border =
                    "2px solid #FFB47D";
            }

            // придадим статуса
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            addCorrectAnswerQuestion7();
        }
    } else {
        document.getElementById("firstBtn7").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn7").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn7").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn7").style.border =
            "2px solid #FFB47D";
        document.getElementById("fifthBtn7").style.border = "2px solid #FFB47D";
    }
}

// 8 QUESTION

let selectedButton8 = "",
    selectedNameButton8;

document.getElementById("firstBtn8").onclick = function () {
    let clickedElement = document.getElementById("firstBtn8");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton8 = "right";
    selectedNameButton8 = "firstBtn8";

    document.getElementById("secondBtn8").style.backgroundColor = "white";
    document.getElementById("secondBtn8").style.color = "black";
    document.getElementById("secondBtn8").style.border = "1px solid black";

    document.getElementById("thirdBtn8").style.backgroundColor = "white";
    document.getElementById("thirdBtn8").style.color = "black";
    document.getElementById("thirdBtn8").style.border = "1px solid black";

    document.getElementById("fourthBtn8").style.backgroundColor = "white";
    document.getElementById("fourthBtn8").style.color = "black";
    document.getElementById("fourthBtn8").style.border = "1px solid black";
};

document.getElementById("secondBtn8").onclick = function () {
    let clickedElement = document.getElementById("secondBtn8");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton8 = "wrong";
    selectedNameButton8 = "secondBtn8";

    document.getElementById("thirdBtn8").style.backgroundColor = "white";
    document.getElementById("thirdBtn8").style.color = "black";
    document.getElementById("thirdBtn8").style.border = "1px solid black";

    document.getElementById("fourthBtn8").style.backgroundColor = "white";
    document.getElementById("fourthBtn8").style.color = "black";
    document.getElementById("fourthBtn8").style.border = "1px solid black";

    document.getElementById("firstBtn8").style.backgroundColor = "white";
    document.getElementById("firstBtn8").style.color = "black";
    document.getElementById("firstBtn8").style.border = "1px solid black";
};

document.getElementById("thirdBtn8").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn8");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton8 = "wrong";
    selectedNameButton8 = "thirdBtn8";

    document.getElementById("fourthBtn8").style.backgroundColor = "white";
    document.getElementById("fourthBtn8").style.color = "black";
    document.getElementById("fourthBtn8").style.border = "1px solid black";

    document.getElementById("firstBtn8").style.backgroundColor = "white";
    document.getElementById("firstBtn8").style.color = "black";
    document.getElementById("firstBtn8").style.border = "1px solid black";

    document.getElementById("secondBtn8").style.backgroundColor = "white";
    document.getElementById("secondBtn8").style.color = "black";
    document.getElementById("secondBtn8").style.border = "1px solid black";
};

document.getElementById("fourthBtn8").onclick = function () {
    let clickedElement = document.getElementById("fourthBtn8");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton8 = "wrong";
    selectedNameButton8 = "fourthBtn8";

    document.getElementById("firstBtn8").style.backgroundColor = "white";
    document.getElementById("firstBtn8").style.color = "black";
    document.getElementById("firstBtn8").style.border = "1px solid black";

    document.getElementById("secondBtn8").style.backgroundColor = "white";
    document.getElementById("secondBtn8").style.color = "black";
    document.getElementById("secondBtn8").style.border = "1px solid black";

    document.getElementById("thirdBtn8").style.backgroundColor = "white";
    document.getElementById("thirdBtn8").style.color = "black";
    document.getElementById("thirdBtn8").style.border = "1px solid black";
};

function question8() {
    if (selectedButton8 != "") {
        succerror(
            document.getElementById(selectedNameButton8),
            selectedButton8 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton8 === "right") {
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
        document.getElementById("firstBtn8").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn8").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn8").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn8").style.border =
            "2px solid #FFB47D";
    }
}

// 9 QUESTION

function question9() {
    // получаем содержимое корзин
    let contentBasketTrue = document.getElementById(
        "placeOfDroppingFigures9true"
    ).children;

    let contentBasketFalse = document.getElementById(
        "placeOfDroppingFigures9false"
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
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );

            addCorrectAnswerQuestion9();
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

// 10 QUESTION

let numbers10 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

document.getElementById("firstNumber10").onchange = function (e) {
    if (e.target.value == 3) {
        numbers10.firstNumber = "right";
    } else {
        numbers10.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber10").onchange = function (e) {
    if (e.target.value == 8) {
        numbers10.secondNumber = "right";
    } else {
        numbers10.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber10").onchange = function (e) {
    if (e.target.value == 12) {
        numbers10.thirdNumber = "right";
    } else {
        numbers10.thirdNumber = "wrong";
    }
};

function question10() {
    if (
        numbers10.firstNumber != "" &&
        numbers10.secondNumber != "" &&
        numbers10.thirdNumber != ""
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

        // расставляем мини-иконки

        // createMiniIcon(
        //     numbers10.firstNumber,
        //     document.getElementById("firstNumber10")
        // );

        // createMiniIcon(
        //     numbers10.secondNumber,
        //     document.getElementById("secondNumber10")
        // );

        // createMiniIcon(
        //     numbers10.thirdNumber,
        //     document.getElementById("thirdNumber10")
        // );

        // выносим общий статус к номеру вопроса

        if (
            numbers10.firstNumber === "right" &&
            numbers10.secondNumber === "right" &&
            numbers10.thirdNumber === "right"
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
    }
}

// 11 QUESTION

let selectedButton11 = {
    firstBtn11: "",
    secondBtn11: "",
    thirdBtn11: "",
    fourthBtn11: "",
    fifthBtn11: "",
    sixthBtn11: "",
    seventhBtn11: "",
    eighthBtn11: "",
};

let theFirstButtonWasClicked = 0;

document.getElementById("firstBtn11").onclick = function () {
    document.getElementById("firstBtn11").classList.toggle("selectedCircle");

    theFirstButtonWasClicked++;

    if (selectedButton11.firstBtn11 === "") {
        selectedButton11.firstBtn11 = "wrong";
    } else {
        selectedButton11.firstBtn11 = "wrong";
    }
};

document.getElementById("secondBtn11").onclick = function () {
    document.getElementById("secondBtn11").classList.toggle("selectedCircle");

    selectedButton11.secondBtn11 = "right";
};

document.getElementById("thirdBtn11").onclick = function () {
    document.getElementById("thirdBtn11").classList.toggle("selectedCircle");

    selectedButton11.thirdBtn11 = "wrong";
};

document.getElementById("fourthBtn11").onclick = function () {
    document.getElementById("fourthBtn11").classList.toggle("selectedCircle");

    selectedButton11.fourthBtn11 = "right";
};

document.getElementById("fifthBtn11").onclick = function () {
    document.getElementById("fifthBtn11").classList.toggle("selectedCircle");

    selectedButton11.fifthBtn11 = "wrong";
};

document.getElementById("sixthBtn11").onclick = function () {
    document.getElementById("sixthBtn11").classList.toggle("selectedCircle");

    selectedButton11.sixthBtn11 = "right";
};

document.getElementById("seventhBtn11").onclick = function () {
    document.getElementById("seventhBtn11").classList.toggle("selectedCircle");

    selectedButton11.seventhBtn11 = "wrong";
};

document.getElementById("eighthBtn11").onclick = function () {
    document.getElementById("eighthBtn11").classList.toggle("selectedCircle");

    selectedButton11.eighthBtn11 = "right";
};

function question11() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton11) {
        if (selectedButton11[key] !== "") {
            selectedButtons.push(selectedButton11[key]);
            namesSelectedButtons.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        namesSelectedButtons.map((el, index) => {
            if (theFirstButtonWasClicked > 0 && index === 0) {
                document.getElementById("firstBtn11").style.border = "none";
            } else {
                document.getElementById("firstBtn11").style.border =
                    "2px solid #ED7777";
            }

            if (selectedButtons[index] === "wrong") {
                document.getElementById(el).style.border = "2px solid #ED7777";
            } else {
                document.getElementById(el).style.border = "2px solid #48B736";
            }
        });

        // выносим общий статус к номеру вопроса

        if (
            theFirstButtonWasClicked > 0 &&
            selectedButton11.secondBtn11 === "right" &&
            selectedButton11.fourthBtn11 === "right" &&
            selectedButton11.sixthBtn11 === "right" &&
            selectedButton11.eighthBtn11 === "right" &&
            selectedButton11.firstBtn11 !== "right" &&
            selectedButton11.thirdBtn11 !== "right" &&
            selectedButton11.fifthBtn11 !== "right" &&
            selectedButton11.seventhBtn11 !== "right"
        ) {
            document.getElementById("firstBtn11").style.border = "none";
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
        document
            .getElementById("firstBtn11")
            .classList.remove("selectedCircle");
        document.getElementsByClassName("content11")[0].style.padding = "10px";

        document.getElementsByClassName("content11")[0].style.border =
            "2px solid #FFB47D";
    }
}

// 12 QUESTION

function question12() {
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
            fourthWagon === "secondWagon0" &&
            twelfthWagon === "firstWagon0" &&
            fourteenWagon === "thirdWagon0" &&
            eighteenWagon === "fourthWagon0"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            // подсвечиваем неверновыбранные вагоны
            if (fourthWagon !== "secondWagon0") {
                document.getElementById(fourthWagon).style.border =
                    "2px solid #ED7777";
            }

            if (twelfthWagon !== "firstWagon0") {
                document.getElementById(twelfthWagon).style.border =
                    "2px solid #ED7777";
            }

            if (fourteenWagon !== "thirdWagon0") {
                document.getElementById(fourteenWagon).style.border =
                    "2px solid #ED7777";
            }

            if (eighteenWagon !== "fourthWagon0") {
                document.getElementById(eighteenWagon).style.border =
                    "2px solid #ED7777";
            }

            // ставим статус
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            addCorrectAnswerQuestion12();
        }
    }
}

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

document.getElementById("firstNumber13").onchange = function (e) {
    if (e.target.value == 1) {
        numbers13.firstNumber = "right";
    } else {
        numbers13.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber13").onchange = function (e) {
    if (e.target.value == 9) {
        numbers13.secondNumber = "right";
    } else {
        numbers13.secondNumber = "wrong";
    }
};

document.getElementById("thirdNumber13").onchange = function (e) {
    if (e.target.value == 8) {
        numbers13.thirdNumber = "right";
    } else {
        numbers13.thirdNumber = "wrong";
    }
};

document.getElementById("fourthNumber13").onchange = function (e) {
    if (e.target.value == 0) {
        numbers13.fourthNumber = "right";
    } else {
        numbers13.fourthNumber = "wrong";
    }
};

function question13() {
    if (
        numbers13.firstNumber != "" &&
        numbers13.secondNumber != "" &&
        numbers13.thirdNumber != "" &&
        numbers13.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber13"),
            numbers13.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber13"),
            numbers13.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber13"),
            numbers13.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber13"),
            numbers13.fourthNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers13.firstNumber,
            document.getElementById("firstNumber13")
        );

        createMiniIcon(
            numbers13.secondNumber,
            document.getElementById("secondNumber13")
        );

        createMiniIcon(
            numbers13.thirdNumber,
            document.getElementById("thirdNumber13")
        );

        createMiniIcon(
            numbers13.fourthNumber,
            document.getElementById("fourthNumber13")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers13.firstNumber === "right" &&
            numbers13.secondNumber === "right" &&
            numbers13.thirdNumber === "right" &&
            numbers13.fourthNumber === "right"
        ) {
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
        if (numbers13.firstNumber === "") {
            document.getElementById("firstNumber13").style.border =
                "2px solid #FFB47D";
        }

        if (numbers13.secondNumber === "") {
            document.getElementById("secondNumber13").style.border =
                "2px solid #FFB47D";
        }

        if (numbers13.thirdNumber === "") {
            document.getElementById("thirdNumber13").style.border =
                "2px solid #FFB47D";
        }

        if (numbers13.fourthNumber === "") {
            document.getElementById("fourthNumber13").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 14 QUESTION

let numbers14 = {
    firstNumber: "",
    secondNumber: "",
};

document.getElementById("firstNumber14").onchange = function (e) {
    if (e.target.value == 27) {
        numbers14.firstNumber = "right";
    } else {
        numbers14.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber14").onchange = function (e) {
    if (e.target.value == 26) {
        numbers14.secondNumber = "right";
    } else {
        numbers14.secondNumber = "wrong";
    }
};

function question14() {
    // проверяем на присутствие знака
    let requiredElement =
        document.getElementsByClassName("inputs14")[0].children[1].children[0];
    let selectedSign = requiredElement.textContent.trim();

    if (
        numbers14.firstNumber != "" &&
        selectedSign != "" &&
        numbers14.secondNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber14"),
            numbers14.firstNumber === "wrong"
        );

        succerror(requiredElement, selectedSign !== ">");

        succerror(
            document.getElementById("secondNumber14"),
            numbers14.secondNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers14.firstNumber,
            document.getElementById("firstNumber14")
        );

        createMiniIcon(
            numbers14.secondNumber,
            document.getElementById("secondNumber14")
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers14.firstNumber === "right" &&
            selectedSign === ">" &&
            numbers14.secondNumber === "right"
        ) {
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
        if (numbers14.firstNumber === "") {
            document.getElementById("firstNumber14").style.border =
                "2px solid #FFB47D";
        }

        if (numbers14.secondNumber === "") {
            document.getElementById("secondNumber14").style.border =
                "2px solid #FFB47D";
        }

        if (selectedSign !== ">") {
            requiredElement.style.border = "2px solid #FFB47D";
        }
    }
}

// 15 QUESTION

let numbers15 = {
    firstNumber: "",
    secondNumber: "",
};

document.getElementById("firstNumber15").onchange = function (e) {
    if (e.target.value == 45) {
        numbers15.firstNumber = "right";
    } else {
        numbers15.firstNumber = "wrong";
    }
};

document.getElementById("secondNumber15").onchange = function (e) {
    if (e.target.value == 75) {
        numbers15.secondNumber = "right";
    } else {
        numbers15.secondNumber = "wrong";
    }
};

function question15() {
    if (numbers15.firstNumber != "" && numbers15.secondNumber != "") {
        succerror(
            document.getElementById("firstNumber15"),
            numbers15.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber15"),
            numbers15.secondNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers15.firstNumber === "right" &&
            numbers15.secondNumber === "right"
        ) {
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

            addCorrectAnswerQuestion15();
        }
    } else {
        if (numbers15.firstNumber === "") {
            document.getElementById("firstNumber15").style.border =
                "2px solid #FFB47D";
        }

        if (numbers15.secondNumber === "") {
            document.getElementById("secondNumber15").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 16 QUESTION

let numbers16 = {
    firstNumber: "",
};

document.getElementById("firstNumber16").onchange = function (e) {
    if (e.target.value == 18) {
        numbers16.firstNumber = "right";
    } else {
        numbers16.firstNumber = "wrong";
    }
};

function question16() {
    if (numbers16.firstNumber != "") {
        succerror(
            document.getElementById("firstNumber16"),
            numbers16.firstNumber === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            numbers16.firstNumber,
            document.getElementById("firstNumber16")
        );

        // выносим общий статус к номеру вопроса

        if (numbers16.firstNumber === "right") {
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

            addCorrectAnswerQuestion16();
        }
    } else {
        document.getElementById("firstNumber16").style.border =
            "2px solid #FFB47D";
    }
}

// 17 QUESTION

let selectedButton17 = "",
    selectedNameButton17;

document.getElementById("firstBtn17").onclick = function () {
    let clickedElement = document.getElementById("firstBtn17");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton17 = "right";
    selectedNameButton17 = "firstBtn17";

    document.getElementById("secondBtn17").style.backgroundColor = "white";
    document.getElementById("secondBtn17").style.color = "black";
    document.getElementById("secondBtn17").style.border = "1px solid black";

    document.getElementById("thirdBtn17").style.backgroundColor = "white";
    document.getElementById("thirdBtn17").style.color = "black";
    document.getElementById("thirdBtn17").style.border = "1px solid black";
};

document.getElementById("secondBtn17").onclick = function () {
    let clickedElement = document.getElementById("secondBtn17");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton17 = "wrong";
    selectedNameButton17 = "secondBtn17";

    document.getElementById("thirdBtn17").style.backgroundColor = "white";
    document.getElementById("thirdBtn17").style.color = "black";
    document.getElementById("thirdBtn17").style.border = "1px solid black";

    document.getElementById("firstBtn17").style.backgroundColor = "white";
    document.getElementById("firstBtn17").style.color = "black";
    document.getElementById("firstBtn17").style.border = "1px solid black";
};

document.getElementById("thirdBtn17").onclick = function () {
    let clickedElement = document.getElementById("thirdBtn17");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton17 = "wrong";
    selectedNameButton17 = "thirdBtn17";

    document.getElementById("secondBtn17").style.backgroundColor = "white";
    document.getElementById("secondBtn17").style.color = "black";
    document.getElementById("secondBtn17").style.border = "1px solid black";

    document.getElementById("firstBtn17").style.backgroundColor = "white";
    document.getElementById("firstBtn17").style.color = "black";
    document.getElementById("firstBtn17").style.border = "1px solid black";
};

function question17() {
    if (selectedButton17 != "") {
        succerror(
            document.getElementById(selectedNameButton17),
            selectedButton17 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton17 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            addCorrectAnswerQuestion17();
        }
    } else {
        document.getElementById("firstBtn17").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn17").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn17").style.border =
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

// 20 QUESTION

let numbers20 = {
    firstNumber: "",
    secondNumber: "",
};

gettingDataFromFields(2, ["09 : 30", "12 : 30"], 20, numbers20);

function question20() {
    if (numbers20.firstNumber != "" && numbers20.secondNumber != "") {
        // succerrorAndCreateMiniIcon(2, 20, numbers20);
        succerror(
            document.getElementById("firstNumber20"),
            numbers20.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber20"),
            numbers20.secondNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers20.firstNumber === "right" &&
            numbers20.secondNumber === "right"
        ) {
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

            addCorrectAnswerQuestion20();
        }
    } else {
        highlightUnselectedBlocks(2, 20, numbers20);
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
    question15();
    question16();
    question17();
    question18();
    question19();
    question20();
    question21();
    question22();
    question23();
    question24();
};

document.getElementById("clear").onclick = function () {
    let allInputs = document.querySelectorAll("input");
    let allStatusIcons = document.getElementsByClassName("statusIcon");
    let allMiniIcons = document.getElementsByClassName("miniIcon");

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].style.border = "1px solid";
    }

    for (let i = 0; i < allStatusIcons.length; i++) {
        allStatusIcons[i].remove();
    }

    for (let i = 0; i < allMiniIcons.length; i) {
        if (allMiniIcons.length) {
            allMiniIcons[i].remove();
        }
    }

    document.getElementById("firstBtn6").style.border = "1px solid";
    document.getElementById("secondBtn6").style.border = "1px solid";
    document.getElementById("thirdBtn6").style.border = "1px solid";
    document.getElementById("fourthBtn6").style.border = "1px solid";

    document.getElementById("firstBtn7").style.border = "1px solid";
    document.getElementById("secondBtn7").style.border = "1px solid";
    document.getElementById("thirdBtn7").style.border = "1px solid";
    document.getElementById("fourthBtn7").style.border = "1px solid";
    document.getElementById("fifthBtn7").style.border = "1px solid";

    document.getElementById("firstBtn8").style.border = "1px solid";
    document.getElementById("secondBtn8").style.border = "1px solid";
    document.getElementById("thirdBtn8").style.border = "1px solid";
    document.getElementById("fourthBtn8").style.border = "1px solid";

    document.getElementsByClassName("true")[0].style.border =
        "1px solid #d0d0d0";
    document.getElementsByClassName("false")[0].style.border =
        "1px solid #d0d0d0";

    document.getElementsByClassName("content11")[0].style.border = "none";

    document.getElementById("wagonEmpty0").style.border = "none";
    document.getElementById("wagonEmpty1").style.border = "none";
    document.getElementById("wagonEmpty2").style.border = "none";
    document.getElementById("wagonEmpty3").style.border = "none";

    document.getElementById("selectInput14").style.border = "1px solid #d0d0d0";

    document.getElementById("firstBtn17").style.border = "1px solid";
    document.getElementById("secondBtn17").style.border = "1px solid";
    document.getElementById("thirdBtn17").style.border = "1px solid";

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

    // 1 QUESTION

    function check1question() {
        let leftNumber1 = document.getElementById("leftNumber");
        let centerNumber1 = document.getElementById("centerNumber");
        let rightNumber1 = document.getElementById("rightNumber");

        leftNumber1.value = "";
        centerNumber1.value = "";
        rightNumber1.value = "";

        document.getElementsByClassName("correctAnswer1")[0].remove();
        document.getElementsByClassName("app1")[0].style.height = "532px";
        document.getElementsByClassName("app1")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading1"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        leftNumber1.style.backgroundColor = "white";
        leftNumber1.style.color = "black";
        leftNumber1.style.border = "1px solid";

        centerNumber1.style.backgroundColor = "white";
        centerNumber1.style.color = "black";
        centerNumber1.style.border = "1px solid";

        rightNumber1.style.backgroundColor = "white";
        rightNumber1.style.color = "black";
        rightNumber1.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer1")[0] && check1question();

    // 2 QUESTION

    function check2question() {
        let firstNumber2 = document.getElementById("firstNumber2");

        firstNumber2.value = "";

        document.getElementsByClassName("correctAnswer2")[0].remove();
        document.getElementsByClassName("app2")[0].style.height = "307px";
        document.getElementsByClassName("app2")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading2"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber2.style.backgroundColor = "white";
        firstNumber2.style.color = "black";
        firstNumber2.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer2")[0] && check2question();

    // 3 QUESTION

    function check3question() {
        let leftNumber3 = document.getElementById("leftNumber3");
        let rightNumber3 = document.getElementById("rightNumber3");

        leftNumber3.value = "";
        rightNumber3.value = "";

        document.getElementsByClassName("correctAnswer3")[0].remove();
        document.getElementsByClassName("app3")[0].style.height = "348px";
        document.getElementsByClassName("app3")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading3"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        leftNumber3.style.backgroundColor = "white";
        leftNumber3.style.color = "black";
        leftNumber3.style.border = "1px solid";

        rightNumber3.style.backgroundColor = "white";
        rightNumber3.style.color = "black";
        rightNumber3.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer3")[0] && check3question();

    // 4 QUESTION

    function check4question() {
        let firstNumber4 = document.getElementById("firstNumber4");
        let secondNumber4 = document.getElementById("secondNumber4");
        let thirdNumber4 = document.getElementById("thirdNumber4");
        let fourthNumber4 = document.getElementById("fourthNumber4");

        firstNumber4.value = "";
        secondNumber4.value = "";
        thirdNumber4.value = "";
        fourthNumber4.value = "";

        document.getElementsByClassName("correctAnswer4")[0].remove();
        document.getElementsByClassName("app4")[0].style.height = "403px";
        document.getElementsByClassName("app4")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading4"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber4.style.backgroundColor = "white";
        firstNumber4.style.color = "black";
        firstNumber4.style.border = "1px solid";

        secondNumber4.style.backgroundColor = "white";
        secondNumber4.style.color = "black";
        secondNumber4.style.border = "1px solid";

        thirdNumber4.style.backgroundColor = "white";
        thirdNumber4.style.color = "black";
        thirdNumber4.style.border = "1px solid";

        fourthNumber4.style.backgroundColor = "white";
        fourthNumber4.style.color = "black";
        fourthNumber4.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer4")[0] && check4question();

    // 5 QUESTION

    function check5question() {
        let firstNumber5 = document.getElementById("firstNumber5");
        let secondNumber5 = document.getElementById("secondNumber5");
        let thirdNumber5 = document.getElementById("thirdNumber5");

        firstNumber5.value = "";
        secondNumber5.value = "";
        thirdNumber5.value = "";

        document.getElementsByClassName("correctAnswer5")[0].remove();
        document.getElementsByClassName("app5")[0].style.height = "443px";
        document.getElementsByClassName("app5")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading5"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber5.style.backgroundColor = "white";
        firstNumber5.style.color = "black";
        firstNumber5.style.border = "1px solid";

        secondNumber5.style.backgroundColor = "white";
        secondNumber5.style.color = "black";
        secondNumber5.style.border = "1px solid";

        thirdNumber5.style.backgroundColor = "white";
        thirdNumber5.style.color = "black";
        thirdNumber5.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer5")[0] && check5question();

    // 6 QUESTION

    function check6question() {
        let firstBtn6 = document.getElementById("firstBtn6");
        let secondBtn6 = document.getElementById("secondBtn6");
        let thirdBtn6 = document.getElementById("thirdBtn6");
        let fourthBtn6 = document.getElementById("fourthBtn6");

        document.getElementsByClassName("correctAnswer6")[0].remove();
        document.getElementsByClassName("app6")[0].style.height = "447px";
        document.getElementsByClassName("app6")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading6"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstBtn6.style.backgroundColor = "white";
        firstBtn6.style.color = "black";
        firstBtn6.style.border = "1px solid";

        secondBtn6.style.backgroundColor = "white";
        secondBtn6.style.color = "black";
        secondBtn6.style.border = "1px solid";

        thirdBtn6.style.backgroundColor = "white";
        thirdBtn6.style.color = "black";
        thirdBtn6.style.border = "1px solid";

        fourthBtn6.style.backgroundColor = "white";
        fourthBtn6.style.color = "black";
        fourthBtn6.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer6")[0] && check6question();

    // 7 QUESTION

    function check7question() {
        let firstBtn7 = document.getElementById("firstBtn7");
        let secondBtn7 = document.getElementById("secondBtn7");
        let thirdBtn7 = document.getElementById("thirdBtn7");
        let fourthBtn7 = document.getElementById("fourthBtn7");
        let fifthBtn7 = document.getElementById("fifthBtn7");

        document.getElementsByClassName("correctAnswer7")[0].remove();
        document.getElementsByClassName("app7")[0].style.height = "331px";
        document.getElementsByClassName("app7")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading7"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstBtn7.style.backgroundColor = "white";
        firstBtn7.style.color = "black";
        firstBtn7.style.border = "1px solid";

        secondBtn7.style.backgroundColor = "white";
        secondBtn7.style.color = "black";
        secondBtn7.style.border = "1px solid";

        thirdBtn7.style.backgroundColor = "white";
        thirdBtn7.style.color = "black";
        thirdBtn7.style.border = "1px solid";

        fourthBtn7.style.backgroundColor = "white";
        fourthBtn7.style.color = "black";
        fourthBtn7.style.border = "1px solid";

        fifthBtn7.style.backgroundColor = "white";
        fifthBtn7.style.color = "black";
        fifthBtn7.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer7")[0] && check7question();

    // 8 QUESTION

    function check8question() {
        let firstBtn8 = document.getElementById("firstBtn8");
        let secondBtn8 = document.getElementById("secondBtn8");
        let thirdBtn8 = document.getElementById("thirdBtn8");
        let fourthBtn8 = document.getElementById("fourthBtn8");

        document.getElementsByClassName("correctAnswer8")[0].remove();
        document.getElementsByClassName("app8")[0].style.height = "424px";
        document.getElementsByClassName("app8")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading8"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstBtn8.style.backgroundColor = "white";
        firstBtn8.style.color = "black";
        firstBtn8.style.border = "1px solid";

        secondBtn8.style.backgroundColor = "white";
        secondBtn8.style.color = "black";
        secondBtn8.style.border = "1px solid";

        thirdBtn8.style.backgroundColor = "white";
        thirdBtn8.style.color = "black";
        thirdBtn8.style.border = "1px solid";

        fourthBtn8.style.backgroundColor = "white";
        fourthBtn8.style.color = "black";
        fourthBtn8.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer8")[0] && check8question();

    // 10 QUESTION

    function check10question() {
        let firstNumber10 = document.getElementById("firstNumber10");
        let secondNumber10 = document.getElementById("secondNumber10");
        let thirdNumber10 = document.getElementById("thirdNumber10");

        firstNumber10.value = "";
        secondNumber10.value = "";
        thirdNumber10.value = "";

        document.getElementsByClassName("correctAnswer10")[0].remove();
        document.getElementsByClassName("app10")[0].style.height = "283px";
        document.getElementsByClassName("app10")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading10"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber10.style.backgroundColor = "white";
        firstNumber10.style.color = "black";
        firstNumber10.style.border = "1px solid";

        secondNumber10.style.backgroundColor = "white";
        secondNumber10.style.color = "black";
        secondNumber10.style.border = "1px solid";

        thirdNumber10.style.backgroundColor = "white";
        thirdNumber10.style.color = "black";
        thirdNumber10.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer10")[0] && check10question();

    // 13 QUESTION

    function check13question() {
        let firstNumber13 = document.getElementById("firstNumber13");
        let secondNumber13 = document.getElementById("secondNumber13");
        let thirdNumber13 = document.getElementById("thirdNumber13");
        let fourthNumber13 = document.getElementById("fourthNumber13");

        firstNumber13.value = "";
        secondNumber13.value = "";
        thirdNumber13.value = "";
        fourthNumber13.value = "";

        document.getElementsByClassName("correctAnswer13")[0].remove();
        document.getElementsByClassName("app13")[0].style.height = "343px";
        document.getElementsByClassName("app13")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading13"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber13.style.backgroundColor = "white";
        firstNumber13.style.color = "black";
        firstNumber13.style.border = "1px solid";

        secondNumber13.style.backgroundColor = "white";
        secondNumber13.style.color = "black";
        secondNumber13.style.border = "1px solid";

        thirdNumber13.style.backgroundColor = "white";
        thirdNumber13.style.color = "black";
        thirdNumber13.style.border = "1px solid";

        fourthNumber13.style.backgroundColor = "white";
        fourthNumber13.style.color = "black";
        fourthNumber13.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer13")[0] && check13question();

    // 15 QUESTION

    function check15question() {
        let firstNumber15 = document.getElementById("firstNumber15");
        let secondNumber15 = document.getElementById("secondNumber15");

        firstNumber15.value = "";
        secondNumber15.value = "";

        document.getElementsByClassName("correctAnswer15")[0].remove();
        document.getElementsByClassName("app15")[0].style.height = "299px";
        document.getElementsByClassName("app15")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading15"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber15.style.backgroundColor = "white";
        firstNumber15.style.color = "black";
        firstNumber15.style.border = "1px solid";

        secondNumber15.style.backgroundColor = "white";
        secondNumber15.style.color = "black";
        secondNumber15.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer15")[0] && check15question();

    // 16 QUESTION

    function check16question() {
        let firstNumber16 = document.getElementById("firstNumber16");
        firstNumber16.value = "";

        document.getElementsByClassName("correctAnswer16")[0].remove();
        document.getElementsByClassName("app16")[0].style.height = "317px";
        document.getElementsByClassName("app16")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading16"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber16.style.backgroundColor = "white";
        firstNumber16.style.color = "black";
        firstNumber16.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer16")[0] && check16question();

    // 20 QUESTION

    function check20question() {
        let firstNumber20 = document.getElementById("firstNumber20");
        let secondNumber20 = document.getElementById("secondNumber20");

        firstNumber20.value = "";
        secondNumber20.value = "";

        document.getElementsByClassName("correctAnswer20")[0].remove();
        document.getElementsByClassName("app20")[0].style.height = "416px";
        document.getElementsByClassName("app20")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading20"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber20.style.backgroundColor = "white";
        firstNumber20.style.color = "black";
        firstNumber20.style.border = "1px solid";

        secondNumber20.style.backgroundColor = "white";
        secondNumber20.style.color = "black";
        secondNumber20.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer20")[0] && check20question();

    // 21 QUESTION

    function check21question() {
        let firstInput21 = document.getElementById("firstInput21");
        let secondInput21 = document.getElementById("secondInput21");
        let thirdInput21 = document.getElementById("thirdInput21");

        firstInput21.value = "";
        secondInput21.value = "";
        thirdInput21.value = "";

        document.getElementsByClassName("correctAnswer21")[0].remove();
        document.getElementsByClassName("app21")[0].style.height = "732px";
        document.getElementsByClassName("app21")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading21"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstInput21.style.backgroundColor = "white";
        firstInput21.style.color = "black";
        firstInput21.style.border = "1px solid";

        secondInput21.style.backgroundColor = "white";
        secondInput21.style.color = "black";
        secondInput21.style.border = "1px solid";

        thirdInput21.style.backgroundColor = "white";
        thirdInput21.style.color = "black";
        thirdInput21.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer21")[0] && check21question();

    // common

    // function check1question() {
    //     let leftNumber1 = document.getElementById("leftNumber");
    //     let centerNumber1 = document.getElementById("centerNumber");
    //     let rightNumber1 = document.getElementById("rightNumber");

    //     leftNumber1.value = "";
    //     centerNumber1.value = "";
    //     rightNumber1.value = "";

    //     document.getElementsByClassName("correctAnswer1")[0].remove();
    //     document.getElementsByClassName("app1")[0].style.height = "532px";
    //     document.getElementsByClassName("app1")[0].style.border =
    //         "0.5px solid #a8a8a8";
    //     document.getElementsByClassName(
    //         "lineUnderHeading1"
    //     )[0].style.borderBottom = "0.5px solid #a8a8a8";

    //     leftNumber1.style.backgroundColor = "white";
    //     leftNumber1.style.color = "black";
    //     leftNumber1.style.border = "1px solid";

    //     centerNumber1.style.backgroundColor = "white";
    //     centerNumber1.style.color = "black";
    //     centerNumber1.style.border = "1px solid";

    //     rightNumber1.style.backgroundColor = "white";
    //     rightNumber1.style.color = "black";
    //     rightNumber1.style.border = "1px solid";
    // }

    // function commonClear(numberInput, numberClass, countInputs) {
    //     for (let i = 0; i < countInputs; i++) {
    //         if (numberClass === "ll") {
    //             numberInput.style.backgroundColor = "white";
    //             numberInput.style.color = "black";
    //             numberInput.style.border = "1px solid";
    //         }
    //     }
    // }

    // leftNumber1, centerNumber1, rightNumber1;

    // commonClear([leftNumber1, centerNumber1, rightNumber1], 1, 3);
};
