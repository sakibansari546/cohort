let allBoards = JSON.parse(localStorage.getItem("boards"))
  ? JSON.parse(localStorage.getItem("boards"))
  : [
      {
        id: 1,
        title: "Tasks",
        description: "This is the tasks board",
        color: "red",
        createdAt: new Date(),
        taskRef: [1],
      },
      {
        id: 2,
        title: "In Progress",
        description: "This is the tasks board",
        color: "red",
        createdAt: new Date(),
        taskRef: [2, 3],
      },
      {
        id: 3,
        title: "Done",
        description: "This is the tasks board",
        color: "red",
        createdAt: new Date(),
        taskRef: [],
      },
    ];

let allTasks = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [
      {
        id: 1,
        content: "Learn React",
        createdAt: new Date(),
        isComplete: false,
        boardRef: 1,
      },
      {
        id: 2,
        content: "Learn Node",
        createdAt: new Date(),
        isComplete: false,
        boardRef: 2,
      },
      {
        id: 3,
        content: "Learn AWS",
        createdAt: new Date(),
        isComplete: false,
        boardRef: 2,
      },
    ];

window.addEventListener("load", () => {
  localStorage.setItem("boards", JSON.stringify(allBoards));
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  displayBoards();
});

function displayAllTasksWithBoard(tasksDiv, board) {
  // const tasks = JSON.parse(localStorage.getItem("tasks"));

  allTasks.forEach((task) => {
    if (task.boardRef == board.id) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      taskDiv.setAttribute("draggable", true);
      taskDiv.setAttribute("id", task.id);

      const taskContentP = document.createElement("p");
      taskContentP.innerText = task.content;

      taskDiv.appendChild(taskContentP);

      handleDragStartAndEndEvent(taskDiv, task, board);

      tasksDiv.appendChild(taskDiv);
    }
  });
}

const containerElem = document.querySelector(".container");

function reRenderContainer() {
  while (containerElem.firstChild) {
    containerElem.removeChild(containerElem.firstChild);
  }
}

function deleteBoardFn(board) {
  // Yahan ager me updateBoards or updateTasks boards and tasks direct localstorage me set kr rha tha to ye reRender kyu nhi ho raha tha
  const updateBoards = allBoards.filter(
    (currBoard) => currBoard.id !== board.id
  );
  const updateTasks = allTasks.filter((task) => task.boardRef !== board.id);

  allBoards = JSON.parse(JSON.stringify(updateBoards));
  allTasks = JSON.parse(JSON.stringify(updateTasks));

  localStorage.setItem("boards", JSON.stringify(allBoards));
  localStorage.setItem("tasks", JSON.stringify(allTasks));

  reRenderContainer();
  displayBoards();
}

function addTaskFn(board) {
  const content = prompt("Enter the task!!");
  const newId = allTasks.length
    ? Math.max(...allTasks.map((task) => task.id)) + 1
    : 1;

  const newTask = {
    id: newId,
    content: content,
    createdAt: new Date(),
    isComplete: false,
    boardRef: board.id,
  };

  allBoards.forEach((currBoard) => {
    if (currBoard.id == board.id) {
      currBoard.taskRef.push(newTask.id);
    }
  });

  allTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  localStorage.setItem("boards", JSON.stringify(allBoards));
  reRenderContainer();
  displayBoards();
}

function handleDragStartAndEndEvent(taskDiv, task, board) {
  taskDiv.addEventListener("dragstart", () => {
    taskDiv.classList.add("flying");
  });
  taskDiv.addEventListener("dragend", () => {
    taskDiv.classList.remove("flying");
  });
}

function displayBoards() {
  allBoards.forEach((board) => {
    const boardDiv = document.createElement("div");
    boardDiv.classList.add("board");
    boardDiv.setAttribute("id", board.id);

    const boardHeader = document.createElement("div");
    boardHeader.classList.add("board-header");

    const boardHead = document.createElement("div");
    boardHead.classList.add("board-head");

    const boardHeading = document.createElement("div");
    boardHeading.classList.add("board-heading");

    const colorRing = document.createElement("div");
    colorRing.classList.add("color-ring");
    colorRing.style.borderColor = board.color;

    const boardTitle = document.createElement("h3");
    boardTitle.innerText = board.title;

    const taskCount = document.createElement("div");
    taskCount.classList.add("task-count");
    taskCount.innerText = board.taskRef.length;

    const boardDesc = document.createElement("div");
    boardDesc.classList.add("board-desc");

    const boardDescP = document.createElement("p");
    boardDescP.innerText = board.description;

    const boardRight = document.createElement("div");
    boardRight.classList.add("board-right");

    const deleteIcon = document.createElement("button");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = "&times;";

    deleteIcon.addEventListener("click", () => {
      deleteBoardFn(board);
    });

    const tasksDiv = document.createElement("div");
    tasksDiv.classList.add("tasks");

    displayAllTasksWithBoard(tasksDiv, board);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.innerText = "Add Task +";

    addTaskBtn.addEventListener("click", () => {
      addTaskFn(board);
    });

    boardHeading.appendChild(colorRing);
    boardHeading.appendChild(boardTitle);
    boardHeading.appendChild(taskCount);

    boardHead.appendChild(boardHeading);
    boardHead.appendChild(boardDesc);

    boardDesc.appendChild(boardDescP);

    boardHeader.appendChild(boardHead);
    boardHeader.appendChild(boardRight);

    boardRight.appendChild(deleteIcon);

    boardDiv.appendChild(boardHeader);
    boardDiv.appendChild(tasksDiv);
    boardDiv.appendChild(addTaskBtn);

    boardDiv.addEventListener("dragover", (e) => e.preventDefault());
    boardDiv.addEventListener("drop", () => {
      const flyingElem = document.querySelector(".flying");
      if (!flyingElem) return;
      const taskId = Number(flyingElem.getAttribute("id"));

      const currentTaskElem = allTasks.find((task) => task.id == taskId);

      let previousBoard = allBoards.find((b) => b.taskRef.includes(taskId));

      allTasks.forEach((task) => {
        if (task.id == taskId) {
          task.boardRef = board.id;
        }
        return task;
      });

      const removeTaskRefInPreBoard = allBoards.map((board) => {
        if (previousBoard.id == board.id) {
          board.taskRef = board.taskRef.filter((ref) => ref != taskId);
        }
        return board;
      });

      const updateBoards = removeTaskRefInPreBoard.map((b) => {
        if (b.id == board.id) {
          b.taskRef.push(taskId);
        }
        return b;
      });

      allBoards = JSON.parse(JSON.stringify(updateBoards));

      console.log(" ", allBoards);
      console.log(" ", allTasks);

      localStorage.setItem("boards", JSON.stringify(allBoards));
      localStorage.setItem("tasks", JSON.stringify(allTasks));

      reRenderContainer();
      displayBoards();

      // console.log("phele wala board ", previousBoard);
      // console.log("chainging the board ref ", changeBoardRefInTask);
      // console.log(
      //   "removing the tasj ref in pre borad",
      //   removeTaskRefInPreBoard
      // );
    });

    containerElem.append(boardDiv);
  });
}

function deleteBoard(boardId) {
  const updatedBoards = allBoards.filter((board) => board.id !== boardId);
  localStorage.setItem("boards", JSON.stringify(updatedBoards));
  reRenderContainer();
  displayBoards();
}

const addBoardBtnElem = document.querySelector(".add-board-btn");
const addBoardModalElem = document.querySelector(".add-board-modal");

document
  .querySelector(".close-icon")
  .addEventListener("click", removeBoardModal);

function removeBoardModal() {
  addBoardModalElem.classList.remove("active");
}

addBoardBtnElem.addEventListener("click", () => {
  addBoardModalElem.classList.add("active");
});

const addBoardModeFormElem = document.querySelector(".add-board-modal-form");
addBoardModeFormElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const boardTitleInputElem = document.querySelector("#title");
  const boardDecInputElem = document.querySelector("#desc");

  const colorsInputElems = document.querySelector(
    'input[name="color"]:checked'
  );
  const colorValue = colorsInputElems ? colorsInputElems.value : "#black";

  const newId = allBoards.length
    ? Math.max(...allBoards.map((board) => board.id)) + 1
    : 1;

  const newBoard = {
    id: newId,
    title: boardTitleInputElem.value,
    description: boardDecInputElem.value,
    color: colorValue,
    createdAt: new Date(),
    taskRef: [],
  };

  allBoards.push(newBoard);
  localStorage.setItem("boards", JSON.stringify(allBoards));
  reRenderContainer();
  displayBoards();
  removeBoardModal();
  boardDecInputElem.value = "";
  boardTitleInputElem.value = "";
});
