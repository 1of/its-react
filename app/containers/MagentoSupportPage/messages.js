/*
 * Page Messages
 *
 * This contains all the text for the Page container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MagentoSupportPage';

export default defineMessages({
  magento_support: {
    id: `${scope}.magento_support`,
    defaultMessage: 'Magento support',
  },
  application_support: {
    id: `${scope}.application_support`,
    defaultMessage: 'Application support',
  },
  application_maintenance: {
    id: `${scope}.application_maintenance`,
    defaultMessage: 'Application maintenance',
  },
  bug_fixes: {
    id: `${scope}.bug_fixes`,
    defaultMessage: 'Bug Fixes',
  },
  application_security: {
    id: `${scope}.application_security`,
    defaultMessage: 'Application security fixes / patches',
  },
  software_patches: {
    id: `${scope}.software_patches`,
    defaultMessage: 'Software patches',
  },
  digital_asset: {
    id: `${scope}.digital_asset`,
    defaultMessage: 'Digital Asset live testing',
  },
  application_connectivity: {
    id: `${scope}.application_connectivity`,
    defaultMessage: 'Application connectivity',
  },
  application_monitoring: {
    id: `${scope}.application_monitoring`,
    defaultMessage: 'Application monitoring (if applicable)',
  },
  back_up_monitoring: {
    id: `${scope}.back_up_monitoring`,
    defaultMessage: 'Back up monitoring (if applicable)',
  },
  deployment: {
    id: `${scope}.deployment`,
    defaultMessage: 'Deployment',
  },
  access_to_support: {
    id: `${scope}.access_to_support`,
    defaultMessage: 'Access to support portal',
  },
  access_to_knowledge: {
    id: `${scope}.access_to_knowledge`,
    defaultMessage: 'Access to knowledge base & documentation',
  },
});
