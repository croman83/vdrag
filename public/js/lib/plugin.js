'use strict';

// if (typeof productsArray !== 'undefined') {
//     Vue.directive('img', function (url) {
//         var img = new Image();
//         img.src = url;
//
//         img.onload = function () {
//             this.el.src = url;
//             $(this.el).css('opacity', 0).animate({ opacity: 1 }, 1000);
//         }.bind(this);
//     });
//
//     var itemProduct = new Vue({
//         el: '#itemProduct',
//         data: {
//             products: productsArray,
//             productNumber: 0,
//             productLenght: Object.keys(productsArray).length
//         },
//         delimiters: ['${', '}']
//     });
// }
//
// if (document.getElementById('enterAccount')) {
//     var enterAccount = new Vue({
//         el: '#enterAccount',
//         data: {
//             step: 1
//         },
//         methods: {
//             country: function country(e) {
//                 if ($(e.currentTarget).hasClass('opened')) {
//                     if (e.target.tagName === 'INPUT') {
//                         $('.country-wrapper .current').removeClass('current');
//                         var text = $(e.target).closest('label').addClass('current').text();
//                         $('.country-wrapper>span').text(text);
//                         $('.country-wrapper').removeClass('opened');
//                     }
//                 } else {
//                     $(e.currentTarget).addClass('opened');
//                 }
//             }
//         }
//     });
// }
// if (document.getElementById('myAccount')) {
//     var Account = new Vue({
//         el: '#myAccount',
//         data: {
//             step: 2,
//             menu: '',
//             personalDataEdit: false,
//             personalPasEdit: false,
//             monthNames_en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//             monthNames_ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
//             monthNames_ro: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noembrie", "Decembrie"],
//             currentYear: new Date().getFullYear(),
//             year: 2017,
//             month: 1,
//             day: 31,
//             persDataNow: 31,
//             persDataNowError: false,
//             showButtonPers: false,
//             showButtonProgress: 1,
//             personalDelivEdit: false,
//             personalBill: false
//         },
//         watch: {
//             month: {
//                 deep: true,
//                 handler: function handler() {
//                     var b = new Date(this.year, this.month, 0).getDate();
//                     this.persDataNow = b;
//                     if (this.day > this.persDataNow) {
//                         this.persDataNowError = true;
//                     } else {
//                         this.persDataNowError = false;
//                     }
//                 }
//             },
//             day: {
//                 deep: true,
//                 handler: function handler() {
//                     var b = new Date(this.year, this.month, 0).getDate();
//                     this.persDataNow = b;
//                     if (this.day > this.persDataNow) {
//                         this.persDataNowError = true;
//                     } else {
//                         this.persDataNowError = false;
//                     }
//                 }
//             }
//         },
//         methods: {
//             changeData: function changeData() {
//                 if (this.personalDataEdit) {
//                     accPersData();
//                     $('#accPersonal').submit();
//                 } else {
//                     this.personalDataEdit = true;
//                 }
//             },
//             changeDataDeliv: function changeDataDeliv() {
//                 if (this.personalDelivEdit) {
//                     accDeliv();
//                     $('#accDelivery').submit();
//                 } else {
//                     this.personalDelivEdit = true;
//                 }
//             },
//             changeDataBill: function changeDataBill() {
//                 if (this.personalBill) {
//                     accBill();
//                     $('#accBill').submit();
//                 } else {
//                     this.personalBill = true;
//                 }
//             },
//             country: function country(event) {
//                 var trg = $(event.currentTarget).closest('.acc-form_input');
//                 if ($(event.currentTarget).hasClass('opened')) {
//                     if (event.target.tagName === 'INPUT') {
//                         $(trg).find('.country-wrapper .current').removeClass('current');
//                         var text = $(event.target).closest('label').addClass('current').text();
//                         $(trg).find('.country-wrapper>span').text(text);
//                         $(trg).find('.country-wrapper').removeClass('opened');
//                     }
//                 } else {
//                     $(event.currentTarget).addClass('opened');
//                 }
//             },
//             resetForm: function resetForm(e) {
//                 var form = $('#' + e + '');
//                 form.find('.gray-input.back').each(function () {
//                     var data = $(this).attr('placeholder');
//                     $(this).val(data);
//                 });
//             },
//             closeUl: function closeUl() {
//                 this.personalDelivEdit = false;
//                 this.personalDataEdit = false;
//                 this.personalBill = false;
//                 if ($(window).width() < 1170) {
//                     $('.acc-ul').hide();
//                     $('.acc-ul_button').toggleClass('opened');
//                 }
//             }
//
//         },
//         mounted: function mounted() {
//             if (window.location.hash == '#userInfo') {
//                 this.step = 1;
//             } else if (window.location.hash == '#userAddress') {
//                 this.step = 2;
//             } else if (window.location.hash == '#userWish') {
//                 this.step = 3;
//             } else if (window.location.hash == '#userHistory') {
//                 this.step = 4;
//             }
//             this.menu = document.querySelector('.acc-ul .current').textContent;
//         },
//         delimiters: ['${', '}']
//     });
// }
// if (document.getElementById('cartPage')) {
//     var cartItem = new Vue({
//         el: '#cartPage',
//         data: {
//             step: 1,
//             totalCost: 0,
//             totalCostDiscount: 0,
//             discount: 5,
//             discountSuccess: false,
//             discountError: false,
//             simbol: document.getElementById('cartPage').dataset.simbol,
//             itemsNum: 1,
//             cartShipEdit: false,
//             cartPayEdit: false,
//             townShip: '',
//             townPay: '',
//             countryPay: '',
//             countryShip: '',
//             countryShipCost: 0,
//             useAdr: false,
//             productToggle: false,
//             num: {
//                 ru: ['штука', 'штуки', 'штук'],
//                 ro: [],
//                 en: ['piece', 'pieces', 'pieces']
//             }
//         },
//         methods: {
//             getTotal: function getTotal(e) {
//                 this.totalCost = 0;
//                 for (var i = 0; i < this.$children.length; i++) {
//                     this.totalCost = this.totalCost + this.$children[i].compPrice;
//                 }
//
//                 return this.totalCost - this.totalCostDiscount;
//             },
//             discTotal: function discTotal() {
//                 this.totalCostDiscount = 0;
//                 for (var i = 0; i < this.$children.length; i++) {
//
//                     if (this.$children[i].discountB === 'true') {
//                         this.totalCostDiscount = this.totalCostDiscount + this.$children[i].compPrice * this.discount / 100;
//                     } else {
//                         //this.totalCostDiscount = this.totalCostDiscount + this.$children[i].compPrice;
//                     }
//                 }
//             },
//             iNumber: function iNumber() {
//                 return this.itemsNum--;
//             },
//             cartData: function cartData() {
//                 if (this.cartShipEdit) {
//                     this.cartShipEdit = false;
//                 } else {
//                     this.cartShipEdit = true;
//                 }
//             },
//             resetForm: function resetForm(e) {
//                 var form = $('#' + e + '');
//                 form.find('.gray-input.back').each(function () {
//                     var data = $(this).attr('placeholder');
//                     $(this).val(data);
//                 });
//             },
//             duplicate: function duplicate() {
//                 if (this.step === 1) {
//                     var elem = document.querySelectorAll('.cart-product');;
//                     setTimeout(function () {
//                         var par = document.querySelector('.cart-dop');
//                         for (var i = 0; i < elem.length; i++) {
//                             var els = elem[i].cloneNode(true);
//                             els.classList.remove('fade-leave-active', 'fade-leave-to');
//                             par.insertBefore(els, par.firstChild);
//                         }
//                         par.classList.add('fade-in');
//                         $('.cart-dop>span').on('click', function () {
//                             $('.cart-dop').toggleClass('opened');
//                         });
//                     }, 100);
//                 }
//             },
//             something: function something() {
//                 alert('go-go-go');
//             },
//             nums: function nums() {
//                 return wordend(this.itemsNum, this.num.ru);
//             },
//             scroll: function scroll() {
//                 window.scrollTo(0, 0);
//             }
//         },
//         computed: {
//             finalCost: function finalCost() {
//                 return this.totalCost - this.totalCostDiscount + ' ' + this.simbol;
//             },
//             finalDiscount: function finalDiscount() {
//                 return this.totalCostDiscount + ' ' + this.simbol;
//             },
//             finalShip: function finalShip() {
//                 return this.countryShipCost + ' ' + this.simbol;
//             },
//             finalTotal: function finalTotal() {
//                 return this.countryShipCost + this.totalCost - this.totalCostDiscount + ' ' + this.simbol;
//             }
//         },
//         watch: {
//             discount: {
//                 deep: true,
//                 handler: function handler() {
//                     this.discTotal();
//                     this.getTotal();
//                 }
//             },
//             countryShip: {
//                 deep: true,
//                 handler: function handler() {
//                     var select = document.getElementById('countryShip');
//                     var checkdata = select.selectedIndex;
//                     var data = select[checkdata].dataset.cost;
//                     this.countryShipCost = parseInt(data);
//                 }
//             }
//         },
//         components: {
//             'cartitem': {
//                 props: ['link', 'price', 'total', 'img', 'simbol', 'discountB', 'remove', 'dNum'],
//                 data: function data() {
//                     return {
//                         isVisible: true,
//                         val: parseInt(this.total),
//                         priceN: parseInt(this.price),
//                         num: {
//                             ru: ['штука', 'штуки', 'штук'],
//                             ro: ['produs', 'produse', 'produse'],
//                             en: ['piece', 'pieces', 'pieces']
//                         },
//                         lang: 'en'
//                     };
//                 },
//                 methods: {
//                     numCom: function numCom() {
//                         return wordend(this.val, this.num.ru);
//                     },
//                     removeIt: function removeIt() {
//                         this.isVisible = false;
//                         this.priceN = 0;
//                         this.$emit('recalc', this.compPrice);
//                         this.$emit('destroy');
//                     },
//                     plus: function plus() {
//                         if (this.val < 99) {
//                             this.val++;
//                             this.$emit('recalc', this.compPrice);
//                         }
//                     },
//                     minus: function minus() {
//                         if (this.val > 1) {
//                             this.val--;
//                             this.$emit('recalc', this.compPrice);
//                         }
//                     }
//                 },
//                 computed: {
//                     totals: function totals() {
//                         return this.priceN * this.val + ' ' + this.simbol;
//                     },
//                     compPrice: function compPrice() {
//                         return this.priceN * this.val;
//                     },
//                     dPrice: function dPrice() {
//                         if (this.discountB == 'true') {
//                             return '<span>' + this.val + ' ' + wordend(this.val, this.num[this.lang]) + ' x</span> ' + (this.compPrice - this.compPrice * this.dNum / 100) + this.simbol;
//                         } else {
//                             return '<span>' + this.val + ' ' + wordend(this.val, this.num[this.lang]) + ' x</span> ' + this.compPrice + this.simbol;
//                         }
//                     }
//                 },
//                 template: '\n                    <transition name="fade">\n                    <div class="cart-product" v-if="isVisible">\n                        <div class="item">\n                            <div class="img" :style="{backgroundImage: \'url(\'+img+\')\'}"><a :href="link"></a></div>\n                            <div class="prop">\n                                <div class="prop_title"><a :href="link"><slot name="name"></slot></a></div>\n                                <slot name="prop1"></slot>\n                                <slot name="prop2"></slot>\n                                <div class="prop-price" v-html="dPrice"></div>\n                            </div>\n                        </div>\n                        <div class="num">\n                            <div class="inputs">\n                                <div class="minus" @click="minus">\n                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve" width="13" height="13">\n                                        <rect y="212.5" width="455" height="30"></rect>\n                                    </svg>\n                                </div>\n                                <input type="text" disabled="" :value="val" class="kolvo">\n                                <div class="plus" @click="plus">\n                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="13" height="13">\n                                        <polygon points="42,19 23,19 23,0 19,0 19,19 0,19 0,23 19,23 19,42 23,42 23,23 42,23 "></polygon>\n                                    </svg>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="price">\n                            <span class="price_cost" v-text="totals"></span>\n                            <div class="price_close" @click="removeIt">\n                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="11px" height="11px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">\n                                    <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3\n                                        214.2,178.5 \t\t"/>\n                                </svg>\n                                <slot name="remove"></slot>\n                            </div>\n                        </div>\n                    </div>\n                    </transition>\n                ',
//                 delimiters: ['${', '}']
//             }
//         },
//         delimiters: ['${(', ')}'],
//         mounted: function mounted() {
//             this.getTotal();
//             this.discTotal();
//             this.itemsNum = this.$children.length;
//         }
//     });
// }
// if (document.getElementById('collectionIn')) {
//     var collections = new Vue({
//         el: '#collectionIn',
//         data: {
//             list: collection,
//             itemOpen: false
//         },
//         methods: {},
//         components: {
//             'collectionItem': {
//                 props: {
//                     'img': {
//                         type: String,
//                         default: 'assets/img/noimage.png'
//                     },
//                     'title': {
//                         type: String,
//                         default: ''
//                     },
//                     'link': {
//                         type: String,
//                         default: '#orders'
//                     },
//                     'text': {
//                         type: String,
//                         default: ''
//                     },
//                     'price': {
//                         type: String,
//                         default: ''
//                     },
//                     'colname': {
//                         type: String,
//                         default: ''
//                     },
//                     'instock': {
//                         type: Boolean,
//                         default: false
//                     },
//                     'prodid': {
//                         type: String
//                     }
//                 },
//                 data: function data() {
//                     return {
//                         //image: this.img,
//                         show: this.instock
//                     };
//                 },
//                 methods: {
//                     linked: function linked() {
//                         if (this.show) {
//                             return '<span>' + translates._buy + '</span>';
//                         } else {
//                             return '<span>' + translates._order + '</span>';
//                         }
//                     },
//                     createDiv: function createDiv() {
//                         var collectionEl = this.$el;
//                         var vals = this.$parent.$children.length;
//                         var el = document.createElement('div');
//                         var prId = this.prId;
//                         el.classList.add('collection-large');
//                         el.innerHTML = '   <div class="collection-inner">\n                                <div class="img" onclick="popUp(this)"><img src="' + this.img + '" alt="" ></div>\n                                <div class="text">\n                                    <div class="text-close">\n                                        <svg onclick="colUp()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 513.535 513.535" style="enable-background:new 0 0 513.535 513.535;" xml:space="preserve" width="48" height="48">\n                                            <g>\n                                                <path class="cl2" d="M274.14,256.768c20.271-20.271,41.507-41.507,61.778-61.778c10.618-10.618-5.792-27.993-17.375-17.375    c-20.271,20.271-41.507,41.507-61.778,61.778c-20.271-20.271-41.507-41.507-61.778-61.778    c-10.618-10.618-27.993,5.792-17.375,17.375c20.271,20.271,41.507,41.507,61.778,61.778    c-20.271,20.271-41.507,41.507-61.778,61.778c-10.618,10.618,5.792,27.993,17.375,17.375    c20.271-20.271,41.507-41.507,61.778-61.778c20.271,20.271,41.507,41.507,61.778,61.778c10.618,10.618,27.993-5.792,17.375-17.375    C315.647,298.275,295.376,278.004,274.14,256.768z"/>\n                                            </g>\n                                        </svg>\n                                    </div>\n                                    <div class="text-collection">\n                                        ' + this.colname + '\n                                    </div>\n                                    <input hidden type="text" value="' + this.prodid + '" class="hidden-val"/>\n                                    <div class="text-title">\n                                        <a href="' + this.link + '">' + this.title + '</a>\n                                    </div>\n                                    <div class="text-in">\n                                        ' + this.text + '\n                                    </div>\n                                    <div class="text-price">\n                                        ' + this.price + '\n                                    </div>\n                                    <div class="social">\n                                        <a href="" class="social-link facebook">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="21px" height="21px" viewBox="0 0 470.513 470.513" style="enable-background:new 0 0 470.513 470.513;" xml:space="preserve">\n                                                <g>\n                                                    <path d="M271.521,154.17v-40.541c0-6.086,0.28-10.8,0.849-14.13c0.567-3.335,1.857-6.615,3.859-9.853\n                                                        c1.999-3.236,5.236-5.47,9.706-6.708c4.476-1.24,10.424-1.858,17.85-1.858h40.539V0h-64.809c-37.5,0-64.433,8.897-80.803,26.691\n                                                        c-16.368,17.798-24.551,44.014-24.551,78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086H271.521z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                        <a href="" class="social-link pinterest">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.392 486.392" style="enable-background:new 0 0 486.392 486.392;" xml:space="preserve" width="21" height="21">\n                                                <g>\n                                                    <path  d="M430.149,135.248C416.865,39.125,321.076-9.818,218.873,1.642\n                                                        C138.071,10.701,57.512,76.03,54.168,169.447c-2.037,57.029,14.136,99.801,68.399,111.84\n                                                        c23.499-41.586-7.569-50.676-12.433-80.802C90.222,77.367,252.16-6.718,336.975,79.313c58.732,59.583,20.033,242.77-74.57,223.71\n                                                        c-90.621-18.179,44.383-164.005-27.937-192.611c-58.793-23.286-90.013,71.135-62.137,118.072\n                                                        c-16.355,80.711-51.557,156.709-37.3,257.909c46.207-33.561,61.802-97.734,74.57-164.704\n                                                        c23.225,14.136,35.659,28.758,65.268,31.038C384.064,361.207,445.136,243.713,430.149,135.248z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                        <a href="" class="social-link instagramm">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" width="21" height="21">\n                                                <g>\n                                                    <path  d="M20,7c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h2c0.551,0,1,0.449,1,1v2c0,0.551-0.449,1-1,1H20z\n                                                        "/>\n                                                    <path  d="M13,9.188c-0.726,0-1.396,0.213-1.973,0.563c0.18-0.056,0.367-0.093,0.564-0.093\n                                                        c1.068,0,1.933,0.865,1.933,1.934c0,1.066-0.865,1.933-1.933,1.933s-1.933-0.866-1.933-1.933c0-0.199,0.039-0.386,0.094-0.565\n                                                        C9.4,11.604,9.188,12.274,9.188,13c0,2.107,1.705,3.813,3.813,3.813c2.105,0,3.813-1.705,3.813-3.813S15.105,9.188,13,9.188z"/>\n                                                    <g>\n                                                        <path  d="M13,7c3.313,0,6,2.686,6,6s-2.688,6-6,6c-3.313,0-6-2.686-6-6S9.687,7,13,7 M13,5\n                                                            c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S17.411,5,13,5L13,5z"/>\n                                                    </g>\n                                                    <path  d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25\n                                                        C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M24,9h-6.537C18.416,10.063,19,11.461,19,13\n                                                        c0,3.314-2.688,6-6,6c-3.313,0-6-2.686-6-6c0-1.539,0.584-2.938,1.537-4H2V4.875C2,3.29,3.29,2,4.875,2h16.25\n                                                        C22.711,2,24,3.29,24,4.875V9z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                        <a href="" class="social-link twitter">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                                         viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="21" height="21">\n                                                <g >\n                                                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73\n                                                        c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783\n                                                        c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598\n                                                        C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467\n                                                        c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977\n                                                        c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889\n                                                        c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597\n                                                        c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961\n                                                        c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895\n                                                        c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367\n                                                        c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998\n                                                        C307.394,57.037,305.009,56.486,302.973,57.388z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                    </div>\n                                    <div class="text-link"><a href="' + this.link + '">\n                                        ' + this.linked() + '\n                                    </a></div>\n                                </div>\n                            </div>\n                            ';
//                         if (document.querySelector('.collection-large')) {
//                             $('.collection-large').slideUp('400', function () {
//                                 document.querySelector('.collection-large').remove();
//                                 var m = document.querySelector('.collection-wrapper');
//                                 var collection = document.querySelectorAll('.collection-block');
//                                 $(collection).removeClass('opened');
//                                 collectionEl.classList.add('opened');
//                                 var s = Array.from(collection);
//                                 var sN = s.indexOf(collectionEl); // number of tapped el
//                                 var cnt = function cnt() {
//                                     var h = $('.collection-wrapper').width();
//                                     var el = $('.collection-block').width();
//                                     var n = Math.floor(h / el);
//                                     return n;
//                                 }; //items in row
//                                 var t = sN - sN % cnt();
//                                 m.insertBefore(el, m.childNodes[t]);
//                                 $(el).slideDown('400', function () {
//                                     var h = $(el).offset().top;
//                                     $('html, body').animate({ scrollTop: h - 6 }, '500');
//                                 });
//                             });
//                         } else {
//                             var m = document.querySelector('.collection-wrapper');
//                             var collection = document.querySelectorAll('.collection-block');
//                             $(collection).removeClass('opened');
//                             collectionEl.classList.add('opened');
//                             var s = Array.from(collection);
//                             var sN = s.indexOf(collectionEl); // number of tapped el
//                             var cnt = function cnt() {
//                                 var h = $('.collection-wrapper').width();
//                                 var el = $('.collection-block').width();
//                                 var n = Math.floor(h / el);
//                                 return n;
//                             }; //items in row
//                             var t = sN - sN % cnt();
//                             m.insertBefore(el, m.childNodes[t]);
//                             $(el).slideDown('400', function () {
//                                 var h = $(el).offset().top;
//                                 $('html, body').animate({ scrollTop: h - 6 }, '500');
//                             });
//                         }
//                         $('a[href="#orders"]').on('click', function (e) {
//                             e.preventDefault();
//                             modalUp('orders');
//                             var vals = $(e.target).closest('.collection-inner').find('.hidden-val').val();
//                             $('#orders input[name="prod_id"]').val(vals);
//                         });
//                     }
//                 },
//                 template: '<div  :class="{\'collection-block\': true , opened: this.itemOpen}" @click="createDiv"><span><img :src="img" alt=""></span></div>'
//             }
//         }
//     });
// }

$(document).ready(function () {
    $('.lang .current').on('click', function (e) {
        langChoose(e);
    });
    $('.menu-ul1_li.deeper').hover(function (e) {
        if ($(window).width() > 1170) {
            desktop_menu_open(e);
        }
    }, function (e) {
        if ($(window).width() > 1170) {
            desktop_menu_close(e);
        }
    });
    $('.menu-ul1_li.deeper>a').on('click', function (e) {
        if ($(window).width() < 1170) {
            menu_slide(e);
        }
    });
    $('.mobile-button').on('click', function (e) {
        mobile_menu_open(e);
    });
    $('.menu-close').on('click', function (e) {
        mobile_menu_close(e);
    });
    $('.footer-menu_title').on('click', function (e) {
        footerSlide(e);
    });

    $('.products-item .close').on('click', function (e) {
        productsRemove(e);
    });
    $('.products-item .favorit').on('click', function (e) {
        add_to_favorit(e);
    });
    $('[data-id]').on('click', function (e) {
        e.preventDefault();
        var modal_Id = $(this).attr('data-id');
        modalUp(modal_Id);
    });
    $('.modal-close').on('click', function () {
        closeModal();
    });
    $('.catalog-sort span').on('click', function () {
        $(this).closest('.catalog-sort').toggleClass('opened');
    });
    if ($('div').is('#slide-price')) {
        var minPriceIn = 0;
        var maxPriceIn = 1000;
        var rangePriceIn = [0, 1000];
        $("#slide-price").slider({
            min: minPriceIn,
            max: maxPriceIn,
            values: rangePriceIn,
            range: true,
            animate: 'fast',
            stop: function stop(event, ui) {
                $('#point1').text($("#slide-price").slider("values", 0) + ' €');
                $('#point2').text($("#slide-price").slider("values", 1) + ' €');
            },
            slide: function slide(event, ui) {
                $('#point1').text($("#slide-price").slider("values", 0) + ' €');
                $('#point2').text($("#slide-price").slider("values", 1) + ' €');
            }
        });

        var point1 = $('#slide-price span:first-of-type');
        var point2 = $('#slide-price span:last-of-type');
        $(point1).append('<div id="point1"></div>');
        $(point2).append('<div id="point2"></div>');
        $('#point1').text($("#slide-price").slider("values", 0) + ' €');
        $('#point2').text($("#slide-price").slider("values", 1) + ' €');
    }
    $('.filter-button').on('click', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened').next().slideUp();
        } else {
            $(this).addClass('opened').next().slideDown();
        }
    });
    $('.filter-button-close').on('click', function () {
        $('.catalog-left').slideUp();
        $('.filter-button').removeClass('opened');
    });
    $('.item-fav').on('click', function () {
        if ($(this).hasClass('added')) {
            $(this).removeClass('added');
        } else {
            $(this).addClass('added');
        }
    });
    $('.item-prop_block .title').on('click', function () {
        var item = $(this).closest('.item-prop_block');
        $(item).siblings('.opened').removeClass('opened').find('.text').slideUp();
        if (item.hasClass('opened')) {
            item.removeClass('opened').find('.text').slideUp();
        } else {
            item.addClass('opened').find('.text').slideDown();
        }
    });
    $('.acc-ul_button').on('click', function (e) {
        accButton(e);
    });

    $('.content_down,.content_up').on('click', function () {
        $(this).closest('.acc-buy_product').toggleClass('opened');
    });

    $('.header a').click(function (e) {
        decoClose(e);
    });
    $('.atelie-video video').on('click', function () {
        var el = document.getElementById('atelieVideo');
        el.pause();
        $('.atelie-video_control.pause').fadeIn();
    });
});

lightbox.option({
    'resizeDuration': 600,
    'wrapAround': true,
    //'disableScrolling': true,
    'showImageNumberLabel': false
});

$(document).ready(function () {
    $('.atelie-slider').slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="35" viewBox="0 0 14 27">\n                      <path d="M0,0.088a0.382,0.382,0,0,1,.565,0L12.835,13.181a0.447,0.447,0,0,1,0,.6,0.382,0.382,0,0,1-.565,0L0,0.692A0.448,0.448,0,0,1,0,.088ZM-0.027,26.85a0.385,0.385,0,0,0,.568,0L12.863,13.814a0.442,0.442,0,0,0,0-.6,0.385,0.385,0,0,0-.567,0L-0.027,26.249A0.442,0.442,0,0,0-.027,26.85Z"/>\n                    </svg>',
        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="35" viewBox="0 0 14 27">\n                      <path d="M0,0.088a0.382,0.382,0,0,1,.565,0L12.835,13.181a0.447,0.447,0,0,1,0,.6,0.382,0.382,0,0,1-.565,0L0,0.692A0.448,0.448,0,0,1,0,.088ZM-0.027,26.85a0.385,0.385,0,0,0,.568,0L12.863,13.814a0.442,0.442,0,0,0,0-.6,0.385,0.385,0,0,0-.567,0L-0.027,26.249A0.442,0.442,0,0,0-.027,26.85Z"/>\n                    </svg>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.atelie-slider').css('opacity', '1');
});

$(window).on('resize', function () {
    if ($('.menu-ul1_li.deeper').hasClass('opened')) {
        $('.menu-ul1_li.deeper').removeClass('opened').find('.menu-ul2_div').css('display', '');
    }
});

$(document).on('click', function (e) {
    if ($('.modal').hasClass('opened')) {
        if (!$(e.target).closest(".modal").length) {
            closeModal(e);
        }
    }
    if (!$(e.target).closest(".lang").length) {
        $('.lang .opened').removeClass('opened');
    }
    if ($('.catalog-sort').hasClass('opened')) {
        if (!$(e.target).closest(".catalog-sort").length) {
            $('.catalog-sort').removeClass('opened');
        }
    }
    if ($('.country-wrapper').hasClass('opened')) {
        if (!$(e.target).closest(".country-wrapper").length) {
            $('.country-wrapper').removeClass('opened');
        }
    }
});

$(document).ready(function () {
    if ($('div').is('#itemProduct')) {
        $(window).load(function () {
            for (var i = 0; Object.keys(productsArray).length > i; i++) {
                $(productsArray[i].img).preload();
            }
            for (var i = 0; Object.keys(productsArray).length > i; i++) {
                $(productsArray[i].mainImage_thumb).preload();
            }
            for (var i = 0; Object.keys(productsArray).length > i; i++) {
                $(productsArray[i].img_thumb).preload();
            }
            for (var i = 0; Object.keys(productsArray).length > i; i++) {
                $(productsArray[i].mainImage).preload();
            }
        });
    }
});;



function langChoose(e) {
    e.preventDefault();
    if ($(e.currentTarget).parent().hasClass('opened')) {
        $(e.currentTarget).parent().removeClass('opened');
    } else {
        $(e.currentTarget).parent().addClass('opened');
    }
}

function desktop_menu_open(e) {
    var l = $(e.currentTarget);
    l.find('.menu-ul2_div').addClass('calc');
    var h = l.find('.menu-ul2_div').height();
    $('.menu-back').css('height', h).addClass('opened');
    l.find('.menu-ul2_div').addClass('calc_visible');
}

function desktop_menu_close(e) {
    var l = $(e.currentTarget);
    l.find('.menu-ul2_div').removeClass('calc');
    l.find('.menu-ul2_div').removeClass('calc_visible');
    $('.menu-back').removeClass('opened');
}

function mobile_menu_open(e) {
    $('.menu').css('visibility', 'visible').addClass('opened');
    setTimeout(function () {
        $('body').addClass('scr-no');
    }, 100);
}

function mobile_menu_close(e) {
    $('.menu').removeClass('opened');
    setTimeout(function () {
        $('body').removeClass('scr-no');
        $('.menu').css('visibility', 'hidden');
    }, 500);
}

function menu_slide(e) {
    e.preventDefault();
    var l = $(e.currentTarget).parent();
    l.siblings('.opened').removeClass('opened').find('.menu-ul2_div').slideUp('', function () {
        $(this).css('display', '');
    });
    if (l.hasClass('opened')) {
        l.removeClass('opened').find('.menu-ul2_div').slideUp('', function () {
            $(this).css('display', '');
        });
    } else {
        l.addClass('opened').find('.menu-ul2_div').slideDown();
    }
}

function footerSlide(e) {
    var l = $(e.currentTarget);
    if (l.hasClass('opened')) {
        l.removeClass('opened');
        l.next().slideUp();
    } else {
        l.addClass('opened');
        l.next().slideDown();
    }
}

function productsRemove(e) {
    var el = $(e.currentTarget);
    el.closest('.products-item').fadeOut('', function () {
        $(this).remove();
    });
}

function add_to_favorit(e) {
    var el = $(e.currentTarget);
    if (!el.hasClass('in')) {
        el.addClass('in');
    }
}

function closeModal(e) {
    $('.wr').fadeOut('normal', function () {
        $(this).remove();
        $('body').removeClass('scr-no');
        $('body').css('paddingRight', '');
    });
    $('.modal').fadeOut().removeClass('opened');
}

function modalUp(id) {
    var elem = document.createElement('div');
    elem.classList.add('wr');
    document.body.appendChild(elem);
    document.body.classList.add('scr-no');
    if ($(document).height() > $(window).height()) {
        $('.scr-no').css('paddingRight', scrollWidth());
    }

    $('.wr').fadeIn('fast', function () {
        $('#' + id).fadeIn('fast').addClass('opened');
    });
}

$.fn.preload = function () {
    this.each(function () {
        $('<img/>')[0].src = this;
    });
};

function removeCheckedInput() {
    var elem = document.querySelectorAll('[name="itemSize"]');
    elem[0].checked = false;
    for (var i = 0; i < elem.length; i++) {
        elem[i].checked = false;
    }
}

function accButton(e) {
    $('.acc-ul').toggle();
    $('.acc-ul_button').toggleClass('opened');
}

function closeAccUl() {
    $('.acc-ul').hide();
    $('.acc-ul_button').toggleClass('opened');
}

function userGo(e) {
    window.location.reload(e.href);
}

function scrollWidth() {
    var div = $('<div>').css({
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100px",
        height: "100px",
        visibility: "hidden",
        overflow: "scroll"
    });

    $('body').eq(0).append(div);

    var width = div.get(0).offsetWidth - div.get(0).clientWidth;

    div.remove();

    return width;
}

function popUpClose(e) {
    var x = $('.collection-large').offset().top;

    $('.wr-img').fadeOut('300', function () {
        $(this).remove();
        $('body').attr('style', '');
    });
    $('.collection-popup').fadeOut('300', function () {
        $(this).remove();
    });
    //window.scrollTo(0,x);
}

function popUp(e) {
    if ($(window).width() > 450) {
        var elem = document.createElement('div');
        elem.classList.add('wr-img');
        document.body.appendChild(elem);
        elem.onclick = function () {
            popUpClose(e);
        };

        var el = document.createElement('div');
        el.classList.add('collection-popup');
        el.innerHTML = '\n                    <div class="close" onclick="popUpClose(this)">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 513.535 513.535" style="enable-background:new 0 0 513.535 513.535;" xml:space="preserve" width="48" height="48">\n                            <g>\n                                <path class="cl1" d="M256.765,0.003C114.868,0.003,0,114.871,0,256.768s114.868,256.765,256.765,256.765s256.765-114.868,256.765-256.765    C514.495,114.871,398.661,0.003,256.765,0.003z M256.765,489.4c-128.382,0-232.633-104.25-232.633-232.633    S128.382,24.135,256.765,24.135s232.633,104.25,232.633,232.633S385.147,489.4,256.765,489.4z"/>\n                                <path class="cl2" d="M274.14,256.768c20.271-20.271,41.507-41.507,61.778-61.778c10.618-10.618-5.792-27.993-17.375-17.375    c-20.271,20.271-41.507,41.507-61.778,61.778c-20.271-20.271-41.507-41.507-61.778-61.778    c-10.618-10.618-27.993,5.792-17.375,17.375c20.271,20.271,41.507,41.507,61.778,61.778    c-20.271,20.271-41.507,41.507-61.778,61.778c-10.618,10.618,5.792,27.993,17.375,17.375    c20.271-20.271,41.507-41.507,61.778-61.778c20.271,20.271,41.507,41.507,61.778,61.778c10.618,10.618,27.993-5.792,17.375-17.375    C315.647,298.275,295.376,278.004,274.14,256.768z"/>\n                            </g>\n                        </svg>\n                    </div>\n                    <img src="' + e.firstChild.src + '" />\n                    ';
        document.body.appendChild(el);
        if ($(document).height() > $(window).height()) {
            $('body').css({ 'overflow': 'hidden', 'paddingRight': scrollWidth() });
        } else {
            $('body').css('overflow', 'hidden');
        }
        $('.wr-img').fadeIn('fast', function () {
            $(el).fadeIn('fast').addClass('opened');
        });
    }
}

function decoClose(e) {
    e.preventDefault();
    if (e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.isDefaultPrevented()) {
        //return;
    }
    if (e.href != undefined) {
        var place = e.href;
    } else {
        var place = '';
    }
    $('.preloader').addClass('out');
    setTimeout(function () {
        document.location = place;
        console.log('test');
    }, 200);
}

function avideoPlay() {
    var el = document.getElementById('atelieVideo');
    if ($('.atelie-video_wrapper:visible')) {
        $('.atelie-video_wrapper').fadeOut();
    }
    $('.atelie-video_control').fadeOut('normal', function () {
        el.play();
    });
}

function addfoto(tag) {
    $(tag).prev().click();
}

function closeAtelieThank(el) {
    $(el).closest('section').fadeOut();
}
function colUp() {
    $('.collection-large').slideUp('400');
    $('.collection-block.opened').removeClass('opened');
}

// function wordend(num, words) {
//     return words[((num = Math.abs(num % 100)) > 10 && num < 15 || (num %= 10) > 4 || num === 0) + (num !== 1)];
// }
//alert(11+' '+wordend(11, ['стул','стула','стульев']));
// polifills
// if (!Array.from) {
//     Array.from = function () {
//         var toStr = Object.prototype.toString;
//         var isCallable = function isCallable(fn) {
//             return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
//         };
//         var toInteger = function toInteger(value) {
//             var number = Number(value);
//             if (isNaN(number)) {
//                 return 0;
//             }
//             if (number === 0 || !isFinite(number)) {
//                 return number;
//             }
//             return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
//         };
//         var maxSafeInteger = Math.pow(2, 53) - 1;
//         var toLength = function toLength(value) {
//             var len = toInteger(value);
//             return Math.min(Math.max(len, 0), maxSafeInteger);
//         };
//
//         // Свойство length метода from равно 1.
//         return function from(arrayLike /*, mapFn, thisArg */) {
//             // 1. Положим C равным значению this.
//             var C = this;
//
//             // 2. Положим items равным ToObject(arrayLike).
//             var items = Object(arrayLike);
//
//             // 3. ReturnIfAbrupt(items).
//             if (arrayLike == null) {
//                 throw new TypeError('Array.from requires an array-like object - not null or undefined');
//             }
//
//             // 4. Если mapfn равен undefined, положим mapping равным false.
//             var mapFn = arguments[1];
//             if (typeof mapFn !== 'undefined') {
//                 mapFn = arguments.length > 1 ? arguments[1] : void undefined;
//                 // 5. иначе
//                 // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
//                 if (!isCallable(mapFn)) {
//                     throw new TypeError('Array.from: when provided, the second argument must be a function');
//                 }
//
//                 // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
//                 if (arguments.length > 2) {
//                     T = arguments[2];
//                 }
//             }
//
//             // 10. Положим lenValue равным Get(items, "length").
//             // 11. Положим len равным ToLength(lenValue).
//             var len = toLength(items.length);
//
//             // 13. Если IsConstructor(C) равен true, то
//             // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
//             //     объекта C со списком аргументов, содержащим единственный элемент len.
//             // 14. a. Иначе, положим A равным ArrayCreate(len).
//             var A = isCallable(C) ? Object(new C(len)) : new Array(len);
//
//             // 16. Положим k равным 0.
//             var k = 0;
//             // 17. Пока k < len, будем повторять... (шаги с a по h)
//             var kValue;
//             while (k < len) {
//                 kValue = items[k];
//                 if (mapFn) {
//                     A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
//                 } else {
//                     A[k] = kValue;
//                 }
//                 k += 1;
//             }
//             // 18. Положим putStatus равным Put(A, "length", len, true).
//             A.length = len;
//             // 20. Вернём A.
//             return A;
//         };
//     }();
// };
$(document).ready(function () {
    if ($('div').is('#main-slider')) {
        sInit();
    }
});
function figureImg() {
    var elem = $('figure.zoo-item');
    elem.each(function () {
        var img = $(this).attr('data-zoo-image');
        var el = document.createElement('img');
        el.src = img;
        $(el).appendTo($(this));
    });
}
function sInit() {
    setTimeout(function () {
        if ($(window).width() > 1170) {
            $('.zoo-item').ZooMove();
        } else {
            figureImg();
        }
        $('#main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '#main-slider-right',
            swipe: true,
            adaptiveHeight: true,
            prevArrow: '\n                <div class="prev slick-arrow">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                     viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">\n                    <g>\n                        <polygon  points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561 \t"/>\n                    </g>\n                </svg>\n                </div>\n            ',
            nextArrow: '\n                <div class="next slick-arrow">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                     viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">\n                    <g>\n                        <polygon  points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561 \t"/>\n                    </g>\n                </svg>\n                </div>\n            ',
            dots: true
        });
        $('#main-slider').css('opacity', '1');
        $('#main-slider-right').slick({
            asNavFor: '#main-slider',
            arrows: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            //customPadding:true,
            adaptiveHeight: true,
            //variableWidth:true,
            focusOnSelect: true,
            prevArrow: '<div class="prev"><svg width="75px" height="35px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">' + '<g>' + '<path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>' + '</g>' + '</svg></div>',
            nextArrow: '<div class="next"><svg width="75px" height="35px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">' + '<g>' + '<path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>' + '</g>' + '</svg></div>'

        });
        $('#main-slider-right').css('opacity', '1');
    });
}
;
$(document).ready(function () {
    $('#sbs_form').validate({ rules: {
        sbs_email: {
            required: true,
            email: true
        }
    } });
    $('#modal-newsletter').validate({
        rules: {
            modal_newsletter_email: {
                required: true,
                email: true
            },
            modal_newsletter_country: {
                required: true
            },
            modal_newsletter_zipcode: {
                required: true,
                number: true
            }
        }
    });
    $('#buyOneClick').validate({
        rules: {
            buyOneClick_email: {
                required: true,
                email: true
            },
            buyOneClick_name: {
                required: true
            }
        }
    });
    if ($('section').is('#modal_enter_form')) {
        // $('#modal_enter_form form').validate({rules:{
        //     modal_enter_name:{
        //         required: true,
        //         minlength: 3,
        //     },
        //     modal_enter_pas:{
        //         required: true,
        //         minlength: 3,
        //     },
        // }});
        // $('#forgot_pas').validate({rules:{
        //     modal_forgot_email:{
        //         email:true,
        //         required:true,
        //     },
        // }});
        // $('#modal-callback').validate({rules:{
        //     modal_call_name:{
        //         required:true,
        //     },
        //     modal_call_phone:{
        //         required:true,
        //         customPhone:true,
        //     },
        // }});
        // $('#modal-buy').validate({rules:{
        //     modal_click_name:{
        //         required:true,
        //     },
        //     modal_click_phone:{
        //         required:true,
        //         customPhone:true,
        //     },
        // }});
        // $('#modal_reg_form form').validate({rules:{
        //     modal_reg_name:{
        //         required: true,
        //         minlength: 3,
        //     },
        //     modal_reg_pas:{
        //         required: true,
        //         minlength: 3,
        //     },
        //     modal_reg_pas_repeat:{
        //         equalTo:'#modal_reg_pas',
        //     },
        //     modal_reg_email:{
        //         email:true,
        //         required:true,
        //     },
        //     modal_reg_phone:{
        //         required:true,
        //         customPhone:true,
        //         minlength:6,
        //     }
        // }});
        // $('#userDataForm').validate({rules:{
        //     dataUserName:{
        //         required: true,
        //         minlength: 3,
        //     },
        //     dataUserPhone:{
        //         required: true,
        //         customPhone:true,
        //         minlength:6
        //     },
        // }});
        // $('#userPasForm').validate({rules:{
        //     dataUserOldPas:{
        //         required: true,
        //     },
        //     dataUserNewPas:{
        //         required: true,
        //     },
        //     dataUserPasRepeat:{
        //         required: true,
        //         equalTo:'#dataUserNewPas',
        //     },
        // }});
    }
    if ($('form').is('#accPass')) {
        $('#accPass').validate({
            ignore: [],
            rules: {
                accPass_old: {
                    required: true
                },
                accPass_new: {
                    required: true
                },
                accPass_confirm: {
                    required: true,
                    equalTo: '#accPass_confirm'
                }
            },
            submitHandler: function submitHandler(form) {
                form.submit();
            }

        });
    }
});
$.validator.methods.email = function (value, element) {
    return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
};
$.validator.methods.customPhone = function (value, element) {
    return this.optional(element) || /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(value);
};

function logValid() {
    $('#enterLog').validate({
        rules: {
            enterLog_pas: {
                required: true
            },
            enterLog_name: {
                required: true
            }
        }
    });
}
function resetValid() {
    $('#enterReset').validate({
        rules: {
            enterReset_email: {
                required: true,
                email: true
            }
        }
    });
}
function regValid() {
    $('#regLog').validate({
        ignore: [],
        errorPlacement: function errorPlacement(error, element) {
            if (element.attr("name") == "logCountry") {
                error.append(".country-wrapper");
                $('.country-wrapper').addClass('error');
            }
        },
        rules: {
            reg_name: {
                required: true
            },
            reg_lastname: {
                required: true
            },
            reg_email: {
                required: true,
                email: true
            },
            logCountry: {
                required: true
            },
            reg_pas: {
                required: true,
                minlength: 4
            },
            reg_pasconfirm: {
                required: true,
                equalTo: '#regPassword'
            }
        },
        success: function success(label) {
            if (label.attr('id') === 'logCountry-error') {
                console.log('country');
                $('.country-wrapper').removeClass('error');
            }
        },
        submitHandler: function submitHandler() {
            enterAccount.step = 5;
        }
    });
}
function accPersData() {
    $('#accPersonal').validate({
        ignore: [],
        rules: {
            accPersonal_name: {
                required: true
            },
            accPersonal_lastname: {
                required: true
            },
            accPersonalChange: {
                required: true
            },
            accPersonal_phone: {
                required: true,
                customPhone: true
            }
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }

    });
}
function accDeliv() {
    $('#accDelivery').validate({
        ignore: [],
        rules: {
            accDeliv_name: {
                required: true
            },
            accDeliv_lastname: {
                required: true
            },
            accDeliv_adres: {
                required: true
            },
            accDeliv_phone: {
                required: true,
                customPhone: true
            },
            accDeliv_postcode: {
                required: true
            },
            countryD: {
                required: true
            }
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }

    });
}
function accBill() {
    $('#accBill').validate({
        ignore: [],
        rules: {
            accBill_name: {
                required: true
            },
            accBill_lastname: {
                required: true
            },
            accBill_adres: {
                required: true
            },
            accBill_phone: {
                required: true,
                customPhone: true
            },
            accBill_postcode: {
                required: true
            },
            countryB: {
                required: true
            }
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }

    });
}

function validSubscribe(e) {
    $('.sendmail form').validate({
        rules: {
            subscribe_email: {
                required: true,
                email: true
            }
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }
    });
}
function validContacts(e) {
    $('.contacts-form form').validate({
        rules: {
            cf_email: {
                required: true,
                email: true
            },
            cf_name: {
                required: true
            },
            cf_textarea: {
                required: true
            }
        },
        messages: {
            cf_name: cf_Name_Error_Text,
            cf_email: {
                required: cf_Email_Error_Text1,
                email: cf_Email_Error_Text2
            },
            cf_textarea: cf_Textarea_Error_Text
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }
    });
}
function cartValid(e) {
    $('#cartPage form[name="cartForm"]').validate({
        debug: true,
        rules: {
            cartSamName: {
                required: true,
                minlength: 2
            },
            cartSamMail: {
                required: true,
                email: true
            },
            cartSamPhone: {
                required: true,
                customPhone: true,
                minlength: 6
            },
            cartCurPhone: {
                required: true
            },
            cartCurMail: {
                required: true,
                email: true
            },
            cartCurCity: {
                required: true
            },
            cartCurStreet: {
                required: true
            },
            cartPayCompany: {
                required: true
            },
            cartPayAdres: {
                required: true
            },
            cartPayBankCode: {
                required: true
            },
            cartPayFisc: {
                required: true
            },
            cartPayIban: {
                required: true
            }
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }
    });
}
function contactsValid() {
    $('#contactsForm').validate({
        debug: true,
        rules: {
            contactsName: {
                required: true,
                minlength: 2
            },
            contactsMail: {
                required: true,
                email: true
            },
            contactsText: {
                required: true,
                minlength: 6
            }

        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }
    });
}
;



