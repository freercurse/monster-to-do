import { FormEvent, useEffect, useState } from "react";
import * as Realm from "realm-web";
import { useApp } from "./useApp";

export function RegisterUser() {  
  
  const app = useApp(); 
  
  function handleRegister(e:FormEvent<HTMLFormElement>) {    
    const target = e.target as HTMLInputElement

    const email = target.email.value
    const password = target.password.value

    app?.emailPasswordAuth.registerUser({email, password})
  }
  
  return (
    <>
    <form onSubmit={(e)=> {e.preventDefault(), handleRegister(e)}}>
      <input name="email" type="text"></input>
      <input name="password" type="password"></input>
      <button>Register</button>
    </form>      
    </>
  )
}        