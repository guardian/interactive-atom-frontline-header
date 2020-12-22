updateContent("https://interactive.guim.co.uk/docsdata-test/1RMr8fOdiYvTgUwNP3ij3yQNkdqecZyz-GAg-moo7fr4.json");


function updateContent(jsonLink, tabName = 'Sheet1') {

  loadJSON(jsonLink, function (rawData) {
    const data = rawData.sheets[tabName];

    data.forEach((d) => {

      if (d['Link'] && d['Link'].trim().length > 0) {
        const navEl = document.querySelector(`[data-sheet='${d['Section']}']`);
        const navLinkEl = navEl.querySelector('a');
        if (navEl, navLinkEl) {
          navEl.classList.add('updated');
          navLinkEl.setAttribute('href', d['Link'].trim());
        }
      } else {
        console.log(d['Section'], 'has no link')
      }
    });

  });

}

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}
