const popupAddContact = document.querySelector('.popup_addCourse');
const overlay = document.querySelector('.overlay');
const createBtn = document.querySelector('.create_course');
const courseLogo= document.querySelector('#add_logo');
const courseName = document.querySelector('#add_name');
const courseCategory = document.querySelector('#add_category');
const courseDuration = document.querySelector('#add_duration ');
const coursePrice = document.querySelector('#add_price');
const courseRating = document.querySelector('#add_rating');
const allInputs = document.querySelectorAll('input');

const sendNewCourseToDB = async (newCourse) => {
    return fetch(baseUrl, {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCourse)
    }).then((response) => {
        console.log("Status add course is " + response.status);
        return response.json();
    })
}

const getNewCourse = async () => {
    let handleCourse = new Course(courseName.value, courseCategory.value, courseDuration.value, coursePrice.value, courseRating.value)
    await sendNewCourseToDB(handleCourse);
}

const sendForm = async() => {
    await getNewCourse();
    hidePopupAddCourse();
    await refreshMainPage();
    clearFormAdd();
}

const clearFormAdd = () => {
    allInputs.forEach(input => {
        input.value = ''
    })
}

const hidePopupAddCourse = () => {
    popupAddContact.style.display = 'none';
    overlay.style.display = 'none';
}

const showPopupAddCourse = () => {
    popupAddContact.style.display = 'block';
    overlay.style.display = 'block';
}

createBtn.addEventListener('click', async e => {
    e.preventDefault();
    await sendForm();
})