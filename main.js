document.addEventListener('DOMContentLoaded' , function(){
    var topBtn = document.getElementById('topBtn');

    window.onscroll = function(){
        
        if(document.documentElement.scrollTop > 100){
            topBtn.style.display = 'block'
        }
        else{
            topBtn.style.display = 'none'
        }
    }

    topBtn.addEventListener('click' , function(){
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    })
})

function validationform(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var date2 = document.getElementById('date2').value;
    var message = document.getElementById('message').value;

    if(name === '' || email === '' || phone === '' || date === '' || date2 === '' ||  message === ''){
        window.alert('please');
        return false
    }
       
}



document.addEventListener('DOMContentLoaded',function(){
    let visitor_counter = document.getElementById('countcontainer');
    let counter = localStorage.getItem('page-view')
    if(counter){
        counter =+counter +1
    }
    else{
        counter=1
    }
    localStorage.setItem('page-view',counter)
    visitor_counter.innerHTML = `the visitor nums is ${counter}`
})
