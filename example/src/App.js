import React, { useState } from 'react'

import Modal from 'modal-react-lib'
import 'modal-react-lib/dist/index.css'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi,
        atque sint nihil facilis velit, architecto enim eum cum suscipit
        voluptas itaque! Optio fugit sequi soluta repellat aspernatur dolorem
        doloribus beatae obcaecati. Est, nobis ducimus dignissimos quos
        accusantium inventore vero, deleniti porro enim nisi at dolor expedita
        voluptatum sed rerum?
      </h2>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In veniam
        doloremque cumque voluptates velit illum possimus architecto incidunt.
        Sequi soluta ad iste inventore ullam ratione consectetur veniam rerum
        numquam! Maiores voluptatum architecto impedit minima cum doloremque non
        commodi id ullam maxime. Provident culpa officia ipsum ipsam quis nam
        cum dolorum perferendis minima mollitia? Ipsam modi illo molestiae
        aspernatur. Quisquam voluptate mollitia ipsum fugiat sint voluptates
        modi adipisci earum ipsa, provident excepturi expedita repellendus
        voluptatum ad fugit nesciunt eveniet vitae minima, dolor magni atque.
        Vitae voluptatem minus libero, maiores error eveniet quaerat aut ipsum
        sequi enim quam aspernatur qui officia a.
      </h3>
      <h4>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptas
        vel ipsa quia illo? Omnis aliquam earum soluta expedita cupiditate quasi
        consequuntur minima rem commodi quam numquam doloremque veniam adipisci
        molestias iure ipsam ratione, tenetur voluptatum velit tempore! Ratione
        quod vel culpa numquam possimus? Tempora, possimus sed consectetur,
        provident excepturi adipisci magni at fugit repellendus accusamus quos
        inventore et maxime totam facilis quae ipsum. Deleniti autem maxime modi
        maiores distinctio impedit nostrum totam! Error optio autem possimus
        saepe nobis rerum cupiditate repellat quos doloremque, doloribus
        commodi, quas dolore praesentium ex sapiente sequi maxime adipisci
        tempora corrupti dolor esse deserunt? Iusto incidunt dicta est aliquid
        minus provident consectetur assumenda ipsam facere accusantium similique
        reprehenderit labore possimus necessitatibus qui asperiores quibusdam,
        consequuntur officia! Corporis ipsa ad, reiciendis delectus ex non
        provident aperiam quos atque odit veritatis recusandae maiores nisi
        repellat consequuntur. Nesciunt voluptatum eum aut magni impedit
        similique minima dicta adipisci eos.
      </h4>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus explicabo amet! Blanditiis quod id omnis ullam repellendus
        eligendi autem dicta, qui, explicabo, error adipisci expedita. Adipisci,
        fuga sint earum ullam in suscipit quae? Placeat fugit quia blanditiis
        consequuntur porro? Eius aliquid, alias exercitationem consequatur a
        fugiat, rem est sed asperiores veniam, accusantium aliquam soluta quidem
        porro dicta laudantium nisi cumque modi aperiam reprehenderit placeat
        quis! Cum facilis blanditiis molestias obcaecati quasi rerum
        perspiciatis voluptatum modi, voluptatem eligendi expedita cumque atque
        rem incidunt ea dignissimos labore, maxime aliquam architecto adipisci
        ipsa quibusdam provident nobis. Ut aliquid, sequi deleniti sunt nihil
        numquam perspiciatis illum. Omnis necessitatibus eveniet inventore
        repellendus natus quidem maiores voluptatem quae! Deserunt eos,
        reiciendis facilis, adipisci beatae similique natus delectus a doloribus
        praesentium fugit ipsum molestiae incidunt nostrum distinctio maiores
        aut. Eveniet ut necessitatibus expedita nihil, iusto doloremque error
        sunt minus, incidunt dolor, officiis corrupti quo dolore? Exercitationem
        eos est debitis deserunt consequatur eligendi quae ratione sed animi
        quaerat molestiae provident aperiam tempore commodi et, adipisci,
        dolorum fugiat nulla nihil obcaecati! Aspernatur quo maxime quas
        reiciendis atque eum nihil molestias alias molestiae ipsa obcaecati
        delectus veniam distinctio, nemo quis quisquam suscipit minima. Illum
        possimus esse mollitia fugit eveniet!
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        eaque velit quas harum esse, corrupti in. Provident eius corrupti
        maiores, consequatur quos repellendus facilis praesentium! Ullam
        mollitia tempore expedita sit?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        illum commodi fugit repellendus debitis magnam neque veritatis natus?
        Pariatur vel rerum dolorem a vitae repellat exercitationem, voluptatum
        dolores doloremque molestiae ex voluptates asperiores explicabo eveniet
        maiores id hic facilis minima cum! Accusamus repudiandae vero rem iure
        reprehenderit ipsum at nulla!
      </p>
      <button onClick={() => setOpenModal(!openModal)}>Open modal</button>
      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content
      />
    </>
  )
}

export default App
