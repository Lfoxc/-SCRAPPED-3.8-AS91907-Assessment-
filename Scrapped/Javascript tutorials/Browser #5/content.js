const generateHTML = (pageName) => {
  return `<div class = "container">
  <h2>STUDYspace</h2>
  <p>Back to work!</p>
  <p>Studying > ${pageName} </p>
  </div>`
};

const generateCSS = () => {
  return `<style>

  body {
    padding: 0;
    margin: 0;
  }

  .container {
    border: 4px solid #FF6347;
    height: 300px;
    width: 500px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  h2 {
    font-size: 30px;
    color: #FF6347;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    font-size: 20px;
    text-align: center;
  }
  </style>`
}


switch (window.location.hostname) {
  case "www.pinterest.nz":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Pinterest");
    break;

  case "www.youtube.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Youtube");
    break;

  case "discord.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Discord");
    break;

  case "www.instagram.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Instagram");
    break;

  case "www.facebook.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Facebook");
    break;

    case "twitter.com":
      document.head.innerHTML = generateCSS();
      document.body.innerHTML = generateHTML("Twitter");
      break;
}
