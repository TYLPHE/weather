// widget to display weather data
const widget = {
  init: () => {
    const main = widget.body();
    main.appendChild(
      widget.nowTemp(),
    );
    return main;
  },
  body: () => {
    const body = document.createElement('div');
    body.classList.add('widget');
    body.textContent = 'widget body';
    return body;
  },
  nowTemp: () => {
    const temp = document.createElement('div');
    temp.classList.add('now-temp');
    return temp;
  },
};

// generate overall website layout
const body = {
  init: () => {
    document.body.append(
      body.header(),
      widget.init(),
      body.intro(),
    );
  },
  header: () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.appendChild(body.title());
    return header;
  },
  title: () => {
    const titleDiv = document.createElement('a');
    titleDiv.classList.add('title');
    titleDiv.href = 'https://github.com/TYLPHE';
    titleDiv.target = '_blank';

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = 'https://avatars.githubusercontent.com/u/85977718?v=4';

    const title = document.createElement('div');
    title.innerText = 'Weather by TYLPHE';
    titleDiv.append(avatar, title);

    return titleDiv;
  },
  intro: () => {
    const intro = document.createElement('intro');
    intro.classList.add('intro');
    intro.textContent = 'intro';
    return intro;
  },
};

export default body.init;
