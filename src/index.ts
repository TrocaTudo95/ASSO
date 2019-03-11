import { Rectangle } from "./shape"
import Tokenizer from "./Parser/tokenizer"
import Parser from './Parser/parser'
import Token from "./Parser/token";

let canvas = <HTMLCanvasElement>document.getElementById("myCanvas")
let rectangle = new Rectangle(100, 200, 200, 500)
rectangle.draw(canvas)

const regexList = [
  { token: Token.SHAPE, regex: "shape\\s+([0-9]+\\s){3}[0-9]+" },
  { token: Token.AND, regex: "and"},
  { token: Token.UNION, regex: "union"},
  { token: Token.OPEN_BRACKET, regex: "\\("},
  { token: Token.CLOSE_BRACKET, regex: "\\)"},
  
]

let tokenizer = new Tokenizer(regexList)
let parser = new Parser()

tokenizer.tokenize("(shape 100 200 200 100 and shape 200 300 400 100) union shape 10 20 10 20")
tokenizer.tokenize("shape 100 200 200 100 shape 200 300 400 100 shape 10 20 10 20")
tokenizer.tokenize("shape 100 200 200 100 and (shape 200 300 400 100 shape 10 20 10 20)")


console.log(tokenizer.tokens)

parser.parse(tokenizer.tokens)

