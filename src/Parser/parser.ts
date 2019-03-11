import Token from './token'

export default class Parser {

    tokens: Token[]
    lookAhead: Token
    lookAhead2: Token
    
    parse(tokens:Token[]) : void {

        this.tokens = [...tokens]
        this.lookAhead = this.tokens[0]

        this.lookAhead2 = this.tokens.length <= 1 ? new Token(Token.EPSILON,"") : this.tokens[1]

        this.expression()


        if(this.lookAhead.token != Token.EPSILON)
            throw new Error(`Unexpected Symbol ${this.lookAhead.sequence}`)

    }

    private nextToken() : void {
        
        this.tokens.shift()
        this.lookAhead = this.tokens.length < 1 ? new Token(Token.EPSILON,"") : this.tokens[0]
        this.lookAhead2 = this.tokens.length <= 1 ? new Token(Token.EPSILON,"") : this.tokens[1]

    }

    private expression() : void {

        if(this.lookAhead2.token != Token.EPSILON && this.lookAhead2.token != Token.CLOSE_BRACKET) {

            this.term()
            this.op()
            this.expression()
        }

        else {
            this.term()
        }

    }

    private term() : void {

        if(this.lookAhead.token == Token.SHAPE) {
            this.nextToken()
            
        }

        else if (this.lookAhead.token == Token.OPEN_BRACKET) {
            this.nextToken()
            this.expression()

            if(this.lookAhead.token != Token.CLOSE_BRACKET) {
                throw Error("Unclosed parenthesis")
            }
            this.nextToken()

        }

    }

    private op() : void {

        if(this.lookAhead.token == Token.UNION || this.lookAhead.token == Token.AND) {
            this.nextToken()
        }

    }

}