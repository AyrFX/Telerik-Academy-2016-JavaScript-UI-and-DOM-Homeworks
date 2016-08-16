function createCalendar(selector, events) {
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var rootElement = document.querySelector(selector),
        i;

    var dayTitle = document.createElement('div');
    dayTitle.style.textAlign = 'center';
    dayTitle.style.backgroundColor = '#d3d3d3';
    dayTitle.style.height = '15px';
    dayTitle.style.width = '95%';
    dayTitle.style.borderBottom = '1px solid black';
    dayTitle.style.padding = '3px';
    dayTitle.className = 'day-title';
    var dayBox = document.createElement('div');
    dayBox.style.width = '13.5%';
    dayBox.style.height = '120px';
    dayBox.style.display = 'flex';
    dayBox.style.flexFlow = 'row wrap';
    dayBox.style.alignContent = 'flex-start';
    dayBox.style.flexGrow = '14%';
    dayBox.style.border = '1px solid black';
    dayBox.style.padding = '3px';
    dayBox.appendChild(dayTitle);
    dayBox.className = 'day-box';
    var eventTemplate = document.createElement('div');
    eventTemplate.style.textAlign = 'left';
    eventTemplate.style.width = '100%';
    eventTemplate.style.padding = '3px';

    var fragment = document.createDocumentFragment();
    for (i = 1; i < 31; i += 1) {
        var currentDayBox = dayBox.cloneNode(true);
        currentDayBox.id = i;
        var currentTitle = currentDayBox.childNodes[0],
            dayIndex = (i - 1) % 7;
        currentTitle.innerHTML = daysOfWeek[dayIndex] + ' ' + i + ' Jun 2014';
        fragment.appendChild(currentDayBox);
    }

    rootElement.style.display = 'flex';
    rootElement.style.flexDirection = 'row';
    rootElement.style.flexWrap = 'wrap';
    rootElement.style.justifyContent = 'flex-start';
    rootElement.appendChild(fragment);

    for (i = 0; i < events.length; i += 1) {
        var currentDayBox = document.getElementById(events[i].date),
            currentEvent = eventTemplate.cloneNode(true);

        currentEvent.innerHTML = events[i].hour + ' ' + events[i].title;
        currentDayBox.appendChild(currentEvent);
    }

    rootElement.addEventListener('mouseover', function (ev) {
        var currentBoxTitle;
        if (ev.target.className.indexOf('day-title') > -1) {
            currentBoxTitle = ev.target;
        } else if (ev.target.className.indexOf('day-box') > -1) {
            currentBoxTitle = ev.target.querySelector('.day-title');
        } else {
            return;
        }
        currentBoxTitle.style.backgroundColor = '#FFA07A';
    });
    rootElement.addEventListener('mouseout', function (ev) {
        var currentBoxTitle;
        if (ev.target.className.indexOf('day-title') > -1) {
            currentBoxTitle = ev.target;
        } else if (ev.target.className.indexOf('day-box') > -1) {
            currentBoxTitle = ev.target.querySelector('.day-title');
        } else {
            return;
        }
        currentBoxTitle.style.backgroundColor = '#d3d3d3';
    });
    rootElement.addEventListener('click', function (ev) {
        var allDayBoxes = this.querySelectorAll('.day-box'),
            selectedDayBox = ev.target;
        if (ev.target.parentElement.className.indexOf('day-box') > -1) {
            selectedDayBox = ev.target.parentElement;
        }
        for (i = 0; i < allDayBoxes.length; i += 1) {
            allDayBoxes[i].style.backgroundColor = 'white';
        };
        selectedDayBox.style.backgroundColor = 'aqua';
    });
}
