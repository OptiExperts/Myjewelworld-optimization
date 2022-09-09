// Start: Plus add charge into price of product
let formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  currencyDisplay: 'symbol'
});

let originPriceText = null;
let originPrice = null;
let interval3 = setInterval(function () {
  let ap_elements = document.querySelector('#avpoptions-container');
  if (ap_elements) {
//     if (!originPriceText) {
      originPriceText = $('#apo-price-origin')[0].innerHTML;
      originPrice = parseFloat($('#apo-price-origin')[0].innerHTML.replace('$', '').replace(/[^\d.]/g, ''));
//     }	
    if (originPriceText && originPrice && $('#avp-productoption-total-add').is(':visible')){
      let addChargePrice = parseFloat($('#avp-productoption-totalpriceadd')[0].innerHTML.replace('$', '').replace(/[^\d.]/g, ''));
      let newPrice = originPrice + addChargePrice;
      $('.product__price--sale')[0].innerHTML = formatter.format(newPrice);

    } else {
      $('.product__price--sale')[0].innerHTML = originPriceText;
    }
  } 
}, 100);
// End: Plus add charge into price of product