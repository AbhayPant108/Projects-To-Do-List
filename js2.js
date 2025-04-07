
document.getElementById('addtask').addEventListener('click', function() {
    document.getElementById('taskInput').focus();
});
document.getElementsByClassName('contact-link')[0].addEventListener('click', function() {
    document.getElementById('contact-name').focus();
});
function checktask(){
if(document.getElementById('tasks').childNodes.length==0){
   document.getElementsByClassName('task-title')[0].innerHTML='No tasks yet';
   document.getElementsByClassName('progress-container')[0].style.display='none';
   total=0;
   cnt=0;
  
}
}
checktask();

    
 

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const tasksList = document.getElementById('tasks');

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
 var cnt=0;
 var total=0;
 var increase=0;
 function progress(){
    increase=cnt/total;
    document.getElementsByClassName('progress-bar-fill')[0].style.width=`${100*increase}%`;
 }
    // Add event delegation for task actions
    tasksList.addEventListener('click', function(e) {
        const target = e.target;
       
       
        if (target.classList.contains('complete-btn')) {
            const taskItem = target.closest('.task-item');
           const completed =  taskItem.classList.toggle('completed');
          
completed?cnt++:cnt--;
progress();
         
        }
        
        if (target.classList.contains('delete-btn')) {
            const taskItem = target.closest('.task-item');
           if(taskItem.matches('.completed')){
            cnt--;
            
           }
           else{
            total--;
            
           }
           progress();
               taskItem.remove();  
                  checktask();
        }
    
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

      total++;
      if(cnt!=0){
        progress();
      }
       console.log(total);
       document.getElementsByClassName('progress-container')[0].style.display='block';
        
        document.getElementsByClassName('task-title')[0].innerHTML='Your Tasks';        

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
// Responsive Navbar Code
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu button for mobile view
    const nav = document.querySelector('nav');
    const menu = document.querySelector('.menu');
    
    // Create hamburger button element
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-menu';
    hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
    hamburgerBtn.style.display = 'none';
    
    // Insert hamburger button before the menu
    nav.insertBefore(hamburgerBtn, menu);
    
    // Add CSS for responsive design
    const style = document.createElement('style');
    style.textContent = `
        .hamburger-menu {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            display: none;
            padding: 10px;
        }
        
        @media screen and (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .menu {
                display: none;
                flex-direction: column;
                width: 100%;
                text-align: center;
                padding: 10px 0;
            }
            
            .menu.active {
                display: flex;
            }
            
            .menu a {
                margin: 10px 0;
            }
            
            .hamburger-menu {
                display: block;
                align-self: flex-end;
                position: absolute;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Toggle menu visibility when hamburger is clicked
    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
});

    