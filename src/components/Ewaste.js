import React from 'react';
import LP from "../assets/images/LP.png"
import LP1 from "../assets/images/LP1.png"
import LP2 from "../assets/images/LP2.png"
import LP3 from "../assets/images/LP4.png"
// import './main.css';
import "../css/Ewaste.css"

const EwastePage = () => {
  return (
    <div className='eWaste'>
      <div className="centered-container">
        <h1 class="cormorant-fon">TechGroove | E-waste Disposal</h1><br />
        <p>Electronic waste (e-waste) refers to unwanted, discarded or end-of-life electronic products. As we move
          towards a more technology-driven world, there is a steep rise in e-waste generated worldwide. Majority of
          this e-waste ends up in landfills or the informal sector where it is discarded improperly causing harm to
          the environment and human health.
          At TechGroove, we aim to address this problem by helping our consumers dispose their e-waste in a safe and
          responsible manner. For this, TechGroove has partnered with experts for e-waste recycling. To further make the
          planet green, TechGroove plants a tree in the name of every consumer who disposes their e-waste responsibly with
          TechGroove.</p>

        <div class="row">
          <div class="column"><img src={LP} alt="" />
            E-waste largely contains plastic, precious metals and toxic chemicals. Disposing e-waste responsibly
            helps to recycle plastic, extract metals for reuse, and treat toxic chemicals, such as lead, in a safe
            facility. Recycling e-waste ensures that dangerous elements are treated properly and resources are
            conserved.

            In India, over 90% of e-waste ends up in landfills or the informal sector where it is burnt or melted
            with acid. When e-waste is burnt or dumped in landfills, it releases harmful chemicals, such as cadmium,
            which adversely impacts human health and surrounding lands. As our planet has limited resources, it is
            essential for us to conserve natural elements through recycling and reuse. Hence, e-waste needs to be
            managed in a safe environment by experts.
          </div>
          <div class="column"><img src={LP1} />TechGroove has tied up with e-waste disposal
            experts JustDispose and
            R
            Planet who help with safe e-waste management and disposal.

            JustDispose is a leading e-waste disposal agency, certified by Maharashtra Pollution Board, ISO9001:2008
            certified for Quality Management Standard & ISO14001:2004 certified to ensure Environmental Management
            Standard. All e-waste collected from consumers is safely disposed in JustDispose’s state-of-the-art
            facility.

            R Planet is an Extended Producer Responsibility Organisation (EPRO) for e-waste management and is an
            authorised recycler by the Central Pollution Control Board (CPCB) for recycling e-waste. R Planet helps
            TechGroove with its EPR requirements and recycling of e-waste.
          </div>
        </div>
        <div className="full-width-row">
          <img src={LP2} alt="E-waste Image 3" />
          <p>TechGroove has tied up with e-waste disposal experts JustDispose and R Planet who help with safe e-waste management and disposal. JustDispose is a leading e-waste disposal agency, certified by Maharashtra Pollution Board, ISO9001:2008 certified for Quality Management Standard & ISO14001:2004 certified to ensure Environmental Management Standard. All e-waste collected from consumers is safely disposed of in JustDispose’s state-of-the-art facility. R Planet is an Extended Producer Responsibility Organisation (EPRO) for e-waste management and is an authorised recycler by the Central Pollution Control Board (CPCB) for recycling e-waste. R Planet helps TechGroove with its EPR requirements and recycling of e-waste.</p>
        </div>

      </div>
    </div>
  );
};

export default EwastePage;
