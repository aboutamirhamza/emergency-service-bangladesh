// ------------------- Heart Counter Start -------------------

document.addEventListener("DOMContentLoaded", function() {
  const heartBtn = document.querySelectorAll(".heart-btn");
  heartBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        const heartCount = parseInt(document.getElementById("heart-count").innerText);
        const newHeartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = newHeartCount;
    });
  });
});
// ------------------- Heart Counter End -------------------

// ------------------- Copy Number Start -------------------

function copyToClipboard(btnId, copyNumber) {
    document.getElementById(btnId).addEventListener("click", function() {
    const numberToCopy = copyNumber;
    alert(`Number copied ${numberToCopy}`);
  navigator.clipboard.writeText(numberToCopy).then(() => {
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = newCopyCount;
  });
})
}

copyToClipboard("copy-button", "999");
copyToClipboard("copy-button-two", "999");
copyToClipboard("copy-button-three", "999");
copyToClipboard("copy-button-four", "1994-999999");
copyToClipboard("copy-button-five", "109");
copyToClipboard("copy-button-six", "106");
copyToClipboard("copy-button-seven", "16216");
copyToClipboard("copy-button-eight", "16445");
copyToClipboard("copy-button-nine", "163");
// ------------------- Copy Number End -------------------

// ------------------- Date Time Start --------------------
function getLocalTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;

  // 2-digit formatting
  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  return `${hh}:${mm}:${ss} ${ampm}`;
}

// ------------------- Date Time End --------------------


// ------------------- Call Number Start -------------------
function callNumber(callBtnId, serviceId, callNumberId) {
    document.getElementById(callBtnId).addEventListener("click", function() {
        const serviceName = document.querySelector(`.${serviceId}`).innerText;
        const callNumber = document.querySelector(`.${callNumberId}`).innerText;

        let coinCount = parseInt(document.getElementById("coin-count").innerText);
        
        let newCoinCount = coinCount - 20;
        if (newCoinCount < 0) {
            newCoinCount = 0;
            alert("You don't have enough coins to make a call.");
            return;
        }
        document.getElementById("coin-count").innerText = newCoinCount;

        alert(`Calling ${serviceName} ${callNumber}...`);

        const callHistory = document.getElementById('call-history-output');

        const newDiv = document.createElement('div');
        newDiv.className = 'flex items-center justify-between rounded-lg p-4 bg-[#FAFAFA] mb-2';
        newDiv.innerHTML = `
            <div>
                <h3 class="text-[#111] text-base font-semibold">
                    ${serviceName}
                </h3>
                <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
            </div>
            <div class="text-[#111] text-lg">${getLocalTime()}</div>
        `;

        callHistory.appendChild(newDiv);
    });
}

callNumber('call-button','service-name', 'callNumber');
callNumber('call-button-two','service-name-two', 'callNumber-two');
callNumber('call-button-three','service-name-three', 'callNumber-three');
callNumber('call-button-four','service-name-four', 'callNumber-four');
callNumber('call-button-five','service-name-five', 'callNumber-five');
callNumber('call-button-six','service-name-six', 'callNumber-six');
callNumber('call-button-seven','service-name-seven', 'callNumber-seven');
callNumber('call-button-eight','service-name-eight', 'callNumber-eight');
callNumber('call-button-nine','service-name-nine', 'callNumber-nine');


// ------------------- Call Number End -------------------


// ------------------- Clear Call History Start -------------------
document.getElementById('clear-button').addEventListener('click', function() {
    const callHistory = document.getElementById('call-history-output');
    callHistory.innerHTML = '';
});
// ------------------- Clear Call History End -------------------