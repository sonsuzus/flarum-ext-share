import app from 'flarum/admin/app';
import extractText from 'flarum/common/utils/extractText'; // EKLENDİ
import ShareSettingsPage from './components/ShareSettingsPage';

app.initializers.add('davwheat/flarum-ext-share', () => {
  app.registry // Flarum 2.0 ExtensionData -> registry değişikliği
    .for('davwheat-share')
    .registerSetting({
      label: app.translator.trans('davwheat-share.admin.display_options_label'),
      setting: 'davwheat-share.share_button_style',
      type: 'select',
      options: ['icon', 'text', 'menu'].reduce((acc, curr) => {
        // GÜNCELLENDİ: extractText ile string'e zorlandı
        acc[curr] = extractText(app.translator.trans(`davwheat-share.admin.display_options.${curr}`));
        return acc;
      }, {} as Record<string, string>),
      default: 'icon',
    })
    .registerPage(ShareSettingsPage);
});