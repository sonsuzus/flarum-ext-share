import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Link from 'flarum/common/components/Link';

import type Mithril from 'mithril';
import type ItemList from 'flarum/common/utils/ItemList';
import PostPreview from './PostPreview';

export default class ShareSettingsPage extends ExtensionPage {
  sections(vnode: Mithril.VnodeDOM<any, this>): ItemList<Mithril.Children> {
    const items = super.sections(vnode);

    const displayType = this.setting('davwheat-share.share_button_style', 'icon')() as 'icon' | 'text' | 'menu';

    items.add(
      'notice',
      <div class="davwheat_share-Notice">
        {app.translator.trans('davwheat-share.admin.browser_support_notice', {
          a: <Link target="_blank" external href="https://caniuse.com/web-share" />,
        })}
      </div>,
      25
    );

    items.setPriority('content', 20);
    items.add('preview', <PostPreview displayType={displayType} />, 15);
    items.setPriority('permissions', 10);

    return items;
  }
}