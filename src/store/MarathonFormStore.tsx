import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  haveCoupon: false,
  couponCode: "",
  password: "",
  confirmPassword: "",
  total:0,
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  setHaveCoupon: (_haveCoupon) => set(() => ({ haveCoupon: _haveCoupon })),
  setCouponCode: (_couponCode) => set(() => ({ couponCode: _couponCode })),
  setConfirmpassword: (_confirmPassword) =>
    set(() => ({
      confirmPassword: _confirmPassword,
    })),
  setPassword: (_Password) => set(() => ({ password: _Password })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCupon: ()=>set((state)=> {
  let totalCount=0;
   if (state.plan==="funrun") {
    totalCount+=500;
   }
   if (state.plan==="mini") {
    totalCount+=800;
    
   }if (state.plan==="half") {
    totalCount+=1200;
   }if (state.plan==="full") {
    totalCount+=1500;
   }

if (state.haveCoupon&& state.couponCode?.trim() === "CMU2025") {
  totalCount *= (70/100);
}


return {total : totalCount};
  } ) ,
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      haveCoupon: false,
      couponCode: "",
      password:"",
      confirmPassword:"",
      total:0
    }),
}));
