export default class Token {

    static readonly EPSILON = 0
    static readonly SHAPE = 1
    static readonly UNION = 2
    static readonly AND = 3
    static readonly OPEN_BRACKET = 4
    static readonly CLOSE_BRACKET = 5

    public token: Number;
    public sequence: string;

    constructor(token: Number, sequence: string) {
        this.token = token
        this.sequence = sequence
    }

}