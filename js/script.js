  function rotate90() {
    let certImg = document.querySelector(".certificate");
    certImg.style.transform = "rotate(-90deg)";
  }

  var icons = document.querySelectorAll('i');
  icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      window.alert('Icon is clicked');
    });
  });

  function clickedList() {
    window.alert(listObject.python.color);
  }

  listObject = {
    python: {
      color: "yellow",
      packages: ["Pytube", "Tkinter"]
    },
    javascript: {
      color: "red",
      packages: ["jQuery"]
    },
    bash: {
      color: "black"
    },
    html: {
      color: "blue"
    },
    css: {
      color: "orange"
    },
    sql: {
      color: "green"
    }
  };
