import TokenInfo from './tokeninfo'
import Token from './token'

interface TokenInfoConstructors {
    regex: string,
    token: Number
}

export default class Tokenizer {

    tokenInfos: TokenInfo[] = []
    tokens: Token[] = []

    constructor(tokenInfos: TokenInfoConstructors[]) {

        for(let i = 0; i < tokenInfos.length; i++) {
            this.add(tokenInfos[i].regex, tokenInfos[i].token)
        }

    }

    add(regex: string, token: Number) {
        this.tokenInfos.push(new TokenInfo(regex,token))
    }

    tokenize(input: string) : void {

        this.tokens = []

        while(input !== "") {

            let match: boolean = false

            for(let i = 0; i < this.tokenInfos.length; i++) {

                const matched = input.match(this.tokenInfos[i].regex)

                if(matched != null) {

                    match = true
                    const sequence = matched[0]
                    this.tokens.push(new Token(this.tokenInfos[i].token, sequence))
                    input = input.replace(this.tokenInfos[i].regex,'').trim()
                    break

                }
            }

            if(!match) {
                throw new Error(`Unexpected character in input: ${input}`)
            }

        }

    }

}