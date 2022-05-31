const baseUrl = "http://localhost:3002/courses";

async function getCourses() {
    const resp = await fetch(baseUrl);
    try {
        const courses = await handleResponse(resp);
        await generateHTML(courses);
    } catch (error) {
        console.warn(error);
    }
}

const generateHTML = async (courses) => {
    const table = document.getElementById("courses");
    courses.forEach((course)=> {
        const idCourse = course.id;
        const urlLogo = "../assets/" + course.logoUrl;
        const row = table.insertRow(-1)
        row.insertCell(0).innerHTML = `<img 
            class="logo center"
            src = ${urlLogo}
            alt="logo"
            />`;
        row.insertCell(1).innerText = course.name;
        row.insertCell(2).innerText = course.category;
        row.insertCell(3).innerText = course.duration;
        row.insertCell(4).innerText = course.price;
        row.insertCell(5).innerText = course.rating;
        row.insertCell(6).innerHTML = `<button
            class="button delete"
            type="button"
            onclick="deleteCourse(${idCourse})"
            />Usuń Kurs`
        row.insertCell(7).innerHTML = `<button
            id="recordEdit"
            class="button edit"
            type="button"
            />Edytuj kurs`;
    })
}

async function handleResponse(response){
    if(response.ok) return response.json();
    if(response.status==400){
        const error = await response.text();
        console.log(error);
    }
    if(response.status==404){
        throw new Error(('GetCourses: Network error'));
    }
    console.log(`Network response was not ok: ${response.status}`);
}

