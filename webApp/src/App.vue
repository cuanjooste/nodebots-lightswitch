<template>
    <div class="container">
        <div class="row">
            <app-header class="col-md-12"></app-header>
        </div>
        <div class="row component_row">
            <light-switch
                v-for="led in leds"
                @lightToggle="lightToggle(led.id)" 
                :lightId="led.id"
                class="col-md-2 component"
                :status="led.status">
            </light-switch>                
            <light-intensity-display 
                :lightIntensity="lightIntensity"
                class="col-md-4 component">
            </light-intensity-display>
        </div>
    </div>
</template>

<script>
    "use strict"
    import Header from './components/Header.vue';
    import LightSwitch from './components/LightSwitch.vue';
    import LightIntensityDisplay from './components/LightIntensityDisplay.vue';

    var console_prefix = "++ App.vue - ";

    export default {
        data: function () {
            return {
                leds : [
                    {id:1, status : false},
                    {id:2, status : false}
                ],
                lightIntensity : 0,
            }
        },
        methods: {
            lightToggle(led_id)
            {
                this.$socket.emit('light_toggle',led_id);
                this.leds[led_id-1].status = !this.leds[led_id-1].status;
            }
        },
        components: {
            'app-header' : Header,
            'light-switch': LightSwitch,
            'light-intensity-display' : LightIntensityDisplay,
        },
        sockets:{
            connect: function(){
                console.log(console_prefix + 'Micro Controller Connected');
            },
            light_intensity_update: function(val){

                // Map return value to something more appropriate
                val = 1023 - val;
                let lightVal = Math.round((val - 0)/(1023-0) * (100-0) + 0);
                this.lightIntensity = lightVal;
            }
        }, 
    }
</script>

<style>
.container
{
    height: 100%;
    border-top:3rem #D1D1D1 solid;
    border-bottom:3rem #D1D1D1 solid;
    background-color: #ffffff;
}

.component_row
{
    height: 200px;
    padding: 1.5em;
}

.component
{ 
    margin:0.2em;
}
</style>
