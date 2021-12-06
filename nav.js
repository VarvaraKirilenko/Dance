const menu = document.querySelector("#menu");
		const nav    = document.querySelector("#nav");
		menu.addEventListener("click", event => {
			nav.classList.toggle("active");
			menu.classList.toggle("active");}
  );