import { create } from "zustand";

interface PerfilEstatus {
    nombre:string;
    email:string;
    cambiarPerfil: (nombre: string, email: string) => void

}

export const UsarPerfilStore = create<PerfilEstatus>()( (set,get) =>({
    nombre: "Jhon Doe",
    email:"Jhon.Doe@google.com",
    cambiarPerfil: (nombre: string, email: string) => {
        set({nombre:nombre, email:email})
    }
}))