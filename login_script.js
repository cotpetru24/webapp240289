



    const login_register = document.querySelector(".login_register"), 
    icons_show_password = document.querySelectorAll(".icons_show_password"), 
    password_form = document.querySelectorAll(".password_form"),
    menuButton = document.getElementsByClassName('menu-button')[0],
    navMenu = document.getElementsByClassName('nav-menu')[0],
    menuButtonSide = document.getElementsByClassName('menu-button_side')[0],
    sideMenu = document.getElementsByClassName('side-menu')[0],
    welcome = document.getElementsByClassName('welcome')[0],
    sidebar = document.getElementsByClassName('sidebar')[0],
    registerLink = document.getElementsByClassName('register_link')[0],
    loginLink = document.getElementsByClassName('login_link')[0],
    login = document.getElementsByClassName('login')[0],
    login2 = document.getElementsByClassName('login_2')[0],
    discoverContent = document.getElementsByClassName('discover_content')[0],
    pageContent = document.getElementsByClassName('page_content')[0],
    feedbackButton = document.getElementsByClassName('feedback_button')[0],
    feedbackButtonSecond = document.getElementsByClassName('feedback_button_second')[0],
    feedbackButtonThird = document.getElementsByClassName('feedback_button_third')[0],
    feedbackForm = document.getElementsByClassName('review_form')[0],
    feedbackFormSecond = document.getElementsByClassName('review_form_second')[0],
    feedbackFormThird = document.getElementsByClassName('review_form_third')[0],
    bookButton = document.getElementsByClassName('book_button')[0],
    bookButtonSecond = document.getElementsByClassName('book_button_second')[0],
    bookingsForm = document.getElementsByClassName('bookings_form')[0],
    bookingsFormSecond = document.getElementsByClassName('bookings_form_second')[0],
    bookButtonThird = document.getElementsByClassName('book_button_third')[0],
    bookingsFormThird = document.getElementsByClassName('bookings_form_third')[0];





    if (feedbackButtonThird) {
        feedbackButtonThird.addEventListener('click' , () =>{
                if (bookingsFormThird.classList.toggle('active')) {
                    bookingsFormThird.classList.toggle('active')
                }
                feedbackFormThird.classList.toggle('active')
            })
    }



    if (bookButtonThird) {
        bookButtonThird.addEventListener('click' , () =>{
                if (feedbackFormThird.classList.toggle('active')) {
                    feedbackFormThird.classList.toggle('active')
                }
                bookingsFormThird.classList.toggle('active')
            })
    }



    if (feedbackButtonSecond) {
        feedbackButtonSecond.addEventListener('click' , () =>{
            if (bookingsFormSecond) {
                if (bookingsFormSecond.classList.toggle('active')) {
                    bookingsFormSecond.classList.toggle('active')
                }

            }    
                feedbackFormSecond.classList.toggle('active')
            })
    }


    if (bookButtonSecond) {
        bookButtonSecond.addEventListener('click' , () =>{
                if (feedbackFormSecond.classList.toggle('active')) {
                    feedbackFormSecond.classList.toggle('active')
                }
                bookingsFormSecond.classList.toggle('active')
            })
    }


    if (feedbackButton) {
        feedbackButton.addEventListener('click' , () =>{
            if (bookingsForm) {
                if (bookingsForm.classList.toggle('active')) {
                    bookingsForm.classList.toggle('active')
                }

            }    
                feedbackForm.classList.toggle('active')
            })
    }

    if (bookButton) {
        bookButton.addEventListener('click' , () =>{
                if (feedbackForm.classList.toggle('active')) {
                    feedbackForm.classList.toggle('active')
                }
                bookingsForm.classList.toggle('active')
            })
    }



    
    if (registerLink){
        registerLink.addEventListener('click' , () =>{
            login2.classList.toggle('active'),
            login.classList.toggle('active');

        })
    }

    if (loginLink){
        loginLink.addEventListener('click' , () =>{
            login2.classList.toggle('active'),
            login.classList.toggle('active');

        })
    }




    //navigation menu button
    menuButton.addEventListener('click' , () =>{

        if (sideMenu){
            if (sideMenu.classList.toggle('active')) {
                sideMenu.classList.toggle('active')
                
            }
        }

        if (welcome){
            if (welcome.classList.toggle('active')) {
                welcome.classList.toggle('active')
                
            }       
        }



        if (sidebar){
            if (sidebar.classList.toggle('active')) {
                sidebar.classList.toggle('active')
                
            }
                    
                   
        }

        if (discoverContent){
            if (discoverContent.classList.toggle('active')){
            discoverContent.classList.toggle('active')
        }

        }





        if(menuButtonSide){
        menuButtonSide.classList.toggle('active')
        }
        navMenu.classList.toggle('active')
        
    })


    //sidebar menu button

    if (menuButtonSide){
        menuButtonSide.addEventListener('click' , () =>{

            if (navMenu.classList.toggle('active')) {
                navMenu.classList.toggle('active')
                
            }

            
            if (discoverContent){
                discoverContent.classList.toggle('active')
            }


            sidebar.classList.toggle('active'),
            sideMenu.classList.toggle('active'),
            welcome.classList.toggle('active');

        });
}


    //password show/hide
    icons_show_password.forEach(eye =>{

        eye.addEventListener("click", ()=>{
            password_form.forEach(password_form =>{
                if(password_form.type ==="password"){
                    password_form.type = "text";

                }else{
                    password_form.type = "password";
                }                
            })
        })

    })




