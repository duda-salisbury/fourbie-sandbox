import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                    primary: '#ffffff',
                    secondary: '#EB6432',
                    accent: '#416438',
                    error:' #f44336',
                    blackish:'#040314',
                    warning: '#ffc107',
                    info: '#2196f3',
                    success: '#8bc34a'
                }
            }
        }

});




