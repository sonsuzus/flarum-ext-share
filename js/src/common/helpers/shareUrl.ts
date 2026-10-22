import app from 'flarum/common/app';

export default async function shareUrl(url: string, description: string): Promise<void> {
  try {
    await navigator.share({
      title: app.forum.attribute('title') as string,
      text: description,
      url,
    });
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') return;
    console.error(e);
  }
}