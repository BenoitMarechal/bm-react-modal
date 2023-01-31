# bm-react-modal

bm react-modal is an easy, fully customizable modal component for React. It was developped for educationnal purpose during my training.

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
- if your object's name is `custom`, then the button becomes

### `<BmModal{...custom}></BmModal>`

- Here's a list of the props that can be customised so far:

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for
