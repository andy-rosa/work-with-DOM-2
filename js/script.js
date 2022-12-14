/* JavaScript код */

const init = () => {
  const toolbars = document.querySelectorAll('.js-buttons-container');

  const disableActiveStateButton = (evt) => {
    const container = evt.target.closest('.js-buttons-container');
    const buttons = container.querySelectorAll('button');
    buttons.forEach((button) => button.classList.remove('active'));
  };

  const setSettingStyle = (evt, button) => {
    const container = evt.target.closest('ul');
    const settingName = container.dataset.settingName;
    const settingNameFormat = `${settingName[0].toUpperCase()}${settingName.slice(1)}`;

    const settingValue = container.dataset.settingValue;
    const setting = button.dataset[`setting${settingNameFormat}`];

    document.documentElement.dataset[`${settingValue}`] = setting;
  };

  const toolbarClickHandler = (toolbar) => {
    toolbar.addEventListener('click', (evt) => {
      const button = evt.target.closest('button');
      if (!button) return;
      
      disableActiveStateButton(evt);
      setSettingStyle(evt, button);

      button.classList.add('active');
    })
  };

  toolbars.forEach(toolbarClickHandler);

};

init();
