const refreshMainPage = async () => {
    const table = document.getElementById("courses");
    table.innerHTML = `
     <thead>
    <tr>
        <th>
            <button
                id="imageBtn"
                  class="button btn-primary"
                  style="width:100px"
                  type="button"
                  onclick="onLogoButtonClick()">
                  Ukryj logo
            </button>
        </th>
        <th>Nazwa</th>
        <th>Kategoria</th>
        <th>Czas trwania</th>
        <th>Cena</th>
        <th>Ocena</th>
    </tr>
    </thead>
    <tbody></tbody>
    `
    await getCourses();
}


