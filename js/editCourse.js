const popupEditContact = document.querySelector('.popup_editCourse');
const sendEditCourseBtn = document.querySelector('.edit');

async function editCourseToDB(idToEdit, editCourse) {
    const editUrl = baseUrl + "/" + idToEdit;
    return fetch(editUrl, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editCourse)
    }).then (async (response) => {
        console.log("Status edit course is " + response.status);
        await refreshMainPage();
        return response.json();
    })
}

const getNewDataFromForm = async () => {
    let arrayEditDataCourse = getInputsToEdit();
    let newName = arrayEditDataCourse[0].value
    let newCategory = arrayEditDataCourse[1].value
    let newDuration = arrayEditDataCourse[2].value
    let newPrice = arrayEditDataCourse[3].value
    let newRating = arrayEditDataCourse[4].value
    return new Course(newName, newCategory, newDuration, newPrice, newRating)
}

const getInputsToEdit = () => {
    const editName = document.querySelector('#edit_name');
    const editCategory = document.querySelector('#edit_category');
    const editDuration = document.querySelector('#edit_duration');
    const editPrice = document.querySelector('#edit_price');
    const editRating = document.querySelector('#edit_rating');
    return [editName, editCategory, editDuration, editPrice, editRating];
}

const writeDataToPopupFormEdit = (course) => {
    let arrayDataCourse = getInputsToEdit();
    arrayDataCourse[0].placeholder = course.name;
    arrayDataCourse[1].value = course.category;
    arrayDataCourse[2].placeholder = course.duration;
    arrayDataCourse[3].placeholder = course.price;
    arrayDataCourse[4].placeholder = course.rating;
}

const getCourseById = async (idToEdit) => {
    let urlCourseById = baseUrl + "/" + idToEdit;
    const resp = await fetch(urlCourseById);
    try {
        const course = await handleResponse(resp);
        return course
    } catch (error) {
        console.warn(error);
    }
}

const hidePopupEditCourse = () => {
    popupEditContact.style.display = 'none';
    overlay.style.display = 'none';
}

const showPopupToEdit = async (idToEdit) => {
    popupEditContact.style.display = 'block';
    overlay.style.display = 'block';
    let course = await getCourseById(idToEdit);
    writeDataToPopupFormEdit(course);


    sendEditCourseBtn.addEventListener('click', async e => {
        e.preventDefault();
        let editCourse = await getNewDataFromForm();
        await editCourseToDB(idToEdit, editCourse);
        hidePopupEditCourse();
    })
}

