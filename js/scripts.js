document.addEventListener('DOMContentLoaded', () => {
    let contactForm = document.getElementById('contact-form');
    let fullname = document.getElementById('fullname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    let header = document.getElementById('header');
    let menu = document.getElementById('menu');
    let close = document.getElementById('close');
    let body = document.getElementsByTagName('body')[0];
    let navbarMenu = document.getElementById('navbar-menu');
    window.onscroll = () => { stickyHeader() }

    // Header Fixed
    function stickyHeader() {
        if (window.pageYOffset > 0) {
            header.classList.add('fixed-top')
        } else {
            header.classList.remove('fixed-top')
        }
        
    }

    menu.addEventListener('click', () => {
        if (navbarMenu.style.display === "block") 
        {
            navbarMenu.style.display = 'none';
        } else {
            navbarMenu.style.display = "block";
        }
    })

    close.addEventListener('click', () => {
        if (navbarMenu.style.display === "none") 
        {
            navbarMenu.style.display = 'block';
        } else {
            navbarMenu.style.display = "none";
        }
    })

    // Contact
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const submitBtn = document.getElementById('submitBtn');
        const form = document.forms['form-validate']['fullname', 'email', 'phone', 'subject', 'message'].value;
    
        if(form == '') {
            Swal.fire(
                'All fields are required!',
                'Thank you for contacting us',
                'error'
            )
            
            return false;
        } else {
            // Fire the sending text
            submitBtn.innerHTML = "Sending..."
    
            // Get the form data in an array and pass to email method
            const formData = {
                fullname: fullname.value,
                email: email.value,
                phone: phone.value,
                subject: subject.value,
                message: message.value
            }
    
            // Get the data and transport to email
            Email.send({
                Host: "smtp.gmail.com",
                Username : "information.cloud365@gmail.com",
                Password : "gqpptqkatjgljmxb",
                Port: 587,
                Tls: true,
                To : "information.cloud365@gmail.com, mpcaneda.gca@gmail.com, info@gocloudgroup.com",
                From : email.value,
                Subject : subject.value,
                Body : message.value,
            }).then(function(){
                Swal.fire(
                    'Email has been sent!',
                    'Thank you for contacting us',
                    'success'
                )
    
                submitBtn.innerHTML = "Send Message"
            });
    
            // Reset the email after sending
            contactForm.reset();
            return true;
        }
    });
});