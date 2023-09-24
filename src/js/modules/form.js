
function succesForm() {
    const modal = document.querySelector('.popup');
    modal.classList.toggle('popup--open');
     setTimeout(() => {
        modal.classList.toggle('popup--open');
    },1500)
}


export function validateForm() {
    const sendForm = document.getElementById("form");
    const modal = document.querySelector('.mobile-nav');

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const commentError = document.getElementById("comment-error");

    name.onfocus = () => {
        name.classList.remove('form-error');
        nameError.classList.remove('open');
    }
    email.onfocus = () => {
        email.classList.remove('form-error');
        emailError.classList.remove('open');
    }
    comment.onfocus = () => {
        comment.classList.remove('form-error');
        commentError.classList.remove('open');
    }

    sendForm.onsubmit = (e) => {
        e.preventDefault();
        if (name.value === "") {
            name.classList.toggle('form-error');
            nameError.classList.toggle('open');
            return false;
        }

        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!email.value.match(emailRegex)) {
            email.classList.toggle('form-error');
            emailError.classList.toggle('open');
            return false;
        }

        if (comment.value === "") {
            comment.classList.toggle('form-error');
            commentError.classList.toggle('open');
            return false;
        }
        modal.classList.toggle('mobile-nav--open');
        document.body.classList.toggle('no-scroll');
        succesForm()
        return true;
    }
}
