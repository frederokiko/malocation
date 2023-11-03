import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("token")!= undefined)
  return true;
  inject(Router).navigate(["erreur"])
  return false;
};
