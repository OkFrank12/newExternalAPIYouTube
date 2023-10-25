import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const countState = atomWithStorage("countState", 1);
const mainState = atomWithStorage("mainState", {});
const mainStateData = atomWithStorage("mainStateData", {});
const signinState = atomWithStorage("signinState", "");
const toggleState = atomWithStorage("toggleState", false);

export const useJotaiState = () => {
  return useAtom(countState);
};

export const useMainUserRegister = () => {
  return useAtom(mainState);
};

export const useSignInToken = () => {
  return useAtom(signinState);
};

export const usemainStateData = () => {
  return useAtom(mainStateData);
};

export const usetoggleState = () => {
  return useAtom(toggleState);
};
