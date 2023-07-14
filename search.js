window.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function() {
    var query = searchInput.value.toLowerCase();
    var articles = document.querySelectorAll('article');
    searchResults.innerHTML = '';

    articles.forEach(function(article) {
      var title = article.querySelector('h2').innerText.toLowerCase();
      var content = article.innerText.toLowerCase();

      if (title.includes(query) || content.includes(query)) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.href = '#' + article.id;
        link.innerText = title;
        li.appendChild(link);
        searchResults.appendChild(li);
      }
    });
  });
});

