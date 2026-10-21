import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Link from 'flarum/common/components/Link';

import type ItemList from 'flarum/common/utils/ItemList';
import PostPreview from './PostPreview';

export default class ShareSettingsPage extends ExtensionPage {
  sections(): ItemList<any> {
    const old = super.sections();

    // Flarum 2.0 standart ayar okuma metodu
    const displayType = this.setting('davwheat-share.share_button_style')() as 'icon' | 'text' | 'menu';

    old.add(
      'notice',
      <div class="davwheat_share-Notice">
        {app.translator.trans('davwheat-share.admin.browser_support_notice', {
          a: <Link target="_blank" external href="https://caniuse.com/web-share" />,
        })}
      </div>,
      25
    );
    
    // GÜNCELLEME: replace() yerine remove() kullanıyoruz
    old.remove('content');
    old.add('preview', <PostPreview displayType={displayType} />, 15);
    old.remove('permissions');

    return old;
  }
}