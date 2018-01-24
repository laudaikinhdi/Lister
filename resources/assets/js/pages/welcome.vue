<template>
    <div>
        <div class="title-holder text-center">
            <div class="title">
                {{ title }}
            </div>
            <div class="sub-title">
                {{ $t('welcome_sub_title') }}
            </div>

            <router-link v-if="!user" :to="{ name: 'register' }" class="btn btn-primary btn-lg mt-5">
              {{ $t('register') }}
            </router-link>

            <router-link v-if="user" :to="{ name: 'lists' }" class="btn btn-primary btn-lg mt-5">
              {{ $t('lists') }}
            </router-link>
        </div>
        <div class="background" id="particles-js"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Particles from 'particles.js'
export default {
    layout: 'app',

    metaInfo () {
        return { title: this.$t('home') }
    },

    computed: mapGetters({
        user: 'auth/user'
    }),


    mounted() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loadParticles();
            }, 500)
        })
    },

    methods: {
        loadParticles() {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    },

    data: () => ({
        title: window.config.appName
    })
}
</script>

<style scoped>
.background {
    background: linear-gradient(to right, #6819e8 0%,#7437d0 35%,#615fde 68%,#6980f2 100%);
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title-holder {
    left:0 ;
    right: 0;
    color: white;
    position: absolute;
    bottom: 35vh;
    
}
.title {
    height: 106px;
    font-size: 85px;
    font-weight: 700;
}
.sub-title {
    font-size: 21px;
    font-weight: 200;
}
</style>
