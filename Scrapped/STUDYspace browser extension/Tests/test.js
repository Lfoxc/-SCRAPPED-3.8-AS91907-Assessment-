let btn = document.getElementById('btn');
var WebsiteURL;
var WebsiteHost;

btn.addEventListener("click", Checkinput);

function Checkweb() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    WebsiteURL = tabs[0].url
    WebsiteHost = new URL(tabs[0].url).hostname
  })
}

function Checkinput() {
  Checkweb();
  if (WebsiteURL.includes("youtube.com")) {
    alert(`You are in ${WebsiteHost}. This website should be blocked.`)
  }

  else {
    alert(`You are in ${WebsiteHost}. This website is not blocked.`)
  }
}
