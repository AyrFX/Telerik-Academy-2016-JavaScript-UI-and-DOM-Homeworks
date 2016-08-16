function solve() {
    return function (selector, isCaseSensitive) {
        var rootElement = document.querySelector(selector),
            fragment = document.createDocumentFragment(),
            addSection = document.createElement('div'),
            addtext = document.createElement('label'),
            addInput = document.createElement('input'),
            addButton = document.createElement('a'),
            searchSection = document.createElement('div'),
            searchText = document.createElement('label'),
            searchInput = document.createElement('input'),
            resultSection = document.createElement('div'),
            resultList = document.createElement('ul');

        isCaseSensitive = isCaseSensitive | false;

        addSection.className = 'add-controls';
        addtext.innerHTML = 'Enter text';
        addtext.setAttribute('for', 'add-input');
        addInput.setAttribute('type', 'text');
        addInput.id = 'add-input';
        addButton.className += 'button';
        addButton.addEventListener('click', function () {
            var newItem = document.createElement('li'),
                newItemButton = document.createElement('a');

            newItem.className = 'list-item';
            newItem.innerHTML = addInput.value;
            newItemButton.innerHTML = 'X';
            newItemButton.className = 'button';
            newItemButton.addEventListener('click', function () {
                var currentLi = this.parentNode,
                    currentUl = currentLi.parentNode;
                currentUl.removeChild(currentLi);
            });
            newItem.appendChild(newItemButton);
            resultList.appendChild(newItem);
        });
        addButton.innerHTML = 'Add';
        addSection.appendChild(addtext);
        addSection.appendChild(addInput);
        addSection.appendChild(addButton);

        searchSection.className = 'search-controls';
        searchText.innerHTML = 'Search:';
        searchInput.setAttribute('type', 'text');
        searchInput.addEventListener('input', function () {
            var allElements = resultList.querySelectorAll('li'),
                currentText = '',
                currentFilter = searchInput.value,
                i,
                j;

            if (searchInput.value === '') {
                for (i = 0; i < allElements.length; i += 1) {
                    allElements[i].style.display = '';
                }
            }

            for (i = 0; i < allElements.length; i += 1) {
                currentText = '';
                for (j = 0; j < allElements[i].childNodes.length; j += 1) {
                    if (allElements[i].childNodes[j].nodeName === '#text') {
                        currentText += allElements[i].childNodes[j].textContent;
                    }
                }

                if (!isCaseSensitive) {
                    currentText = currentText.toUpperCase();
                    currentFilter = currentFilter.toUpperCase();
                }

                if (currentText.indexOf(currentFilter) > -1) {
                    allElements[i].style.display = '';
                } else {
                    allElements[i].style.display = 'none';
                }
            }
        });
        searchSection.appendChild(searchText);
        searchSection.appendChild(searchInput);

        resultSection.className = 'result-controls';
        resultList.className = 'items-list';
        resultSection.appendChild(resultList);

        fragment.className = 'items-control';
        fragment.appendChild(addSection);
        fragment.appendChild(searchSection);
        fragment.appendChild(resultSection);

        rootElement.className += 'items-control';
        rootElement.appendChild(fragment);
    };
}

module.exports = solve;
