const hours = [8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]; // Specific hours
const statuses = ['no-queue', 'possible-queue', 'likely-queue'];

const chart = document.getElementById('chart');

// Create bars for each hour and half-hour
hours.forEach((hour, index) => {
  // Full hour
  const fullHourBar = document.createElement('div');
  fullHourBar.classList.add('bar');

  const fullHourCandle = document.createElement('div');
  fullHourCandle.classList.add('candle');

  // Random height between 20% and 100%
  const fullHourHeight = Math.floor(Math.random() * 80) + 20;
  
  // Assign queue status based on height
  let fullHourStatus;
  if (fullHourHeight <= 33) {
    fullHourStatus = 'no-queue';
  } else if (fullHourHeight <= 66) {
    fullHourStatus = 'possible-queue';
  } else {
    fullHourStatus = 'likely-queue';
  }
  
  fullHourCandle.classList.add(fullHourStatus);
  fullHourCandle.style.height = `${fullHourHeight}%`;

  // Add label for full hour
  const fullHourLabel = document.createElement('span');
  fullHourLabel.textContent = `${hour}:00`;

  fullHourBar.appendChild(fullHourCandle);
  fullHourBar.appendChild(fullHourLabel);
  chart.appendChild(fullHourBar);

  // Half-hour (add text for all except the last hour)
  if (index !== hours.length - 1) {
    const halfHourBar = document.createElement('div');
    halfHourBar.classList.add('bar', 'half-hour'); // Add half-hour class

    const halfHourCandle = document.createElement('div');
    halfHourCandle.classList.add('candle');

    // Random height between 20% and 100%
    const halfHourHeight = Math.floor(Math.random() * 80) + 20;

    // Assign queue status based on height
    let halfHourStatus;
    if (halfHourHeight <= 33) {
      halfHourStatus = 'no-queue';
    } else if (halfHourHeight <= 66) {
      halfHourStatus = 'possible-queue';
    } else {
      halfHourStatus = 'likely-queue';
    }

    halfHourCandle.classList.add(halfHourStatus);
    halfHourCandle.style.height = `${halfHourHeight}%`;

    // Add half-hour label (e.g., 8:30, 9:30, etc.)
    const halfHourLabel = document.createElement('span');
    halfHourLabel.textContent = `${hour}:30`;

    halfHourBar.appendChild(halfHourCandle);
    halfHourBar.appendChild(halfHourLabel);  // Append half-hour label
    chart.appendChild(halfHourBar);
  }
});

//newsletter

 // Nastavení URL pro odeslání formuláře
 const formUrl = 'https://example.com/submit-newsletter'; // Změňte na správnou URL
 const form = document.getElementById('newsletter-form');

 form.addEventListener('submit', async (event) => {
   event.preventDefault(); // Zamezí klasickému odeslání formuláře

   // Získání dat z formuláře
   const formData = new FormData(form);

   try {
     // Odeslání dat přes fetch
     const response = await fetch(formUrl, {
       method: 'POST',
       body: formData,
     });

     if (response.ok) {
       // Pokud je odpověď úspěšná, zobrazí se zpráva
       displayMessage('Formulář byl úspěšně odeslán!', 'success');
     } else {
       // Pokud nastane chyba na serveru
       displayMessage('Nastala chyba při odesílání formuláře. Zkuste to znovu.', 'error');
     }
   } catch (error) {
     // Chyby při síťové komunikaci
     displayMessage('Nelze odeslat formulář. Zkontrolujte připojení k internetu.', 'error');
   }
 });

 // Funkce pro zobrazení zprávy
 function displayMessage(message, type) {
   const messageDiv = document.createElement('div');
   messageDiv.textContent = message;
   messageDiv.className = `form-message ${type}`;
   form.appendChild(messageDiv);

   // Automatické odstranění zprávy po 5 sekundách
   setTimeout(() => {
     messageDiv.remove();
   }, 5000);
 }


 var swiper = new Swiper(".mySwiper", {
  loop: true,
  calculateHeight:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});