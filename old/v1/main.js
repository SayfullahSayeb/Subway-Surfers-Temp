function getData(){
  let moedas = document.querySelector("#moedas").value;
  let chaves = document.querySelector("#chaves").value;
  let snowboards = document.querySelector("#snowboards").value;
  let bVerm = document.querySelector("#bVerm").value;
  let bAzul = document.querySelector("#bAzul").value;
  let jake = document.querySelector("#jake").value;
  let fresh = document.querySelector("#fresh").value;
  let tricky = document.querySelector("#tricky").value;
  let spike = document.querySelector("#spike").value;
  let yutani = document.querySelector("#yutani").value;
  let eventCash = document.querySelector("#eventCash").value;
  let inputs = [moedas, chaves, snowboards, bVerm, bAzul, jake, fresh, tricky, spike, yutani, eventCash];
  
  let sample = '{"version":3,"data":"{\\"lastSaved\\":\\"2022-08-08T12:23:25.493731Z\\",\\"patchVersion\\":0,\\"currencies\\":{\\"3\\":{\\"value\\":0,\\"expirationType\\":0},\\"2\\":{\\"value\\":0,\\"expirationType\\":0},\\"4\\":{\\"value\\":0,\\"expirationType\\":0},\\"5\\":{\\"value\\":0,\\"expirationType\\":0},\\"1\\":{\\"value\\":0,\\"expirationType\\":0}, \\"20\\":{\\"value\\":0}, \\"21\\":{\\"value\\":0}, \\"22\\":{\\"value\\":0}, \\"23\\":{\\"value\\":0}, \\"24\\":{\\"value\\":0}\\"6\\":{\\"value\\":0}},\\"lootboxQueue\\":{\\"unopenedLootboxes\\":[]},\\"currencyAllowedInRun\\":{},\\"lootBoxesOpened\\":{},\\"ownedOnlyBuyOnceProducts\\":[]}"}';
  
  changeData(sample, inputs)
}

function changeData(data, value){
  for (let item = 0; item < value.length; item++){
    if (value[item] == ""){
      value[item] = 0;
    }
  }
  data = data.replace(/\\"1\\":{\\"value\\":[0-9]*/, `\\"1\\":{\\"value\\":${value[0]}`);
  data = data.replace(/\\"2\\":{\\"value\\":[0-9]*/, `\\"2\\":{\\"value\\":${value[1]}`);
  data = data.replace(/\\"3\\":{\\"value\\":[0-9]*/, `\\"3\\":{\\"value\\":${value[2]}`);
  data = data.replace(/\\"4\\":{\\"value\\":[0-9]*/, `\\"4\\":{\\"value\\":${value[3]}`);
  data = data.replace(/\\"5\\":{\\"value\\":[0-9]*/, `\\"5\\":{\\"value\\":${value[4]}`);
  data = data.replace(/\\"20\\":{\\"value\\":[0-9]*/, `\\"20\\":{\\"value\\":${value[5]}`);
  data = data.replace(/\\"21\\":{\\"value\\":[0-9]*/, `\\"21\\":{\\"value\\":${value[6]}`)
  data = data.replace(/\\"22\\":{\\"value\\":[0-9]*/, `\\"22\\":{\\"value\\":${value[7]}`)
  data = data.replace(/\\"23\\":{\\"value\\":[0-9]*/, `\\"23\\":{\\"value\\":${value[8]}`)
  data = data.replace(/\\"24\\":{\\"value\\":[0-9]*/, `\\"24\\":{\\"value\\":${value[9]}`)
  data = data.replace(/\\"6\\":{\\"value\\":[0-9]*/, `\\"6\\":{\\"value\\":${value[10]}`);
  
  for (let i = 0; i < value.length; i++){
    console.log(value[i])
  }
  
  showResult(data);
  makeDownload(data);
}

function showResult(data){
  let div = document.getElementById("resultado");
  div.innerHTML = `<textarea name="result" id="result" cols="50" rows="12">${data}</textarea>`;
}

function makeDownload(data){
  alert("Put this file in Android/data/com.kiloo.subwaysurf/files/profile/")
  let blob = new Blob([data], {type: "text/plain"});
  saveAs(blob, "wallet.json");
}



        // Original JSON object
        let jsonData = {
          "version": 1,
          "data": "{\"lastSaved\":\"2022-05-18T07:21:43.988778Z\",\"patchVersion\":0,\"hasUnclaimedReward\":false,\"currentCountry\":\"us\",\"nextCountry\":null,\"currentScore\":0,\"unsubmittedScore\":{\"score\":0,\"scoreDate\":\"0001-01-01T08:00:00Z\",\"metadata\":null},\"previousScore\":0,\"previousBracket\":null,\"startDate\":\"2022-05-16T09:00:00Z\",\"lastClaimedTournamentStart\":\"0001-01-01T08:00:00Z\",\"friendRuns\":{},\"currentTopScoreMetadata\":[{\"key\":\"multiplier\",\"value\":\"6036\"},{\"key\":\"character\",\"value\":\"zombiejake\"},{\"key\":\"board\",\"value\":\"sweetheart\"}]}"
      };

      // Function to update and display JSON
      function generateJSON() {
          const input = document.getElementById('scoreInput');
          const newScore = Number(input.value);

          if (!isNaN(newScore)) {
              // Parse data inside the "data" key
              let data = JSON.parse(jsonData.data);
              data.currentScore = newScore; // Set the new score

              // Update the JSON data as a string
              jsonData.data = JSON.stringify(data);

              // Display the updated JSON
              const outputElement = document.getElementById('output');
              outputElement.textContent = JSON.stringify(jsonData);
              outputElement.style.display = 'block';
          } else {
              alert('Please enter a valid number');
          }
      }

      // Function to copy JSON to clipboard
      function copyJSON() {
          const outputElement = document.getElementById('output');
          if (outputElement.style.display === 'block') {
              navigator.clipboard.writeText(outputElement.textContent).then(() => {
                  alert('JSON copied to clipboard!');
              }).catch(err => {
                  alert('Failed to copy JSON: ' + err);
              });
          } else {
              alert('Generate JSON first!');
          }
      }

      // Function to download JSON as a file
      function downloadJSON() {
          const outputElement = document.getElementById('output');
          if (outputElement.style.display === 'block') {
              const blob = new Blob([outputElement.textContent], { type: 'application/json' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = 'top_run.json';
              link.click();
          } else {
              alert('Generate JSON first!');
          }
      }