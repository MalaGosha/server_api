const refreshMainPage = async () => {
    const table = document.getElementById("courses");
    table.innerHTML = '';
    await getCourses();
}


