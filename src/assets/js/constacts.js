import asyncData from '../ajax/ajax.js';

const submitFiltersData = new Promise((resolve) => {
    resolve(asyncData.submitFiltersData(dataSubmit));
  });
  submitFiltersData.then(
    (result) => {
      filterNotif.classList.add('search__filter-notification_active');
      filterNotif.innerHTML = result;
      filterPage.classList.remove('filter_active');
    },
    (error) => {
      alert(`Rejected: ${error}`);
    },
  );

  