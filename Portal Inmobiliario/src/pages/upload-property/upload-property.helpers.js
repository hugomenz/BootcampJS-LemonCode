export const formatCheckboxId = item => `${item.id}-${item.name}`;

const getCheckbox = item => {
  const container = document.createElement('label');
  container.classList.add('checkbox-contenedor');
  container.textContent = item.name;

  const input = document.createElement('input');
  input.id = formatCheckboxId(item);
  input.value = item.id;
  input.type = 'checkbox';

  const checkmark = document.createElement('span');
  checkmark.classList.add('checkmark');

  container.appendChild(input);
  container.appendChild(checkmark);
  return container;
};

export const setCheckboxList = (list, id) => {
  const listElement = document.getElementById(id);
  list.forEach(item => {
    const checkbox = getCheckbox(item);
    listElement.appendChild(checkbox);
  });
};

const getOption = item => {
  const option = document.createElement('option');
  option.value = item.id;
  option.textContent = item.name;

  return option;
};

export const setOptionList = (list, id) => {
  const listElement = document.getElementById(id);

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Provincia';
  listElement.appendChild(defaultOption);

  list.forEach(item => {
    const option = getOption(item);
    listElement.appendChild(option);
  });
};

export const formatDeleteFeatureButtonId = feature =>
  `delete-${feature}-button`;

export const onAddFeature = feature => {
  const mainFeaturesElement = document.getElementById('mainFeatures');

  const featureContainer = document.createElement('div');
  featureContainer.id = `delete-${feature}`;
  featureContainer.classList.add('feature');

  const deleteButton = document.createElement('button');
  deleteButton.id = formatDeleteFeatureButtonId(feature);
  deleteButton.type = 'button';

  const featureElement = document.createElement('span');
  featureElement.textContent = feature;

  featureContainer.appendChild(deleteButton);
  featureContainer.appendChild(featureElement);
  mainFeaturesElement.appendChild(featureContainer);

  const newFeatureElement = document.getElementById('newFeature');
  newFeatureElement.value = '';
};

export const onRemoveFeature = feature => {
  const mainFeaturesElement = document.getElementById('mainFeatures');
  const featureContainer = document.getElementById(`delete-${feature}`);

  mainFeaturesElement.removeChild(featureContainer);
};

export const onAddImage = image => {
  const imagesElement = document.getElementById('images');
  const addImageButton = document.getElementById('add-image-button');

  const imageContainerElement = document.createElement('div');
  imageContainerElement.classList.add('add_img');

  const imageElement = document.createElement('img');
  imageElement.src = image;

  imageContainerElement.appendChild(imageElement);
  imagesElement.insertBefore(imageContainerElement, addImageButton);
};





export const getAllChildsId = parentId => {
  const parent = document.getElementById(parentId);
  const children = Array.from(parent.children);
  
  return children.map(element => element.id.split('-')[1]);
}

export const getSelectedCheckbox = parentId => {
  const parent = document.getElementById(parentId);
  const children = Array.from(parent.children);
  
  let checkedArray = children.map(name => name.control.checked);
  let selectedCheckboxId = children.map(name => name.control.id.split('-')[0]);

  return selectedCheckboxId.filter((index, id) => checkedArray[id]);
};


export const getAllImages = parentId => {
  const parent = document.getElementById(parentId);
  const children = Array.from(parent.children);
  
  const onlyImagesBooleanList = children.map(img => img.className == 'add_img');

  return children
          .filter((index, id) => onlyImagesBooleanList[id])
          .map(img => img.innerHTML.split('<img src="')[1].split('">')[0]);
}



export const getIdFromSelectedNameOption = id => {
  return document.getElementById(id).value
} 