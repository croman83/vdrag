<template>
<main>
    <div class="breadcrumbs">
        <a href="a">Home</a>
        <div class="delim"></div>
        <a href="a">Online-shop</a>
        <div class="delim"></div>
        <span>Flower foliage maxi dress</span>
    </div>
    <section class="collection" id="collectionIn">
        <h1 class="h1-title">Fall-Winter 2016 - 2017</h1>
        <div class="collection-up editor">
            <p>White indigo, as an elegant collection in indigo shade, which transparent materials reveal feminine notes, uses lace and tulle as raw materials in a harmonious combination.</p>
            <p>Each piece of clothing, be it a long dress with a refined decollete, a short one that highlights the beauty of feet or a dress that leaves the ankle uncovered, is distinguished by its exclusive concept and seemingly simple cut, but done meticulously. The charm of these dresses is emphasized by the fine snow-white color.</p>
        </div>
        <div class="collection-wrapper">
            <collection-item v-for="(product, index) in list" :key="index"
                             :img="product.img"
                             :title="product.title"
                             :link="product.link"
                             :text="product.text"
                             :price="product.price"
                             :colname="product.colname"
                             :instock="product.instock"
                             :prodid="product.idp"
            ></collection-item>
        </div>
    </section>
</main>
</template>

<script>
    export default {
        mounted() {
            console.log('Component ready.');
            this.makeList();
        },
        data: function () {
            return{
                list : [],
                itemOpen: false
            }
        },
        methods: {
            makeList : function(){

                this.$http.get('/api/gallery').then((response) => {
                    this.$set(this,'list', response.data );
                    console.log(response.data);

                });
            },
        },
        components: {
            'collectionItem': {
                props: {
                    'img': {
                        type: String,
                        default: '/img/noimage.png'
                    },
                    'title': {
                        type: String,
                        default: ''
                    },
                    'link': {
                        type: String,
                        default: '#orders'
                    },
                    'text': {
                        type: String,
                        default: ''
                    },
                    'price': {
                        type: String,
                        default: ''
                    },
                    'colname': {
                        type: String,
                        default: ''
                    },
                    'instock': {
                        type: Boolean,
                        default: false
                    },
                    'prodid': {
                        type: String
                    }
                },
                data: function data() {
                    return {
                        show: this.instock,
                        translates : {
                            '_order': 'Order now',
                            '_buy': 'View in details'
                        },
                    };
                },
                methods: {
                    linked: function linked() {
                        if (this.show) {
                            return '<span>' + this.translates._buy + '</span>';
                        } else {
                            return '<span>' + this.translates._order + '</span>';
                        }
                    },
                    createDiv: function createDiv() {
                        var collectionEl = this.$el;
                        var vals = this.$parent.$children.length;
                        var el = document.createElement('div');
                        var prId = this.prId;
                        el.classList.add('collection-large');
                        el.innerHTML = '   <div class="collection-inner">\n                                <div class="img" onclick="popUp(this)"><img src="' + this.img + '" alt="" ></div>\n                                <div class="text">\n                                    <div class="text-close">\n                                        <svg onclick="colUp()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 513.535 513.535" style="enable-background:new 0 0 513.535 513.535;" xml:space="preserve" width="48" height="48">\n                                            <g>\n                                                <path class="cl2" d="M274.14,256.768c20.271-20.271,41.507-41.507,61.778-61.778c10.618-10.618-5.792-27.993-17.375-17.375    c-20.271,20.271-41.507,41.507-61.778,61.778c-20.271-20.271-41.507-41.507-61.778-61.778    c-10.618-10.618-27.993,5.792-17.375,17.375c20.271,20.271,41.507,41.507,61.778,61.778    c-20.271,20.271-41.507,41.507-61.778,61.778c-10.618,10.618,5.792,27.993,17.375,17.375    c20.271-20.271,41.507-41.507,61.778-61.778c20.271,20.271,41.507,41.507,61.778,61.778c10.618,10.618,27.993-5.792,17.375-17.375    C315.647,298.275,295.376,278.004,274.14,256.768z"/>\n                                            </g>\n                                        </svg>\n                                    </div>\n                                    <div class="text-collection">\n                                        ' + this.colname + '\n                                    </div>\n                                    <input hidden type="text" value="' + this.prodid + '" class="hidden-val"/>\n                                    <div class="text-title">\n                                        <a href="' + this.link + '">' + this.title + '</a>\n                                    </div>\n                                    <div class="text-in">\n                                        ' + this.text + '\n                                    </div>\n                                    <div class="text-price">\n                                        ' + this.price + '\n                                    </div>\n                                    <div class="social">\n                                        <a href="" class="social-link facebook">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="21px" height="21px" viewBox="0 0 470.513 470.513" style="enable-background:new 0 0 470.513 470.513;" xml:space="preserve">\n                                                <g>\n                                                    <path d="M271.521,154.17v-40.541c0-6.086,0.28-10.8,0.849-14.13c0.567-3.335,1.857-6.615,3.859-9.853\n                                                        c1.999-3.236,5.236-5.47,9.706-6.708c4.476-1.24,10.424-1.858,17.85-1.858h40.539V0h-64.809c-37.5,0-64.433,8.897-80.803,26.691\n                                                        c-16.368,17.798-24.551,44.014-24.551,78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086H271.521z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                        <a href="" class="social-link pinterest">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.392 486.392" style="enable-background:new 0 0 486.392 486.392;" xml:space="preserve" width="21" height="21">\n                                                <g>\n                                                    <path  d="M430.149,135.248C416.865,39.125,321.076-9.818,218.873,1.642\n                                                        C138.071,10.701,57.512,76.03,54.168,169.447c-2.037,57.029,14.136,99.801,68.399,111.84\n                                                        c23.499-41.586-7.569-50.676-12.433-80.802C90.222,77.367,252.16-6.718,336.975,79.313c58.732,59.583,20.033,242.77-74.57,223.71\n                                                        c-90.621-18.179,44.383-164.005-27.937-192.611c-58.793-23.286-90.013,71.135-62.137,118.072\n                                                        c-16.355,80.711-51.557,156.709-37.3,257.909c46.207-33.561,61.802-97.734,74.57-164.704\n                                                        c23.225,14.136,35.659,28.758,65.268,31.038C384.064,361.207,445.136,243.713,430.149,135.248z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                        <a href="" class="social-link instagramm">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" width="21" height="21">\n                                                <g>\n                                                    <path  d="M20,7c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h2c0.551,0,1,0.449,1,1v2c0,0.551-0.449,1-1,1H20z\n                                                        "/>\n                                                    <path  d="M13,9.188c-0.726,0-1.396,0.213-1.973,0.563c0.18-0.056,0.367-0.093,0.564-0.093\n                                                        c1.068,0,1.933,0.865,1.933,1.934c0,1.066-0.865,1.933-1.933,1.933s-1.933-0.866-1.933-1.933c0-0.199,0.039-0.386,0.094-0.565\n                                                        C9.4,11.604,9.188,12.274,9.188,13c0,2.107,1.705,3.813,3.813,3.813c2.105,0,3.813-1.705,3.813-3.813S15.105,9.188,13,9.188z"/>\n                                                    <g>\n                                                        <path  d="M13,7c3.313,0,6,2.686,6,6s-2.688,6-6,6c-3.313,0-6-2.686-6-6S9.687,7,13,7 M13,5\n                                                            c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S17.411,5,13,5L13,5z"/>\n                                                    </g>\n                                                    <path  d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25\n                                                        C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M24,9h-6.537C18.416,10.063,19,11.461,19,13\n                                                        c0,3.314-2.688,6-6,6c-3.313,0-6-2.686-6-6c0-1.539,0.584-2.938,1.537-4H2V4.875C2,3.29,3.29,2,4.875,2h16.25\n                                                        C22.711,2,24,3.29,24,4.875V9z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                        <a href="" class="social-link twitter">\n                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                                         viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="21" height="21">\n                                                <g >\n                                                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73\n                                                        c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783\n                                                        c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598\n                                                        C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467\n                                                        c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977\n                                                        c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889\n                                                        c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597\n                                                        c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961\n                                                        c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895\n                                                        c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367\n                                                        c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998\n                                                        C307.394,57.037,305.009,56.486,302.973,57.388z"/>\n                                                </g>\n                                            </svg>\n                                        </a>\n                                    </div>\n                                    <div class="text-link"><a href="' + this.link + '">\n                                        ' + this.linked() + '\n                                    </a></div>\n                                </div>\n                            </div>\n                            ';
                        if (document.querySelector('.collection-large')) {
                            $('.collection-large').slideUp('400', function () {
                                document.querySelector('.collection-large').remove();
                                var m = document.querySelector('.collection-wrapper');
                                var collection = document.querySelectorAll('.collection-block');
                                $(collection).removeClass('opened');
                                collectionEl.classList.add('opened');
                                var s = Array.from(collection);
                                var sN = s.indexOf(collectionEl); // number of tapped el
                                var cnt = function cnt() {
                                    var h = $('.collection-wrapper').width();
                                    var el = $('.collection-block').width();
                                    var n = Math.floor(h / el);
                                    return n;
                                }; //items in row
                                var t = sN - sN % cnt();
                                m.insertBefore(el, m.childNodes[t]);
                                $(el).slideDown('400', function () {
                                    var h = $(el).offset().top;
                                    $('html, body').animate({ scrollTop: h - 6 }, '500');
                                });
                            });
                        } else {
                            var m = document.querySelector('.collection-wrapper');
                            var collection = document.querySelectorAll('.collection-block');
                            $(collection).removeClass('opened');
                            collectionEl.classList.add('opened');
                            var s = Array.from(collection);
                            var sN = s.indexOf(collectionEl); // number of tapped el
                            var cnt = function cnt() {
                                var h = $('.collection-wrapper').width();
                                var el = $('.collection-block').width();
                                var n = Math.floor(h / el);
                                return n;
                            }; //items in row
                            var t = sN - sN % cnt();
                            m.insertBefore(el, m.childNodes[t]);
                            $(el).slideDown('400', function () {
                                var h = $(el).offset().top;
                                $('html, body').animate({ scrollTop: h - 6 }, '500');
                            });
                        }
                        $('a[href="#orders"]').on('click', function (e) {
                            e.preventDefault();
                            modalUp('orders');
                            var vals = $(e.target).closest('.collection-inner').find('.hidden-val').val();
                            $('#orders input[name="prod_id"]').val(vals);
                        });
                    }
                },
                template: '<div  :class="{\'collection-block\': true , opened: this.itemOpen}" @click="createDiv"><span><img :src="img" alt=""></span></div>'
            }
        }
    }

</script>
