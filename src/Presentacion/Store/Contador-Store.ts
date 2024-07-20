import { create } from "zustand";

interface ContadorEstatus {
    contar: number;
    incrementarDecrementar: (valor:number) => void;
}

 export const usarContadorStore = create<ContadorEstatus>()( (set,get) =>({
    contar:10,
    incrementarDecrementar: (valor:number) =>{
        set(state => ({contar: state.contar + valor}))
    }
}))