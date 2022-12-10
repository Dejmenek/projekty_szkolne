const protonsContainer = document.querySelector('.protons');
const neutronsContainer = document.querySelector('.neutrons');
const electronsContainer = document.querySelector('.electrons');
const electronSetupContainer = document.querySelector('.electron-setup');
const electronConfigurationSemanticContainer = document.querySelector('.electron-configuration-semantic');
const electronConfigurationContainer = document.querySelector('.electron-configuration');
const electronegativityPaulingContainer = document.querySelector('.electronegativity-pauling');

const physicPropertiesContainer = document.querySelector('.physic-properties-list');
const chemicalPropertiesContainer = document.querySelector('.chemical-properties-list');
const usesExamplesContainer = document.querySelector('.uses-list');

const showElementNameContainer = document.querySelector('.show-element-name');
const showElementNumberContainer = document.querySelector('.show-element-number');
const showElementValenceContainer = document.querySelector('.show-element-valence');
const showElementWeightContainer = document.querySelector('.show-element-weight');
const showElementPeriod = document.querySelector('.show-element-period');
const showElementGroup = document.querySelector('.show-element-group');

const enlargedElementNumber = document.querySelector('.enlarged-element-number');
const enlargedElementName = document.querySelector('.enlarged-element-name');
const enlargedElementWeight = document.querySelector('.enlarged-element-weight');
const enlargedElementSymbol = document.querySelector('.enlarged-chemical-symbol');
const enlargedGroup = document.querySelector('.enlarged-group');
const enlargedPeriod = document.querySelector('.enlarged-period');

const atomStructureContainer = document.querySelector('.atom-structure');

const physicHeadingContainer = document.querySelector('.physic__heading');
const chemicalHeadingContainer = document.querySelector('.chemical__heading');
const usesHeadingContainer = document.querySelector('.uses__heading');

const shellsLetters = ["K", "L", "M", "N", "O", "P", "Q"];

function createPage() {
    let retrievedObject = JSON.parse(localStorage.getItem('element'));
    let [protons, neutrons, electrons] = getPartsOfAtom(retrievedObject.number, retrievedObject.atomicMass);

    protonsContainer.textContent = `Protony: ${protons}`;
    neutronsContainer.textContent = `Neutrony: ${neutrons}`;
    electronsContainer.textContent = `Elektrony: ${electrons}`;
    showElementNameContainer.textContent = `Nazwa: ${retrievedObject.name}`;
    showElementNumberContainer.textContent = `Liczba atomowa: ${retrievedObject.number}`;
    showElementWeightContainer.textContent = `Masa atomowa: ${retrievedObject.atomicMass} u`;
    showElementValenceContainer.textContent = `Wartościowość: ${retrievedObject.valence.join(', ')}`;
    showElementGroup.textContent = `Grupa: ${retrievedObject.x - 1}`;
    showElementPeriod.textContent = `Okres: ${retrievedObject.period}`;

    enlargedElementName.textContent = retrievedObject.name;
    enlargedElementNumber.textContent = retrievedObject.number;
    enlargedElementSymbol.textContent = retrievedObject.symbol;
    enlargedElementWeight.textContent = retrievedObject.atomicMass;
    enlargedGroup.textContent = retrievedObject.x - 1;
    enlargedPeriod.textContent = retrievedObject.period;

    getElectronSetup(retrievedObject.shells);
    getElectronConfiguration(retrievedObject.electronConfiguration);
    getElectronConfigurationSemantic(retrievedObject.electronConfigurationSemantic);

    if (retrievedObject.chemicalProperties.length > 0) {
        getChemicalProperties(retrievedObject.chemicalProperties);
    }

    if (retrievedObject.physicalProperties.length > 0) {
        getPhysicalProperties(retrievedObject.physicalProperties);
    }

    if (retrievedObject.uses.length > 0){
        getUses(retrievedObject.uses);
    }
        

    electronegativityPaulingContainer.textContent = retrievedObject.electronegativityPauling !== null ? `Elektroujemność wg Paulinga: ${retrievedObject.electronegativityPauling}`: `Elektroujemność wg Paulinga: -`;

    atomStructureContainer.setAttribute("data", `${retrievedObject.svg}`);
}

function getPartsOfAtom(elementNumber, atomicMass) {
    return [elementNumber, Math.round(atomicMass - elementNumber), elementNumber];
}

function getElectronSetup(shells) {
    electronSetupContainer.innerHTML = "Rozmieszczenie elektronów: ";
    shells.forEach((shell, index) => {
        electronSetupContainer.innerHTML += `${shellsLetters[index]}<sup>${shell}</sup> `;
    });
}

function getElectronConfiguration(electronConfiguration) {
    electronConfigurationContainer.innerHTML = "Konfiguracja elektronowa: ";
    electronConfiguration.split(' ').forEach(conf => {
        electronConfigurationContainer.innerHTML += `${conf.slice(0,2)}<sup>${conf.slice(2)}</sup> `;
    });
}

function getElectronConfigurationSemantic(electronConfigurationSemantic) {
    electronConfigurationSemanticContainer.innerHTML = "Uproszczona konfiguracja elektronowa: ";

    electronConfigurationSemantic.split(' ').forEach(conf => {
        if (conf.match(/^\[.+\]$/g)) {
            electronConfigurationSemanticContainer.innerHTML += `${conf} `;
        } else {
            electronConfigurationSemanticContainer.innerHTML += `${conf.slice(0,2)}<sup>${conf.slice(2)}</sup> `;
        }
    })
}

function getChemicalProperties(chemicalProperties) {
    chemicalHeadingContainer.textContent = "Właściwości chemiczne";

    chemicalProperties.forEach(property => {
        let li = document.createElement("li");
        li.classList.add('list__item');

        li.textContent = property;

        chemicalPropertiesContainer.append(li);
    });
}

function getPhysicalProperties(physicalProperties) {
    physicHeadingContainer.textContent = "Właściwości fizyczne";

    physicalProperties.forEach(property => {
        let li = document.createElement("li");
        li.classList.add('list__item');

        li.textContent = property;

        physicPropertiesContainer.append(li);
    });
}

function getUses(uses) {
    usesHeadingContainer.textContent = "Zastosowania";
    uses.forEach(use => {
        let li = document.createElement("li");
        li.classList.add('list__item');
        
        li.textContent = use;

        usesExamplesContainer.append(li);
    })
}

createPage();