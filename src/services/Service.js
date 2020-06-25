import Api from './Api'

export default class Service extends Api {
    constructor(){
        super('https://facilitapro-api.herokuapp.com');
    };

    get(){
        return this.axios.get('/services');
    };
}