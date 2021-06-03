/* eslint-disable no-undef */

export const authService = {
  async login(data, token) {
    await delay(100);

    window.localStorage.setItem('auth', JSON.stringify(data));
    this.currentUser = data;

    window.localStorage.setItem('token', JSON.stringify(token));
    this.token = token;

    if (this.callback) {
      this.callback(data);
    }
  },
  getCurrentUser() {
    return this.currentUser;
  },
  getToken() {
    return this.token;
  },
  logout() {
    delete this.currentUser;
    delete this.token;

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
  authService.token = JSON.parse(window.localStorage.getItem('token'));
} catch (e) {
  //
}
