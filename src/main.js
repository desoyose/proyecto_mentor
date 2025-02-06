fetch('data.json')
  .then(response => response.json()) 
  .then(data => {
    procesarDatos(data); 
    agregarEventos(); 
  })
  .catch(error => console.error('Error al cargar el JSON:', error));


  function agregarEventos() {
    const btnMonth = document.querySelector(".btn__monthly");
    const btnDaily = document.querySelector(".btn__daily");
    const btnWeekly = document.querySelector(".btn__weekly");
  
    // Verificar si los botones existen en el DOM
    console.log(btnMonth, btnDaily, btnWeekly);
  
    btnMonth.addEventListener("click", () => {
      console.log("Mostrar Monthly");
  
      // Cambiar colores de los botones
      btnMonth.classList.add("text-Pale-Blue");
      btnMonth.classList.remove("text-Desaturated-blue");
      btnDaily.classList.remove("text-Pale-Blue");
      btnDaily.classList.add("text-Desaturated-blue");
      btnWeekly.classList.remove("text-Pale-Blue");
      btnWeekly.classList.add("text-Desaturated-blue");
  
      // Ocultar todas las secciones de tiempo
      document.querySelectorAll(".info_time").forEach(item => {
        item.classList.add("hidden");
        item.classList.remove("flex");
      });
  
      // Mostrar las secciones mensuales
      const monthlySections = document.querySelectorAll(".monthly");
      monthlySections.forEach(monthSection => {
        monthSection.classList.remove("hidden");
        monthSection.classList.add("flex");
      });
    });
  
    btnDaily.addEventListener("click", () => {
      console.log("Mostrar Daily");
  
      // Cambiar colores de los botones
      btnDaily.classList.add("text-Pale-Blue");
      btnDaily.classList.remove("text-Desaturated-blue");
      btnMonth.classList.remove("text-Pale-Blue");
      btnMonth.classList.add("text-Desaturated-blue");
      btnWeekly.classList.remove("text-Pale-Blue");
      btnWeekly.classList.add("text-Desaturated-blue");
  
      // Ocultar todas las secciones de tiempo
      document.querySelectorAll(".info_time").forEach(item => {
        item.classList.add("hidden");
        item.classList.remove("flex");
      });
  
      // Mostrar las secciones diarias
      const dailySections = document.querySelectorAll(".daily");
      dailySections.forEach(dailySection => {
        dailySection.classList.remove("hidden");
        dailySection.classList.add("flex");
      });
    });
  
    btnWeekly.addEventListener("click", () => {
      console.log("Mostrar Weekly");
  
      // Cambiar colores de los botones
      btnWeekly.classList.add("text-Pale-Blue");
      btnWeekly.classList.remove("text-Desaturated-blue");
      btnDaily.classList.remove("text-Pale-Blue");
      btnDaily.classList.add("text-Desaturated-blue");
      btnMonth.classList.remove("text-Pale-Blue");
      btnMonth.classList.add("text-Desaturated-blue");
  
      // Ocultar todas las secciones de tiempo
      document.querySelectorAll(".info_time").forEach(item => {
        item.classList.add("hidden");
        item.classList.remove("flex");
      });
  
      // Mostrar las secciones semanales
      const weeklySections = document.querySelectorAll(".weekly");
      weeklySections.forEach(weeklySection => {
        weeklySection.classList.remove("hidden");
        weeklySection.classList.add("flex");
      });
    });
  }
  
// Función para procesar los datos
function procesarDatos(data) {
  const container = document.getElementById('actividad-container');
  container.innerHTML += ''; // Limpiar contenido previo, manteniendo el contenido agregado previamente

  // Mapa de imágenes
  const imagenes = {
    'work': './images/icon-work.svg',
    'play': './images/icon-play.svg',
    'study': './images/icon-study.svg',
    'exercise': './images/icon-exercise.svg',
    'social': './images/icon-social.svg',
    'self-care': './images/icon-self-care.svg'
  };

  data.forEach(item => {
    const div = document.createElement('div');
    
    // Crear una clase dinámica basada en el título
    const className = item.title.toLowerCase().replace(/\s+/g, "-");
    div.classList.add("tarjeta", className);

    // Asignar imagen desde el objeto 'imagenes'
    const imageSrc = imagenes[className] || './images/default-icon.svg';

    div.innerHTML = `
      <div class="img__arriba">
          <img src="${imageSrc}" alt="${item.title}" class="w-16 h-16 rounded-full">
      </div>
      <div class="tarjeta_info">
          <div class="flex flex-row justify-between align-middle items-center">
              <h2 class="title text-xl text-Pale-Blue cursor-pointer">${item.title}</h2>
              <span class="dots font-extrabold text-2xl cursor-pointer text-Pale-Blue">...</span>
          </div>
          <div class="daily info_time text-Pale-Blue flex flex-row justify-between items-center mt-4 ">
              <p class="text-4xl font-extralight">${item.timeframes.daily.current}hrs</p>
              <p>Last Day - ${item.timeframes.daily.previous}hrs</p>
          </div>
          <div class="weekly info_time text-Pale-Blue flex-row justify-between items-center mt-4 hidden">
              <p class="text-4xl font-extralight">${item.timeframes.weekly.current} hrs</p>
              <p>Last Week - ${item.timeframes.weekly.previous} hrs</p>
          </div>
          <div class="monthly info_time text-Pale-Blue flex-row justify-between items-center mt-4 hidden">
              <p class="text-4xl font-extralight">${item.timeframes.monthly.current} hrs</p>
              <p>Last Month - ${item.timeframes.monthly.previous} hrs</p>
          </div>
      </div>
    `;

    container.appendChild(div);
  });


  agregarEventos();
}
