import { useRouterState } from '@tanstack/react-router';
import { useMemo } from 'react';

export function useBreadcrumbs() {
  const matches = useRouterState({ select: (s) => s.matches });
  const breadcrumbs = useMemo(() => {
    const pathNameMap: { [key: string]: string } = {
      '/': 'Dashboard',
      '/sensors': 'Sensoren',
      '/settings': 'Einstellungen',
      '/team': 'Mitarbeitende',
      '/treecluster/': 'Bewässerungsgruppen',
      '/treecluster/new': 'Neue Bewässerungsgruppe erstellen',
      '/vehicles': 'Fahrzeuge',
      '/waypoints/': 'Einsatzpläne',
      '/waypoints/new': 'Neuer Einsatzplan',
      '/map/': 'Kataster',
      '/profile': 'Dein Profil',
    };

    return matches
      .filter(({ pathname }) => pathname !== '/')
      .map(({ pathname }) => {
        const title = pathNameMap[pathname] || 'Kein Titel vorhanden';
        return {
          title,
          path: pathname,
        };
      });
  }, [matches]);

  return breadcrumbs;
}
