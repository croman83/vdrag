<template>
    <div class="contacts" id="contactsBlock">
        <h1 class="h1-title">Contacts</h1>
        <div class="contacts-wrapper">
            <div class="contacts-block">
                <div class="title"><b>Republic of Moldova, Chisinau</b></div>
                <div class="text">Decebal bd. 23/1. CC Jumbo, boutiques 554 and 518</div>
                <div class="tel">tel: +373 7960 8029</div>
                <div class="mail"><a href="mailto:cudrag2@mail.ru">cudrag2@mail.ru</a></div>
            </div>
            <div class="contacts-block">
                <div class="title"><b>Germany</b></div>
                <div class="text">Axel-Springer-Straße 65, 10888 Berlin</div>
                <div class="tel">tel:  7960 8029</div>
                <div class="mail"><a href="mailto:cudrag2@mail.ru">cudrag2@mail.ru</a></div>
            </div>
        </div>
        <div class="contacts-map">
            <button class="btn-link">Find the way to us</button>
        </div>
        <div class="contacts-form">
            <section v-show="show">
                <form action="">
                    <div class="title">Write us</div>
                    <div class="text">Now that you are familiar with our creativity and learn about what we do, we can write a letter to be our chosen customer.</div>
                    <div class="contacts-form-wrapper">
                        <div class="input-wrapper">
                            <label for="a" class="req">Your name</label>
                            <input type="text"  class="gray-input" name="" placeholder="Your name">
                            <div class="input-error">Your name</div>
                        </div>
                        <div class="input-wrapper">
                            <label for="a" class="req">Last name</label>
                            <input type="text"  class="gray-input" name=""  placeholder="Your lastname">
                            <div class="input-error">Your lastname</div>
                        </div>
                        <div class="input-wrapper">
                            <div class="acc-form_divselect">
                                <label for="a">Country</label>
                                <div class="acc-form_divwrapper">
                                    <select name="" id="" >
                                        <option value="" disabled selected>Select country</option>
                                        <option value="p" >Moldova</option>
                                        <option value="n" >Russia</option>
                                    </select>
                                </div>
                            </div>
                            <div class="input-error">Select country</div>
                        </div>
                        <div class="input-wrapper">
                            <label for="a" class="req">E-mail</label>
                            <input type="text"  class="gray-input" name="" placeholder="Your e-mail">
                            <div class="input-error">Your email</div>
                        </div>
                        <div class="input-wrapper">
                            <label for="a">Subject</label>
                            <input type="text"  class="gray-input" name="" placeholder="Your subject">
                            <div class="input-error">Your subject</div>
                        </div>
                        <div class="input-wrapper">
                            <label for="a">Phone number</label>
                            <input type="text"  class="gray-input" name=""  placeholder="Your phone">
                            <div class="input-error">Your phone</div>
                        </div>
                        <div class="input-wrapper textarea">
                            <label for="a">Your message</label>
                            <textarea name="" class="gray-input" placeholder="Your message"></textarea>
                            <div class="input-error">Message</div>
                        </div>
                        <div class="input-wrapper button">
                            <button class="btn-link">Send request</button>
                        </div>
                    </div>
                </form>
            </section>
            <section class="section-in" v-if="step === 2" v-cloak="">
                <div class="contacts-thank">
                    <div class="title">Thanks for your message!</div>
                    <div class="text">In soon we will contact you.</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component ready.')
        },
        data: function () {
            return{
                step: 1
            }
        },
         computed: {
             show: function show() {
                 if (window.innerWidth > 1170 || this.step === 1) {
                     return true;
                 } else {
                     return false;
                 }
             }
         }
    }
</script>
