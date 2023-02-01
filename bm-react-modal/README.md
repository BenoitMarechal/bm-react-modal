# bm-react-modal

bm-react-modal is an easy, fully customizable modal component for React.
Functions can be ran before/after openning/closing the modal
It was developped for educationnal purpose during my training.
The modal includes a focus trap and can be closed by clicking of the close button or hitting the `escpape` or `enter` key.

- Github repo: [https://github.com/BenoitMarechal/bm-react-modal](https://github.com/BenoitMarechal/bm-react-modal)
- npm page: [
  https://www.npmjs.com/package/bm-react-modal](https://www.npmjs.com/package/bm-react-modal)

## Install

- In your react app directory, run:

### `npm i bm-react-modal`

## Use

- in a React file (App or any other React component), import the modal by adding the following line at the top of the file):

### `import { BmModal } from 'bm-react-modal`;

(Don't forget the curly braces!)

- Place the modal button wherever you want it to be:

### `<BmModal></BmModal>`

(mind the **wrapping**)

- The button should appear in you react app or page, and clicking on it should make the modal pop!

## Customize!

- bm-react modal can be customized by passing it a js {object} as props.
- Example with an object named `customProps`:

### `let customProps = {messageText: '<your custom message text'};`

then

### `<BmModal{...customProps}></BmModal>`

- Here's a list of the props that can be customised so far:

#### Texts

- ` headLineText (headline text)`
- ` messageText (message text)`
- ` btnText (button text)`

#### Colors

- ` backGroundColor (background color, use RGBA to set transparency)`
- ` bodyBackGround (body' background color)`
- ` textColor (text color)`

#### Functions

- ` beforeOpenFunction (function to be executed before the modal opens)`
- ` afterOpenFunction (function to be executed after the modal opens)`
- ` beforeCloseFunction (function to be executed before the modal closes)`
- ` afterCloseFunction (function to be executed after the modal closes)`

## Additionnal styling

If a property is not available through custom props, you can use your inspector to spot the class of an element and overwrite it with your own css.

## Going further

Other custom props that will require a little more work include:

- ` open (boolen that controls wether the modal is open or closed)`
- `openFunction (Function that opens the modal, a composed by a sequence of beforeOpenFunction, toggling the`open` boolean, then afterOpenFunction)`
- `closeFunction (Function that closes the modal, a composed by a sequence of beforeCloseFunction, toggling the`open` boolean, then afterCloseFunction)`
- ` message (You can insert any block of html code to act as your modal's body. However, it needs to contain at least one tabable element, which will generally be your own closing button.
