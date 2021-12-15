import request from "../utils/request";
import Resource from "./resource";

export default class Ambiente extends Resource{
    constructor(){
        super('ambientes');
    }
}

export const AmbienteResource = new Ambiente();