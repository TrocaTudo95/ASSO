export default class TokenInfo {

    public regex: RegExp
    public token: Number
    
    constructor(regex: string, token:Number) {
        this.regex = new RegExp('^' + regex)
        this.token = token
    }

}