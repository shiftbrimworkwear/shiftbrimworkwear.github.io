const dncPants = 'https://www.dncworkwear.com.au/categories/Workwear/Work-Pants';
const dncCoveralls = 'https://www.dncworkwear.com.au/ProductDisplay.aspx?filterProduct=CategoryCode%3Ane%3ASX99&productsearch=coveralls';
const catalogue = [
  {sku:'WSL503', image:'https://cdn11.bigcommerce.com/s-t8lzk3njin/images/stencil/640x640/products/365/949/WEB-01__02392.1693273665.jpg?c=1', brand:'Workcraft', category:'Shirts', name:'Women’s Hi-Vis Taped Long-Sleeve Shirt', source:'https://www.nccapparel.com.au/catalogue/'},
  {sku:'3311', image:'https://www.onsitesafetyaustralia.com.au/images/thumbs/0001829_dnc-100-cotton-drill-work-pants-311gsm_1170.jpeg', brand:'DNC Workwear', category:'Pants', name:'Cotton Drill Work Pants', source:dncPants},
  {sku:'3312', image:'https://cdn11.bigcommerce.com/s-8be69/images/stencil/1280x1280/products/71/23969/3312_Khaki__50951.1724313088.jpg?c=2', brand:'DNC Workwear', category:'Pants', name:'Cotton Drill Cargo Pants', source:dncPants},
  {sku:'K8044', image:'https://cdn11.bigcommerce.com/s-8be69/images/stencil/1280x1280/products/8042/116439/K8044YFR__34041.1775790374.jpg?c=2', brand:'Portwest / Huski', category:'Jackets', name:'Huski Freezer Jacket', source:'https://bjsworkwear.com.au/products/huski-hi-vis-contrast-freezer-jacket'},
  {sku:'3101', image:'https://www.workwearhub.com.au/cdn/shop/products/dnc-drill-overall-3101-navy-front_800x.jpg?v=1643681232', brand:'DNC Workwear', category:'Coveralls', name:'Cotton Drill Coverall', source:dncCoveralls},
  {sku:'3851', image:'https://www.tasworkwear.com.au/images/categories/DNC/3851.jpg', brand:'DNC Workwear', category:'Coveralls', name:'Hi-vis Two-Tone Cotton Coverall', source:dncCoveralls},
  {"sku":"3304","brand":"DNC Workwear","category":"Shorts","name":"Lightweight Cool-Breeze Cotton Cargo Shorts","image":"https://motoman.com.au/cdn/shop/files/3304blackfront.jpg?v=1714753656","source":"https://www.dncworkwear.com.au/Product/3304"},
  {"sku":"3319","brand":"DNC Workwear","category":"Pants","name":"Cotton Drill Cargo Pants with Reflective Tape","image":"https://media.rs-online.com/image/upload/bo_1.5px_solid_white%2Cb_auto%2Cc_pad%2Cdpr_2%2Cf_auto%2Ch_399%2Cq_auto%2Cw_710/c_pad%2Ch_399%2Cw_710/Y2862605-01?pgw=1","source":"https://www.dncworkwear.com.au/Product/3319"},
  {"sku":"3102","brand":"DNC Workwear","category":"Coveralls","name":"Polyester Cotton Coverall","image":"https://dncshop.com.au/cdn/shop/products/DNC-Polyester-Cotton-Coveralls-3102-2_78eb6ca2-932d-4b7b-9756-e942994e2573.jpg?v=1689511560&width=1445","source":"https://www.dncworkwear.com.au/Product/3102"},
  {"sku":"3855","brand":"DNC Workwear","category":"Coveralls","name":"Hi-Vis Two-Tone Cotton Coverall with Reflective Tape","image":"https://www.dncworkwear.com.au/images/hires/3855452.jpg","source":"https://www.dncworkwear.com.au/Product/3855"},
  {"sku":"3852","brand":"DNC Workwear","category":"Coveralls","name":"Hi-Vis Cool-Breeze Two-Tone Lightweight Coverall","image":"https://alltradesgroup.net.au/cdn/shop/products/3852.yn.jpg?v=1642638003","source":"https://www.dncworkwear.com.au/Product/3852"},
  {"sku":"WS6030","brand":"Workcraft","category":"Shirts","name":"Hi-Vis Taped Lightweight Vented Shirt","image":"https://www.workweardiscounts.com.au/cdn/shop/files/NCC-WS6030-Yellow_Navy-1.jpg?v=1720979050&width=1080","source":"https://www.workweardiscounts.com.au/products/workcraft-ws6030-hi-vis-taped-lightweight-vented-shirt-orange-navy"},
  {"sku":"WS6067","brand":"Workcraft","category":"Shirts","name":"Ripstop Short-Sleeve Vented Shirt","image":"https://www.uniformwholesalers.com.au/cdn/shop/files/WS6067-NCC-0391.jpg?v=1760002820","source":"https://www.uniformwholesalers.com.au/products/workcraft-ripstop-ss-vented-shirt-ws6067"},
  {"sku":"WS6066","brand":"Workcraft","category":"Shirts","name":"Ripstop Long-Sleeve Vented Shirt","image":"https://coalfaceworkwear.com.au/cdn/shop/files/ws6066-ncc-0362.jpg?v=1759223922&width=1946","source":"https://www.nccapparel.com.au/catalogue/"},
  {"sku":"WS6011","brand":"Workcraft","category":"Shirts","name":"Hi-Vis Vented Cotton Drill Reflective Shirt","image":"https://motoman.com.au/cdn/shop/files/WS6011-NCC-3597.jpg?v=1717033618","source":"https://motoman.com.au/products/workcraft-ws6011-lightweight-hi-vis-vented-cotton-drill-shirt-with-semi-gusset-and-shoulder-pattern-csr-reflective-tape"},
  {"sku":"WS4001","brand":"Workcraft","category":"Shirts","name":"Hi-Vis Short-Sleeve Cotton Drill Reflective Shirt","image":"https://motoman.com.au/cdn/shop/files/052_ws4001_ny_1_edited.jpg?v=1716909692&width=1280","source":"https://motoman.com.au/products/workcraft-ws4001-hi-vis-short-sleeve-cotton-drill-reflective-shirt"},
  {"sku":"H440","brand":"Portwest / Huski","category":"Jackets","name":"Hi-Vis Rain Jacket","image":"https://www.bksafetywear.co.uk/user/products/portwest-h440-hi-vis-rain-jacket-orange.jpg","source":"https://pricedumb.com.au/products/portwest-hi-vis-waterproof-windproof-reflective-vented-rain-jacket-raincoat-h440"},
  {"sku":"C470","brand":"Portwest / Huski","category":"Vests","name":"Hi-Vis Two-Band and Brace Vest","image":"https://watsonhire.ie/cdn/shop/files/C470YER_R.jpg?v=1708603697&width=1214","source":"https://www.lawson-his.co.uk/portwest-c470-hi-vis-band-and-brace-vest"},
  {"sku":"K4039","brand":"Portwest / Huski","category":"Jackets","name":"Huski Everest Polar Fleece Jacket","image":"https://collinsclothingco.com.au/cdn/shop/products/57_205bb227-2759-41d5-b3ca-56a589833ee5.jpg?v=1717551932&width=1920","source":"https://collinsclothingco.com.au/products/portwest-mens-huski-everest-polar-fleece-jacket-lightweight-waterproof-k4039-portwest"},
  {"sku":"T603","brand":"Portwest / Huski","category":"Jackets","name":"PW3 Work Jacket","image":"https://d11ak7fd9ypfb7.cloudfront.net/styles1100px/T603NBR.jpg","source":"https://www.portwest.com/products/view/T603/NBR"},
  {"sku":"4504","brand":"DNC Workwear","category":"Pants","name":"Permanent Press Cargo Pants","image":"https://www.dncworkwear.com.au/images/zoom/4504100.jpg","source":"https://www.dncworkwear.com.au/Product/4504"},
  {"sku":"3375","brand":"DNC Workwear","category":"Pants","name":"SlimFlex Tradie Cargo Pants","image":"https://collinsclothingco.com.au/cdn/shop/files/DNC_24.png?v=1716522548&width=1946","source":"https://www.dncworkwear.com.au/Product/3375"},
  {"sku":"3384","brand":"DNC Workwear","category":"Pants","name":"Ripstop Tradie Cargo Pants","image":"https://dncshop.com.au/cdn/shop/products/DNC-RipStop-Tradies-Cargo-Pants-3384-2_738fcb57-1f91-4319-826a-8169986105e5.jpg?v=1691540460&width=1946","source":"https://www.dncworkwear.com.au/Product/3384"},
  {"sku":"3305","brand":"DNC Workwear","category":"Shorts","name":"Drill Elastic Drawstring Shorts","image":"https://www.queenslandworkwear.com.au/cdn/shop/products/DNC-Drill-Elastic-Drawstring-Shorts-3305-3_1200x1200.jpg?v=1632312940","source":"https://www.dncworkwear.com.au/Product/3305"},
  {"sku":"3104","brand":"DNC Workwear","category":"Coveralls","name":"Lightweight Cool-Breeze Cotton Drill Coverall","image":"https://www.dncdirect.com.au/cdn/shop/products/3104200.jpg?v=1638759593","source":"https://www.dncworkwear.com.au/Product/3104"},
  {"sku":"3915","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Cotton Jersey Polo with Reflective Tape","image":"https://www.dncworkwear.com.au/images/hires/3915357.jpg","source":"https://www.dncworkwear.com.au/Product/3915"},
  {"sku":"3817","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Two-Tone Cotton-Back Polo with Reflective Tape","image":"https://www.uniformwholesalers.com.au/cdn/shop/products/3817357.jpeg?v=1763453978","source":"https://www.dncworkwear.com.au/Product/3817"},
  {"sku":"3712","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Cool-Breathe X-Back Polo","image":"https://workinit.com.au/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/h/i/hi-vis-dnc-cool-breathe-polo-shirt-ssleeve-x-back-ref-tape-175gsm-orange-navy-3712.jpg","source":"https://www.dncworkwear.com.au/Product/3712"},
  {"sku":"3911","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Hoop Reflective Short-Sleeve Polo","image":"https://www.southland.com.au/media/catalog/product/D/N/DNC_3911_Hoop_Reflective_Polyester_Polo_Shirt__Short_Sleeve__Yell_1.jpg?bg-color=255%2C255%2C255&canvas=700%3A560&fit=bounds&height=560&optimize=medium&width=700","source":"https://www.southland.com.au/dnc-3911-hoop-reflective-polyester-polo-shirt-short-sleeve-yellow-navy"},
  {"sku":"3819","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Cotton-Back Biomotion Taped Polo","image":"https://www.workwearwholesalers.com.au/cdn/shop/products/3819.jpg?v=1684395346&width=1946","source":"https://www.dncworkwear.com.au/Product/3819"},
  {"sku":"3511","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Segment Taped Micromesh Polo","image":"https://www.ballaratsafety.com.au/content/product/full/DNC___3511-779-231.png","source":"https://www.dncworkwear.com.au/Product/3511"},
  {"sku":"3518","brand":"DNC Workwear","category":"Shirts","name":"Hi-Vis Segment Taped Cotton-Back Long-Sleeve Polo","image":"https://collinsclothingco.com.au/cdn/shop/files/57_878c78aa-8a8a-4d9a-a827-3378e9d237a2.png?v=1746510378&width=1946","source":"https://www.dncworkwear.com.au/Product/3518"},
  {"sku":"WS4132","brand":"Workcraft","category":"Shirts","name":"Two-Tone Taped Vented Drill Shirt","image":"https://stellarpa.com.au/cdn/shop/files/WS4132-NCC-0468.jpg?v=1726301503&width=1214","source":"https://www.nccapparel.com.au/catalogue/"},
  {"sku":"WS3029","brand":"Workcraft","category":"Shirts","name":"Half-Placket Work Shirt","image":"https://www.workweardiscounts.com.au/cdn/shop/files/WorkCraft-WS3029_72d981e5-c2f9-48f1-9e68-222e500dbe26.jpg?v=1722884161&width=900","source":"https://www.nccapparel.com.au/catalogue/"},
  {"sku":"WS4247","brand":"Workcraft","category":"Shirts","name":"Hi-Vis Lightweight Vented Shirt","image":"https://www.workweardiscounts.com.au/cdn/shop/files/NCC-WS4247.jpg?v=1720979382&width=1080","source":"https://www.workweardiscounts.com.au/products/workcraft-ws4247-hi-vis-lightweight-vented-shirt"},
  {"sku":"WSL501","brand":"Workcraft","category":"Shirts","name":"Women’s Hi-Vis Taped Lightweight Shirt","image":"https://alltradesgroup.net.au/cdn/shop/files/HVWSL501-YN_1445x.jpg?v=1746660056","source":"https://alltradesgroup.net.au/products/workcraft-wsl501-l-sl-ladies-reflective-hi-vis-light-weight-shirt"},
  {"sku":"WSP201","brand":"Workcraft","category":"Shirts","name":"Hi-Vis Two-Tone Short-Sleeve Polo","image":"https://coalfaceworkwear.com.au/cdn/shop/files/WSP201_NY_2.jpg?v=1759226457&width=1445","source":"https://coalfaceworkwear.com.au/products/workcraft-wsp201-hivis-2-tone-s-sleeve-polo-with-pocket"},
  {"sku":"WS3222","brand":"Workcraft","category":"Shirts","name":"Hi-Vis Long-Sleeve X-Back Reflective Shirt","image":"https://motoman.com.au/cdn/shop/files/016_ws3222_white_1_1_11.jpg?v=1716900104","source":"https://motoman.com.au/products/workcraft-ws3222-hi-vis-l-s-shirt-with-x-pattern-reflective-tape"},
  {"sku":"WJ3020","brand":"Workcraft","category":"Coats","name":"Food Industry Long Dust Coat","image":"https://www.uniforms.com.au/cdn/shop/files/food-industry-long-length-dust-coat-workwear-white-sleeved-lab-627.webp?v=1773266836&width=400","source":"https://www.uniforms.com.au/products/food-industry-long-length-dust-coat"},
  {"sku":"3316","brand":"DNC Workwear","category":"Pants","name":"Lightweight Cotton Cargo Pants","image":"https://www.dncdirect.com.au/cdn/shop/products/3316_20Right.jpg?v=1632976427&width=1500","source":"https://www.dncworkwear.com.au/Product/3316"},
  {"sku":"3956","brand":"DNC Workwear","category":"Coveralls","name":"Hi-Vis Cool-Breeze Lightweight Coverall","image":"https://www.aceworkwear.com.au/cdn/shop/products/3956450.jpg?v=1618623177","source":"https://www.dncworkwear.com.au/Product/3956"},
  {"sku":"3373","brand":"DNC Workwear","category":"Shorts","name":"SlimFlex Tradie Cargo Shorts","image":"https://www.uniformwholesalers.com.au/cdn/shop/products/3373N.jpg?v=1734682378&width=1920","source":"https://www.dncworkwear.com.au/Product/3373"},
  {"sku":"3356","brand":"DNC Workwear","category":"Pants","name":"Women’s Cool-Breeze Midweight Cargo Pants","image":"https://www.budgetworkwear.com.au/cdn/shop/products/3356100_1.jpg?v=1753424875","source":"https://www.dncworkwear.com.au/Product/3356"},
  {"sku":"T602","brand":"Portwest / Huski","category":"Pants","name":"PW3 Holster Work Trousers","image":"https://www.everydayweldingsupplies.com/image/cache/catalog/toolsbank/PWTT602B30-600x600.jpg","source":"https://www.everydayweldingsupplies.com/portwest-t602-pw3-holster-work-trousers-black-waist-34in"},
  {"sku":"T601","brand":"Portwest / Huski","category":"Pants","name":"PW3 Work Trousers","image":"https://dddrod5ot77vc.cloudfront.net/images/detailed/75/Portwest_T601_Trosuers_Main_Image.jpg?t=1617975308","source":"https://www.bksafetywear.co.uk/portwest-t601-pw3-workwear-trouser-with-reflective-piping-300g.html"},
  {"sku":"S460","brand":"Portwest / Huski","category":"Jackets","name":"Hi-Vis Traffic Jacket","image":"https://aonetools-b5e0.kxcdn.com/app/uploads/2025/01/S460YER_R-1.jpg","source":"https://www.aonetools.co.uk/product/portwest-s460-hi-vis-yellow-winter-traffic-jacket/"},
  {"sku":"S463","brand":"Portwest / Huski","category":"Jackets","name":"Hi-Vis Waterproof Bomber Jacket","image":"https://www.lineonline.it/media/catalog/product/cache/f17b6c6a3f73469c549c849188b6d7fd/g/i/giubbotto-bomber-alta-visibilita-portwest-s463-immagine-.jpg","source":"https://www.lineonline.it/giubbotto-bomber-alta-visibilita-impermeabile-portwest-s463.html"},
  {"sku":"S480","brand":"Portwest / Huski","category":"Pants","name":"Hi-Vis Traffic Trousers","image":"https://www.ress.lt/images/uploader/ge/1100x1100.g/gero-matomumo-kelininko-kelnes-5.jpg?v=1772115266","source":"https://www.ress.lt/gero-matomumo-portwest-s480-kelnes"},
  {"sku":"PW360","brand":"Portwest / Huski","category":"Jackets","name":"PW3 Hi-Vis Extreme Rain Jacket","image":"https://www.midwestworkwear.com/images/thumbs/PW360YBR_1920.jpg","source":"https://www.midwestworkwear.com/portwest-pw360-pw3-hi-vis-extreme-rain-jacket"},
  {"sku":"S461","brand":"Portwest / Huski","category":"Jackets","name":"Hi-Vis Breathable Jacket","image":"https://workweargurus.com/cdn/shop/products/Portwest-S461-Hi-Vis-Breathable-Jacket-Yellow-1.jpg?v=1686867712","source":"https://workweargurus.com/collections/winter-jackets/products/portwest-s461-hi-vis-breathable-jacket"},
];

const byId = (id) => document.getElementById(id);
const quote = new Map();
const storageKey = 'crewkit-quote-v1';

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  for (const entry of saved) {
    if (catalogue.some((product) => product.sku === entry.sku)) quote.set(entry.sku, entry);
  }
} catch {
  // The quote list still works when browser storage is unavailable.
}

function saveQuote() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...quote.values()]));
  } catch {
    // Keep editing the current list in memory.
  }
}

function element(tag, value, className) {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (className) node.className = className;
  return node;
}

function renderCatalogue() {
  const term = byId('search').value.trim().toLowerCase();
  const brand = byId('brand').value;
  const category = byId('category').value;
  const matches = catalogue.filter((product) =>
    (!brand || product.brand === brand) &&
    (!category || product.category === category) &&
    `${product.name} ${product.sku} ${product.brand}`.toLowerCase().includes(term)
  );

  byId('results').textContent = matches.length ? `${matches.length} styles` : 'No matching styles. Try a different code or filter.';
  byId('products').replaceChildren(...matches.map((product) => {
    const card = element('article', '', 'card');
    const source = element('a', 'View supplier details');
    source.href = product.source;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    const added = quote.has(product.sku);
    const button = element('button', added ? 'View quote item' : 'Add to Quote', 'button');
    button.type = 'button';
    button.addEventListener('click', () => {
      if (quote.has(product.sku)) {
        byId(`sizes-${product.sku}`).focus();
      } else {
        quote.set(product.sku, {sku:product.sku, colour:'', sizes:''});
        saveQuote();
        renderItems();
        button.textContent = 'View quote item';
        byId('feedback').textContent = `${product.sku} added to your quote list.`;
      }
    });
    const photo = element('img', '', 'product-photo');
    photo.alt = `${product.brand} ${product.sku} ${product.name}`;
    photo.loading = 'lazy';
    photo.decoding = 'async';
    photo.referrerPolicy = 'no-referrer';
    photo.addEventListener('error', () => photo.remove());
    photo.src = product.image;
    card.append(photo);
    card.append(element('p', `${product.brand} · ${product.sku}`), element('h3', product.name), source, button);
    return card;
  }));
}

function itemField(entry, field, labelText, placeholder) {
  const label = element('label', labelText);
  const input = element('input');
  input.id = `${field}-${entry.sku}`;
  input.value = entry[field];
  input.placeholder = placeholder;
  input.addEventListener('input', () => {
    entry[field] = input.value;
    saveQuote();
  });
  label.append(input);
  return label;
}

function renderItems() {
  byId('count').textContent = quote.size;
  if (!quote.size) {
    byId('items').replaceChildren(element('p', 'Add a catalogue item or enter an unlisted style in the form.'));
    return;
  }
  byId('items').replaceChildren(...[...quote.values()].map((entry) => {
    const product = catalogue.find((item) => item.sku === entry.sku);
    const card = element('div', '', 'quote-item');
    const head = element('header');
    const remove = element('button', 'Remove', 'remove');
    remove.type = 'button';
    remove.setAttribute('aria-label', `Remove ${product.sku}`);
    remove.addEventListener('click', () => {
      quote.delete(entry.sku);
      saveQuote();
      renderItems();
      renderCatalogue();
      byId('feedback').textContent = `${product.sku} removed.`;
    });
    head.append(element('strong', `${product.sku} · ${product.name}`), remove);
    card.append(head, itemField(entry, 'colour', 'Preferred colour', 'e.g. Yellow / Navy'), itemField(entry, 'sizes', 'Sizes and quantities', 'e.g. 4 × M, 6 × L'));
    return card;
  }));
}

for (const id of ['search','brand','category']) byId(id).addEventListener('input', renderCatalogue);

byId('quote-form').addEventListener('submit', (event) => {
  const form = event.currentTarget;
  const fields = new FormData(form);
  const status = byId('form-status');
  if (!quote.size && !fields.get('extra').trim()) {
    event.preventDefault();
    status.textContent = 'Add a catalogue item or enter an unlisted style.';
    return;
  }
  for (const entry of quote.values()) {
    if (!entry.sizes.trim()) {
      event.preventDefault();
      status.textContent = `Enter sizes and quantities for ${entry.sku}.`;
      byId(`sizes-${entry.sku}`).focus();
      return;
    }
  }
  byId('quote-items').value = [...quote.values()].map((entry) => {
    const product = catalogue.find((item) => item.sku === entry.sku);
    return `${product.brand} | ${entry.sku} | ${product.name} | ${entry.colour || 'Colour to confirm'} | ${entry.sizes}`;
  }).join('\n');
  status.textContent = 'Sending your quote request…';
});

renderCatalogue();
renderItems();

byId('quote-action').disabled = false;
