import { HttpInterceptorFn } from '@angular/common/http';

export const httpCustomInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem("accessToken");
  const newCloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(newCloneRequest);
};
