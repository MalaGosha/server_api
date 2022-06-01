async function deleteCourse(idToDelete) {
    const deleteUrl = baseUrl + "/" + idToDelete;
    return fetch(deleteUrl, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    }).then (async (response) => {
        console.log("Status deleted course is " + response.status);
        await refreshMainPage();
    })
}




