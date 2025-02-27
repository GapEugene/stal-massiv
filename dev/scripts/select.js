const selects = document.querySelectorAll('.select');

selects.forEach((select) => {
  const selectButton = select.querySelector('.select-head .select-button');
  const selectButtons = select.querySelectorAll('.select-body .select-button');
  const selectText = select.querySelector('.select-text');

  selectText.addEventListener('click', (event) => {
    event.preventDefault();
    select.classList.remove('select-expanded');
  });

  selectButton.addEventListener('click', (event) => {
    event.preventDefault();

    select.classList.add('select-expanded');
  });

  selectButtons.forEach((selectButton) => {
    selectButton.addEventListener('click', (event) => {
      event.preventDefault();

      const selectButtonActive = select.querySelector('.select-button-active');
      selectButtonActive.classList.remove('select-button-active');

      selectButton.classList.add('select-button-active');
      select.classList.remove('select-expanded');
    });
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.select')) {
    const selectExpanded = document.querySelector('.select-expanded');
    selectExpanded?.classList.remove('select-expanded');
  }
})
