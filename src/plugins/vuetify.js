import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Import the Material Design Icons

const vuetify = createVuetify({
  components,
  directives,
});

export default vuetify;
