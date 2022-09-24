export const helperFunction = (status, type = "login", isLogin) => {
  if (
    isLogin.canLogin &&
    !status.loading &&
    !status.error &&
    status.data?.[type]
  ) {
    const token = status.data[type];
    if (token.token !== null) {
      localStorage.setItem("token", token.token);
      return "logedIn";
    }
    return (
      JSON.stringify(token.errors?.nonFieldErrors?.map((e) => e.message)) ||
      JSON.stringify(
        Object.keys(token.errors).map((e) => {
          return token.errors[e].map((ee) => {
            return {
              ["password1 password2".includes(e) ? "password" : e]: ee.message,
            };
          });
        })
      )
    );
  } else {
    return JSON.stringify(status.error);
  }
};
