/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  services: {
    id: `${scope}.services`,
    defaultMessage: 'Services',
  },
  portfolio: {
    id: `${scope}.portfolio`,
    defaultMessage: 'Portfolio',
  },
  career: {
    id: `${scope}.career`,
    defaultMessage: 'Career',
  },
  outstaffing: {
    id: `${scope}.outstaffing`,
    defaultMessage: 'Outstaffing',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact Us',
  },
  design: {
    id: `${scope}.design`,
    defaultMessage: 'Design',
  },
});
