import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formPokmeno = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zá-üÁ-Ü0-9 ]+$/i, 'Ingresa un nombre valido.')
    .required('Nombre es requerido.'),
  image: yup
    .string()
    .matches(/^(https):\/\/[^ "]+$/i, 'Ingresa una dirección url valida.')
    .required('Dirección url es requerida.'),
});

export const resolverFormPokemon = yupResolver(formPokmeno);
