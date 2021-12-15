import request from "../utils/request";
import Resource from "./resource";

export default class Materia extends Resource{
    constructor(){
        super('materias');
    }
}

export const MateriaResource = new Materia();