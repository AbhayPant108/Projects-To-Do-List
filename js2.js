
document.getElementById('addtask').addEventListener('click', function () {
    document.getElementById('taskInput').focus();
});
document.getElementsByClassName('contact-link')[0].addEventListener('click', function () {
    document.getElementById('contact-name').focus();
});




document.addEventListener('DOMContentLoaded', function () {

    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const tasksList = document.getElementById('tasks');
    const removebtn = document.getElementById('delete_all');

    function checktask() {
        if (document.getElementById('tasks').childNodes.length == 0) {
            document.getElementsByClassName('task-title')[0].innerHTML = 'No tasks yet';
            document.getElementsByClassName('progress-container')[0].style.display = 'none';
            removebtn.style.display='none';
            total = 0;
            cnt = 0;
    
        }
    }
    checktask();
    

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    removebtn.addEventListener('click',function(){
        tasksList.textContent='';
        checktask();

    });

    var cnt = 0;
    var total = 0;
    var increase = 0;

    function progress() {
        increase = cnt / total;
        document.getElementsByClassName('progress-bar-fill')[0].style.width = `${100 * increase}%`;
        const progress =document.getElementById("progress")
        progress.innerHTML="You are "+Math.ceil(100*increase)+"% there!"
        
        
    }

    // Add event delegation for task actions
    tasksList.addEventListener('click', function (e) {
        const target = e.target;


        if (target.classList.contains('complete-btn')) {
            const taskItem = target.closest('.task-item');
            const completed = taskItem.classList.toggle('completed');
            if(completed)
                cnt++ 
            else
             cnt--;
        }




        if (target.classList.contains('delete-btn')) {
            const taskItem = target.closest('.task-item');
            if (taskItem.matches('.completed')) {
                cnt--;
            }
            
                total--;
            

            taskItem.remove();

        }
        checktask();
        console.log(total+" "+cnt);
        progress();

    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        total++;
        if (cnt != 0) {
            console.log(total+" "+cnt);
            progress();
        }
        console.log(total);
        document.getElementsByClassName('progress-container')[0].style.display = 'block';
        removebtn.style.display='block';

        document.getElementsByClassName('task-title')[0].innerHTML = 'Your Tasks';

        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
                <button class="complete-btn">✓</button>
                <button class="delete-btn">✗</button>
            </div>
        `;

        tasksList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }
});

