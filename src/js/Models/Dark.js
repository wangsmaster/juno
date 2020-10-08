export default class Dark {
  constructor() {
    this.dark = '';
  }

  // save to localstorage
  saveLocal() {
    localStorage.setItem('dark', JSON.stringify(this.dark));
  }

  // Read data from local storage
  readLocal() {
    // Get data from the local storage
    const dark = JSON.parse(localStorage.getItem('dark'));
    // If local storage has data, save to the object
    if (dark) this.dark = dark;
  }
}
