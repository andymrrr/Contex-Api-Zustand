import { StyleSheet } from "react-native";

export const ColoresGlobales  ={
    negro:"#000",
    gris:"#dadada"
}
export const EstiloGlobales = StyleSheet.create({
    contenedor:{
        marginHorizontal:20,
        marginTop:10
    },
    titulo:{
        fontSize:20,
        fontWeight:"bold",
        color: ColoresGlobales.negro
    },
    botonPrimario:{
        backgroundColor: ColoresGlobales.gris,
        padding:10,
        borderRadius: 5,
        marginVertical: 10
    }
})