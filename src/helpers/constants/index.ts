import dynamic from 'next/dynamic';
import { TEMPLATE_REGISTRY } from '@/templates/registry';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#1A1A1A',
    titleColor: '#000000',
    highlighterColor: '#333333',
    id: 1,
  },
  {
    backgroundColor: '#F5F5F5',
    fontColor: '#333333',
    titleColor: '#1A1A1A',
    highlighterColor: '#666666',
    id: 2,
  },
  {
    backgroundColor: '#1E1E1E',
    fontColor: '#E0E0E0',
    titleColor: '#FFFFFF',
    highlighterColor: '#444444',
    id: 3,
  },
];

/** Built from `src/templates/registry/templates.ts` — add templates there. */
export const AVAILABLE_TEMPLATES: ITemplate = Object.fromEntries(
  Object.entries(TEMPLATE_REGISTRY).map(([key, entry]) => [
    key,
    {
      id: entry.id,
      name: entry.name,
      thumbnail: entry.thumbnail,
      component: dynamic(entry.loadComponent, { ssr: false }),
    },
  ])
) as ITemplate;

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: '#FFFFFF',
  fontColor: '#1A1A1A',
  titleColor: '#000000',
  highlighterColor: '#8C8C8C',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
