/* eslint-disable no-undef */

export const authService = {
  async login(data) {
    await delay(100);

    window.localStorage.setItem('auth', JSON.stringify(data));
    this.currentUser = data;
    if (this.callback) {
      this.callback(data);
    }
  },
  getCurrentUser() {
    return this.currentUser;
  },
  logout() {
    delete this.currentUser;
    window.localStorage.clear();
    if (this.callback) {
      this.callback(undefined);
    }
  },
  subscribe(callback) {
    this.callback = callback;
    return () => {
      this.callback = undefined;
    };
  },
};
try {
  authService.currentUser = JSON.parse(window.localStorage.getItem('auth'));
} catch (e) {
  //
}
