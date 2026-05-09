import {
  ApplicationConfig,
  provideZoneChangeDetection,
  APP_INITIALIZER,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  Router,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

import { routes } from './app.routes';

/*
 * Per-route description meta updater. Title is handled by the router via
 * each route's `title` field; description / og:description / twitter:description
 * are pulled from `data.description` when present.
 */
function provideMetaUpdater() {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: (router: Router, route: ActivatedRoute, meta: Meta) => () => {
      router.events
        .pipe(
          filter((e): e is NavigationEnd => e instanceof NavigationEnd),
          map(() => {
            let active = route;
            while (active.firstChild) active = active.firstChild;
            return active.snapshot.data['description'] as string | undefined;
          }),
        )
        .subscribe(description => {
          if (!description) return;
          meta.updateTag({ name: 'description', content: description });
          meta.updateTag({ property: 'og:description', content: description });
          meta.updateTag({ name: 'twitter:description', content: description });
        });
    },
    deps: [Router, ActivatedRoute, Meta],
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideMetaUpdater(),
  ],
};
