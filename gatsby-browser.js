// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

//amplify authentication
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
Amplify.configure(awsConfig)