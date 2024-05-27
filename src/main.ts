import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
declare module 'leaflet' {
  namespace Routing {
    function control(options: any): any;
  }
  namespace Control {
    namespace Geocoder {
      function nominatim(options?: any): any;
    }
  }
}
