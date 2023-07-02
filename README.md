![version](https://svgshare.com/i/us2.svg)

# modal-react-lib

> Simple modal library for react project

![exemple](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmM4MnIxMDhlbnpxOGY4NHFqNzNxcG15djhidm1zc3N4bmN2eTF5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ODa9hWploUfbLABL7Q/giphy.gif)

## Technologies

[![React version](https://svgshare.com/i/urK.svg)](https://react.dev/)

[![NodeJS Version](https://svgshare.com/i/uqR.svg)](https://nodejs.org/en)

[![NPM version](https://svgshare.com/i/uqm.svg)](https://www.npmjs.com/)

[![create react library version](https://svgshare.com/i/urz.svg)](https://github.com/transitive-bullshit/create-react-library)

[![VSCode version](https://svgshare.com/i/usN.svg)](https://code.visualstudio.com/)

## Install

```bash
npm install --save modal-react-lib
```

## Usage

### Example

```jsx
import React, { useState } from 'react'

import Modal from 'modal-react-lib'
import 'modal-react-lib/dist/index.css'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  const modal_content = {
    title: 'Modal Title',
    text: 'Modal content'
  }

  return (
    <>
      <button onClick={() => setOpenModal(!openModal)}>Open modal</button>

      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content={modal_content}
      />
    </>
  )
}

export default App
```

### Step by step

1. Import component and style file

```jsx
import Modal from 'modal-react-lib'
import 'modal-react-lib/dist/index.css'
```

2. Create open/close state with useState hook

```jsx
import React, { useState } from 'react'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  ...
```

3. Create object with content of modal

```jsx
const modal_content = {
  title: 'Modal Title',
  text: 'Modal content'
}
```

4. Add component in render with props

```jsx
<Modal
  openState={openModal}
  onRequestClose={setOpenModal}
  content={modal_content}
/>
```

5. Control modal by changing state

```jsx
<button onClick={() => setOpenModal(!openModal)}>Open modal</button>
```

## License

MIT © [MaeRiz](https://github.com/MaeRiz)
