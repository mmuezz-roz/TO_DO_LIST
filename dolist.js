var input = document.getElementById("inp1");
var listContainer = document.getElementById("new");

function addTask() {
    if (input.value.trim() === '') {
        alert("Please Enter any Task!!");
        return;
    }

    let dv = document.createElement('div');
    dv.className = "divfortext";
    dv.style.display = "flex";
    dv.style.alignItems = "center";
    dv.style.gap = "10px";

    let span = document.createElement('span');
    span.textContent = input.value;
    dv.appendChild(span);

    let edit = document.createElement('button');
    edit.textContent = "Edit";
    edit.className = "editbut";
    dv.appendChild(edit);

    edit.onclick = function () {
        if (edit.textContent === "Edit") {
            let box1 = document.createElement('input');
            box1.type = "text";
            box1.value = span.textContent;
            dv.replaceChild(box1, span);
            edit.textContent = "Save";
            span = box1;
        } else {
            if (span.value.trim() === '') {
                alert("Task cannot be empty!");
                return;
            }
            let newspan = document.createElement('span');
            newspan.textContent = span.value;
            dv.replaceChild(newspan, span);
            edit.textContent = "Edit";
            span = newspan;
        }
    };

    let dlt = document.createElement('button');
    dlt.textContent = "Delete";
    dlt.className = "dltbtn";
    dv.appendChild(dlt);

    dlt.onclick = function () {
        dv.remove();
    };

    listContainer.appendChild(dv);
    input.value = '';
}
