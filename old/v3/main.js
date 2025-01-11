// Function to get input values and generate wallet.json
function getData() {
    const fields = ["moedas", "chaves", "snowboards", "bVerm", "bAzul", "jake", "fresh", "tricky", "spike", "yutani", "eventCash"];
    const values = fields.map(id => document.getElementById(id).value || 0);

    const template = {
        version: 3,
        data: JSON.stringify({
            lastSaved: "2022-08-08T12:23:25.493731Z",
            patchVersion: 0,
            currencies: {
                "1": { value: 0 },
                "2": { value: 0 },
                "3": { value: 0 },
                "4": { value: 0 },
                "5": { value: 0 },
                "6": { value: 0 },
                "20": { value: 0 },
                "21": { value: 0 },
                "22": { value: 0 },
                "23": { value: 0 },
                "24": { value: 0 },
            },
        }),
    };

    // Update currency values
    const keys = ["1", "2", "3", "4", "5", "20", "21", "22", "23", "24", "6"];
    keys.forEach((key, index) => {
        template.data = template.data.replace(new RegExp(`\\"${key}\\":{.*?"value":\\d+`), `\\"${key}\\":{ "value": ${values[index]}`);
    });

    showResult(template.data);
    makeDownload(template.data);
}

// Show the result in a textarea
function showResult(data) {
    const resultDiv = document.getElementById("resultado");
    resultDiv.innerHTML = `<textarea cols="50" rows="12">${data}</textarea>`;
}

// Download wallet.json file
function makeDownload(data) {
    const blob = new Blob([data], { type: "application/json" });
    saveAs(blob, "wallet.json");
    alert("Save the file to Android/data/com.kiloo.subwaysurf/files/profile/");
}

// Update Top Run Score in JSON
function generateJSON() {
    const scoreInput = document.getElementById("scoreInput").value;
    const newScore = Number(scoreInput) || 0;

    let jsonData = {
        version: 1,
        data: "{\"currentScore\":0}",
    };

    const parsedData = JSON.parse(jsonData.data);
    parsedData.currentScore = newScore;

    const updatedJSON = JSON.stringify({ ...jsonData, data: JSON.stringify(parsedData) });
    showResult(updatedJSON);
}
