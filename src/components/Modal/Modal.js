import Framework from 'framework';
import Form from 'components/Form';
import './Modal.scss';

const Modal = () => `
  <div class="Modal">
    <div class="Modal__backdrop"></div>
    ${Framework.createElement(Form)}
  </div>`;

let openedCard;
let form;

const getTransformMatrix = (node1Dim, node2Dim) => ({
  x: node2Dim.x - node1Dim.x + (node2Dim.width - node1Dim.width) / 2,
  y: node2Dim.y - node1Dim.y + (node2Dim.height - node1Dim.height) / 2,
  scaleX: node2Dim.width / node1Dim.width,
  scaleY: node2Dim.height / node1Dim.height,
});

const getTransform = (node1, node2) => {
  const node1Dim = node1.getBoundingClientRect();
  const node2Dim = node2.getBoundingClientRect();

  return [getTransformMatrix(node1Dim, node2Dim), getTransformMatrix(node2Dim, node1Dim)];
};

const getTransformString = transformMatrix => `
  translate(${transformMatrix.x}px, ${transformMatrix.y}px) 
  scale(${transformMatrix.scaleX}, ${transformMatrix.scaleY})`;

const getCloneCard = (cardNode, styles) => {
  const cloneCard = cardNode.cloneNode(true);
  cloneCard.classList.add('DeviceCard_animation');
  const cardDim = cardNode.getBoundingClientRect();
  cloneCard.style.position = 'fixed';
  cloneCard.style.top = `${cardDim.y}px`;
  cloneCard.style.left = `${cardDim.x}px`;

  if (styles) {
    Object.keys(styles).forEach(key => {
      cloneCard.style[key] = styles[key];
    });
  }

  document.querySelector('body').appendChild(cloneCard);

  // force reflow
  // eslint-disable-next-line
  cloneCard.offsetLeft;
  return cloneCard;
};

const REMOVE_CLASS = ['DeviceCard_animation', 'DeviceCard_hover'];

document.addEventListener('click', e => {
  const card = Framework.getTargetNode(e.target, node => node.dataset.id === 'card');
  if (!openedCard && card) {
    openedCard = card;
    openedCard.classList.remove(...REMOVE_CLASS);
    const cloneCard = getCloneCard(card);
    card.style.opacity = 0;

    const modal = document.querySelector('.Modal');
    modal.style.display = 'flex';
    modal.classList.add('Modal_visible');

    form = document.querySelector('.Form');

    const transform = getTransform(cloneCard, form);

    const cardTranform = transform[0];
    cloneCard.style.opacity = 0;
    cloneCard.style.transform = getTransformString(cardTranform);

    const formTranform = transform[1];
    form.style.transform = getTransformString(formTranform);

    // force reflow
    // eslint-disable-next-line
    form.offsetLeft;
    document.querySelector('.Page').classList.add('Page_modal');

    form.classList.add('Animation');
    form.style.transform = '';

    setTimeout(() => {
      cloneCard.remove();
    }, 200);
  }

  const close = Framework.getTargetNode(e.target, node => node.dataset.id === 'close');
  if (close) {
    document.querySelector('.Modal').classList.remove('Modal_visible');
    document.querySelector('.Page').classList.remove('Page_modal');

    const transform = getTransform(openedCard, form);
    const cardTranform = transform[0];
    const cloneCard = getCloneCard(openedCard, {
      opacity: 0,
      transform: getTransformString(cardTranform),
    });

    cloneCard.style.opacity = null;
    cloneCard.style.transform = null;

    const formTranform = transform[1];
    form.style.transform = getTransformString(formTranform);

    setTimeout(() => {
      cloneCard.remove();
      form.style.transform = null;
      openedCard.style.opacity = null;

      // force reflow
      // eslint-disable-next-line
      openedCard.offsetLeft;
      document.querySelector('.Modal').style.display = 'none';
      openedCard.classList.add(...REMOVE_CLASS);
      openedCard = null;
      form.classList.remove('Animation');
    }, 200);
  }
});

export default Modal;
