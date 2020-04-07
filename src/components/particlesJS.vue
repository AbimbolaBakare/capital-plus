<template>
    <div>
      
    <!-- particles -->
   <div id="particles-js"></div>
  <!-- particles -->

 
    </div>
</template>


<script>
export default {
  name: 'ParticlesJS',

  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 80,
            'density': {
              'enable': true,
              'value_area': 1500
            }
          },
          'color': {
            'value': '#ffffff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': '',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 2,
            'random': false,
            'anim': {
              'enable': true,
              'speed': 3,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 10,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 80,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 200,
            'color': '#ffffff',
            'opacity': 1,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 15,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': true,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 800,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 800,
              'size': 20,
              'duration': 2,
              'opacity': 0.8,
              'speed': 3
            },
            'repulse': {
              'distance': 150,
              'duration': 0.5
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }

}
</script>

<style scoped>
#particles-js {
width: 100%;
height: 100%;
background:linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) ),  url(../../public/assets/images/agro3.jpg);
background-position: center;
background-size: cover;
background-repeat: no-repeat;
/* filter: brightness(40%); */
}
</style>