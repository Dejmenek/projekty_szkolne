import data from './elements.json' assert {type: 'json'};

const elementsContainer = document.querySelector('.grid');
const showElementNameContainer = document.querySelector('.show-element-name');
const showElementNumberContainer = document.querySelector('.show-element-number');
const showElementValenceContainer = document.querySelector('.show-element-valence');
const showElementWeightContainer = document.querySelector('.show-element-weight'); 

const enlargedElementNumber = document.querySelector('.enlarged-element-number');
const enlargedElementName = document.querySelector('.enlarged-element-name');
const enlargedElementWeight = document.querySelector('.enlarged-element-weight');
const enlargedElementSymbol = document.querySelector('.enlarged-chemical-symbol');
const enlargedGroup = document.querySelector('.enlarged-group');
const enlargedPeriod = document.querySelector('.enlarged-period');

class Element {

    constructor(name, physicalProperties, chemicalProperties, uses, phase, atomicMass, category, discoveredBy, namedBy, number, period, symbol, shells, electronConfiguration, electronConfigurationSemantic, electronegativityPauling, xpos, ypos, valence, svg) {
        this.name = name;
        this.physicalProperties = physicalProperties;
        this.chemicalProperties = chemicalProperties;
        this.uses = uses;
        this.phase = phase;
        this.atomicMass = atomicMass.toFixed(2);
        this.category = category;
        this.discoveredBy = discoveredBy;
        this.namedBy = namedBy;
        this.number = number;
        this.period = period;
        this.symbol = symbol;
        this.shells = shells;
        this.electronConfiguration = electronConfiguration;
        this.electronConfigurationSemantic = electronConfigurationSemantic;
        this.electronegativityPauling = electronegativityPauling;
        this.x = xpos + 1;
        this.y = ypos + 1;
        this.valence = valence;
        this.svg = svg
    }

    showElement = () => {
        showElementNameContainer.textContent = `Nazwa: ${this.name}`;
        showElementNumberContainer.textContent = `Liczba atomowa: ${this.number}`;
        showElementWeightContainer.textContent = `Liczba masowa: ${this.atomicMass} u`;
        showElementValenceContainer.textContent = `Wartościowość: ${this.valence.join(', ')}`;

        enlargedElementName.textContent = this.name;
        enlargedElementNumber.textContent = this.number;
        enlargedElementSymbol.textContent = this.symbol;
        enlargedElementWeight.textContent = this.atomicMass;
        enlargedGroup.textContent = this.x - 1;
        enlargedPeriod.textContent = this.period;

        localStorage.setItem('element', JSON.stringify(this));
    }

    createElementContainer() {
        let element = document.createElement('div');
        let chemicalSymbolContainer = document.createElement('p');
        let elementNumberContainer = document.createElement('p');
        let elementNameContainer = document.createElement('p');
        let elementMassContainer = document.createElement('p');

        element.classList.add('grid-center-element');
        element.classList.add('element');
        elementNumberContainer.classList.add('element-number');
        chemicalSymbolContainer.classList.add('chemical-symbol');
        elementNameContainer.classList.add('element-name');
        elementMassContainer.classList.add('element-weight');

        element.style.gridColumn = this.x;
        element.style.gridRow = this.y;

        elementNameContainer.textContent = this.name;
        elementMassContainer.textContent = this.atomicMass;

        element.addEventListener('click', this.showElement);

        chemicalSymbolContainer.textContent = this.symbol;
        elementNumberContainer.textContent = this.number
        
        element.append(elementNumberContainer);
        element.append(chemicalSymbolContainer);
        
        switch(this.category) {
            case 'niemetal':
                element.classList.add('nonmetals');
                break;

            case 'metale alkaiczne':
                element.classList.add('alkali-metals');
                break;

            case 'metale ziem alkaicznych':
                element.classList.add('alkaline-earths');
                break;

            case 'metale przejściowe':
                element.classList.add('transition-metals');
                break;

            case 'metale bloku p':
                element.classList.add('poor-metals');
                break;

            case 'halogen':
                element.classList.add('halogens');
                break;

            case 'półmetal':
                element.classList.add('metalloids');
                break;

            case 'gaz szlachetny':
                element.classList.add('noble-gases');
                break;

            case 'lantanowce':
                element.classList.add('lanthanides');
                break;

            case 'aktynowce':
                element.classList.add('actinides');
                break;

            default:
                element.classList.add('unknown');
        }

        switch(this.phase) {
            case "gaz":
                element.classList.add('gas');
                break;

            case "ciecz":
                element.classList.add('liquid');
                break;
        }

        element.append(elementNameContainer);
        element.append(elementMassContainer);

        elementsContainer.append(element);
    }
}

data.elements.forEach((element, index) => {
    let obj = new Element(element.name, element.physical_properties, element.chemical_properties, element.uses, element.phase, element.atomic_mass, element.category, element.discovered_by, element.named_by, element.number, element.period, element.symbol, element.shells, element.electron_configuration, element.electron_configuration_semantic, element.electronegativity_pauling, element.xpos, element.ypos, element.valence, element.svg);

    if (index == 0) {
        obj.showElement();
    }

    obj.createElementContainer();
});