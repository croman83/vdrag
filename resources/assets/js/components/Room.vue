<template>
    <main>
        <div class="slider_on_main">
            <div style="background-image:url(/img/base-3.jpg)">
                <div class="text">
                    <div class="title">Lorem ipsum dolor sit amet!</div>
                    <div class="text-bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem consectetur deserunt, dolor est illum ipsa iusto neque nisi nobis provident quaerat, quas quia reiciendis, ullam. Aliquam eveniet placeat praesentium?</div>
                    <a href="" class="more">read more</a>
                </div>
            </div>
            <div style="background-image:url(/img/base-2.jpg)">
            </div>
            <div style="background-image:url(/img/base-1.jpg)">
            </div>
            <div style="background-image:url(/img/base-4.jpg)">
            </div>
        </div>
        <section class="main-top">
            <h2 class="main-top_title">Каталог</h2>
            <div class="products-wrapper">
                <div class="products-item">
                    <div class="image-wrapper">
                        <div class="image" style="background-image: url(/img/papetarie2.jpg)">
                            <a href="" class="image-link"></a></div>
                    </div>
                    <div class="title"><a href="" class="title-link">Papetarie</a></div>
                </div>
                <div class="products-item">
                    <div class="image-wrapper">
                        <div class="image" style="background-image: url(/img/floristica4.jpg)">
                            <a href="" class="image-link"></a></div>
                    </div>
                    <div class="title"><a href="" class="title-link">Floristica</a></div>
                </div>
                <div class="products-item">
                    <div class="image-wrapper">
                        <div class="image" style="background-image: url(/img/accesorii2.jpg)">
                            <a href="" class="image-link"></a></div>
                    </div>
                    <div class="title"><a href="" class="title-link">Accesorii</a></div>
                </div>
                <div class="products-item">
                    <div class="image-wrapper">
                        <div class="image" style="background-image: url(/img/decor3.jpg)">
                            <a href="" class="image-link"></a></div>
                    </div>
                    <div class="title"><a href="" class="title-link">Decor</a></div>
                </div>
            </div>
        </section>
        <section class="main-blog">
            <h2 class="main-blog_title">blog</h2>
            <div class="main-blog_wrapper">
                <div class="main-blog_item">
                    <div class="image" style="background-image: url(/img/floristica.jpg)"><a href="a"></a></div>
                    <div class="text">
                        <div class="date">FEBRUARY 22, 2017</div>
                        <div class="title"><a href="">Lorem ipsum dolor sit amet</a></div>
                        <div class="text-in">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa ipsam laborum nesciunt, numquam officiis perspiciatis vitae. Adipisci aspernatur at dolor ea explicabo in nihil repudiandae veniam? Commodi quisquam, sapiente.</div>
                    </div>
                </div>
                <div class="main-blog_wrapper2">
                    <div class="main-blog_items">
                        <div class="image" style="background-image: url(/img/bumaga2.jpg)"><a href="a"></a></div>
                        <div class="text">
                            <div class="date">FEBRUARY 22, 2017</div>
                            <div class="title"><a href="">Lorem ipsum dolor sit amet</a></div>
                            <div class="text-in">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa ipsam laborum nesciunt, numquam officiis perspiciatis vitae. Adipisci aspernatur at dolor ea explicabo in nihil repudiandae veniam? Commodi quisquam, sapiente.</div>
                        </div>
                    </div>
                    <div class="main-blog_items">
                        <div class="image" style="background-image: url(/img/bumaga.jpg)"><a href="a"></a></div>
                        <div class="text">
                            <div class="date">FEBRUARY 22, 2017</div>
                            <div class="title"><a href="">Lorem ipsum dolor sit amet</a></div>
                            <div class="text-in">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa ipsam laborum nesciunt, numquam officiis perspiciatis vitae. Adipisci aspernatur at dolor ea explicabo in nihil repudiandae veniam? Commodi quisquam, sapiente.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

    export default {

     
        mounted() {

            console.log('Room Component ready.')
            this.fetchRoomList();

            this.indexSlide();
           
        },

        data : function() {
            return {
                rooms : []
            }

        },

        methods : {

            fetchRoomList : function(){

                    this.$http.get('/api/rooms').then((response) => {
                    this.$set(this,'rooms', response.data )

                });
            },
            indexSlide: function () {
                if ($('div').hasClass('slider_on_main')) {
                    $('.slider_on_main').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        fade: true,
                        swipe: true,
                        dots: true,
                        nextArrow: '<div class="arrow arrow-next">\n                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                             viewBox="0 0 47.255 47.255" style="enable-background:new 0 0 47.255 47.255;" xml:space="preserve" width="54px" height="99px">\n                            <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92\n                                c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962\n                                C12.825,47.157,12.57,47.255,12.314,47.255z"/>\n                        </svg>\n                    </div>',
                        prevArrow: '<div class="arrow arrow-prev">\n                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                                 viewBox="0 0 47.255 47.255" style="enable-background:new 0 0 47.255 47.255;" xml:space="preserve" width="54px" height="99px">\n                                <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92\n                                    c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962\n                                    C12.825,47.157,12.57,47.255,12.314,47.255z"/>\n                            </svg>\n                        </div>'
                    });
                    $('.slider_on_main').css('opacity', '1');
                }
            }
        }

       
        }
    
</script>
